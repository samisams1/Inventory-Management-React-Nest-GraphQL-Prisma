import React from 'react';
import Chart from "react-apexcharts";
import ReportQuery from '../../../api/report/report.service.api';

const YearReportCharts = () => {

  // start month report
  const {yearReport} = ReportQuery();

const yearCount = yearReport.map((row) => (
            row.count          
        ));
const monthDatatableData = yearReport.map((row) => (
            [row.updatedDate]          
        ));
  const series = [ //data on the y-axis
    {
      name: "Anuual",
      data: yearCount
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

export default YearReportCharts;
