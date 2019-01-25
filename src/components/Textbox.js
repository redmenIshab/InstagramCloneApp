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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: configs.Button_Height,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#666",
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
    fontWeight: "300"
  }
});
