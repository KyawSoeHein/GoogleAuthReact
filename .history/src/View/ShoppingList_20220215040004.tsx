import {
  Button,
  Container,
  Grid,
  List,
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
  borderRadius: 32,
  paddingLeft: 32,
  paddingRight: 32,
  paddingTop: 12,
  paddingBottom: 12,
  fontWeight: "bold",
  "&:focus": {
    backgroundColor: "rgb(70,164,77)",
  },
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
      sx={{ marginTop: 4, flexDirection: "row" }}
    >
      <Container>
        <InputUnstyled
          value={newItem}
          components={{ Input: StyledInputElement }}
          placeholder="Search"
          onChange={(value) => setNewItem(value.target.value)}
        />
        <List
          dense
          style={{
            marginTop: 16,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {itemList.map((item) => (
            <ListItem>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>

        <AddButton
          variant="contained"
          onClick={() => {
            if (newItem.length > 0) addNewItem();
          }}
        >
          ADD
        </AddButton>
      </Container>
    </Grid>
  );
};

export default ShoppingList;
