import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Navbar } from "./src/navbar/Navbar";
import { AddTodo } from "./src/addTodo/AddTodo";
import { Todo } from "./src/todo/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    //const newTodo = {
    //  id: Date.now().toString(),
    //  title: title,
    //};
    //setTodos(todos.concat([newTodo]))
    //setTodos((prevTodos) => {
    //  return [...prevTodos, newTodo];
    //});
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  return (
    <View>
      <Navbar title="Todo App!"></Navbar>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}></AddTodo>
        <FlatList
          style={styles.todoList}
          keyExtractor={(item) => item.id.toString()}
          data={todos}
          renderItem={({ item }) => <Todo todo={item}></Todo>}
        ></FlatList>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 20,
  },
  todoList: {
    backgroundColor: "#efe",
  },
});
