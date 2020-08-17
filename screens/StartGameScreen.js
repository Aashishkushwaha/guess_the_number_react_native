import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Button,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import COLORS from "../constants/colors";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import DefaultStyles from "../constants/default-styles";
import MainButton from "../components/MainButton";

const StartGameScreen = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 3.5
  );

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 3.5);
    };

    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 && 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    setConfirmed(true);
    setEnteredValue("");
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton type="primary" onPress={() => onStartGame(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.screen}>
            <Text style={{ ...styles.gameTitle, ...DefaultStyles.title }}>
              Start a New Game!
            </Text>
            <Card style={styles.inputContainer}>
              <BodyText>Select a Number</BodyText>
              <Input
                style={styles.input}
                placeholder="Number"
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={2}
                value={enteredValue}
                onChangeText={numberInputHandler}
              />
              <View style={styles.buttonContainer}>
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="RESET"
                    color={COLORS.primary}
                    onPress={resetInputHandler}
                  />
                </View>
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="CONFIRM"
                    color={"dodgerblue"}
                    onPress={confirmInputHandler}
                  />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  gameTitle: {
    marginBottom: 10,
  },
  inputContainer: {
    minWidth: 300,
    width: "80%",
    maxWidth: "95%",
    alignItems: "center",
  },
  input: {
    width: 80,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 10,
  },
  // button: {
  //   // width: 100,
  //   width: Dimensions.get("window").width / 3.5,
  // },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGameScreen;
