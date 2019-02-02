import React, { Component } from "react";
import { Text, View, Platform } from "react-native";
import TitleBar from "./TitleBar";

export default class Gallery extends Component {
  render() {
    return (
      <View style={{ marginTop: Platform.OS == "ios" ? 40 : 0 }}>
        <TitleBar
          cancel={() => this.props.navigation.navigate("Dashboard")}
          title={"Gallery"}
        />
        <Text> textInComponent </Text>
      </View>
    );
  }
}
