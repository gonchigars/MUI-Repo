import React from "react";
import FeaturedCompanies from "./components/FeaturedCompanies";
import Pagination from "./components/Pagination";
import { Grid, Box } from "@mui/material";
import { MuiDrawer } from "./components/MuiDrawer/mui-drawer";
import { MainCompo } from "./components/MainContentCompo/MainCompo";

function App() {
  return (
    <Box className="App">
      <MuiDrawer>
        <MainCompo />
      </MuiDrawer>
    </Box>
  );
}

export default App;
