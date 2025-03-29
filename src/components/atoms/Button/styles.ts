import { StyleSheet } from "react-native";
import { palette } from "../../../constants/palette";

export const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  btn_welcomeBlue: {
    backgroundColor: palette.welcomeScreenSubBtn,
  },
  btn_welcomeBrightBlue: {
    backgroundColor: palette.welcomeScreenContrastBtn,
  },
  btn_red: {
    backgroundColor: palette.red,
  },
  btn_blue: {
    backgroundColor: palette.anyBtnOnBgSubScreen,
  },
  btn_darkBlue: {
    backgroundColor: palette.darkBlue,
  },
  btn_edge: {
    backgroundColor: palette.edgeBtnBg,
  },
  btn_management: {
    backgroundColor: palette.textFieldInFolderBg,
  },
  btn_blueTransparent: {
    backgroundColor: palette.blueTransparent,
  },
  btn_modal: {
    backgroundColor: palette.modalBtns,
  },
});
