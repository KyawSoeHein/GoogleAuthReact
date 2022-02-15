import React from "react";
import { Button, Stack, TextField } from "@mui/material";
import "../App.css";

const UserInfo = () => {
  const buttonFontSize = 15;

  return (
    <Stack direction={"row"} spacing={2}>
      <TextField
        disabled
        id="standard-disabled"
        label="Name"
        defaultValue="Hello World"
        variant="standard"
      />
    </Stack>
  );
};

export default UserInfo;
