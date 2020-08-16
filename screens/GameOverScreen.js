import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import DefaultStyles from "../constants/default-styles";
import COLORS from "../constants/colors";

const GameOverScreen = ({ numberOfRounds, userNumber, onRestartGame }) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>Game Over</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          // local image : doesn't require height & width to specify
          source={require("../assets/success.png")}
          // network image : require height & width to specify
          // source={{
          //   uri:
          //     "https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
          // }}
          fadeDuration={1000}
          resizeMode={"cover"}
        />
      </View>
      <View style={styles.resultTextContainer}>
        <BodyText style={styles.resultText}>
          You took <Text style={styles.highlight}>{numberOfRounds}</Text>{" "}
          chances to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </BodyText>
      </View>
      <MainButton type="secondary" onPress={onRestartGame}>
        NEW GAME
      </MainButton>
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
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultTextContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: COLORS.primary,
  },
});

export default GameOverScreen;
