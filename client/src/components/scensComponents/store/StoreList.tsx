import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Button from '../../Button';
import { Grid } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import Popup from '../../Popup';
import { storeInterface } from '../../../interface/interfaces';
import { STORE_QUERY } from '../../../graphql/Store';
import UpdateQuantity from './updateQuantity';

export const StoreList = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [newData, setNewData] = useState("");
  const { loading, error, data } = useQuery(STORE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const patientVital = data.stores.map((row: storeInterface) => [
    row.id,
    row.product.name,
    row.product.price,
    row.quantity,
  ]);

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
      },
    },
    {
      label: "Product Name",
      name: "Title",
      options: {
        filter: true,
      },
    },
    {
      name: "Price",
      options: {
        filter: true,
        sort: false,
      },
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
    {
      name: "Add Quantity",
      options: {
        filter: true,
        sort: false,
        empty: true,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
          return (
            <Button
              text="Add Quantity"
              variant="outlined"
              onClick={() => {
                setOpenPopup(true);
                setNewData(tableMeta.rowData);
              }}
            />
          );
        },
      },
    },
  ];

  return (
    <Grid>
      <MUIDataTable
        title="The Store Products"
        data={patientVital}
        columns={columns}
        options={{
          filterType: "checkbox",
        }}
      />

      <Popup
        title="Add Quantity"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <UpdateQuantity id={Number(newData[0])} quantity={0} />
      </Popup>
    </Grid>
  );
};