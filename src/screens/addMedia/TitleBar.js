import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import img from "../../assets";
import { Icon } from "../../components";
import configs from "../../config";

export default class TitleBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.cancel}>
          <Icon name={"close"} size={25} style={styles.closeIcon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.props.title || "Gallery"}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.next}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    alignSelf: "center",
    height: 40,
    marginVertical: 5,
    width: "100%"
  },
  closeIcon: {
    paddingHorizontal: 10
  },
  logo: {
    width: 100,
    height: 30
  },
  tvIcon: {
    paddingHorizontal: 10
  },
  telegramIcon: {
    paddingHorizontal: 10
  },
  titleContainer: {
    width: "70%"
  },
  next: {
    fontSize: 14,
    color: configs.Primary_Color,
    paddingHorizontal: 10,
    fontWeight: "bold"
  },
  title: {
    fontSize: 14,
    fontWeight: "bold"
  }
});
