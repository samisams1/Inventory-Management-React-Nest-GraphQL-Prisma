import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import UsersIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import Spinner from '../../Spinner';
import { useQuery } from '@apollo/client';
import { COUNT_SALE_QUERY } from '../../../graphql/Sale';

export const TotalSales = (props:any) => {
  const { difference, positive = false, sx, value } = props;
  const {loading,error,data} = useQuery(COUNT_SALE_QUERY);
  if(loading) return <Spinner/>
  if (error) return <p>{error.message}</p>
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
              fontSize={15}
              fontWeight={900}
            >
              Total Sales
            </Typography>
            <Typography variant="h4">
            {data.totalSale.toLocaleString() + " "} Birr 
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'blue',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <UsersIcon />
            </SvgIcon>
          </Avatar>
      </Stack>
     
      </CardContent>
    </Card>
  );
};

TotalSales.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};