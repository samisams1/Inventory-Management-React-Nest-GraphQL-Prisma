import React from 'react';
import Chart from "react-apexcharts";

const YearReportCharts = () => {

  const series = [
    {
      name: "Annual",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 50]
    }
  ];

  const options = {
    chart: {
      type: 'bar',
      background: '#f5f5f5',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        colors: {
          ranges: [{
            from: 0,
            to: 100,
            color: '#3c44b1'
          }]
        }
      }
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      labels: {
        style: {
          colors: '#3c44b1',
          fontSize: '12px'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#3c44b1',
          fontSize: '12px'
        }
      }
    },
    title: {
      text: 'Yearly Sales Report',
      align: 'center',
      margin: 10,
      offsetY: 15,
      style: {
        color: '#3c44b1',
        fontSize: '16px',
        fontWeight: 'bold'
      }
    },
    grid: {
      borderColor: '#dddddd',
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 10,
        left: 10
      }
    }
  };

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default YearReportCharts;