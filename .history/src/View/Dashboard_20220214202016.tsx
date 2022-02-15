import React from "react";
import { Container, Grid, Stack } from "@mui/material";
import MenuSelection from "../Components/MenuSelection";
import UserInfo from "../Components/UserInfo";
import CoverAndProfilePhoto from "../Components/CoverAndProfilePhoto";

const Dashboard = () => {
  return (
    <Grid>
      <Container>
        <div style={{ marginTop: 16 }}>
          <MenuSelection />
        </div>

        <div style={{ marginTop: 16 }}>
          <CoverAndProfilePhoto />
        </div>

        <div style={{ marginTop: 32 }}>
          <UserInfo />
        </div>
      </Container>
    </Grid>
  );
};

export default Dashboard;
