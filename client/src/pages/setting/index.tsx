import React from 'react';
import Head from 'next/head';
import { Box, Container, Stack, Typography } from '@mui/material';
import ChangePassword from '../account/ChangePassword';

const Setting = () => (
  <>
    <Head>
      <title>
        Settings | Devias Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
         <ChangePassword/>
        </Stack>
      </Container>
    </Box>
  </>
);

export default Setting