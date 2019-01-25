import { StyleSheet } from "react-native";
import configs from "../../config";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  forgetContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    alignSelf: "center"
  },
  forgetText1: {
    fontSize: 12,
    color: "#666"
  },
  forgetText2: {
    fontWeight: "bold",
    fontSize: 12,
    paddingLeft: 5
  },
  or: {
    paddingVertical: 10
  },
  fbLoginText: {
    color: configs.Primary_Color,
    fontSize: 12,
    fontWeight: "600"
  },
  instaLogo: {
    height: 50,
    width: configs.Button_Width / 2,
    paddingBottom: 100
  }
});

export default styles;
