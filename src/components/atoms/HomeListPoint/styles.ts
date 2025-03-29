import { StyleSheet } from "react-native";
import { palette } from "../../../constants/palette";
import { fonts } from "../../../constants/fonts";

export const styles = StyleSheet.create({
  listPoint: {
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 8,
    borderRadius: 14,
    alignSelf: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
  listPointCircle: {
    width: 13,
    height: 13,
    borderRadius: 50,
    opacity: 80,
    backgroundColor: palette.brightBlue,
  },
  listPointText: {
    color: palette.mainText,
    fontFamily: fonts.default_800,
    fontSize: 16,
    lineHeight: 21,
  },
});
