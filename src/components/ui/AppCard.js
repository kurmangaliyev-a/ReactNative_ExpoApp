import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const AppCard = (props) => (
  <View style={{ ...styles.default, ...props.style }}>{props.children}</View>
);

const styles = StyleSheet.create({
  default: {
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    elevation: 8,
  },
});
