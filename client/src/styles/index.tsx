import { Colors } from "./Colors";
import { ViewStyle } from "react-native";

const spaceWidth = 20;

const paddingWidth: ViewStyle = {
  paddingLeft: spaceWidth,
  paddingRight: spaceWidth,
  paddingBottom: 15,
  paddingTop: 15,
};

const paddingHorizWidth: ViewStyle = {
  paddingLeft: spaceWidth,
  paddingRight: spaceWidth,
};

const Button: ViewStyle = {
  height: 30,
  borderWidth: 1, 
  borderRadius: 5,
  marginTop: 15,
  justifyContent: 'center',
  alignContent: 'center',
  borderColor: Colors.grey,
  backgroundColor: Colors.white,
};

export { 
  Colors, 
  paddingWidth,
  paddingHorizWidth,
  spaceWidth,
  Button, 
};
