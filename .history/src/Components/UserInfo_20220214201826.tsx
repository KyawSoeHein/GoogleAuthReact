import React from "react";
import { Button, Stack, TextField } from "@mui/material";
import "../App.css";

const UserInfo = () => {
  const buttonFontSize = 15;

  return (
    <Stack spacing={2}>
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
        label="Name"
        defaultValue="Kyaw Soe Hein"
        variant="standard"
      />

      <TextField
        disabled
        id="standard-disabled"
        label="Name"
        defaultValue="Kyaw Soe Hein"
        variant="standard"
      />
    </Stack>
  );
};

export default UserInfo;
