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
        backgroundColor: "primary.light",
        color: "black",
        position: "fixed",
        top: 64,
        left: 0,
        paddingTop: "10px", // Adjust to the height of your header
      }}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon sx={{ color: "darkred" }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InfoIcon sx={{ color: "darkred" }} />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <WorkIcon sx={{ color: "darkred" }} />
          </ListItemIcon>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContactMailIcon sx={{ color: "darkred" }} />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
