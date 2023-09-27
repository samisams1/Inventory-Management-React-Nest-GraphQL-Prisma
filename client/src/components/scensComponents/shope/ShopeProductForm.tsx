import React from 'react'
import { Grid } from '@mui/material'
import { Form, useForm } from '../../useForm'
import Button from '../../Button'
import Controls from '../../Controls'
import { useMutation } from '@apollo/client'
import { SaleInterface } from '../../../interface/interfaces'
import {  CREATE_SALE_MUTATION, SALE_QUERY } from '../../../graphql/Sale'
//import { appointmentInterface } from '../../../interface/interfaces'
//import { APPOITMENT_QUERY, CREATE_APPOINTMENT } from '../../../graphql/Pharmacie'

export const ShopeProductForm = () => {
  const [createProfile] = useMutation(CREATE_SALE_MUTATION, {
    refetchQueries: [{ query: SALE_QUERY }],
  })
  const initialFValues: any = {
    id: '',
    quantity: '',
    
  };
  const validate = (fieldValues: SaleInterface = values): boolean => {
    let temp:SaleInterface = { ...errors };
    if ('quantity' in fieldValues) temp.quantity = fieldValues.quantity ? '' : 'This field is required.';

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
      <Grid item xs={12}>
      <Grid item xs={6}>
      <Controls.Input
                name="product"
                label="product"
                value={values.symptoms }
                onChange={handleInputChange}
                error={errors.symptoms}
            />
              <Controls.Input
                name="quantity"
                label="quantity"
                value={values.checkUpDate }
                onChange={handleInputChange}
                error={errors.checkUpDate}
            />
       <Controls.Input
                name="store"
                label="store"
               value={values.diagosis }
                onChange={handleInputChange}
                error={errors.diagosis}
            />
       <Controls.Input
                name="user"
                label="user"
                value={values.checkUpDate }
                onChange={handleInputChange}
                error={errors.checkUpDate}
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



