import * as React from 'react';
import {Box,Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import ReportQuery from '../../../api/report/report.service.api';
import QueueIcon from '@material-ui/icons/Queue';
export default function YearTotalQueue() {
 const {countYearReport} = ReportQuery();
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
           Year Queue

         </Typography>
         <Typography
           color="textPrimary"
           variant="h4"
         >
             {countYearReport}
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
         <QueueIcon/>
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
