import React from "react";
import { View, Image, StyleSheet } from "react-native";
import img from "../assets";
import configs from "../config";

let height = 70;
export default function ProfilePicture(x) {
  height = x ? x : height;
  return (
    <View style={styles.container}>
      <Image
        source={img.profilePicture}
        style={styles.profilePicture}
        resizeMode="center"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: height,
    borderRadius: height / 2,
    borderColor: configs.Primary_Color,
    borderWidth: 0.3,
    marginHorizontal: 10,
    marginVertical: 10,
    alignSelf: "center"
  },
  profilePicture: {
    flex: 1,
    height: height - 4,
    width: height - 4,
    borderRadius: (height - 4) / 2,
    alignSelf: "center"
  }
});
