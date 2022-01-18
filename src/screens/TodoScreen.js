import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { THEME } from "../theme";
import { AppCard } from "../components/ui/AppCard";
import { AppTextBold } from "../components/ui/appTextBold";
import { EditModal } from "../components/EditModal";

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
  const [modal, setModal] = useState(false);

  return (
    <View>
      <EditModal
        visible={modal}
        onCancel={() => {
          setModal(false);
        }}
        todo={todo}
        onSave={(todo) => {
          onSave(todo);
          setModal(false);
        }}
      ></EditModal>
      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}> {todo.title}</AppTextBold>
        <Button title="Редактировать" onPress={() => setModal(true)}></Button>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title="удалить"
            color={THEME.DANGER_COLOR}
            onPress={() => onRemove(todo.id)}
          ></Button>
        </View>
        <View style={styles.button}>
          <Button
            title="назад"
            color={THEME.GREY_COLOR}
            onPress={goBack}
          ></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
});
