import React from 'react';
import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import LabTabs from '../../components/scensComponents/Tab/tabs';
import { DailyTotalSales } from '../../components/scensComponents/report/daily/TodayTotalQueue';
import { YearTotalSales } from '../../components/scensComponents/report/year/YearTotalSales';
import { MonthTotalSales } from '../../components/scensComponents/report/month/MonthTotalSales';

export const Report = () => (
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
            <DailyTotalSales
              difference={12}
              positive
              sx={{ height: '100%' }}
              value="$24k"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <MonthTotalSales
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
              value="1.6k"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <YearTotalSales
              sx={{ height: '100%' }}
              value={75.5}
            />
          </Grid>
        
          <Grid
            xs={12}
            lg={12}
          >
          <LabTabs/> 
          </Grid>
         
        </Grid>
      </Container>
    </Box>
  </>
);