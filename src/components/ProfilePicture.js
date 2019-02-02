import React from "react";
import { View, Image, StyleSheet } from "react-native";
import img from "../assets";
import configs from "../config";

let height = 70;
export default class ProfilePicture extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={img.profilePicture}
          style={[styles.profilePicture, this.props.style]}
          resizeMode={"center"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    alignSelf: "center"
  },
  profilePicture: {
    height: height,
    width: height,
    borderRadius: height / 2,
    alignSelf: "center"
  }
});
