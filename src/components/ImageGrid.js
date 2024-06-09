import React from "react";
import { Box, Grid, Paper } from "@mui/material";

const BrandList = () => {
  return (
    <Box sx={{ paddingTop:10}}p={6}>
      <Grid container spacing={12}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={5} style={{  height:"20vh", padding: "100px", textAlign: "center" }}>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={5} style={{height:"20vh", padding: "100px", textAlign: "center" }}>
        </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={5} style={{height:"20vh", padding: "100px", textAlign: "center" }}>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={5} style={{height:"20vh", padding: "100px", textAlign: "center" }}>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={5} style={{height:"20vh", padding: "100px", textAlign: "center" }}>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={5} style={{height:"20vh", padding: "100px", textAlign: "center" }}>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={5} style={{height:"20vh", padding: "100px", textAlign: "center" }}>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BrandList;
