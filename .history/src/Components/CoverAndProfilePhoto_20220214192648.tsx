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
        background:
          "linear-gradient(to right, red 20%, orange 20% 40%, yellow 40% 60%, green 60% 80%, blue 80%)",
      }}
    ></Paper>
  );
};

export default CoverAndProfilePhoto;
