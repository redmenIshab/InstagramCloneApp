import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Icon, MediaView } from "../../components";
import TitleBar from "./TitleBar";
import styles from "./Styles";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Feather from "react-native-vector-icons/Feather";
import img from "../../assets";

const data = [
  {
    key: 2,
    username: "Jeshot",
    type: "image",
    source: img.jeshot,
    avatarUrl: "https://unsplash.it/100?image=996"
  },
  {
    key: 4,
    username: "Jake",
    type: "image",
    source: img.jake,
    avatarUrl: "https://unsplash.it/100?image=856"
  },
  {
    key: 5,
    username: "Jared",
    type: "image",
    source: img.jared,
    avatarUrl: "https://unsplash.it/100?image=669"
  },
  {
    key: 7,
    username: "Simon",
    type: "image",
    source: img.simon,
    avatarUrl: "https://unsplash.it/100?image=823"
  },
  {
    key: 8,
    username: "Tom",
    type: "image",
    source: img.tom,
    avatarUrl: "https://unsplash.it/100?image=550"
  }
];
const { height, width } = Dimensions.get("window");
export default class HomeScreen extends Component {
  state = {
    height: 500
  };
  render() {
    let imgDimension;
    return (
      <View style={styles.container}>
        <TitleBar />

        {/* Myday collection */}
        <View style={styles.mydayContainer}>
          <View style={styles.subContainer3}>
            <TouchableOpacity
              style={styles.mydayCircle}
              onPress={() => alert("This feature will be added soon")}
            >
              <Icon name={"add"} size={25} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.mydayText}>your Story</Text>
          </View>
        </View>

        {/* Rendering All items */}
        <FlatList
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
                  color="#666"
                  style={{ lineHeight: 60, marginRight: 15 }}
                />
              </View>
              <Image
                type={item.type}
                source={item.source}
                style={{
                  height: Math.floor(
                    Image.resolveAssetSource(item.source).height *
                      (width / Image.resolveAssetSource(item.source).width)
                  ),
                  width
                }}
                resizeMode={"contain"}
              />

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
      </View>
    );
  }
}
