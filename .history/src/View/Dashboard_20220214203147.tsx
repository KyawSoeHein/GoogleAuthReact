import React from "react";
import { Container, Grid, Stack } from "@mui/material";
import MenuSelection from "../Components/MenuSelection";
import UserInfo from "../Components/UserInfo";
import CoverAndProfilePhoto from "../Components/CoverAndProfilePhoto";
import { flexbox } from "@mui/system";

const Dashboard = () => {
  const dividerSpace = 16;

  return (
    <Grid>
      <Container>
        <div
          style={{
            marginTop: dividerSpace,
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
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