import React from "react";
import { View, StyleSheet } from "react-native";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    // shadow works only on ios
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.26,
    shadowRadius: 2,
    backgroundColor: "#fff",
    // works only on android
    elevation: 2.6,
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
