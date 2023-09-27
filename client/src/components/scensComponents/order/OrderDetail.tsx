import React, { useContext, useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { Grid, TextField } from '@material-ui/core';
import Button from '../../Button';
import { Form } from '../../useForm';
import { STORE_QUERY, UPDATE_STORE_MUTATION } from '../../../graphql/Store';
import { Alert } from '@mui/material';
import Spinner from '../../Spinner';
import { UserContext } from '../../auth/UserContext';
import { ORDER_QUERY } from '../../../graphql/Order';

const GET_ORDER_QUERY = gql`
  query GetOrder($id: Float!) {
    order(id: $id) {
      id
      status
      totalQuantity
      createdAt
      orderDetails {
        quantity
        product {
          id
          name
        }
      }
    }
  }
`;

const OrderDetail = ({ id }: { id: number }) => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {currentUser} = useContext(UserContext);
  const [updateStore] = useMutation(UPDATE_STORE_MUTATION, {
    refetchQueries: [{ query: ORDER_QUERY }],
  });

  const { loading, error, data } = useQuery(GET_ORDER_QUERY, {
    variables: { id },
    
  });

  const [formValues, setFormValues] = useState({}); // Initialize formValues as an empty object
if(!currentUser){
  return <Spinner/>
}
  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;
  const order = data.order;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const dataUpdate = order.orderDetails.map((orderDetail: any, index: number) => ({
      productId: Number(orderDetail.product.id),
      quantity: orderDetail.quantity,
    }));
    console.log("samisams");
    console.log(dataUpdate);
    try {
      await updateStore({
        variables: {
          input: {
            orderId: id,
            products: dataUpdate,
          },
        },
      });
      setSuccessMessage("Success message");
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Grid container spacing={2}>
      <Form onSubmit={handleSubmit}>
        {order.orderDetails.map((orderDetail: any, index: number) => (
          <Grid container key={index} spacing={2} style={{ marginTop: '10px' }}>
            <Grid item xs={6} spacing={2}>
              <TextField
                label={`Product Name ${index + 1}`}
                value={orderDetail.product.name}
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label={`Quantity ${index + 1}`}
                value={orderDetail.quantity}
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
                fullWidth
                name={`quantity_${index + 1}`}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        ))}
        <Grid container justify="center">
  <Grid item>
    <h3>Total Quantity = {order.totalQuantity}</h3>
    {order.status === "approved" ? (
      'Already Approved!'
    ) : (
      // Conditional rendering based on the current user's role
      <div>
        {currentUser.role === "STORE" && (
          <Button
            type="submit"
            text="Approve"
            style={{ backgroundColor: '#9ac96f', color: 'white' }}
          />
        )}
        {currentUser.role === "SELLER" && (
        <div>Your Request is <span  style={{ backgroundColor: 'red', color: 'white' }} > pending </span></div>
        )}
      </div>
    )}
  </Grid>
  <Grid item xs={12}>
    {/* Display success or error messages */}
    {successMessage && (
      <Alert variant="outlined" severity="info">
        {successMessage}
      </Alert>
    )}
    {errorMessage && (
      <Alert variant="outlined" severity="error">
        {errorMessage}
      </Alert>
    )}
  </Grid>
</Grid>
      </Form>
    </Grid>
  );
};

export default OrderDetail;