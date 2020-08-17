import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import DefaultStyles from "../constants/default-styles";
import COLORS from "../constants/colors";

const GameOverScreen = ({ numberOfRounds, userNumber, onRestartGame }) => {
  const [imageContainerWidth, setImageContainerWidth] = useState(
    Dimensions.get("window").width * 0.7
  );

  useEffect(() => {
    const updateLayout = () => {
      if (Dimensions.get("window").width < 500)
        setImageContainerWidth(Dimensions.get("window").width * 0.7);
      else setImageContainerWidth(Dimensions.get("window").width * 0.5);
    };

    Dimensions.addEventListener("change", updateLayout);

    return () => Dimensions.removeEventListener("change", updateLayout);
  });

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={DefaultStyles.title}>Game Over</Text>
        <View
          style={{
            ...styles.imageContainer,
            width: imageContainerWidth,
            height: imageContainerWidth,
          }}
        >
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
  },
  imageContainer: {
    maxWidth: "80%",
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 7) / 2,
    borderWidth: 2,
    borderColor: "#000000",
    overflow: "hidden",
    marginTop: Dimensions.get("window").height / 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultTextContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").width < 400 ? 16 : 20,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: COLORS.primary,
  },
});

export default GameOverScreen;
