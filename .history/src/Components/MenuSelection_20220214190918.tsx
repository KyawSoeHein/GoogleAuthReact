import React from "react";
import { Button, Stack } from "@mui/material";
import "../App.css";

const MenuSelection = () => {
  return (
    <Stack direction={"row"} spacing={2}>
      <Button sx={{ fontSize: 16 }}>Dashboard</Button>
      <Button sx={{ fontSize: 16 }}>Shopping List</Button>
    </Stack>
  );
};

export default MenuSelection;
