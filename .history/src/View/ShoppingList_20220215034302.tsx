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
import StyledInputElement from "../Components/SarchBox";
import InputUnstyled from "@mui/base/InputUnstyled";

const ShoppingList = () => {
  const [newItem, setNewItem] = useState("");

  // const itemList = useAppSelector((state) => state.updateItem.items);
  // const dispatch = useAppDispatch();

  // function addNewItem() {
  //   dispatch(increment(newItem));
  //   setNewItem("");
  // }

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ marginTop: 4 }}
    >
      <InputUnstyled
        components={{ Input: StyledInputElement }}
        placeholder="Search"
        onChange={(value) => setNewItem(value.target.value)}
      />

      {itemList.map((item) => (
        <ListItem>
          <ListItemText primary={item} />
        </ListItem>
      ))}

      {/* <TouchableRipple
          style={styles.addButton}
          onPress={() => {
            if (newItem.length > 0) addNewItem();
          }}
        >
          <Text style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>
            ADD
          </Text>
        </TouchableRipple> */}
    </Grid>
  );
};

export default ShoppingList;
