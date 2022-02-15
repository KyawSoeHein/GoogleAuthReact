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
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ marginTop: 8 }}
    >
      <TextField
        id="filled-search"
        label="Search field"
        type="search"
        variant="filled"
        onChange={(event) => setNewItem(event.target.innerText)}
      />

      <div style={{ alignItems: "center", marginTop: 32 }}>
        {/* {itemList.map((item) => (
          <ListItem>
            <ListItemText primary={item} />
          </ListItem>
        ))} */}

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
      </div>
    </Grid>
  );
};

export default ShoppingList;
