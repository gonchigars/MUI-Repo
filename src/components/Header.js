
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import { AppBar, Toolbar, Typography, Button } from "@mui/material";




function Header() {
  return (
    
   
    <AppBar position="fixed">
      <Toolbar>
      <Stack direction="row" spacing={2}>
        
    
      <Avatar alt="CHARAN R X" src="../images/IMG_20230613_013735.jpg" />
      </Stack>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          RX
        </Typography>
         
        <Button color="inherit">About</Button>
        <Button color="inherit">Team</Button>
        <Button color="inherit">Portfolio</Button>
        <Button color="inherit">Corporate Partners</Button>
        <Button color="inherit">Insights</Button>
        <Button color="inherit">Investor Portal</Button>
      </Toolbar>
    </AppBar>
   
  );
}

export default Header;
