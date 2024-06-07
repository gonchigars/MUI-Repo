import React from "react";
import { Box, Typography, Grid, Paper, Rating,Link } from "@mui/material";

const MainContent = () => {
  return (
    <Box p={4}>
      <Typography variant="h6" gutterBottom><br></br>
     <b>  CRX </b>is a dynamic company renowned for its innovative solutions and strong partnerships with industry leaders like <b>IBM, Bosch, and Tata,</b> driving advancements across various sectors through collaboration and cutting-edge technology.
     <br>
     </br>
     <br>
     </br>
     <b>  CRX </b>boasts a diverse portfolio of companies that exemplify innovation and industry leadership. Our portfolio includes collaborations with renowned enterprises, leveraging their expertise to create groundbreaking solutions. Here’s a brief overview of our key portfolio companies:
      </Typography>

     
      <Typography variant="h6" color="textSecondary" gutterBottom>
        <b><i>Portfolio Companies</i></b>      </Typography>
        
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "16px", textAlign: "center" }}>
            <Typography variant="h5"> </Typography>
            <Link href="https://www.ibm.com/in-en" color="inherit">
              <h1>IBM</h1> <br></br>

            </Link>
                       
            <Rating name="read-only" value={4} readOnly />
           

          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "16px", textAlign: "center" }}>
            <Typography variant="h5"></Typography>
            <Link href="https://www.bosch.in/" color="inherit">
              <h1>Bosch</h1> <br></br>

            </Link>
            <Rating name="read-only" value={4} readOnly />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "16px", textAlign: "center" }}>
            <Typography variant="h5"></Typography>
            <Link href="https://www.tata.com/" color="inherit">
              <h1>Tata</h1> <br></br>

            </Link>
            <Rating name="read-only" value={5} readOnly />
          </Paper>
        </Grid>
        <Typography variant="h6" gutterBottom><br></br>
     <b>  CRX </b> is proud to feature a selection of leading companies in our portfolio, showcasing our strategic partnerships with industry giants like <b>Amazon, Intel, Hyundai, and Samsung</b>. These collaborations highlight our commitment to innovation and excellence across various sectors.
      </Typography>
      </Grid>
    </Box>
  );
};

export default MainContent;
