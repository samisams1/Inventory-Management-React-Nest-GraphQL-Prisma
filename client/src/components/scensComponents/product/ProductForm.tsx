import React, { useState } from 'react';
import { Alert, Grid } from '@mui/material';
import { Form, useForm } from '../../useForm';
import Button from '../../Button';
import Controls from '../../Controls';
import { CREATE_PRODUCT_MUTATION, PRODUCT_QUERY } from '../../../graphql/Product';
import { useMutation, useQuery } from '@apollo/client';
import { productInterface, categoryInterface } from '../../../interface/interfaces';
import { CATEGORY_QUERY } from '../../../graphql/Category';

const ProductForm = () => {
  const [createProfile] = useMutation(CREATE_PRODUCT_MUTATION, {
    refetchQueries: [{ query: PRODUCT_QUERY }],
  });

  const { data: categoryData } = useQuery(CATEGORY_QUERY);

  const initialFValues: productInterface = {
    name: '',
    price: '',
    categoryId: ''
  };

  const [selectedCategory, setSelectedCategory] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (fieldValues: productInterface = values): boolean => {
    let temp: productInterface = { ...errors };
    if ('name' in fieldValues) temp.name = fieldValues.name ? '' : 'This field is required.';
    if ('price' in fieldValues) temp.price = fieldValues.price ? '' : 'This field is required.';
    if ('categoryId' in fieldValues) temp.categoryId = fieldValues.categoryId ? '' : 'This field is required.';
    setErrors({
      ...temp
    });
    return fieldValues === values ? Object.values(temp).every(x => x === '') : false;
  };

  const { values, errors, setErrors, handleInputChange, resetForm }: any = useForm(initialFValues, true, validate);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      const convertedValues = {
        ...values,
        price: Number(values.price),
        categoryId: Number(values.categoryId)
      };
      try {
        await createProfile({
          variables: convertedValues,
        });
        setSuccessMessage('Product added successfully!');
        resetForm();
      } catch (error:any) {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="name"
            label="Name"
            value={values.name}
            onChange={handleInputChange}
            error={errors.name}
          />

          <Controls.Input
            name="price"
            label="Price"
            value={values.price}
            onChange={handleInputChange}
            error={errors.price}
          />
        </Grid>
        <Grid item xs={6}>
          {categoryData && (
            <Controls.Select
              name="categoryId"
              label="Category"
              value={values.categoryId}
              onChange={handleInputChange}
              options={categoryData.categories.map((category: categoryInterface) => ({
                value: category.id,
                label: category.name
              }))}
              error={errors.categoryId}
            />
          )}
        </Grid>
        <Grid>
          <Button type="submit" text="Submit" />
          <Button text="Reset" onClick={resetForm} />
        </Grid>
      </Grid>
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
    </Form>
  );
};

export default ProductForm;