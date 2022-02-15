import React from "react";
import { Button, Stack } from "@mui/material";
import "../App.css";

const UserInfo = () => {
  const buttonFontSize = 15;

  return (
    <Stack direction={"row"} spacing={2}>
      <Button sx={{ fontSize: buttonFontSize, fontFamily: "sans-serif" }}>
        Dashboard
      </Button>
      <Button sx={{ fontSize: buttonFontSize, fontFamily: "sans-serif" }}>
        Shopping List
      </Button>
    </Stack>
  );
};

export default UserInfo;
