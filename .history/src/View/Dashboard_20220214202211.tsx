import React from "react";
import { Container, Grid, Stack } from "@mui/material";
import MenuSelection from "../Components/MenuSelection";
import UserInfo from "../Components/UserInfo";
import CoverAndProfilePhoto from "../Components/CoverAndProfilePhoto";

const Dashboard = () => {
  const dividerSpace = 16;

  return (
    <Grid>
      <Container>
        <div style={{ marginTop: dividerSpace, alignItems: "flex-end" }}>
          <MenuSelection />
        </div>

        <div style={{ marginTop: 2 * dividerSpace }}>
          <CoverAndProfilePhoto />
        </div>

        <div style={{ marginTop: 2 * dividerSpace }}>
          <UserInfo />
        </div>
      </Container>
    </Grid>
  );
};

export default Dashboard;
