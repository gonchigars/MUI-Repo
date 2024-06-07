import React from "react";
import { Grid, Box } from "@mui/material";
import MainContent from "../MainContent";
import FeaturedCompanies from "../FeaturedCompanies";
import Pagination from "../Pagination";

export const MainCompo = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <MainContent />
        </Grid>
        <Grid item xs={12}>
          <FeaturedCompanies />
        </Grid>
        <Grid item xs={12}>
          <Pagination />
        </Grid>
      </Grid>
    </Box>
  );
};
