import React from 'react';
import { Box, Container } from '@mui/material';
import Head from 'next/head';
import LoginUser from '../../components/scensComponents/Login/LoginUser';

const Login = () => (
  
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="91vh"
    bgcolor="white" // Set the background color to white
    border="1px solid #eee" // Add a border with a light gray color
  >
    <Box p={3}>
      <Head>
        <title>Login | Inventory</title> // Change the page title to "Login | Inventory"
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 2 }}>
        <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <LoginUser />
        </Container>
      </Box>
    </Box>
  </Box>
);
export default Login;