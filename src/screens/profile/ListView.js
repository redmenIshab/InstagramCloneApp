import React, { Component } from "react";
import { View, Image, Text, StyleSheet, FlatList } from "react-native";
import { Icon, MediaView } from "../../components";
import Feather from "react-native-vector-icons/Feather";
import img from "../../assets";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const data = [
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
  }
];

export default class HomeScreen extends Component {
  render() {
    return (
      <FlatList
        style={{ flex: 1 }}
        data={data}
        renderItem={({ item }) => (
          <View>
            <View
              style={{
                height: 60,
                backgroundColor: "white",
                flexDirection: "row"
              }}
            >
              <Image
                style={{
                  width: 36,
                  height: 36,
                  margin: 12,
                  borderRadius: 18,
                  borderWidth: StyleSheet.hairlineWidth,
                  borderColor: "lightgray"
                }}
                source={{ uri: item.avatarUrl }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  height: 60,
                  lineHeight: 60,
                  flex: 1
                }}
              >
                {item.username}
              </Text>
              <Icon
                name="more"
                size={30}
                color="black"
                style={{ lineHeight: 60, marginRight: 15 }}
              />
            </View>
            <MediaView type={item.type} source={item.source} />
            <View
              style={{
                height: 54,
                backgroundColor: "white",
                flexDirection: "row"
              }}
            >
              <Icon
                name="heart-empty"
                size={25}
                color="black"
                style={{ marginTop: 12, marginLeft: 15 }}
              />
              <SimpleLineIcons
                name="bubble"
                size={25}
                color="black"
                style={{ marginTop: 12, marginLeft: 20 }}
              />
              <Feather
                name="send"
                size={25}
                color="black"
                style={{ marginTop: 12, marginLeft: 20 }}
              />
              <View style={{ flex: 1 }} />
              <Feather
                name="bookmark"
                size={25}
                color="black"
                style={{ marginTop: 12, marginRight: 15 }}
              />
            </View>
            <View style={{ marginBottom: 20, paddingLeft: 15 }}>
              <Text style={{ fontSize: 12, color: "gray" }}>
                {"X MINUTES AGO"}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}
