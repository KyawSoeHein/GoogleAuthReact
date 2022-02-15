import React from "react";
import { Avatar, Button, Paper, Stack } from "@mui/material";
import "../App.css";
import profile from "../images/profile.jpg";

const CoverAndProfilePhoto = () => {
  return (
    <div>
      <Paper
        elevation={1}
        sx={{
          height: 200,
          borderTopRightRadius: 8,
          borderTopLeftRadius: 24,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 24,
          background:
            "linear-gradient(to right, rgb(235,241,237), rgb(241,241,244), rgb(247,240,248), rgb(235,241,237), rgb(238,228,232))",
        }}
      ></Paper>

      <div className="coverPhoto">
        <Avatar
          alt="Remy Sharp"
          src={profile}
          sx={{ width: 100, height: 100, marginTop: -4, marginLeft: 4 }}
        />
        <div style={{ marginLeft: 32, marginTop: -20 }}>
          <p className="profileTitle">Profile</p>
        </div>
      </div>
    </div>
  );
};

export default CoverAndProfilePhoto;
