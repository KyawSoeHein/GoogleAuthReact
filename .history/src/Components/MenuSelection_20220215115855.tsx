import React from "react";
import { Button, Stack } from "@mui/material";
import "../App.css";
import { Link } from "react-router-dom";

const MenuSelection = () => {
  const buttonFontSize = 15;

  return (
    <Stack direction={"row"} spacing={2}>
      <nav>
        <Link to="/">
          <Button
            sx={{
              fontSize: buttonFontSize,
              fontFamily: "sans-serif",
              color: "green",
            }}
            onClick={() => {}}
          >
            Dashboard
          </Button>
        </Link>
        <Button
          sx={{
            fontSize: buttonFontSize,
            fontFamily: "sans-serif",
            color: "green",
          }}
          onClick={() => {}}
        >
          Shopping List
        </Button>
      </nav>
    </Stack>
  );
};

export default MenuSelection;
