import * as React from 'react';
import TabContext from '@material-ui/lab/TabContext'
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { Box, Tab } from '@mui/material';

import TodayReprtByTable from '../report/daily/TodayReprtTable';
import DailyReportChart from '../report/daily/dailyReportCharts';

import MonthReportChart from '../report/month/MonthCharts';
import MonthReprtByTable from '../report/month/MonthReportTable';

import YearReprtByTable from '../report/year/YearReportTable';

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
        <TodayReprtByTable /> 
          <DailyReportChart /> 
        </TabPanel>
        <TabPanel value="2">YearReportCharts
          <MonthReprtByTable />           
          <MonthReportChart />
        </TabPanel>
        <TabPanel value="3">
          <YearReprtByTable /> 
           <MonthReportChart /> 
        </TabPanel>
      </TabContext>
    </Box>
    </>
  );
}
