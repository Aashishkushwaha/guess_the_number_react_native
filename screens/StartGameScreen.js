import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "../components/Card";
import COLORS from "../constants/colors";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.title}>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" color={COLORS.secondary} onPress={() => {}} />
          </View>
          <View style={styles.button} onPress={() => {}}>
            <Button title="Confirm" color={COLORS.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
  },
  button: {
    width: "40%",
    borderRadius: 10,
  },
});

export default StartGameScreen;
