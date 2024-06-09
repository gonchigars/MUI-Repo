import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import ImageAvatars from "./Avatar";

function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar
       alignItems="center">
        <ImageAvatars />
        <Typography fontSize={30} fontWeight="bold" fontFamily="Serif" variant="h2" sx={{ flexGrow: 1 }}>
          STAR VISION
        </Typography>
        <Button sx={{"&:hover":{background:'red'}}} color="inherit">About</Button>
        <Button sx={{"&:hover":{background:'red'}}} color="inherit">Team</Button>
        <Button sx={{"&:hover":{background:'red'}}} color="inherit">Portfolio</Button>
        <Button sx={{"&:hover":{background:'red'}}} color="inherit">Corporate Partners</Button>
        <Button sx={{"&:hover":{background:'red'}}} color="inherit">Insights</Button>
        <Button sx={{"&:hover":{background:'red'}}} color="inherit">Investor Portal</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
