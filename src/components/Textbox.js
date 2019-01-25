import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import configs from "../config";

export default function Textbox({ textStyle, ...props }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.text, textStyle]}
        {...props}
        allowFontScaling={false}
        underlineColorAndroid="transparent"
        placeholderTextColor="#666"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: configs.Button_Height,
    paddingVertical: 0,
    borderWidth: 1,
    borderColor: "#ccc",
    width: configs.Button_Width,
    borderRadius: 5,
    marginVertical: 5,
    alignSelf: "center",
    justifyContent: "center"
  },
  text: {
    paddingHorizontal: 10,
    color: "#333",
    fontSize: 14,
    fontWeight: "300",
    paddingVertical: 10
  }
});
