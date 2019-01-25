import React from "react";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { HomeScreen } from "../screens/home";
import LoginScreen from "../screens/auth/Login";

const switchNavigator = createSwitchNavigator({
  Login: LoginScreen,
  Home: HomeScreen
});

export default createAppContainer(switchNavigator);
