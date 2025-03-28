import { StyleProp, ViewStyle } from "react-native";

export interface IIcon {
  style?: StyleProp<ViewStyle>;
  color?: string;
  height?: number;
  width?: number;
  opacity?: number;
}
