import GridView from "./GridView";
import ListView from "./ListView";
import TagView from "./TagView";
import configs from "../../config";
import { Icon } from "../../components";
import React from "react";

import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";

const TabNavigator = createMaterialTopTabNavigator(
  {
    GridView: {
      screen: GridView,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="grid" size={25} color={tintColor} />
        )
      }
    },
    ListView: {
      screen: ListView,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="list-box" size={25} color={tintColor} />
        )
      }
    },
    TagView: {
      screen: TagView,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="bookmark" size={25} color={tintColor} />
        )
      }
    }
  },
  {
    // initialRouteName: ListView,
    lazy: true,
    tabBarOptions: {
      inactiveTintColor: "#666",
      activeTintColor: configs.Primary_Color,
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: "transparent",
        borderTopWidth: 0.2,
        borderBottomWidth: 0.2,
        borderColor: "#666"
      },
      iconStyle: { color: "#666" },
      indicatorStyle: { backgroundColor: "transparent" }
    }
  }
);

export default createAppContainer(TabNavigator);
