import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Button from '../../Button';
import { Grid, Typography } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import Popup from '../../Popup';
import PatientEditForm from '../product/ProductEditForm';
import { SaleInterface } from '../../../interface/interfaces';
import { SHOPE_PRODUCTS } from '../../../graphql/shopeProduct';
import Spinner from '../../Spinner';

export const ShopeProductList = () => {
    const [openPopup,setOpenPopup] =useState(false);
    const  [openCofirmPopup,setOpenConfirimPopup]=useState(false);
    const [newData,setNewData]=useState("");
    const {loading,error,data} = useQuery(SHOPE_PRODUCTS);
    if(loading) return <Spinner/>
    if (error) return <p>{error.message}</p>
    console.log(data)
    const patientVital = data.shopeProducts.map((row:SaleInterface)=>(
        [row.id,row.product.name,row.product.price,row.quantity]
    ))
    const styles = {
      coloredCell: {
        backgroundColor: "red",
        color: "black",
        borderRadius: "50%",
        padding: "10px", // Adjust the padding as needed
      },
    };
    const columns = [
        {
          name: "#Id",
          options: {
            filter: true,
          }
        },
        {
          name: "Product Name",
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
            customBodyRender: (value: number) => {
              if (value < 10) {
                return <span style={styles.coloredCell}>{value}</span>;
              } else {
                return value;
              }
            },
          },
        }, 
      ];
      return (
        <Grid>
             <MUIDataTable
               title="Admin"
               data={patientVital}
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
    <Typography>Are you sure you want to delete this post?</Typography>
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
     <PatientEditForm id = {newData[0]}  />
         </Popup>
        </Grid>
      )
}
