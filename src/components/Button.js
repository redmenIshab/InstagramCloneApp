import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import configs from "../config";

export default function Button({ title, buttonStyle, ...props }) {
  return (
    <TouchableOpacity style={[styles.container, buttonStyle]} {...props}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: configs.Button_Height,
    width: configs.Button_Width,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: configs.Primary_Color,
    borderRadius: 5,
    marginVertical: 5
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14
  }
});
