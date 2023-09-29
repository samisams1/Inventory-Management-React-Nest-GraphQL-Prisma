import React, { useContext, useState } from 'react';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Popup from "../../components/Popup";
import { InputAdornment, Paper,Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PageHeader from '../../components/PageHeader';
import Controls from '../../components/Controls';
import { UserList } from '../../components/scensComponents/user/userTable';
import { UserForm } from '../../components/scensComponents/user/userForm';
import { UserContext } from '../../components/auth/UserContext';
import Spinner from '../../components/Spinner';
const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: 5,
        padding: 5
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
}))
export const User = () => {
    const [openPopup, setOpenPopup] = useState(false)
    const classes = useStyles();
    const { currentUser } = useContext(UserContext);
     if (!currentUser) {
    return <div><Spinner/></div>;
  }
  
    return (
        <>
            <PageHeader
                title="New Admin"
                subTitle="Admin"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
               <Toolbar>

                    <div  className={classes.newButton}>
                    <Controls.Button
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        onClick={() => { setOpenPopup(true)}}
                    />
                    </div>
                </Toolbar> 
                <UserList title={"Admin"} roleId = {1}/>
            </Paper>
            <Popup
                title="User Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
               <UserForm/>
            </Popup>
        </>
    )

}
