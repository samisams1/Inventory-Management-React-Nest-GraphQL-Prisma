import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import UsersIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import { useQuery } from '@apollo/client';
import Spinner from '../../../Spinner';
import { COUNT_SALE_QUERY } from '../../../../graphql/Sale';

export const MonthTotalSales = (props:any) => {
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
              fontSize={18}
              fontWeight={900}
            >
             This Month Total Sales
            </Typography>
            <Typography variant="h4">
            {data.totalSale.toLocaleString() + " "} Birr 
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'red',
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

MonthTotalSales.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};