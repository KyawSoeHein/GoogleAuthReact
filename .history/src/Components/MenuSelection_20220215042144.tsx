import React from "react";
import { Button, Stack } from "@mui/material";
import "../App.css";

const MenuSelection = () => {
  const buttonFontSize = 15;

  return (
    <Stack direction={"row"} spacing={2}>
      <nav></nav>
      <Button
        sx={{
          fontSize: buttonFontSize,
          fontFamily: "sans-serif",
          color: "green",
        }}
        onClick={() => {}}
      >
        Dashboard
      </Button>
      <Button
        sx={{
          fontSize: buttonFontSize,
          fontFamily: "sans-serif",
          color: "green",
        }}
        onClick={() => {}}
      >
        Shopping List
      </Button>
    </Stack>
  );
};

export default MenuSelection;
