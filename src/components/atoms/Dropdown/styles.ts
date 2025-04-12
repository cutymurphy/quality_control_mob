import { StyleSheet } from "react-native";
import { palette } from "../../../constants/palette";
import { fonts } from "../../../constants/fonts";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    zIndex: 100,
  },
  label: {
    paddingLeft: 4,
    color: palette.subTextMainScreenPopup,
    fontFamily: fonts.default_500,
  },
  dropdown: {
    backgroundColor: palette.dropdownBgTransparent,
    paddingHorizontal: 8,
    paddingVertical: 0,
    minHeight: 0,
    height: 36,
  },
  textStyle: {
    color: palette.mainText,
    lineHeight: 14,
    fontSize: 14,
    fontFamily: fonts.default_500,
  },
  item: {
    minHeight: 0,
    height: "auto",
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: palette.dropdownListBgTransparent,
  },
  selectedItem: {
    backgroundColor: palette.dropdownBgTransparent,
  },
});
