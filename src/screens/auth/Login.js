import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import { Textbox, Button } from "../../components";
import styles from "./styles";
import img from "../../assets";
import { LoginButton, AccessToken } from "react-native-fbsdk";

export default class Login extends Component {
  state = {
    loader: true
  };
  async componentWillMount() {
    let token = await AsyncStorage.getItem("token");
    if (token) {
      this.props.navigation.navigate("Dashboard");
      return;
    }
    this.setState({ loader: false });
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={img.instaLogo}
          style={styles.instaLogo}
          resizeMode={"center"}
        />
        <Textbox placeholder={"Phone Number, email or username"} />
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
        <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              console.log("login has error: " + result.error);
              this.setState({ loader: false });
            } else if (result.isCancelled) {
              console.log("login is cancelled.");
              this.setState({ loader: false });
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                console.warn(data.accessToken.toString());
                AsyncStorage.setItem("token", data.accessToken);
                this.props.navigation.navigate("Dashboard");
                this.setState({ loader: false });
              });
            }
          }}
          onLogoutFinished={() => console.log("logout.")}
        />
        {this.state.loader && (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              position: "absolute"
            }}
          >
            <ActivityIndicator size="large" color="#888" />
          </View>
        )}
      </View>
    );
  }
}
