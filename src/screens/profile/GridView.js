import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  FlatList,
  Image
} from "react-native";
const MISSMIData = [
  //   {
  //   key: 1,
  //   username: 'james',
  //   type: 'video',
  //   source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/videos/drive.mov',
  //   avatarUrl: 'https://unsplash.it/100?image=1005'
  // },
  {
    key: 2,
    username: "jennifer",
    type: "image",
    source:
      "https://github.com/saitoxu/InstaClone/raw/master/contents/images/baking.jpg",
    avatarUrl: "https://unsplash.it/100?image=1027"
  },
  //  {
  //   key: 3,
  //   username: 'cathy',
  //   type: 'video',
  //   source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/videos/sky.mov',
  //   avatarUrl: 'https://unsplash.it/100?image=996'
  // },
  {
    key: 4,
    username: "zack",
    type: "image",
    source:
      "https://github.com/saitoxu/InstaClone/raw/master/contents/images/landscape.jpg",
    avatarUrl: "https://unsplash.it/100?image=856"
  },
  {
    key: 5,
    username: "luke",
    type: "image",
    source:
      "https://github.com/saitoxu/InstaClone/raw/master/contents/images/snow.jpg",
    avatarUrl: "https://unsplash.it/100?image=669"
  },
  //{
  //   key: 6,
  //   username: 'anna',
  //   type: 'video',
  //   source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/videos/garden.mov',
  //   avatarUrl: 'https://unsplash.it/100?image=823'
  // },
  {
    key: 7,
    username: "ken",
    type: "image",
    source:
      "https://github.com/saitoxu/InstaClone/raw/master/contents/images/town.jpg",
    avatarUrl: "https://unsplash.it/100?image=550"
  },
  {
    key: 7,
    username: "ken",
    type: "image",
    source:
      "https://github.com/saitoxu/InstaClone/raw/master/contents/images/town.jpg",
    avatarUrl: "https://unsplash.it/100?image=550"
  },
  {
    key: 7,
    username: "ken",
    type: "image",
    source:
      "https://github.com/saitoxu/InstaClone/raw/master/contents/images/town.jpg",
    avatarUrl: "https://unsplash.it/100?image=550"
  },
  {
    key: 2,
    username: "jennifer",
    type: "image",
    source:
      "https://github.com/saitoxu/InstaClone/raw/master/contents/images/baking.jpg",
    avatarUrl: "https://unsplash.it/100?image=1027"
  },
  //  {
  //   key: 3,
  //   username: 'cathy',
  //   type: 'video',
  //   source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/videos/sky.mov',
  //   avatarUrl: 'https://unsplash.it/100?image=996'
  // },
  {
    key: 4,
    username: "zack",
    type: "image",
    source:
      "https://github.com/saitoxu/InstaClone/raw/master/contents/images/landscape.jpg",
    avatarUrl: "https://unsplash.it/100?image=856"
  },
  {
    key: 5,
    username: "luke",
    type: "image",
    source:
      "https://github.com/saitoxu/InstaClone/raw/master/contents/images/snow.jpg",
    avatarUrl: "https://unsplash.it/100?image=669"
  }
];
const { height, width } = Dimensions.get("window");
export default class GridView extends Component {
  render() {
    return (
      <FlatList
        data={MISSMIData}
        style={styles.container}
        renderItem={({ item }) => (
          <View style={styles.subContainer}>
            <Image
              source={{ uri: item.source }}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    flex: 1,
    height: height / 5.5,
    width: width / 3.1,
    marginRight: 2
  },
  subContainer: {
    marginBottom: -25
  }
});
