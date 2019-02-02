import React, { Component } from "react";
import { Text, View, Platform } from "react-native";
import SearchTab from "./SearchTab";
export default class Search extends Component {
  render() {
    return (
      <View style={{ marginTop: Platform.OS == "ios" ? 40 : 0 }}>
        <SearchTab />
      </View>
    );
  }
}
