import React, { useState, ChangeEvent, FormEvent, cache } from 'react';
import { useMutation } from '@apollo/client';
import { STORE_QUERY, UPDATE_STORE_QUANTITY_MUTATION } from '../../../graphql/Store';
import Controls from '../../Controls';
import { Alert } from '@mui/material';

interface UpdateQuantityFormProps {
  id: number;
  quantity: number;
}
const UpdateQuantityForm: React.FC<UpdateQuantityFormProps> = ({ id: initialId, quantity: initialQuantity }) => {
  const [id, setId] = useState<number>(initialId);
  const[message,setMessage] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(initialQuantity);
  const [error, setError] = useState<string>('');

  const [updateStoreQuantity] = useMutation(UPDATE_STORE_QUANTITY_MUTATION,{
    update:(cache,{data})=>{
    
    }
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!quantity) {
      setError('Please enter quantity greater than 0.');
      return;
    }
    updateStoreQuantity({
      variables: { id: parseInt(id.toString()), quantity: parseInt(quantity.toString()) },
      refetchQueries: [{ query: STORE_QUERY }],

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
               label="Quantity"
               type="number"
               id="quantity"
               value={quantity}
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

export default UpdateQuantityForm;