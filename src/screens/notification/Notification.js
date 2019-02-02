import React, { Component } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import TabNavigator from "./TabNavigator";
import { ProfilePicture, Button, Icon } from "../../components";
import styles from "./Styles";

const notifications = [
  {
    id: "notification1",
    message: "Ninjawink.motivation liked your post",
    relaltedId: "Ninjawink.motivation",
    relatedIdProfilePhoto: "some source of image here",
    post: {
      image: "post image"
    },
    time: "12:00"
  },
  {
    id: "notification2",
    message: "Arun liked your post",
    relaltedId: "Ninjawink.motivation",
    relatedIdProfilePhoto: "some source of image here",
    post: {
      image: "post image"
    },
    time: "20:00"
  },
  {
    id: "notification3",
    message: "Prashant liked your post",
    relaltedId: "Ninjawink.motivation",
    relatedIdProfilePhoto: "some source of image here",
    post: {
      image: "post image"
    },
    time: "22:00"
  },
  {
    id: "notification4",
    message: "Redmen started following you",
    relaltedId: "Ninjawink.motivation",
    relatedIdProfilePhoto: "some source of image here",
    post: {
      image: "post image"
    },
    time: "23:00"
  }
];
export default class Notification extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.you}>You</Text>
        </View>
        <FlatList
          data={notifications}
          style={styles.flatlist}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.itemContainer}>
              <ProfilePicture
                style={{ height: 40, width: 40, borderRadius: 20 }}
              />
              <Text style={styles.message}>{item.message}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
