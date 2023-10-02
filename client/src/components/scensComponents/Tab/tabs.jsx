import * as React from 'react';
import TabContext from '@material-ui/lab/TabContext'
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
// /import MonthReportCharts from '../report/month/MonthCharts';
import { Box, Tab } from '@mui/material';
/*import MonthReprtByTable from '../report/month/MonthReportTable';
import TodayReprtByTable from '../report/daily/TodayReprtTable';
import YearReprtByTable from '../report/year/YearReportTable';
import DailyReportChart from '../report/daily/dailyReportCharts';*/
import YearReportCharts from '../report/year/YearReportChart';
import { SaleList } from '../sale/SaleList';

/*
import DayReportTable from '../../components/Report/MonthReportTable'
import DailyCharts from '../../components/Report/dailyReportCharts'
import MonthlyCharts from '../../components/Report/MonthCharts'
import MonthReportTable from '../../components/Report/MonthReportTable'
import AnuualyReportTable from '../../components/Report/YearReportTable'
import AnuualyCharts from '../../components/Report/YearReportChart'
*/
export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <>

    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Daily Report" value="1" />
            <Tab label="Monthly Report" value="2" />
            <Tab label="Anuualy Report" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <YearReportCharts /> 
          <YearReportCharts /> 
        </TabPanel>
        <TabPanel value="2">
          <YearReportCharts />           
          <YearReportCharts />
        </TabPanel>
        <TabPanel value="3">
          <SaleList /> 
           <YearReportCharts /> 
        </TabPanel>
      </TabContext>
    </Box>
    </>
  );
}
