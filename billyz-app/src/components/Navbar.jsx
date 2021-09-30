import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Badge, IconButton, Menu } from '@mui/material';

import Typography from '@mui/material/Typography';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Toolbar } from '@mui/material';



const NavBar = (props) =>{
    return (
        <Box sx={{ flexGrow: 1 }}>
        
        <AppBar  position="static">
          <Toolbar className="myButton">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Billyz
            </Typography>
            
            <IconButton
          size="large"
          aria-label="show 7 new notifications"
          color="inherit"
        >
          <Badge badgeContent={7} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
            
          </Toolbar>
        </AppBar>
       
      </Box>
    );
}
export default NavBar;