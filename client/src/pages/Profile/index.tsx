import React from 'react';
import Head from 'next/head';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Toolbar } from '../../components/scensComponents/toolbar';
import PeopleOutlineTwoTone from '@material-ui/icons/PeopleOutlineTwoTone'
import PageHeader from '../../components/PageHeader';
import { StoreList } from '../../components/scensComponents/store';
import StoreForm from '../../components/scensComponents/store/StoreForm';
import { AccountProfile, AccountProfileDetails } from '../../components/scensComponents/account/Profile';
const now = new Date();

export const Profile = () => (
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
      title = {"My Profile "}
      subTitle ={"this is your profile page "}
      icon={<PeopleOutlineTwoTone fontSize='large'/>}
      />
        <Stack spacing={3}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
                lg={4}
              >
                <AccountProfile />
              </Grid>
              <Grid
                xs={12}
                md={6}
                lg={8}
              >
                <AccountProfileDetails />
              </Grid>
            </Grid>
        </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);
