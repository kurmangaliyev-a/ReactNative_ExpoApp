import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { THEME } from "../theme";

export const TodoScreen = ({ goBack, todo }) => {
  return (
    <View>
      <Text style={styles.title}> {todo.title}</Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title="удалить"
            color={THEME.DANGER_COLOR}
            onPress={goBack}
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
    marginBottom: 12,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
  },
});
