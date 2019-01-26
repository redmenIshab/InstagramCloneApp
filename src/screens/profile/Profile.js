import React, { Component } from "react";
import { Text, View } from "react-native";
import { ProfilePicture, Button } from "../../components";
import styles from "./styles";
export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        
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
        <View >
          
        </View>
      </View>
    );
  }
}
