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

      <Stack direction={"row"}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 120, height: 120, marginTop: -4, marginLeft: 4 }}
        />
        <div>
          <p className="profileTitle">Profile</p>
        </div>
      </Stack>
    </div>
  );
};

export default CoverAndProfilePhoto;
