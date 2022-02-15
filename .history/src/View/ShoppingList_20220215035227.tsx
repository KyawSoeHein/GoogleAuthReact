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
  borderRadius: 16,
  paddingLeft: 8,
  paddingRight: 8,
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

      <AddButton
        variant="contained"
        onClick={() => {
          if (newItem.length > 0) addNewItem();
        }}
      >
        ADD
      </AddButton>
    </Grid>
  );
};

export default ShoppingList;
