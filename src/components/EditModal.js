import React, { useState } from "react";
import { View, StyleSheet, TextInput, Modal, Alert } from "react-native";

import { THEME } from "../theme";
import { AppButton } from "./ui/AppButton";

export const EditModal = ({ visible, onCancel, todo, onSave }) => {
  const [title, setTitle] = useState(todo.title);
  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        "Ошибка",
        `Минимальная длина названия 3 значимых символа. Сейчас символов: ${
          title.trim().length
        }`
      );
    } else {
      todo.title = title;
      onSave(todo);
    }
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Введите название"
          maxLength={64}
        ></TextInput>
        <View style={styles.buttons}>
          <AppButton color={THEME.DANGER_COLOR} onPress={onCancel}>
            Отменить
          </AppButton>
          <AppButton onPress={saveHandler}>Сохранить</AppButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  input: {
    padding: 10,
    borderBottomWidth: 2,
    borderColor: THEME.MAIN_COLOR,
    width: "80%",
  },
  buttons: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
