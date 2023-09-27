import React, { useState } from 'react'
import {  useQuery } from '@apollo/client';
import MUIDataTable from "mui-datatables";
import Button from '../../Button';
import Popup from '../../Popup';
import ProductEditForm from './ProductEditForm';
import { Grid, Typography } from '@mui/material';
import { productInterface } from '../../../interface/interfaces';
import { PRODUCT_QUERY } from '../../../graphql/Product';
import EditPriceForm from './EditPrice';
const ProductList = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [openCofirmPopup, setOpenConfirimPopup] = useState(false);
  const [newData,setNewData] =React.useState("")
  const { loading, error, data } = useQuery(PRODUCT_QUERY);
  if (loading) return <p>Loading...</p>
	if (error) return <p>{error.message}</p>
    const ProductList = data.products.map((row:productInterface)=>(
      [row.id,row.barcode,row.image,row.name,row.price,row.description]
  ))
    const columns = [
      
        {
          name: "#Id",
          options: {
            filter: true,
          }
        },
        {
          name: "Image",
          options: {
            filter: true,
            sort: false,
          }
        },
        {
          name: "Barcode",
          options: {
            filter: true,
            sort: false,
          }
        },
        {
          label: "Name",
          name: "Name",
          options: {
            filter: true,
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
          name: "Description",
          options: {
            filter: true,
            sort: false,
          }
        },
      
        {
          name: "Edit",
          options: {
            filter: true,
            sort: false,
            empty: true,
            customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
              return (
                <Button
                  text="Edit"
                  variant="outlined"
                  onClick={() => { setOpenPopup(true);setNewData(tableMeta.rowData);  }}
                />
              );
            }
          }
        },
      ];
    /*  const handleDelete = (id:string) => {
        deletePAtient({
          variables: {id},
         })
      };*/
  return (
    <Grid>
         <MUIDataTable
           title="Patient"
           data={ProductList}
           columns={columns}
           options={{
             filterType: "checkbox",
           }}
         />
           <Popup
                title="Patient Edit Form"
                openPopup={openCofirmPopup}
                setOpenPopup={setOpenConfirimPopup}
            >
              <Grid>
<Typography>
Are you sure you want to delete this post?</Typography>
<Grid>
<Button
 //onClick={handleDelete(newData[0])}
        text="Yes" />
<Button
        type="submit"
        text="No" />
</Grid>



              </Grid>
   
     </Popup>
    <Popup
                title="Patient Edit Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
 <EditPriceForm  id = {Number(newData[0])} price = {Number(newData[4])}   />
     </Popup>
    </Grid>
  )
}

export default ProductList