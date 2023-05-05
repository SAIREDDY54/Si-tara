import React from "react";
import BoschLogo from "./img/bosch.png";
import svgLogo from "./img/hero.png";
import { Stack, Typography, Grid } from "@mui/material";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import MainStepper from "./MainStepper copy";
import Header from './Pages/Header';
import Footer from './Pages/Footer';

const Main = () => {
  return (
    <Grid container spacing={1} style={{ width: "100%" }}>
      <Grid item xs={2}></Grid>
      <Grid
        item
        xs={8}
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            {/* <img src={BoschLogo} alt="bosch-logo" height="50"></img>
            <span style={{ flex: 1 }}></span>
            <Stack direction="row" alignItems="center">
              <ForumOutlinedIcon fontSize="" />
              <Typography style={{ fontSize: 14, paddingLeft: 6 }}>
                Contact us
              </Typography>
            </Stack> */}
            <Header />
          </Stack>
          <img
            src={svgLogo}
            alt="team"
            height="200"
            style={{ margin: "20px" }}
          />
          <Stack>
            <MainStepper />
            <Footer />
          </Stack>
        </div>
        {/* <span style={{ flex: "1 auto" }}></span>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          style={{ backgroundColor: "#e2e2e2", padding: 16 }}
        >
          <Stack direction="column" alignItems="flex-start">
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Get in touch with Loreum
            </Typography>
            <Typography style={{ fontSize: 14 }}>
              We look forward to inquiry
            </Typography>
          </Stack>
          <Stack direction="column" alignItems="flex-start">
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Send us a message
            </Typography>
            <Typography style={{ fontSize: 14 }}>
              To contact form {">"}
            </Typography>
          </Stack>
        </Stack>
        {/* <Paper
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60px",
            backgroundColor: "#1976d2",
          }}
        ></Paper> } */}

      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default Main;