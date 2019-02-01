import React, { Component } from "react";
import { Text, View } from "react-native";
import TitleBar from "./TitleBar";

export default class Gallery extends Component {
  render() {
    return (
      <View style={{ marginTop: 40 }}>
        <TitleBar
          cancel={() => this.props.navigation.navigate("Dashboard")}
          title={"Gallery"}
        />
        <Text> textInComponent </Text>
      </View>
    );
  }
}
