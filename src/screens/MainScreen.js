import React from "react";
import { AddTodo } from "../components/addTodo/AddTodo";
import { Todo } from "../components/todo/Todo";
import { StyleSheet, View, FlatList, Image } from "react-native";

export const MainsScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  let content = (
    <FlatList
      style={styles.todoList}
      keyExtractor={(item) => item.id.toString()}
      data={todos}
      renderItem={({ item }) => (
        <Todo todo={item} onRemove={removeTodo} onOpen={openTodo}></Todo>
      )}
    ></FlatList>
  );
  if (!todos.length) {
    content = (
      <View style={styles.imgWrap}>
        <Image
          style={styles.image}
          //          source={require("../../assets/noitems.png")}
          source={{
            uri: "https://klike.net/uploads/posts/2021-01/1611131113_2.jpg",
          }}
        ></Image>
      </View>
    );
  }
  return (
    <View>
      <AddTodo onSubmit={addTodo}></AddTodo>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  imgWrap: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
