import Following from "./Following";
import You from "./You";
import React, { Component } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import ScrollableTabView from "react-native-scrollable-tab-view";

export default class TabNavigator extends Component {
  render() {
    return (
      <ScrollableTabView
        tabBarUnderlineStyle={styles.tabBarUnderline}
        tabBarActiveTextColor={"#222"}
        tabBarInactiveTextColor={"#666"}
      >
        {/* <Following tabLabel="Following" /> */}
        <You tabLabel="You" />
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  tabBarUnderline: {
    height: 1,
    backgroundColor: "#666"
  }
});

// import {
//   createMaterialTopTabNavigator,
//   createAppContainer
// } from "react-navigation";

// const TabNavigator = createMaterialTopTabNavigator(
//   {
//     Following: {
//       screen: Following
//     },
//     You: {
//       screen: You
//     }
//   },
//   {
//     initialRouteName: "You",
//     // detached: true,
//     lazy: true,
//     tabBarOptions: {
//       inactiveTintColor: "#666",
//       activeTintColor: "#000",
//       showLabel: true,
//       style: {
//         backgroundColor: "transparent",
//         borderTopWidth: 0.2,
//         borderBottomWidth: 0.2,
//         borderColor: "#666"
//       },
//       indicatorStyle: { backgroundColor: "#000" }
//     },
//     optimizationsEnabled: true,
//     tabBarPosition: "top"
//   }
// );

// export default createAppContainer(TabNavigator);
