import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import { useQuery } from '@apollo/client';
import { SALE_QUERY } from '../../../graphql/Sale';
import Spinner from '../../Spinner';
import MUIDataTable from 'mui-datatables';
import Button from '../../Button';
import Popup from '../../Popup';
import { SaleDetailList } from './SaleDetail';
import { SingleSale } from './singleSaleDetail';

export const SaleList = (props:any) => {
  const [openPopup,setOpenPopup] = useState(false);
  const { difference, positive = false, sx, value } = props;
  const [newData,setNewData]=useState("");
  const {loading,error,data} = useQuery(SALE_QUERY);
  if(loading) return <Spinner/>
  if (error) return <p>{error.message}</p>

  const saleData = data.sales.map((row:any)=>(
    [row.id,row.seller,row.net + " Birr",row.vat + " Birr" ,row.grossAmount+ " Birr",row.status, row.status,row.createdAt
    ]
));
const product = {
  name: 'Product Name',
  description: 'Product Description',
  price: '$19.99',
  quantity: 5,
  amount: '$99.95',
  createdAt: '2023-09-24',
  imageUrl: 'https://example.com/product-image.jpg',
};
const columns = [
    {
      name: "#Id",
      options: {
        filter: true,
      }
    },
    {
      name: "Seller Name",
      options: {
        filter: true,
      }
    },
    {
      name: "Net",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
        name: "Vat",
        options: {
          filter: true,
          sort: false,
        }
      },
    {
      name: "grossAmount",
      options: {
        filter: true,
        sort: false,
      }
    }, 
    {
      name: "status",
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
      {
        name: "Sale Details",
        options: {
          filter: true,
          sort: false,
          empty: true,
          customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
            return (
              <Button
                text="Sale Details"
                variant="outlined"
                onClick={() => { setOpenPopup(true);setNewData(tableMeta.rowData);  }}
              />
            );
          }
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
              Recent sales
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
      <Popup
                title="Sale Detail"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
       <SingleSale id ={1}/>
     </Popup>
    </Card>
  );
};

SaleList.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};