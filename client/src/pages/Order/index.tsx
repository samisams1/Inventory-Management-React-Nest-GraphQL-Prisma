import React from 'react';
import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Toolbar } from '../../components/scensComponents/toolbar';
import PeopleOutlineTwoTone from '@material-ui/icons/PeopleOutlineTwoTone'
import PageHeader from '../../components/PageHeader';
import { StoreList } from '../../components/scensComponents/store';
import StoreForm from '../../components/scensComponents/store/StoreForm';
import OrderList from '../../components/scensComponents/order/OrderList';
import OrderNotification from './OrderNotification';
const now = new Date();

export const Order = () => (
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
            md={12}
            lg={12}
          >
        
            <OrderList/>   
            <OrderNotification/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);
