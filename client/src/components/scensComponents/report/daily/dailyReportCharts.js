import React from 'react';
import Chart from "react-apexcharts";
import ReportQuery from '../../../api/report/report.service.api';

const DailyReportChart = () => {
  const {dailyReport} = ReportQuery();
const totalday = dailyReport.map((row) => (
            row.count          
        ));
const totalDayReport = dailyReport.map((row) => (
            [row.updatedDate]          
        ));
  const series = [ //data on the y-axis
    {
      name: "Daily Report",
      data: totalday
    }
  ];
  const options = { //data on the x-axis
    chart: { id: 'bar-chart'},
    xaxis: {
      categories: totalDayReport
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

export default DailyReportChart;