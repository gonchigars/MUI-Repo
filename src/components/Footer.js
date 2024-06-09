import React from "react";
import { Box, Container, Typography, Link, Grid } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        color: "black",
        padding: "0px",
        marginTop: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="h5">Contact</Typography>
            <Typography variant="body2">Careers</Typography>
            <Link href="#" color="inherit">
              LinkedIn
            </Link>
            <Link href="#" color="inherit">
              <p>Twitter</p>
            </Link>
            <Link href="#" color="inherit">
              <p>YouTube</p>
            </Link>
            <Link href="#" color="inherit">
              <p>Instagram</p>
            </Link>
            <Link href="#" color="inherit">
              <p>Facebook</p>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">Fifth Wall's Weekly Newsletter</Typography>
            <Link href="#" color="inherit">
              Sign Up
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2">&copy; 2024 Fifth Wall</Typography>
            <Link href="#" color="inherit">
              Investor Login
            </Link>
            <Link href="#" color="inherit">
              <p>Sitemap</p>
            </Link>
            <Link href="#" color="inherit">
              <p>Terms of Use</p>
            </Link>
            <Link href="#" color="inherit">
              <p>Privacy Policy</p>
            </Link>
            <Link href="#" color="inherit">
              Disclosures
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
