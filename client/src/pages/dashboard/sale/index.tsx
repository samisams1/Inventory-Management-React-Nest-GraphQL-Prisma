import { Box, Container, Grid } from '@mui/material'
import Head from 'next/head'
import React from 'react';
import { TotalSales } from '../../../components/scensComponents/dashboard/TotalSales';
import { SaleDetailList } from '../../../components/scensComponents/sale/SaleDetail';
import { SaleList } from '../../../components/scensComponents/sale/SaleList';
import { ShopeProduct } from '../../Product/shope/shopeProduct';

const SaleDashboard = () => {
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
            lg={3}
          >
            <ShopeProduct
            
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <TotalSales
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
              value="1.6k"
            />
          </Grid>
         
          <Grid
            xs={12}
            lg={12}
          >
            <SaleList
              chartSeries={[
                {
                  name: 'This year',
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                },
                {
                  name: 'Last year',
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
         
        </Grid>
      </Container>
    </Box>
  
    </>
    )
}

export default SaleDashboard
