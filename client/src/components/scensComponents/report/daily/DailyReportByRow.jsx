import React from "react";
import {
    Box,
    Card,
    CardContent,
    Grid,
    Typography
  } from '@material-ui/core';
import ReportQuery from "../../../api/report/report.service.api";
  const TotalMonthQueue = (props) => { 
    const {dailyReoprt} = ReportQuery();
if (!dailyReoprt) return null;
     return(
<Card
      sx={{ height: '100%' }}
      {...props}
    >
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
             <Typography 
            color="textSecondary"
            gutterBottom
            variant="h2"
             >Daily Queue</Typography>
          <Grid item>
         
             {/* map over the users array */}
        {dailyReoprt.map((row) => (
          // display a <div> element with the user.name and user.type
          // parent element needs to have a unique key
         
<Grid key={row.username}>
<Typography 
color="textSecondary"
gutterBottom
variant="h6"
>
{row.username +  " => "  + row.total}
</Typography>
</Grid>
        ))}
          </Grid>
          <Grid item>
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
     ) 
    
  };
  
  export default TotalMonthQueue;