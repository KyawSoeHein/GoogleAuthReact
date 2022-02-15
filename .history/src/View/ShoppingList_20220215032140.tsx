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
  const [newItem, setNewItem] = useState("");

  // const itemList = useAppSelector((state) => state.updateItem.items);
  // const dispatch = useAppDispatch();

  // function addNewItem() {
  //   dispatch(increment(newItem));
  //   setNewItem("");
  // }

  return (
    // <Grid>
    <Container>
      <p>Hello</p>
    </Container>
    // </Grid>
  );
};

export default ShoppingList;
