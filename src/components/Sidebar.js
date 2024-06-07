import React from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import { styled, useTheme } from "@mui/material/styles";

const Sidebar = ({ handleDrawerClose, DrawerHeader }) => {
  const theme = useTheme();

  return (
    <Box>
      <DrawerHeader></DrawerHeader>
      {/* <Divider /> */}
      <List>
        {[
          { text: "Home", MuiIcons: HomeIcon },
          { text: "About", MuiIcons: InfoIcon },
          { text: "Services", MuiIcons: WorkIcon },
          { text: "Contact", MuiIcons: ContactMailIcon },
        ].map(({ text, MuiIcons }, index) => (
          <ListItem
            sx={{
              "&:hover & .MuiSvgIcon-root": {
                color: "primary.main",
              },
            }}
            key={text}
            disablePadding
          >
            <ListItemButton
              sx={{
                textAlign: { xs: "center", md: "left" },
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <ListItemIcon>
                <MuiIcons />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
