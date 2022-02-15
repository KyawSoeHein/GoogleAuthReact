import React from "react";
import { Button, Stack, TextField } from "@mui/material";
import "../App.css";

const UserInfo = () => {
  const buttonFontSize = 15;

  return (
    <Stack spacing={6}>
      <TextField
        disabled
        id="standard-disabled"
        label="Name"
        defaultValue="Kyaw Soe Hein"
        variant="standard"
      />

      <TextField
        disabled
        id="standard-disabled"
        label="Email"
        defaultValue="hein.kyawsoe87@gmail.com"
        variant="standard"
      />

      <TextField
        disabled
        id="standard-disabled"
        label="Phone"
        defaultValue="Kyaw Soe Hein"
        variant="standard"
      />
    </Stack>
  );
};

export default UserInfo;
