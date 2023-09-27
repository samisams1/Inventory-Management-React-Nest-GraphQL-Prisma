import React from 'react';
import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Toolbar } from '../../components/scensComponents/toolbar';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import PageHeader from '../../components/PageHeader';
import ProductList from '../../components/scensComponents/product/ProductList';
import ProductForm from '../../components/scensComponents/product/ProductForm';
import { SaleList } from '../../components/scensComponents/sale/SaleList';
import { SaleToolbar } from '../../components/scensComponents/sale/saleButton';
const now = new Date();

export const Sales = () => (
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
      title = {"Sales"}
      subTitle ={"Sales List"}
      icon={<MonetizationOnTwoToneIcon fontSize='large'/>}
      />
            <SaleToolbar name="Sales" addName="New Sales"  />
            <SaleList />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);
