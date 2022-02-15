import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { increment } from "../redux/itemSlice";

const ShoppingList = () => {
  const [newItem, setNewItem] = useState("");

  const itemList = useAppSelector((state) => state.updateItem.items);
  const dispatch = useAppDispatch();

  function addNewItem() {
    dispatch(increment(newItem));
    setNewItem("");
  }

  return (
    <div>
      <TextInput
        placeholder="Add New Item"
        style={styles.outline}
        value={newItem}
        onChange={(event) => setNewItem(event.nativeEvent.text)}
      ></TextInput>

      <TextField
        id="filled-search"
        label="Search field"
        type="search"
        variant="filled"
        onChange={(event) => setNewItem(event.nativeEvent.text)}
      />

      <View style={{ alignItems: "center", marginTop: 32 }}>
        <FlatList
          scrollEnabled={false}
          data={itemList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return <Text style={styles.itemText}>{item}</Text>;
          }}
        />
        <TouchableRipple
          style={styles.addButton}
          onPress={() => {
            if (newItem.length > 0) addNewItem();
          }}
        >
          <Text style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>
            ADD
          </Text>
        </TouchableRipple>
      </View>
    </div>
  );
};

const styles = StyleSheet.create({
  outline: {
    width: "80%",
    marginTop: 8,
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderColor: "rgb(16,120,92)",
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 32,
    textAlign: "center",
    alignSelf: "center",
  },

  itemText: {
    fontSize: 16,
    marginTop: 8,
    textAlign: "center",
  },

  addButton: {
    backgroundColor: "rgb(16,120,92)",
    paddingHorizontal: 32,
    paddingVertical: 12,
    marginTop: 48,
    borderRadius: 32,
  },
});

export default ShoppingList;
