import React from "react";
import { Grid, Stack } from "@mui/material";

const Dashboard = () => {
  return (
    <Grid>
      <Stack direction={"column"}>
        <p>Name</p>
        <p>Kyaw Soe Hein</p>
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <p>Email</p>
        <p>hein.kyawsoe87@gmail.com</p>
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <p>Phone</p>
        <p>09798423585</p>
      </Stack>
    </Grid>
  );
};

export default Dashboard;
