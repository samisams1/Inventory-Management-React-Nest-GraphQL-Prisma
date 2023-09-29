import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { userInterface } from '../../../interface/interfaces';
import { Chip, Grid, Stack, Typography } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import Popup from '../../Popup';
import Button from '../../Button';
import { USER_QUERY } from '../../../graphql/Users';
import Controls from '../../Controls';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { UserEditForm } from './UserEdit';

export const UserList = ({title,roleId}:any) => {
    const [openPopup,setOpenPopup] =useState(false);
    const [openCofirmPopup,setOpenConfirimPopup]=useState(false);
    const [newData,setNewData]=useState("");
    const { loading, error, data } = useQuery(USER_QUERY, {
      fetchPolicy: 'cache-first'
    });
    
    if(loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>
    console.log(data)
    const row = data.users.map((row:userInterface)=>(
        [row.id,row.firstName,row.lastName,row.username,row.email,row.status,row.role]
    ))
    const columns = [
        {
          name: "#Id",
          options: {
            filter: true,
          }
        },
        {
          label: "First Name",
          name: "Title",
          options: {
            filter: true,
          }
        },
        {
          name: "Last Name",
          options: {
            filter: true,
            sort: false,
          }
        },
        {
          name: "Username",
          options: {
            filter: true,
            sort: false,
          }
        },
        {
          name: "Email",
          options: {
            filter: true,
            sort: false,
          }
        },
        {
          name: 'Status',
          options: {
            filter: true,
            sort: false,
            customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
              return (
                <Stack direction="row" spacing={1}>
                {value === "active" ? (
                  <Chip label={value} color="success" />
                ) : value === "pending" ? (
                  <Chip label={value} color="info" />
                ) : (
                  <Chip label={value} color="error" />
                )}
              </Stack>
              );
            }
          },
        },
        {
          name: "Role",
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
                <Controls.ActionButton
                color="primary"
                onClick={() => { setOpenPopup(true);setNewData(tableMeta.rowData);  }}
                >
                 
                  <EditOutlinedIcon fontSize="small" />
                </Controls.ActionButton>
              );
            }
          }
        },
      ];
      return (
        <Grid>
             <MUIDataTable
               title={title}
               data={row}
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
                    title="Edit User Form"
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                >
     <UserEditForm id = {newData[0]} firstName= {newData[1]} lastName ={newData[2]} role={newData[6]} username={newData[3]} email= {newData[4]} status={newData[5]} />
         </Popup>
        </Grid>
      )
}
