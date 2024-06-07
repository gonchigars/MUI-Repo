import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Header from "../Header";

import Sidebar from "../Sidebar";
import useMediaQuery from "@mui/material/useMediaQuery";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open, matches }) => ({
    flexGrow: 1,
    marginTop: "65px",
    marginLeft: matches ? `-${drawerWidth}px` : "0px",
    // padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    ...(open && {
      marginLeft: 0,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: 1201,

  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    // width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const MuiDrawer = ({ children }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [anchor, setAnchor] = React.useState("bottom");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (matches) {
      setAnchor("left");
    } else {
      setAnchor("bottom");
    }
  }, [matches]);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Header
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
      </AppBar>

      <Drawer
        sx={{
          width: anchor === "top" || anchor === "bottom" ? "auto" : drawerWidth,

          flexShrink: 0,
          boxShadow: "none",
          "& .MuiDrawer-paper": {
            width:
              anchor === "top" || anchor === "bottom" ? "auto" : drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "secondary.main",
            zIndex: 1100,
          },
        }}
        variant="persistent"
        anchor={anchor}
        open={open}
      >
        <Sidebar
          handleDrawerClose={handleDrawerClose}
          DrawerHeader={DrawerHeader}
        />
      </Drawer>

      <Main open={open} matches={matches}>
        {children}
      </Main>
    </Box>
  );
};
