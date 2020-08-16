import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";
import Card from "../components/Card";
import BodyText from "../components/BodyText";
import COLORS from "../constants/colors";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) generateRandomBetween(min, max, exclude);
  else return randomNumber;
};

const renderListItem = (value, roundNumber) => (
  <View key={value} style={styles.listItem}>
    <BodyText>#{roundNumber}</BodyText>
    <Text>{value}</Text>
  </View>
);

const renderFlatListItem = (listLength, itemData) => (
  <View style={styles.listItem}>
    <BodyText>#{listLength - itemData.index}</BodyText>
    <Text>{itemData.item}</Text>
  </View>
);

const GameScreen = ({ userChoise, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userChoise);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoise) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoise, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoise) ||
      (direction === "greater" && currentGuess > userChoise)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong...", [
        { title: "cancel", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    let nextGuess = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    while (isNaN(nextGuess))
      nextGuess = generateRandomBetween(
        currentLow.current,
        currentHigh.current,
        currentGuess
      );
    setCurrentGuess(nextGuess);
    setPastGuesses((pastGuesses) => [nextGuess.toString(), ...pastGuesses]);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonsContainer}>
        <MainButton type="primary" onPress={() => nextGuessHandler("lower")}>
          <Ionicons name="md-remove" size={24} color="#ffffff" />
        </MainButton>
        <MainButton type="primary" onPress={() => nextGuessHandler("greater")}>
          <Ionicons name="md-add" size={24} color="#ffffff" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) => {
            return renderListItem(guess, pastGuesses.length - index);
          })}
        </ScrollView> */}
        <FlatList
          keyExtractor={(item) => item}
          data={pastGuesses}
          renderItem={renderFlatListItem.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    marginBottom: 5,
    width: 350,
    maxWidth: "90%",
  },
  listContainer: {
    flex: 1,
    width: "90%",
  },
  list: {
    flexGrow: 1,
    // alignItems: "center",
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 4,
    backgroundColor: "#fff",
    elevation: 4,
    borderRadius: 5,
    color: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});

export default GameScreen;
