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
        width: 190,
        height: "100vh",
        backgroundColor: "white",
        color: "black",
        position: "fixed",
        top: 40,
        left: 0,
        paddingTop: "70px", // Adjust to the height of your header
      }}
    >
      <List>
        <ListItem button
        sx={{
          "&:hover":{
            background:'blue'
          }
        }}
        >
          <ListItemIcon>
            <HomeIcon sx={{ blockSize:30, color: "black" }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button  sx={{
          "&:hover":{
            background:'blue'
          }
        }}>
          <ListItemIcon>
            <InfoIcon sx={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText  primary="About" />
        </ListItem>
        <ListItem button  sx={{
          "&:hover":{
            background:'blue'
          }
        }}>
          <ListItemIcon>
            <WorkIcon sx={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button  sx={{
          "&:hover":{
            background:'blue'
          }
        }}>
          <ListItemIcon>
            <ContactMailIcon sx={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
