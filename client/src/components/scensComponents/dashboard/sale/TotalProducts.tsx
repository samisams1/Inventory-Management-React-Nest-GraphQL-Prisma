import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

import ShoppingCartIcon from '@heroicons/react/24/solid/ShoppingCartIcon';

import { useQuery } from '@apollo/client';
import { SALE_TOTAL_PRODUCT_QUERY } from '../../../../graphql/Sale';
import Spinner from '../../../Spinner';

export const ShopeProducts = (props:any) => {
  const { difference, positive = false, sx, value } = props;
  const {loading,error,data} = useQuery(SALE_TOTAL_PRODUCT_QUERY);
  if(loading) return <Spinner/>
  if (error) return <p>{error.message}</p>
  console.log(data);
  return (
    <Card sx={sx}>
      <CardContent>
      <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
             <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
              fontSize={20}
              fontWeight={900}
            >
              Shope Products
            </Typography>
            <Typography variant="h4">
              {data.saleTotalProduct}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'rgb(16, 185, 129)',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <ShoppingCartIcon />
            </SvgIcon>
          </Avatar>
      </Stack>
      </CardContent>
    </Card>
  );
};

ShopeProducts.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};