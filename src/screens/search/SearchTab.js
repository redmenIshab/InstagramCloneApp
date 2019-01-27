import React, { Component } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { Icon, Textbox } from "../../components";
import Configs from "../../config";
export default class SearchTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon
          name={"search"}
          size={25}
          color={"#222"}
          style={styles.searchIcon}
        />
        <TextInput placeholder={"Search"} style={styles.searchInputBox} />
        <Icon name={"camera"} size={25} color={"#222"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    height: 40,
    marginVertical: 5,
    shadowOffset: { height: 0, width: 3 },
    shadowColor: "#666",
    shadowOpacity: 0.5,
    elevation: 1,
    paddingVertical: 10,
    width: "100%",
    backgroundColor: "#fff"
  },
  searchIcon: {
    paddingHorizontal: 10
  },
  searchInputBox: {
    paddingHorizontal: 10,
    borderWidth: 0,
    width: Configs.Button_Width - 40,
    fontSize: 16
  }
});
