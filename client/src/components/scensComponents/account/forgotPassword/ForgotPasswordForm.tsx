import React from 'react'
import { Box, Button, Stack } from '@mui/material'
import Controls from '../../../Controls'
import { Form } from '../../../useForm'

const ForgotPasswordForm = () => {
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
         <Stack spacing={3}></Stack>
        <Controls.Input
         name="email"
         label="Email"
         type="text"
         fullWidth
                  
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
        <Stack/>
        </Form>
    </Box>
   </Box>
  )
}
export default ForgotPasswordForm
