import React from "react";
import MUIDataTable from "mui-datatables";
import { Grid } from "@mui/material";
import ReportQuery from "../../../api/report/report.service.api";
export default function YearReprtByTable() {

// start month report
const {yearReport} = ReportQuery();

 const monthDatatableData = yearReport.map((row) => (
              [row.updatedDate,row.count]          
          ));
 //end month


  return (
    <>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Anuualy Served queue"
            data={monthDatatableData}
            columns={["Year", "Served Queue"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}