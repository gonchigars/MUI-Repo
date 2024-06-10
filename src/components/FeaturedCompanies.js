import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";

const companies = [
  { name: "Land Rover", logo: require("../images/landrover.png") },
  { name: "Kia Motors", logo: require("../images/kia.png") },
  { name: "Morris Garage", logo: require("../images/mg.png") },
  { name: "Ford", logo: require("../images/ford.png") },
];

const FeaturedCompanies = () => {
  return (
    <Box p={4} bgcolor="#f8f8f8">
      <Typography variant="h6" gutterBottom>
        Featured
      </Typography>
      <Grid container spacing={3}>
        {companies.map((company) => (
          <Grid item xs={12} sm={6} md={3} key={company.name}>
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
              <Typography variant="subtitle1" gutterBottom>
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
