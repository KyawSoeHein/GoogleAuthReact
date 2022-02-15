import React from "react";
import { Button, Stack } from "@mui/material";
import "../App.css";

const MenuSelection = () => {
  const buttonFontSize = 15;

  return (
    <Stack direction={"row"} spacing={2} sx={{ marginTop: 16 }}>
      <Button sx={{ fontSize: buttonFontSize, fontFamily: "sans-serif" }}>
        Dashboard
      </Button>
      <Button sx={{ fontSize: buttonFontSize, fontFamily: "sans-serif" }}>
        Shopping List
      </Button>
    </Stack>
  );
};

export default MenuSelection;
