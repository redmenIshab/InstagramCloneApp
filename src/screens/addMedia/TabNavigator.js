import Gallery from "./Gallery";
import Photo from "./Photo";
import Video from "./Video";
import configs from "../../config";
import { Icon } from "../../components";
import React from "react";

import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";

const TabNavigator = createMaterialTopTabNavigator(
  {
    Gallery: {
      screen: Gallery
    },
    Photo: {
      screen: Photo
    },
    Video: {
      screen: Video
    }
  },
  {
    tabBarPosition: "bottom",
    lazy: true,
    tabBarOptions: {
      inactiveTintColor: "#666",
      activeTintColor: "#000",
      showLabel: true,
      style: {
        backgroundColor: "transparent"
      },
      labelStyle: {
        fontSize: 12,
        fontWeight: "600"
      },
      indicatorStyle: { backgroundColor: "#666" }
    }
  }
);

export default createAppContainer(TabNavigator);
