import React from "react";
import { Button, Paper, Stack } from "@mui/material";
import "../App.css";

const CoverAndProfilePhoto = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        backgroundColor: "grey",
        height: 150,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 24,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 24,
      }}
    >
      <p>Hello</p>
    </Paper>
  );
};

export default CoverAndProfilePhoto;
