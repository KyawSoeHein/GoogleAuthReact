import {
  Container,
  Grid,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { increment } from "../redux/itemSlice";

const ShoppingList = () => {
  return (
    <Grid>
      <Container>
        <p>Hello</p>
      </Container>
    </Grid>
  );
};

export default ShoppingList;
