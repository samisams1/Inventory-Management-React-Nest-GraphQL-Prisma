import React from 'react';
import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { ShopeProducts } from '../../../components/scensComponents/dashboard/sale/TotalProducts';
import { TotalSales } from '../../../components/scensComponents/dashboard/TotalSales';

export const SellerDashboard = () => (
  <>
    <Head>
      <title>
        Overview | Inventory
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={6}
            lg={6}
          >
            <ShopeProducts
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
              value="1.6k"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={6}
          >
            <TotalSales
              sx={{ height: '100%' }}
              value="$15k"
            />
          </Grid>
         
        </Grid>
      </Container>
    </Box>
  </>
);