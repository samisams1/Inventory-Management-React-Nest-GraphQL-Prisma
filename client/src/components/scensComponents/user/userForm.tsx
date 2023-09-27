import React, { useState } from 'react'
import { Alert, Grid } from '@mui/material'
import { Form, useForm } from '../../useForm'
import Button from '../../Button'
import Controls from '../../Controls'
import { useMutation } from '@apollo/client'
import { userInterface, } from '../../../interface/interfaces'
import { CREATE_USER_MUTATION, USER_QUERY } from '../../../graphql/Users'

export const UserForm = () => {
  const [createProfile] = useMutation(CREATE_USER_MUTATION, {
    refetchQueries: [{ query:USER_QUERY }],
  })
  const [successMessage,setSuccessMessage]= useState('');
  const [errorMessage,setErrorMessage]= useState('');

  const RoleEnum = {
    USER: 'USER',
    ADMIN: 'ADMIN',
    STORE: 'STORE',
    SELLER: 'SELLER',
  }
  const statusEnum = {
    active: 'active',
    disable: 'disable',
  }

  const initialFValues: userInterface = {
    firstName:'',
    lastName:'',
    email:'',
    username: '',
    password:'',
    role:RoleEnum.USER,
    status:''
    
  };
  const validate = (fieldValues: userInterface = values): boolean => {
    let temp:userInterface = { ...errors };
    if ('firstName' in fieldValues) temp.firstName = fieldValues.firstName ? '' : 'This field is required.';
    if ('lastName' in fieldValues) temp.lastName = fieldValues.lastName ? '' : 'This field is required.';
    if ('role' in fieldValues) temp.role = fieldValues.role ? '' : 'This field is required.';
    if ('email' in fieldValues) temp.email = fieldValues.email ? '' : 'This field is required.';
    if ('username' in fieldValues) temp.username = fieldValues.username ? '' : 'This field is required.';
    if ('password' in fieldValues) temp.password = fieldValues.password ? '' : 'This field is required.';

    setErrors({
      ...temp
    });
    //  setMessage('');
    return fieldValues === values ? Object.values(temp).every(x => x === '') : false;
};

  const { values, errors, setErrors, handleInputChange, resetForm }:any = useForm(initialFValues, true, validate);
console.log(values)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      createProfile({
        variables: values,
      })
        .then(() => {
          setSuccessMessage('User created successfully!');
          resetForm();
          setTimeout(() => {
            setSuccessMessage('');
          }, 5000); // Remove success message after 5 seconds
        })
        .catch(error => {
          setErrorMessage(error.message);
          setTimeout(() => {
            setErrorMessage('');
          }, 5000); // Remove error message after 5 seconds
        });
    }
  };
  return (
     <Form onSubmit={handleSubmit}>
        <Grid container>
      <Grid item xs={12}>
      <Controls.Input
                name="firstName"
                label="First Name"
                value={values.firstName }
                onChange={handleInputChange}
                error={errors.firstName}
            />
              <Controls.Select
  name="status"
  label="Status"
  value={values.status}
  onChange={handleInputChange}
  options={[
    { id: '1', label: 'Admin', value: RoleEnum.ADMIN },
    { id: '2', label: 'Seller', value: RoleEnum.SELLER },
    { id: '3', label: 'Store', value:  RoleEnum.STORE },
  ]}



  error={errors.role}
/>
             <Controls.Input
                name="lastName"
                label="Last Name"
                value={values.lastName }
                onChange={handleInputChange}
                error={errors.lastName}
            />
       <Controls.Select
  name="role"
  label="Role"
  value={values.role}
  onChange={handleInputChange}
  options={[
    { id: '1', label: 'Admin', value: RoleEnum.ADMIN },
    { id: '2', label: 'Seller', value: RoleEnum.SELLER },
    { id: '3', label: 'Store', value:  RoleEnum.STORE },
  ]}



  error={errors.role}
/>
             <Controls.Input
                name="username"
                label="username"
                value={values.username }
                onChange={handleInputChange}
                error={errors.username}
            />
             <Controls.Input
                name="email"
                label="email"
                value={values.email }
                onChange={handleInputChange}
                error={errors.email}
            />
            <Controls.Input
                name="password"
                label="password"
                value={values.password }
                onChange={handleInputChange}
                error={errors.password}
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
      {successMessage && (
        <Alert variant="outlined" severity="success">
          {successMessage}
        </Alert>
      )}
      {errorMessage && (
        <Alert variant="outlined" severity="error">
          {errorMessage}
        </Alert>
      )}
       </Grid>
      </Form>
  )
}



