import React from "react";
import { Container, Grid, Paper, Stack } from "@mui/material";
import "../App.css";

const MenuSelection = () => {
  return (
    <Paper style={{ padding: 8 }}>
      <p className="menuSelectionTitle">Menu</p>

      <p>Dashboard</p>
      <p>Shopping List</p>
    </Paper>
  );
};

export default MenuSelection;
