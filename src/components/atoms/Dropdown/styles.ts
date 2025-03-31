import { StyleSheet } from "react-native";
import { palette } from "../../../constants/palette";
import { fonts } from "../../../constants/fonts";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  label: {
    paddingLeft: 4,
    color: palette.subTextMainScreenPopup,
    fontFamily: fonts.default_500,
  },
  dropdown: {
    backgroundColor: palette.dropdownBgTransparent,
    borderRadius: 6,
    height: 24,
    paddingHorizontal: 8,
  },
  notRounded: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  textStyle: {
    color: palette.mainText,
    lineHeight: 20,
    fontSize: 14,
    fontFamily: fonts.default_500,
  },
  container: {
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderWidth: 0,
  },
  itemContainer: {
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  item: {
    padding: 8,
    backgroundColor: palette.dropdownListBgTransparent,
  },
  selectedItem: {
    backgroundColor: palette.dropdownBgTransparent,
  },
  lastItem: {
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
});
