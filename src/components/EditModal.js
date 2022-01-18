import React from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";
import { THEME } from "../theme";

export const EditModal = ({ visible, onCancel, todo }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          value={todo.title}
          placeholder="Введите название"
          maxLength={64}
        ></TextInput>
        <View style={styles.buttons}>
          <Button
            color={THEME.DANGER_COLOR}
            title="Отменить"
            onPress={onCancel}
          ></Button>
          <Button title="Сохранить"></Button>
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
