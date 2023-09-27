import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import { SALE_QUERY_DETAIL } from '../../../graphql/Sale';
import Spinner from '../../Spinner';
import MUIDataTable from 'mui-datatables';

export const SaleDetailList = (props:any) => {
  const { difference, positive = false, sx, value } = props;
  const [newData,setNewData]=useState("");
  const {loading,error,data} = useQuery(SALE_QUERY_DETAIL);
  if(loading) return <Spinner/>
  if (error) return <p>{error.message}</p>

  const saleData = data.saleDetails.map((row:any)=>(
    [row.id,row.product.name,row.product.price + " Birr",row.quantity,row.createdAt
    ]
));
console.log("kebede")
console.log(data);
const columns = [
    {
      name: "#Id",
      options: {
        filter: true,
      }
    },
    {
      name: "Product ame",
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
      name: "Amount",
      options: {
        filter: true,
        sort: false,
      }
    }, 
    {
        name: "Date",
        options: {
          filter: true,
          sort: false,
        }
      },
  ];
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
              prodct sales by Date
            </Typography>
            <Typography variant="h4">
              {value}
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

SaleDetailList.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};