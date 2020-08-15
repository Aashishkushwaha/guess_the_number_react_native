import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = ({ numberOfRounds, userNumber, onRestartGame }) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <Text>No. of Rounds took: {numberOfRounds}</Text>
      <Text>Number was : {userNumber}</Text>
      <Button title="New Game" onPress={onRestartGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
