import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import img from "../../assets";
import { Icon } from "../../components";
import Feather from "react-native-vector-icons/Feather";

export default class TitleBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name={"camera"} size={25} style={styles.cameraIcon} />
        <View style={styles.logoContainer}>
          <Image source={img.instaLogo} style={styles.logo} />
        </View>
        <Feather name={"tv"} size={20} style={styles.tvIcon} />
        <Icon name={"send"} size={25} style={styles.telegramIcon} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    alignSelf: "center",
    height: 40,
    marginVertical: 5,
    shadowOffset: { height: 0, width: 1 },
    shadowColor: "#666",
    shadowOpacity: 0.5,
    elevation: 1,
    paddingVertical: 10,
    width: "100%",
    backgroundColor: "#fff"
  },
  cameraIcon: {
    paddingHorizontal: 10
  },
  logo: {
    width: 100,
    height: 30
  },
  tvIcon: {
    paddingHorizontal: 10
  },
  telegramIcon: {
    paddingHorizontal: 10
  },
  logoContainer: {
    width: "70%"
  }
});
