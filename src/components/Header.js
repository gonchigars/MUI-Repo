import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import { useMediaQuery, useTheme } from "@mui/material";

import { AppBar, Toolbar, Typography, Button, Link, Box } from "@mui/material";
import { Image } from "@mui/icons-material";

const Header = ({ handleDrawerOpen, handleDrawerClose, open }) => {
  // const theme = useTheme();
  const lessthan767 = useMediaQuery("(max-width:767px)");

  const bottomBarCss = {
    cursor: "pointer",
    fontSize: "13px",
    textDecoration: "none",
    color: "secondary.main",
    position: "relative",
    paddingBottom: "5px",
    "&:hover": {
      color: "third.main",
    },
    "&::after": {
      content: '""',
      backgroundColor: "third.lite",
      position: "absolute",
      right: "0px",
      bottom: "0px",
      left: "0px",
      height: "2px",
      width: "0px",
      borderRadius: "40px",
      transition: "all 0.3s ease-in-out",
    },
    "&:hover::after": {
      width: "100%",
    },
  };
  return (
    <Toolbar sx={{ display: "flex", alignItems: "center" }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          mr: 2,
          ...(open && { display: "none" }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerClose}
        edge="start"
        sx={{
          mr: 2,
          ...(!open && { display: "none" }),
        }}
      >
        <CancelIcon />
      </IconButton>
      <Box sx={{ color: "white" }} variant="h6" sx={{ flexGrow: 1 }}>
        <Box
          sx={{ display: "flex", alignItems: "center" }}
          component={"img"}
          src={
            "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&fit=crop&auto=format"
          }
          width="auto"
          height="30px"
          alt="logo"
        ></Box>
      </Box>
      <Box
        style={{ display: lessthan767 ? "none" : "flex" }}
        sx={{
          gap: "15px",
          fontSize: "14px",
        }}
      >
        <Link
          sx={{
            ...bottomBarCss,
          }}
          href="#"
          color="inherit"
        >
          About
        </Link>
        <Link
          sx={{
            ...bottomBarCss,
          }}
        >
          Team
        </Link>
        <Link
          sx={{
            ...bottomBarCss,
          }}
        >
          Portfolio
        </Link>
        <Link
          sx={{
            ...bottomBarCss,
          }}
        >
          Corporate Partners
        </Link>
        <Link
          sx={{
            ...bottomBarCss,
          }}
        >
          Insights
        </Link>
        <Link
          sx={{
            ...bottomBarCss,
          }}
        >
          Investor Portal
        </Link>
      </Box>
    </Toolbar>
  );
};

export default Header;
