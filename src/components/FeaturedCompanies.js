import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";

const companies = [
  { name: "TESLA", logo: require("../images/tesla.png") },
  { name: "AIRBNB", logo: require("../images/airbnb.png") },
  { name: "SLACK", logo: require("../images/slack.png") },
  { name: "NETFLIX", logo: require("../images/netflix.png") },
  { name: "ZOOM", logo: require("../images/zoom.png") },
  { name: "BEYOND", logo: require("../images/beyondmeat.png") },
];

const FeaturedCompanies = () => {
  return (
    <Box p={2} bgcolor="#8C8C8C">
      <Typography variant="h6" gutterBottom>
      <b><font color= "black">Visionary Companies </font></b>
      </Typography>
      <Grid container spacing={3}>
        {companies.map((company) => (
          <Grid item xs={12} sm={4} md={2} key={company.name}>
            <Paper
              elevation={3}
              style={{ padding: "16px", textAlign: "center" }}
            >
              <Box
                component="img"
                src={company.logo}
                alt={company.name}
                width="100%"
                height="100px"
              />
              <Typography variant="subtitle" gutterBottom>
                {company.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedCompanies;
