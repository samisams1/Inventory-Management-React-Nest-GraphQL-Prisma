import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_STORE_QUANTITY_MUTATION } from '../../../graphql/Store';
import Controls from '../../Controls';
import { Alert } from '@mui/material';
import { PRODUCT_QUERY, UPDATE_PRODUCT_PRICE_MUTATION } from '../../../graphql/Product';

interface UpdateQuantityFormProps {
  id: number;
  price: number;
}
const EditPriceForm: React.FC<UpdateQuantityFormProps> = ({ id: initialId, price: initialPrice }) => {
  const [id, setId] = useState<number>(initialId);
  const[message,setMessage] = useState<string>('');
  const [price, setQuantity] = useState<number>(initialPrice);
  const [error, setError] = useState<string>('');

  const [updateStoreQuantity] = useMutation(UPDATE_PRODUCT_PRICE_MUTATION);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!price) {
      setError('Please enter price greater than 0.');
      return;
    }
    updateStoreQuantity({
      variables: { id: parseInt(id.toString()), price: parseInt(price.toString()) },
      refetchQueries:[PRODUCT_QUERY]
    })
      .then((response) => {
        // Handle success
        console.log('Data updated successfully:', response.data.updateStoreQuantity);
        setMessage('Data updated successfully:');
        setError('');
      })
      .catch((error) => {
        // Handle error
        console.error('Error updating data:', error);
        setError('An error occurred while updating data.');
      });
  };
  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Controls.Input
               label="Price"
               type="number"
               id="price"
               value={price}
               onChange={handleQuantityChange}
        />
      </div>
      <Controls.Button
        type="submit"
         text="Update"
      />
      {message && (
        <Alert variant="outlined" severity="info">
          {message}
        </Alert>
      )}
      {error && (
        <Alert variant="outlined" severity="error">
          {error}
        </Alert>
      )}
    </form>
  );
};

export default EditPriceForm;