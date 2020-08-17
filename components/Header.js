import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import COLORS from "../constants/colors";

const Header = ({ title }) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerAndroid: {
    backgroundColor: COLORS.primary,
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerTitle: {
    color: Platform.OS === "ios" ? COLORS.primary : "white",
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});

export default Header;
