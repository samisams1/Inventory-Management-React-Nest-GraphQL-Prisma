import React from "react";
import MUIDataTable from "mui-datatables";
import { Grid } from "@mui/material";
import ReportQuery from "../../../api/report/report.service.api";


export default function MonthReprtByTable() {

// start month report
const {monthReport} = ReportQuery();

 const monthDatatableData = monthReport.map((row) => (
              [row.updatedDate,row.count]          
          ));
 //end month


  return (
    <>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Month Report total seved queue"
            data={monthDatatableData}
            columns={["month", "Served Queue"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}