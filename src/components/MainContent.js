import React from "react";
import { Box, Typography, Grid, Paper, Rating } from "@mui/material";

const MainContent = () => {
  return (
    <Box p={6}>
      <Typography variant="h4" gutterBottom>
        We back visionary companies that are changing the way we live, work, and
        play.
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Brand Ratings
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={5} style={{ padding: "10px", textAlign: "center" }}>
            <Typography variant="h5">LG</Typography>
            <Rating name="read-only" value={5} readOnly />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={5} style={{ padding: "10px", textAlign: "center" }}>
            <Typography variant="h5">PANASONIC</Typography>
            <Rating name="read-only" value={3} readOnly />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={5} style={{ padding: "10px", textAlign: "center" }}>
            <Typography variant="h5">BLUESTAR</Typography>
            <Rating name="read-only" value={4} readOnly />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={5} style={{ padding: "10px", textAlign: "center" }}>
            <Typography variant="h5">LLOYD</Typography>
            <Rating name="read-only" value={4} readOnly />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;
