import * as React  from 'react';
import { useState } from 'react';
import {
  Box,Typography
} from '@mui/material';
import ActionButton from '../../ActionButton';
import Button from '../../Button';
import Popup from '../../Popup';
import AddIcon from '@material-ui/icons/Add';
import { useNavigate } from 'react-router-dom';
export const SaleToolbar =({name,addName}:any)=>{
  const navigate = useNavigate();
  const AddNewSale = ()=>{
    navigate("/sale")
  }
return( 
<Box>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1
      }}
    >
      <Typography
        sx={{ m: 1 }}
        variant="h4"
      >
        {name} 
      </Typography>
      <Box sx={{ m: 1 }}>
      <ActionButton />

        <Button
                        text={addName}
                        variant="outlined"
                        startIcon={<AddIcon />}
                        onClick={() => { AddNewSale();  }}
                    />
                    
      </Box>
    </Box>
 
  </Box>
);
  

  
    }