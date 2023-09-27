import React from 'react';
import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import PageHeader from '../../components/PageHeader';
import { PeopleOutlineTwoTone } from '@material-ui/icons';
import { Toolbar } from '../../components/scensComponents/toolbar';
import { CategoryList, CategoryForm } from '../../components/scensComponents/category';

const now = new Date();

export const Category = () => (
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
            title="New Category"
            subTitle="Category"
            icon={<PeopleOutlineTwoTone fontSize="large" />}
        /> 
            <Toolbar name="Category" addName ="Create New Category" formName={<CategoryForm/>}/>
            <CategoryList/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);