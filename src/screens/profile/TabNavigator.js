import GridView from "./GridView";
import ListView from "./ListView";
import TagView from "./TagView";
import { Icon } from "../../components";
import ScrollableTabView from "react-native-scrollable-tab-view";
import TabIcon from "./TabIcon";
import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class TabNavigator extends Component {
  render() {
    return (
      <ScrollableTabView
        tabBarUnderlineStyle={styles.tabBarUnderline}
        tabBarActiveTextColor={"#222"}
        tabBarInactiveTextColor={"#666"}
        renderTabBar={() => <TabIcon />}
      >
        <GridView tabLabel="grid" />
        <ListView tabLabel="list-box" />
        <TagView tabLabel="bookmark" />
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

// const TabNavigator = createMaterialTopTabNavigator(
//   {
//     GridView: {
//       screen: GridView,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="grid" size={25} color={tintColor} />
//         )
//       }
//     },
//     ListView: {
//       screen: ListView,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="list-box" size={25} color={tintColor} />
//         )
//       }
//     },
//     TagView: {
//       screen: TagView,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="bookmark" size={25} color={tintColor} />
//         )
//       }
//     }
//   },
//   {
//     // initialRouteName: ListView,
//     // lazy: true,
//     detached: true,
//     tabBarOptions: {
//       inactiveTintColor: "#666",
//       activeTintColor: configs.Primary_Color,
//       showIcon: true,
//       showLabel: false,
//       style: {
//         backgroundColor: "transparent",
//         borderTopWidth: 0.2,
//         borderBottomWidth: 0.2,
//         borderColor: "#666"
//       },
//       iconStyle: { color: "#666" },
//       indicatorStyle: { backgroundColor: "transparent" }
//     }
//   }
// );

// export default createAppContainer(TabNavigator);
