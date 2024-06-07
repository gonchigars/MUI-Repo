import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          FIFTH WALL
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Team</Button>
        <Button color="inherit">Portfolio</Button>
        <Button color="inherit">Corporate Partners</Button>
        <Button color="inherit">Insights</Button>
        <Button color="inherit">Investor Portal</Button>
        <Button color="inherit">Services</Button>
        <Button color="inherit">Contact</Button>


      </Toolbar>
    </AppBar>
  );
}

export default Header;
