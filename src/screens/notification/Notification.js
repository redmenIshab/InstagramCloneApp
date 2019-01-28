import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { ProfilePicture } from "../../components";
import styles from "../profile/styles";
import TabNavigator from "./TabNavigator";
const notifications = {
  notification1: {
    message: "Ninjawink.motivation liked your post",
    relaltedId: "Ninjawink.motivation",
    relatedIdProfilePhoto: "some source of image here",
    post: {
      image: "post image"
    },
    time: "12:00"
  },
  notification2: {
    message: "Arun liked your post",
    relaltedId: "Ninjawink.motivation",
    relatedIdProfilePhoto: "some source of image here",
    post: {
      image: "post image"
    },
    time: "20:00"
  },
  notification3: {
    message: "Prashant liked your post",
    relaltedId: "Ninjawink.motivation",
    relatedIdProfilePhoto: "some source of image here",
    post: {
      image: "post image"
    },
    time: "22:00"
  },
  notification4: {
    message: "Redmen started following you",
    relaltedId: "Ninjawink.motivation",
    relatedIdProfilePhoto: "some source of image here",
    post: {
      image: "post image"
    },
    time: "23:00"
  }
};
export default class Notification extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator />
      </View>
    );
  }
}
