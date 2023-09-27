import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { Grid, Snackbar, TextField } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import { Form } from '../../components/useForm';
import { STORE_QUERY, UPDATE_STORE_MUTATION } from '../../graphql/Store';
import Button from '../../components/Button';

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
          name
        }
      }
    }
  }
`;

const OrderDetail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idParam = searchParams.get('id');
  const id = idParam ? parseInt(idParam, 10) : null; // Convert id to an integer if it's not null
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const handleSuccessClose = () => {
    setSuccessOpen(false);
  };

  const handleErrorClose = () => {
    setErrorOpen(false);
  };

  const [updateStore]= useMutation(UPDATE_STORE_MUTATION, {
    refetchQueries: [{ query: STORE_QUERY }],
  });

  
  const { loading, error, data } = useQuery(GET_ORDER_QUERY, {
    variables: { id },
  });

  
const navigate = useNavigate();
  const [formValues, setFormValues] = useState([]); // Initialize formValues as an empty array

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const order = data.order;



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dataUpdate = order.orderDetails.map((orderDetail: any, index: number) => ({
      productName: orderDetail.product.name,
      quantity:orderDetail.quantity
    }));
    try {
       updateStore({
        variables: { dataUpdate },
      });   
      setSuccessOpen(true);
      setErrorOpen(false);
    //  navigate('/product')
    } catch (error) {
      setErrorOpen(true);
      setSuccessOpen(false);
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
          <h3>Total Quantity = {order.totalQuantity} </h3> 
          {order.status ==="approved" ? 'Already Approved!':
           <Button
           type="submit"
           text="Send Order To Shope"
           style={{ backgroundColor: '#9ac96f', color: 'white' }}
         />
          }
           
           </Grid>
           <Grid item xs={12}>
        {/* Success message */}
        <Snackbar open={successOpen} autoHideDuration={3000} onClose={handleSuccessClose}>
          <Alert onClose={handleSuccessClose} severity="success">
            Store updated successfully
          </Alert>
        </Snackbar>

        {/* Error message */}
        <Snackbar open={errorOpen} autoHideDuration={3000} onClose={handleErrorClose}>
          <Alert onClose={handleErrorClose} severity="error">
            Error updating store
          </Alert>
        </Snackbar>
      </Grid>

      {/* Error message */}
      <Snackbar  autoHideDuration={3000}>
        <Alert  severity="error">
          Error updating store
        </Alert>
      </Snackbar>
        </Grid>
      </Form>
    </Grid>
  );
};

export default OrderDetail;