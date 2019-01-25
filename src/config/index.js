import { Dimensions } from "react-native";
const Button_Width = Dimensions.get("window").width - 40;
const Button_Height = 40;
const Primary_Color = "#0E68CE";
export default (configs = {
  Button_Height,
  Button_Width,
  Primary_Color
});
