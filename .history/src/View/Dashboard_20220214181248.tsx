import React from "react";
import { Grid, Stack } from "@mui/material";

const Dashboard = () => {
  return (
    <Grid>
      <Stack direction={"row"} spacing={2}>
        <p>Name</p>
      </Stack>

      <p>Email</p>
      <p>Number</p>
    </Grid>
  );
};

export default Dashboard;
