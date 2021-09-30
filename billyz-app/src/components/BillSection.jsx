import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import GroupIcon from '@mui/icons-material/Group';

const BillsSection = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab icon={<AttachMoneyIcon />} label="BILLS" />
      <Tab icon={<HistoryEduIcon />} label="HISTORY" />
      <Tab icon={<GroupIcon />} label="Group" />
    </Tabs>
  );
}

export default BillsSection; 