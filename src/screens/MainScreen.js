import React from "react";
import { AddTodo } from "../components/addTodo/AddTodo";
import { Todo } from "../components/todo/Todo";
import { StyleSheet, View, FlatList } from "react-native";

export const MainsScreen = ({ addTodo, todos, removeTodo }) => {
  return (
    <View>
      <AddTodo onSubmit={addTodo}></AddTodo>
      <FlatList
        style={styles.todoList}
        keyExtractor={(item) => item.id.toString()}
        data={todos}
        renderItem={({ item }) => (
          <Todo todo={item} onRemove={removeTodo}></Todo>
        )}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({});
