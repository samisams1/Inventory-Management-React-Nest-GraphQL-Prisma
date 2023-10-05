import React from "react";
import MUIDataTable from "mui-datatables";
import { Grid } from "@mui/material";
import Spinner from "../../../Spinner";
import { useQuery } from "@apollo/client";
import { DAY_REPORT_QUERY } from "../../../../graphql/Report";

export default function MonthReprtByTable() {
const {loading,error,data} = useQuery(DAY_REPORT_QUERY);
console.log(data)
console.log("haben");
if(loading) return <Spinner/>
if (error) return <p>{error.message}</p>
const saleData = data.dailyReport.map((row:any)=>(
            [row.id,row.grossAmount
            ]
        ));
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Today Daily Report of Salled Products"
            data={saleData}
            columns={["id","Gross Amount"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}