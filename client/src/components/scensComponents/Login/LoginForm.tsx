import React from 'react'
import {
    Box,
    Button,
    Stack,
  } from '@mui/material';
import { Form } from '../../useForm';
import Controls from '../../Controls';
const LoginForm = () => {
  return (
    <Box
    sx={{
        backgroundColor: 'background.paper',
        flex: '1 1 auto',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
         <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%'
          }}
        >
         <Form>
            <Stack spacing={3}>
                  <Controls.Input
                    fullWidth
                    label="username"
                    name="username"
                    type="text"
                  />
                 <Controls.Input
                    fullWidth
                    label="password"
                    name="password"
                    type="password"
                  />
                  <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                >
                  Continue
                </Button>
            </Stack>
            </Form>
    </Box>
    </Box>
  )
}

export default LoginForm
