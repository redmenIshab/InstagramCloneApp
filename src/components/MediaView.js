import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
// import Video from 'react-native-video'
import { Icon } from "./index";
const { width } = Dimensions.get("window");

export default class MediaView extends Component {
  state = {
    resizeMode: "contain",
    skin: "custom",
    imageHeight: 0
  };

  componentWillMount() {
    if (this.props.type === "image") {
      Image.getSize(this.props.source, (w, h) => {
        this.setState({ imageHeight: Math.floor(h * (width / w)) });
      });
    }
  }

  render() {
    return (
      <View>
        <Image
          source={{ uri: this.props.source }}
          style={{ width, height: this.state.imageHeight }}
          resizeMode={"contain"}
        />
      </View>
    );
  }
}
