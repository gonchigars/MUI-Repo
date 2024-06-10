import React from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        backgroundColor: "secondary.dark",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        paddingTop: "64px", // Adjust to the height of your header
      }}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InfoIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <WorkIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContactMailIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
