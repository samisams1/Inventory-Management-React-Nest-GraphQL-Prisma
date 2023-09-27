import React from 'react'
import { Grid } from '@mui/material'
import { Form, useForm } from '../../useForm'
import Button from '../../Button'
import Controls from '../../Controls'
import { PRODUCT_QUERY, UPDATE_PATIENT_MUTATION } from '../../../graphql/Product'
import { useMutation } from '@apollo/client'
import { productInterface } from '../../../interface/interfaces'
import { Category } from '@material-ui/icons'

const ProductEditForm = (props:productInterface ) => {
  const [updatePatient] = useMutation(UPDATE_PATIENT_MUTATION, {
    refetchQueries: [{ query: PRODUCT_QUERY }],
  })
  const initialFValues: productInterface = {
    name: '',
    price: '',
    barcode:'',
    description: '',
    image:'',
    category:{},
    expire_date:''
   // sales:{ id:''},
 ///   supplier: {id:''}
  };
  const validate = (fieldValues: productInterface = values): boolean => {
    let temp:productInterface = { ...errors };
    if ('name' in fieldValues) temp.name = fieldValues.name ? '' : 'This field is required.';
    if ('price' in fieldValues)  temp.price =  fieldValues.price ? '' : 'This field is required.';
    if ('barcode' in fieldValues) temp.barcode = fieldValues.barcode ? '' : 'This field is required.';
    //if ('description' in fieldValues) temp.description = fieldValues.description ? '' : 'This field is required.';
    //if ('sales' in fieldValues) temp.sales = fieldValues.sales ? '
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
    console.log(values)
    updatePatient({
     variables: values,
     // variables: { ...values },
     //variables: { ...values},
    })
      resetForm();
    }
  };
  return (
     <Form onSubmit={handleSubmit}>
      <Grid container>
      <Grid item xs={12}>
      <Grid item xs={6}>
      <Controls.Input
                name="name"
                label=" Name"
                value={values.name }
                onChange={handleInputChange}
                error={errors.name}
            />
       <Controls.Input
                name="price"
                label="Last Name"
                value={values.lastName }
                onChange={handleInputChange}
                error={errors.lastName}
            />
      
      </Grid>
      <Grid item xs={6}>
      <Controls.Input
                name="Category"
                label="category"
                value={values.category }
                onChange={handleInputChange}
                error={errors.category}
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
      </Grid>     
      </Form>
  )
}

export default ProductEditForm;