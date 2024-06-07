import React from "react";
import { Grid, Paper, Typography, Box ,Link } from "@mui/material";

const companies = [
  { name: "ADIDAS", logo: require("../images/ADIDAS.png") },
  { name: "INTEL", logo: require("../images/INTL.png") },
  { name: "HYUNDAI", logo: require("../images/Hyundi.jpeg") },
  { name: "SAMSUMG", logo: require("../images/samsung.png") },
];

const FeaturedCompanies = () => {
  return (
    <Box p={6} bgcolor="aquamarine">
      <Typography  fontSize ="150%" variant="overline" gutterBottom>
       <b >  Featured</b>
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
                height="110px"
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
