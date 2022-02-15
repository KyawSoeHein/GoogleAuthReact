import {
  Button,
  Container,
  Grid,
  ListItem,
  ListItemText,
  styled,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { increment } from "../redux/itemSlice";
import StyledInputElement from "../Components/SarchBox";
import InputUnstyled from "@mui/base/InputUnstyled";
import { green } from "@mui/material/colors";

const AddButton = styled(Button)({
  backgroundColor: green[500],
});

const ShoppingList = () => {
  const [newItem, setNewItem] = useState("");

  const itemList = useAppSelector((state) => state.updateItem.items);
  const dispatch = useAppDispatch();

  function addNewItem() {
    dispatch(increment(newItem));
    setNewItem("");
  }

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ marginTop: 4 }}
    >
      <InputUnstyled
        value={newItem}
        components={{ Input: StyledInputElement }}
        placeholder="Search"
        onChange={(value) => setNewItem(value.target.value)}
      />

      {itemList.map((item) => (
        <ListItem>
          <ListItemText primary={item} />
        </ListItem>
      ))}

      <Button
        variant="contained"
        onClick={() => {
          if (newItem.length > 0) addNewItem();
        }}
      >
        ADD
      </Button>
    </Grid>
  );
};

export default ShoppingList;
