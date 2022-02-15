import { Grid, ListItem, ListItemText, TextField } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { increment } from "../redux/itemSlice";

const ShoppingList = () => {
  // const [newItem, setNewItem] = useState("");

  // const itemList = useAppSelector((state) => state.updateItem.items);
  // const dispatch = useAppDispatch();

  // function addNewItem() {
  //   dispatch(increment(newItem));
  //   setNewItem("");
  // }

  return (
    <div>
      {/* <TextField
        id="filled-search"
        label="Search field"
        type="search"
        variant="filled"
        onChange={(event) => setNewItem(event.target.innerText)}
      /> */}

      {/* <div style={{ alignItems: "center", marginTop: 32 }}>
        {itemList.map((item) => (
          <ListItem>
            <ListItemText primary={item} />
          </ListItem>
        ))}

     
      </div> */}
      <p>Hello</p>
    </div>
  );
};

export default ShoppingList;
