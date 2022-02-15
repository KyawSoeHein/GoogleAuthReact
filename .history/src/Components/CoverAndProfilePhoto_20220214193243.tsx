import React from "react";
import { Avatar, Button, Paper, Stack } from "@mui/material";
import "../App.css";

const CoverAndProfilePhoto = () => {
  return (
    <div>
      <Paper
        elevation={1}
        sx={{
          height: 150,
          borderTopRightRadius: 8,
          borderTopLeftRadius: 24,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 24,
          background:
            "linear-gradient(to right, rgb(235,241,237), rgb(241,241,244), rgb(247,240,248), rgb(235,241,237), rgb(238,228,232))",
        }}
      ></Paper>

      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
    </div>
  );
};

export default CoverAndProfilePhoto;
