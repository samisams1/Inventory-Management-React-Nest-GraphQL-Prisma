import React from "react";
import MUIDataTable from "mui-datatables";
import { Grid } from "@mui/material";
import ReportQuery from "../../../api/report/report.service.api";

export default function TodayReprtByTable() {
  const {dailyReport} = ReportQuery();
 const dayReportRow = dailyReport.map((row) => (
              [row.updatedDate,row.count]          
          ));
  return (
    <>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Today Served Queue"
            data={dayReportRow}
            columns={["Day", "Served Queue"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}