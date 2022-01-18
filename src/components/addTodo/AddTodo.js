import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { THEME } from "../../theme";

export const AddTodo = ({ onSubmit }) => {
  const [value, SetValue] = useState("");
  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      SetValue("");
    } else {
      //error
      Alert.alert("Ошибка", "Нельзя создать пустое задание", [
        {
          text: "отмена",
          onPress: () => console.log("Отмена"),
          style: "cancel",
        },
        { text: "окей", onPress: () => console.log("OK Pressed") },
        { text: "не окей1", onPress: () => console.log("не OK Pressed") },
        { text: "не окей2", onPress: () => console.log("не OK Pressed") },
      ]);
    }
  };
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={SetValue}
        value={value}
        placeholder="Введите название задачи"
        autoCapitalize="sentences"
      ></TextInput>
      <AntDesign.Button
        name="pluscircleo"
        size={24}
        color="white"
        onPress={pressHandler}
      >
        Добавить
      </AntDesign.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "60%",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: THEME.MAIN_COLOR,
    padding: 10,
  },
});
