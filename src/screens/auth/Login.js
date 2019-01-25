import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import Textbox from "../../components/Textbox";
import Button from "../../components/Button";
import styles from "./styles";
import { facebookLogin } from "./facebookLogin";
import img from "../../assets";

export default class Login extends Component {
  facebookLogin = () => {};
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={img.instaLogo}
          style={styles.instaLogo}
          resizeMode={"center"}
        />
        <Textbox
          placeholder={"Phone Number, email or username"}
        />
        <Textbox placeholder={"Password"} secureTextEntry />
        <Button
          type="Login"
          title="Log In"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <View style={styles.forgetContainer}>
          <Text style={styles.forgetText1}>Forget your login details ?</Text>
          <Text style={styles.forgetText2}>Get help signing in.</Text>
        </View>
        <Text style={styles.or}>OR</Text>
        <TouchableOpacity
          style={styles.fbLoginContainer}
          onPress={() => facebookLogin()}
        >
          <Text style={styles.fbLoginText}>Log in with facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
