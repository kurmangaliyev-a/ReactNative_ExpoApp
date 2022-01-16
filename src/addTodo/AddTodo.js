import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

export const AddTodo = (props) => {
  return (
    <View style={styles.block}>
      <TextInput style={styles.input}></TextInput>
      <Button title="Добавить"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "60%",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "red",
    padding: 10,
  },
});
