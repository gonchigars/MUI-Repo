import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import FeaturedCompanies from "./components/FeaturedCompanies";
import Pagination from "./components/Pagination";
import { Grid, Box } from "@mui/material";
import Footer from "./components/Footer";
import ContentEx from "./components/Content";
import BrandList from "./components/ImageGrid";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Box sx={{ marginLeft: "200px", padding: 4 }}>
        <Grid container spacing={4}>
        <Grid item xs={12}>
            <MainContent />
            <ContentEx/>
          </Grid>
          <Grid item xs={12}>
            <FeaturedCompanies />
          </Grid>
          <Grid item xs={12}>
           <BrandList/>
          </Grid>
          <Grid item xs={12}>
            <Pagination />
          </Grid>
        </Grid>
      </Box>
      <Footer/>
    </div>
  );
}

export default App;
