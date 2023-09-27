import React from 'react'
import { Grid } from '@mui/material'
import { Form, useForm } from '../../useForm'
import Button from '../../Button'
import Controls from '../../Controls'
import { useMutation } from '@apollo/client'
import {  categoryInterface, } from '../../../interface/interfaces'
import { CATEGORY_QUERY, CREATE_CATEGORY } from '../../../graphql/Category'

export const CategoryForm = () => {
  const [createProfile] = useMutation(CREATE_CATEGORY, {
    refetchQueries: [{ query:CATEGORY_QUERY }],
  })
  const initialFValues: categoryInterface = {
    name: '',
  };
  const validate = (fieldValues: categoryInterface = values): boolean => {
    let temp:categoryInterface = { ...errors };
  
    if ('name' in fieldValues) temp.name = fieldValues.name ? '' : 'This field is required.';

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
      <Grid item xs={12}>
      <Controls.Input
                name="name"
                label="category Name"
                value={values.name }
                onChange={handleInputChange}
                error={errors.name}
            />
      </Grid>
      <Grid>
      <Button
        type="submit"
        text="Submit" />
         <Button
          text="Reset"
          onClick={resetForm}
          />
      </Grid>
     
       </Grid>

      </Form>
  )
}



