import React from "react";
import { Container, Grid, Stack } from "@mui/material";

const Dashboard = () => {
  return (
    <Grid>
      <Container>
        <Stack direction={"row"} spacing={2}>
          <div>Name</div>
          <div>Kyaw Soe Hein</div>
        </Stack>

        <Stack direction={"row"} spacing={2}>
          <div>Email</div>
          <div>hein.kyawsoe87@gmail.com</div>
        </Stack>

        <Stack direction={"row"} spacing={2}>
          <div>Phone</div>
          <div>09798423585</div>
        </Stack>
      </Container>
    </Grid>
  );
};

export default Dashboard;
