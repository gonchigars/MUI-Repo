import React from "react";
import { Box, Container, Typography, Link, Grid } from "@mui/material";


function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "aliceblue",
        color: "black",
        width: 1200,
        height: 140,   
        marginTop: "auto",
      }}
    >
     <Container maxWidth="lg">
      
        <Grid container spacing={34}>
          <Grid item xs={4}>
            <Typography variant="h6">Contact</Typography>
            <Typography variant="body2">Careers</Typography>
            <Link href="https://www.linkedin.com/in/charan-m-032381211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" color="inherit">
              LinkedIn <br></br>

            </Link>
            
            <Link href="https://www.youtube.com/channel/UCc-TU93NofwBMiAXJ-HdXrg" color="inherit">
              YouTube<br></br>
            </Link>
            <Link href="https://www.instagram.com/_c_h_a_r_a_n_20?igsh=ZWJya2lwZTNjMQ==" color="inherit">
              Instagram<br></br>
            </Link>
            
          </Grid>
          <Grid item xs={4}>
            <Typography variant="inherit">CRX's Weekly Newsletter</Typography>
            <Link href="#" color="inherit">
              Sign Up
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2">&copy; 2024 CRX</Typography>
            <Link href="#" color="inherit">
              Investor Login <br></br>
            </Link>
            <Link href="#" color="inherit">
              Sitemap<br></br>
            </Link>
            <Link href="#" color="inherit">
              Terms of Use<br></br>
            </Link>
            <Link href="#" color="inherit">
              Privacy Policy<br></br>
            </Link>
            <Link href="#" color="inherit">
              Disclosures<br></br>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
