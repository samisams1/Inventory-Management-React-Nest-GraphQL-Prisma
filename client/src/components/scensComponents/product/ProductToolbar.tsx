import * as React  from 'react';
import { useState } from 'react';
import {
  Box,Typography
} from '@mui/material';
import ActionButton from '../../ActionButton';
import Button from '../../Button';
import Popup from '../../Popup';
import PatientForm from './ProductForm';
export const PatientToolbar =()=>{
   
  const [openPopup, setOpenPopup] = useState(false);
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
        Patient
      </Typography>
      <Box sx={{ m: 1 }}>
  
      <ActionButton />

        <Button
                        text="Add New Patient"
                        variant="outlined"
                        onClick={() => { setOpenPopup(true);  }}
                    />
      </Box>
    </Box>
    <Popup
                title="Patient Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
   <PatientForm/>
     </Popup>
  </Box>
);
  

  
    }