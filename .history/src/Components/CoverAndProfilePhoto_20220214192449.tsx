import React from "react";
import { Button, Paper, Stack } from "@mui/material";
import "../App.css";

const CoverAndProfilePhoto = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        height: 150,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 24,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 24,
        background: "linear-gradient(to right, rgb(240,299,234), #82ffa1)",
      }}
    ></Paper>
  );
};

export default CoverAndProfilePhoto;
