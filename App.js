import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(0);
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(0);
  };

  const startGameHandler = (selectedNumber) => {
    console.log("start game", selectedNumber);
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0)
    content = (
      <GameScreen userChoise={userNumber} onGameOver={gameOverHandler} />
    );
  else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        numberOfRounds={guessRounds}
        userNumber={userNumber}
        onRestartGame={configureNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess The Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
