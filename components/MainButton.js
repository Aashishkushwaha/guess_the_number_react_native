import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import COLORS from "../constants/colors";

const MainButton = ({ children, onPress, type }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View
        style={{
          ...styles.button,
          backgroundColor:
            type === "primary"
              ? COLORS.primary
              : type === "secondary"
              ? COLORS.secondary
              : "dodgerblue",
        }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
});

export default MainButton;
