import React from "react";
import { View, Image, StyleSheet, Button, Text } from "react-native";
import BodyText from "../components/BodyText";
import DefaultStyles from "../constants/default-styles";

const GameOverScreen = ({ numberOfRounds, userNumber, onRestartGame }) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>Game Over</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          // local image : doesn't require height & width to specify
          // source={require("../assets/success.png")}
          // network image : require height & width to specify
          source={{
            uri:
              "https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
          }}
          fadeDuration={1000}
          resizeMode={"cover"}
        />
      </View>
      <BodyText>No. of Rounds took: {numberOfRounds}</BodyText>
      <BodyText>Number was : {userNumber}</BodyText>
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
  imageContainer: {
    maxWidth: "80%",
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: "#000000",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
