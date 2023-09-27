import React from 'react'
import { Grid } from '@mui/material'
import { Form, useForm } from '../../useForm'
import Button from '../../Button'
import Controls from '../../Controls'
import { useMutation } from '@apollo/client'
import { productInterface, storeInterface } from '../../../interface/interfaces'
import { CREATE_STORE_MUTATION, STORE_QUERY } from '../../../graphql/Store'

const StoreForm = () => {
  const [createProfile] = useMutation(CREATE_STORE_MUTATION, {
    refetchQueries: [{ query: STORE_QUERY }],
  })
  const initialFValues: any = {
    id: '',
    quantity: 0
  };
  const validate = (fieldValues: storeInterface = values): boolean => {
    let temp:storeInterface = { ...errors };
    if ('name' in fieldValues) temp.id = fieldValues.id ? '' : 'This field is required.';
   // if ('quantity' in fieldValues)  temp.quantity =  fieldValues.quantity ? '' : 'This field is required.';
    setErrors({
      ...temp
    });
    //  setMessage('');
    return fieldValues === values ? Object.values(temp).every(x => x === '') : false;
};

  const { values, errors, setErrors, handleInputChange, resetForm }:any = useForm(initialFValues, true, validate);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
    //  saveService(values);
    createProfile({
      variables: values,
    })
      console.log(values);
      resetForm();
    }
  };
  return (
     <Form onSubmit={handleSubmit}>
      <Grid container>
      <Grid item xs={6}>
      <Controls.Input
                name="name"
                label=" Name"
                value={values.name }
                onChange={handleInputChange}
                error={errors.name}
            />
      </Grid>
      <Grid item xs={6}>
      <Controls.Input
                name="quantity"
                label="quantity"
                value={values.quantity }
                onChange={handleInputChange}
                error={errors.quantity}
            />
      </Grid>
      <Grid>
      <Button
        type="submit"
        text="Submit" />
         <Button
          text="Reset"
         // onClick={resetForm}
          />
      </Grid>
     
       </Grid>
      </Form>
  )
}

export default StoreForm
