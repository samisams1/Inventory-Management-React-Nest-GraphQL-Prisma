import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import ShoppingCartIcon from '@heroicons/react/24/solid/ShoppingCartIcon';

import { useQuery } from '@apollo/client';
import { COUNT_PRODUCT_QUERY } from '../../../graphql/Product';
import Spinner from '../../Spinner';
import { COUNT_STORE_PRODUCT_QUERY } from '../../../graphql/Store';
import { SALE_TOTAL_PRODUCT_QUERY } from '../../../graphql/Sale';

export const TotalProducts = (props:any) => {
  const { difference, positive = false, sx, value } = props;
  const {loading,error,data} = useQuery(COUNT_STORE_PRODUCT_QUERY);
  const {loading:saleLoading,error:saleError,data:saleData} = useQuery(SALE_TOTAL_PRODUCT_QUERY);
  if(loading) return <Spinner/>
  if (error) return <p>{error.message}</p>
  if(saleLoading) return <Spinner/>
  if (saleError) return <p>{saleError.message}</p>
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
              Total Products
            </Typography>
            <Typography variant="h4">
              {data.countStoreProducts + saleData.saleTotalProduct}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'orange',
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

TotalProducts.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};