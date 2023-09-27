import React, { useContext, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Alert, CardActions, CardContent, CardHeader, Divider, Grid, Stack } from '@mui/material';
import { USER_QUERY } from '../../../../graphql/Users';
import { Form, useForm } from '../../../useForm';
import Controls from '../../../Controls';
import Button from '../../../Button';
import { UserContext } from '../../../auth/UserContext';
import Spinner from '../../../Spinner';

export interface ChangePass {
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
  userId: number;
}

const CHANGE_PASSWORD_MUTATION = gql`
 mutation ChangePassword($userId: Float!, $changePasswordInput: ChangePasswordInput!) {
    changePassword(userId: $userId, changePasswordInput: $changePasswordInput) {
      id
    }
  }
`;

const ChangeNewPassword = () => {
  const [changePassword] = useMutation(CHANGE_PASSWORD_MUTATION, {
    refetchQueries: [{ query: USER_QUERY }],
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { currentUser } = useContext(UserContext);
  
  if (!currentUser) {
    return <Spinner />;
  }

  const initialFValues: ChangePass = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    userId: currentUser.id,
  };

  const validate = (fieldValues: ChangePass = values): boolean => {
    let temp: ChangePass = { ...errors };
    if ('currentPassword' in fieldValues)
      temp.currentPassword = fieldValues.currentPassword ? '' : 'This field is required.';
    if ('newPassword' in fieldValues)
      temp.newPassword = fieldValues.newPassword ? '' : 'This field is required.';
    if ('confirmPassword' in fieldValues)
      temp.confirmPassword = fieldValues.confirmPassword ? '' : 'This field is required.';
    if (
      'newPassword' in fieldValues &&
      'confirmPassword' in fieldValues &&
      fieldValues.newPassword !== fieldValues.confirmPassword
    ) {
      temp.confirmPassword = 'Passwords do not match.';
    }
    setErrors({
      ...temp,
    });
    return fieldValues === values ? Object.values(temp).every((x) => x === '') : false;
  };
  const { values, errors, setErrors, handleInputChange, resetForm }: any = useForm(
    initialFValues,
    true,
    validate
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      try {
        await changePassword({
          variables: {
            userId: values.userId,
            changePasswordInput: {
              newPassword: values.newPassword,
              currentPassword: values.currentPassword,
            },
          },
        });
        setSuccessMessage('Password changed successfully.');
        resetForm();
      } catch (error:any) {
        setErrorMessage(`Error changing password: ${error.message}`);
      }
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <CardHeader subheader="Update password" title="Password" />
          <Divider />
          <CardContent>
            <Stack spacing={3} sx={{ maxWidth: 400 }}>
              <Controls.Input
                name="currentPassword"
                label="Current Password"
                value={values.currentPassword}
                onChange={handleInputChange}
                error={errors.currentPassword}
              />
              <Controls.Input
                name="newPassword"
                label="New Password"
                value={values.newPassword}
                onChange={handleInputChange}
                error={errors.newPassword}
              />
              <Controls.Input
                name="confirmPassword"
                label="Confirm Password"
                value={values.confirmPassword}
                onChange={handleInputChange}
                error={errors.confirmPassword}
              />
            </Stack>
          </CardContent>
          <Divider />
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Grid>
              <Button type="submit" text="Submit" />
              <Button text="Reset" onClick={resetForm} />
            </Grid>
          </CardActions>
        </Grid>
      </Grid>
{successMessage && (
              <Alert variant="outlined" severity="info" sx={{ mx: 'auto', mb: 2, width: '50%', textAlign: 'center' }}>
                {successMessage}
              </Alert>
            )}
            {errorMessage && (
              <Alert variant="outlined" severity="error" sx={{ mx: 'auto', mb: 2, width: '50%', textAlign: 'center' }}>
                {errorMessage}
              </Alert>
            )}

    </Form>
  );
};

export default ChangeNewPassword;