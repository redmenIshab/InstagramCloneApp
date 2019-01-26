import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { ProfilePicture, Button, Icon } from "../../components";
import styles from "./styles";
import TabNavigator from "./TabNavigator";
export default class Profile extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {/* profile Info Container includes ProfilePhoto | Posts | Followers | Following | Edit Profile */}

        <View style={styles.profileInfoContainer}>
          <ProfilePicture />
          <View style={styles.subContainer1}>
            <View style={styles.profileInfoNumberContainer}>
              <View style={styles.profileInfoNumberPostContainer}>
                <Text style={styles.profileInfoNumberPostNumber}>209</Text>
                <Text style={styles.profileInfoNumberPostText}> Posts</Text>
              </View>
              <View style={styles.profileInfoNumberFollowersContainer}>
                <Text style={styles.profileInfoNumberFollowersNumber}>530</Text>
                <Text style={styles.profileInfoNumberFollowersText}>
                  {" "}
                  Followers
                </Text>
              </View>
              <View style={styles.profileInfoNumberFollowingContainer}>
                <Text style={styles.profileInfoNumberFollowingNumber}>376</Text>
                <Text style={styles.profileInfoNumberFollowingText}>
                  {" "}
                  Following
                </Text>
              </View>
            </View>
            <Button
              style={styles.buttonStyle}
              textColor={"#666"}
              title={"Edit Profile"}
              onPress={() => alert(`This feature will be added soon`)}
            />
          </View>
        </View>

        {/* profile Name | Status */}
        <View style={styles.nameStatusContainer}>
          <Text style={styles.nameText}>Miss Mi</Text>
          <View style={styles.subContainer2}>
            <Text style={styles.statusText}>
              {`what we give is what we get in one or the other way. 
#openminded 
Traveller ,Vlogger ,Software Engineer 
#reactnative #nodejs `}
            </Text>
          </View>
        </View>

        {/* Myday collection */}
        <View style={styles.mydayContainer}>
          <View style={styles.subContainer3}>
            <TouchableOpacity
              style={styles.mydayCircle}
              onPress={() => alert("This feature will be added soon")}
            >
              <Icon name={"add"} size={25} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.mydayText}>New</Text>
          </View>
        </View>
        {/* tabview postViewer */}
        <TabNavigator />
      </ScrollView>
    );
  }
}
