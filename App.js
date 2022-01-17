import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Navbar } from "./src/components/navbar/Navbar";
import { MainsScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

export default function App() {
  const [todoId, setTodoId] = useState(null);

  const [todos, setTodos] = useState([
    { id: 1, title: "hello world" },
    { id: 2, title: "hello world" },
    { id: 15, title: "hello " },
    { id: 16, title: " world" },
    { id: 17, title: "hello hello" },
    { id: 18, title: " whelloorld" },
  ]);

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

  const removeTodo = (id) => {
    //console.log(id);
    setTodos((prev) =>
      prev.filter((todo) => {
        if (todo.id !== id) {
          return todo;
        }
      })
    );
  };

  let content = (
    <MainsScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    ></MainsScreen>
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    content = (
      <TodoScreen
        todo={selectedTodo}
        goBack={() => setTodoId(null)}
      ></TodoScreen>
    );
  }
  return (
    <View>
      <Navbar title="Todo App!"></Navbar>
      <View style={styles.container}>{content}</View>
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
