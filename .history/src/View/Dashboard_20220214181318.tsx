import React from "react";
import { Grid, Stack } from "@mui/material";

const Dashboard = () => {
  return (
    <Grid>
      <Stack direction={"row"} spacing={2}>
        <p>Name</p>
        <p>Kyaw Soe Hein</p>
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <p>Email</p>
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <p>Phone</p>
      </Stack>
    </Grid>
  );
};

export default Dashboard;
