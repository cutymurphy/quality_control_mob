import { ReactElement } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface IDropdown {
  data: IDropdownData[];
  onChange: (item: IDropdownData) => void;
  value: string;
  label?: string;
  wrapperStyle?: StyleProp<ViewStyle>;
  dropdownStyle?: StyleProp<ViewStyle>;
  selectedTextStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  itemContainerStyle?: StyleProp<ViewStyle>;
  rightIcon?: ReactElement;
}

export interface IDropdownData {
  label: string;
  value: string;
}
