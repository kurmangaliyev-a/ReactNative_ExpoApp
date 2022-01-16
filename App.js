import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Navbar } from "./src/navbar/Navbar";
import { AddTodo } from "./src/addTodo/AddTodo";

export default function App() {
  return (
    <View>
      <Navbar title="Todo App!"></Navbar>
      <View style={styles.container}>
        <AddTodo></AddTodo>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
