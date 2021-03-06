import React from "react";
import { Text, StyleSheet } from "react-native";

const BodyText = ({ children, style }) => {
  return <Text style={{ ...styles.body, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans",
    fontSize: 16,
    marginVertical: 5,
  },
});

export default BodyText;
