import React from "react";
import { THEME } from "../../theme";
import { View, Text, StyleSheet } from "react-native";
import { AppTextBold } from "../ui/appTextBold";

export const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <AppTextBold style={styles.text}>{title}</AppTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#3949ab",
    paddingBottom: 10,
  },
  text: {
    color: THEME.DANGER_COLOR,
    fontSize: 20,
  },
});
