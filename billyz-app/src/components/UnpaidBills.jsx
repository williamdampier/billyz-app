import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ReceiptIcon from '@mui/icons-material/Receipt';

const UnpaidBills = () => {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Tabs indicatorColor="white" value={value} onChange={handleChange} aria-label="Unpaid Bills Section">
        <Tab icon={<ReceiptIcon/>} label="UNPAID BILLS" disabled/>
        
      </Tabs>
    );
  }
  
  export default UnpaidBills; 