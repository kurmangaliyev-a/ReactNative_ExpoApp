import React, { useState } from "react";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, FlatList } from "react-native";
import { Navbar } from "./src/components/navbar/Navbar";
import { MainsScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

async function loadApplication() {
  await Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
}

export default function App() {
  const [todoId, setTodoId] = useState(null);

  const [todos, setTodos] = useState([{ id: 1, title: "hello world" }]);

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
  const updateTodo = (newTodo) => {
    setTodos((old) =>
      old.map((todo) => {
        if (todo.id === newTodo.id) {
          todo = newTodo;
        }
        return todo;
      })
    );
  };
  const removeTodo = (id) => {
    const selectedTodo = todos.find((todo) => todo.id === id);

    Alert.alert(
      "Удаление элемента",
      `Вы уверены, что хотите удалить "${selectedTodo.title}"?`,
      [
        {
          text: "Отмена",
          style: "cancel",
        },
        {
          text: "Удалить",
          onPress: () => {
            setTodoId(null);
            setTodos(
              (prev) =>
                prev.filter((todo) => {
                  if (todo.id !== id) {
                    return todo;
                  }
                })
              //console.log(id);
            );
          },
        },
      ]
    );
    /*
    setTodos((prev) =>
      prev.filter((todo) => {
        if (todo.id !== id) {
          return todo;
        }
      })
    );*/
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
        onRemove={removeTodo}
        onSave={updateTodo}
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
