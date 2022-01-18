import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AppText } from "../ui/AppText";

export const Todo = ({ todo, onRemove, onOpen }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onLongPress={onRemove.bind(null, todo.id)}
      onPress={() => {
        onOpen(todo.id);
      }}
    >
      <View style={styles.todo}>
        <AppText style={styles.title}>{todo.title}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {},
});
