import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardContent, Stack, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import Spinner from '../../Spinner';
import MUIDataTable from 'mui-datatables';
import { SELL_DETAIL_BY_SELL_ID } from '../../../graphql/Sale';

export const SingleSale = (props:any) => {
  const {loading,error,data} = useQuery(SELL_DETAIL_BY_SELL_ID,{
    variables:{id:props.id}
  });
  if(loading) return <Spinner/>
  if (error) return <p>{error.message}</p>

  const saleData = data.saleDetailById.map((row:any)=>(
    [row.id,row.product.name,row.price,row.quantity
    ]
));
const columns = [
    {
      name: "#Id",
      options: {
        filter: true,
      }
    },
    {
      name: "Product name",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
        name: "Price",
        options: {
          filter: true,
          sort: false,
        }
      },
    {
      name: "Quantity",
      options: {
        filter: true,
        sort: false,
      }
    }, 
  ];
return (
    <Card>
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
              Product Sale Details
            </Typography>
          </Stack>
      </Stack>
      
         <MUIDataTable
               title="sales"
               data={saleData}
               columns={columns}
               options={{
                 filterType: "checkbox",
               }}
             />
         
      </CardContent>
    </Card>
  );
};

SingleSale.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};