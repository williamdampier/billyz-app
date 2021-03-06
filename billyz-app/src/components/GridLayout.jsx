import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NavBar from './Navbar';
import BillsSection from './BillSection';
import UnpaidBills from './UnpaidBills';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const GridLayout = () => {
    return (      
      <Box sx={{ flexGrow: 1 }}>
       
        <Grid container spacing={3}>
          <Grid item xs={12}>
          <NavBar/>
          </Grid>
       
          <Grid item xs={12} sm={8}>
          <BillsSection/>
          </Grid>
          <Grid item xs={12} sm={4}>
          <UnpaidBills/>
          </Grid>
        </Grid>
      </Box>
    );
  }

  export default GridLayout;