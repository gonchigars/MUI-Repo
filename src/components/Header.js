import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flex: 1 }}>
        <font color = "black" >MD</font>
        </Typography>
        <font color="white"><Button color="inherit">About</Button>
        <Button color="inherit">Team</Button>
        <Button color="inherit">Portfolio</Button>
        </font>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
