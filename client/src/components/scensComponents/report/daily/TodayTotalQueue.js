import * as React from 'react';
import {useState} from 'react';
import {Box,Avatar, Card, CardContent, Grid, Typography } from '@mui/material';


export default function TodayTotalQueue() {
 
    const [total_ticket,settotal_ticket]  =useState("")

  return (
    <Card >
    <CardContent>
          <Grid
            container
            spacing={3}
            sx={{ justifyContent: 'space-between' }}
          >
          <Grid item>
         <Typography
           color="textSecondary"
           gutterBottom
           variant="overline"
         >
           Today Queue

         </Typography>
         <Typography
           color="textPrimary"
           variant="h4"
         >
             {total_ticket}
         </Typography>
       </Grid>
       <Grid item>
       <Avatar
         sx={{
           backgroundColor: 'green',
           height: 56,
           width: 56
         }}
       >  
       </Avatar>
                </Grid>
                
          </Grid>
          <Box
            sx={{
              pt: 2,
              display: 'flex',
              alignItems: 'center'
            }}
          >
          </Box>
          </CardContent>
       </Card>
  );
}
