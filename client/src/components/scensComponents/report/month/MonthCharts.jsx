import React from 'react';
import Chart from "react-apexcharts";
import ReportQuery from '../../../api/report/report.service.api';

const MonthReportCharts = () => {
const {monthReport} = ReportQuery();
  // start month report

const countMonthTotal = monthReport.map((row) => (
            row.count          
        ));
const monthDatatableData = monthReport.map((row) => (
            [row.updatedDate]          
        ));
  const series = [ //data on the y-axis
    {
      name: "Month ",
      data: countMonthTotal
    }
  ];
  const options = { //data on the x-axis
    chart: { id: 'bar-chart'},
    xaxis: {
      categories: monthDatatableData
    }
  };

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="bar"
      />
    </div>
  )
}

export default MonthReportCharts;