import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import COLORS from "../constants/colors";

const MainButton = ({ children, onPress, type }) => {
  let ButtonComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.6} onPress={onPress}>
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
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden",
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
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
