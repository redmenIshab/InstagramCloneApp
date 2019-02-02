import React, { Component } from "react";
import { Text, View, Platform } from "react-native";
import TitleBar from "./TitleBar";

export default class Video extends Component {
  render() {
    return (
      <View
        style={{
          alignSelf: "center",
          marginTop: Platform.OS === "ios" ? 40 : 0
        }}
      >
        <TitleBar
          cancel={() => this.props.navigation.navigate("Dashboard")}
          title={"Video"}
        />
        <Text style={{ color: "#666", alignSelf: "center" }}>
          {" "}
          This feature will be available in future
        </Text>
      </View>
    );
  }
}
