import React from 'react';
import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Toolbar } from '../../components/scensComponents/toolbar';
import PeopleOutlineTwoTone from '@material-ui/icons/PeopleOutlineTwoTone'
import PageHeader from '../../components/PageHeader';
import ProductList from '../../components/scensComponents/product/ProductList';
import ProductForm from '../../components/scensComponents/product/ProductForm';
const now = new Date();

export const Product = () => (
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
      title = {"Products"}
      subTitle ={"This is Product page You can add new products or edit existing products"}
      icon={<PeopleOutlineTwoTone fontSize='large'/>}
      />
            <Toolbar name="Product" addName="Create New Product" formName={<ProductForm />} />
            <ProductList />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);
