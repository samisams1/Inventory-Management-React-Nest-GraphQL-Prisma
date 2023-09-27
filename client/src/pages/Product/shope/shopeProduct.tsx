import React from 'react';
import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import PageHeader from '../../../components/PageHeader';
import { Toolbar } from '../../../components/scensComponents/toolbar';
import { ShopeProductForm, ShopeProductList } from '../../../components/scensComponents/shope';

const now = new Date();

export const ShopeProduct = () => (
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
      title = {"Shope Product"}
      subTitle ={"this Page shows The Product Avalible i the Shope  Product"}
      icon={<LocalMallTwoToneIcon fontSize='large'/>}
      />
            <ShopeProductList/>   
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);