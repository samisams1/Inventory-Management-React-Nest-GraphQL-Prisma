import { Box, Container, Grid } from '@mui/material'
import Head from 'next/head'
import React from 'react';
import { StoreProducts } from '../../../components/scensComponents/dashboard/store/TotalProducts';
import { TotalOrders } from '../../../components/scensComponents/dashboard/TotalOrders';
import { TotalSales } from '../../../components/scensComponents/dashboard/TotalSales';
import { SaleDetailList } from '../../../components/scensComponents/sale/SaleDetail';
import { SaleList } from '../../../components/scensComponents/sale/SaleList';
import { StoreList } from '../../../components/scensComponents/store';

const StoreDashboard = () => {
    return( 
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
            <StoreProducts
              difference={12}
              positive
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={6}
          >
            <TotalOrders
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
            />
          </Grid>
         
        </Grid>
      </Container>
    </Box>
  
    </>
    )
}



export default StoreDashboard
