import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar
       
       alignItems="center">
        <Typography fontSize={20} fontWeight="bold" fontFamily="Serif" variant="h6" sx={{ flexGrow: 1 }}>
          STAR VISION
        </Typography>
        <Button  color="inherit">About</Button>
        <Button  color="inherit">Team</Button>
        <Button  color="inherit">Portfolio</Button>
        <Button  color="inherit">Corporate Partners</Button>
        <Button  color="inherit">Insights</Button>
        <Button  color="inherit">Investor Portal</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
