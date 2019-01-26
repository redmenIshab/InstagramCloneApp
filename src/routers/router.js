import React from "react";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import { HomeScreen } from "../screens/home";
import { SearchScreen } from "../screens/search";
import { AddMediaScreen } from "../screens/addMedia";
import { ProfileScreen } from "../screens/profile";
import { NotificationScreen } from "../screens/notification";

import LoginScreen from "../screens/auth/Login";
import { Icon } from "../components";

const BottomNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <Icon
              name={"home"}
              size={25}
              style={{ alignSelf: "center" }}
              color={tintColor}
            />
          );
        }
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => {
          return (
            <Icon
              name={"search"}
              size={25}
              style={{ alignSelf: "center" }}
              color={tintColor}
            />
          );
        }
      }
    },
    AddMedia: {
      screen: AddMediaScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => {
          return (
            <Icon
              name={"add-circle"}
              size={25}
              style={{ alignSelf: "center" }}
              color={tintColor}
            />
          );
        }
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => {
          return (
            <Icon
              name={"heart"}
              size={25}
              style={{ alignSelf: "center" }}
              color={tintColor}
            />
          );
        }
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => {
          return (
            <Icon
              name={"person"}
              size={25}
              color={tintColor}
              style={{ alignSelf: "center" }}
            />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#000",
      showLabel: false
    },
    initialRouteName: "Profile"
  }
);

const switchNavigator = createSwitchNavigator({
  Dashboard: BottomNavigator,
  Login: LoginScreen
});

export default createAppContainer(switchNavigator);
