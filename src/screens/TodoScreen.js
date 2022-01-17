import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export const TodoScreen = ({ goBack, todo }) => {
  return (
    <View>
      <Text style={styles.title}> {todo.title}</Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="удалить" color="#e53935" onPress={goBack}></Button>
        </View>
        <View style={styles.button}>
          <Button title="назад" color="#757575" onPress={goBack}></Button>
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
