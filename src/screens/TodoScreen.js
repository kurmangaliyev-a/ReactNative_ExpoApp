import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { THEME } from "../theme";
import { AppCard } from "../components/ui/AppCard";

export const TodoScreen = ({ goBack, todo, onRemove }) => {
  return (
    <View>
      <AppCard style={styles.card}>
        <Text style={styles.title}> {todo.title}</Text>
        <Button title="Редактировать"></Button>
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
