import * as React from 'react';
import {useState,useEffect} from 'react';
import {Box,Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import { io } from 'socket.io-client';
import AuthService from '../../../api/auth/auth.service';
import baseURL from '../../../api/url';

export default function TodayTotalQueue() {
  const currentUser = AuthService.getCurrentUser();
   const token = currentUser.accessToken;
   const socket = io.connect(baseURL,{transports: ['websocket', 'polling', 'flashsocket'],query:{
    token:token
  }});
    const [total_ticket,settotal_ticket]  =useState("")

    useEffect(() => {
        socket.on("totalDailyQueueAllUser", function(daily_all_user_queue) {
            settotal_ticket(daily_all_user_queue);
        });
     //   console.log("samisams" + daily_all_user_queue);
    });

    
useEffect(()=>{
    socket.emit("totalDailyQueueAllUser");
});
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
