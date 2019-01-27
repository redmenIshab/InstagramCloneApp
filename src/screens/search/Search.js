import React, { Component } from "react";
import { Text, View } from "react-native";
import SearchTab from "./SearchTab";
export default class Search extends Component {
  render() {
    return (
      <View style={{ marginTop: 40 }}>
        <SearchTab />
      </View>
    );
  }
}
