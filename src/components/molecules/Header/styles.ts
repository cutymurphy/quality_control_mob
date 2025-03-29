import { StyleSheet } from "react-native";
import { palette } from "../../../constants/palette";
import { fonts } from "../../../constants/fonts";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    position: "relative",
  },
  headerTextWrapper: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: "-50%" }],
  },
  headerText: {
    color: palette.mainTextColor,
    fontFamily: fonts.default_800,
    fontSize: 20,
    lineHeight: 27,
  },
});
