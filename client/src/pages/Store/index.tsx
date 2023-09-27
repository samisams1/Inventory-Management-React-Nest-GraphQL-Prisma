import React from 'react';
import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Toolbar } from '../../components/scensComponents/toolbar';
import PeopleOutlineTwoTone from '@material-ui/icons/PeopleOutlineTwoTone'
import PageHeader from '../../components/PageHeader';
import { StoreList } from '../../components/scensComponents/store';
import StoreForm from '../../components/scensComponents/store/StoreForm';
const now = new Date();

export const Store = () => (
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
           <PageHeader
      title = {"Store"}
      subTitle ={"this Page shows The Product Avalible i the Store  Product"}
      icon={<PeopleOutlineTwoTone fontSize='large'/>}
      />
         
            <StoreList/>   
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);
