import { StyleSheet } from "react-native";
import { palette } from "../../../constants/palette";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "black",
    width: "100%",
    padding: 28,
  },
  waveWrapper: {
    position: "relative",
  },
  waveIcon: {
    zIndex: 0,
    position: "absolute",
    top: -4,
    right: -158,
  },
  solarIcon: {
    zIndex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 8,
    zIndex: 1,
  },
  headerTitle: {
    color: palette.mainText,
    fontFamily: "Segoe-UI-900",
    fontSize: 22,
    lineHeight: 30,
    width: "65%",
  },
  line: {
    width: "30%",
    height: 3,
    backgroundColor: palette.white,
    opacity: 0.55,
    borderRadius: 50,
    marginBottom: 16,
    zIndex: 1,
  },
  welcomeText: {
    width: "90%",
    color: palette.mainText,
    fontFamily: "Segoe-UI-800",
    fontSize: 16,
    lineHeight: 21,
    marginBottom: 16,
    zIndex: 1,
  },
  list: {
    gap: 20,
    marginBottom: 60,
  },
  btns: {
    alignItems: "center",
    gap: 16,
  },
  improveText: {
    textAlign: "center",
    width: 200,
    color: "rgba(255, 255, 255, 0.7)",
    fontFamily: "Segoe-UI-800",
    fontSize: 14,
    lineHeight: 19,
  },
  brightBlueBtn: {
    padding: 8,
    borderRadius: 14,
    backgroundColor: palette.brightBlue2,
    width: "86%",
  },
  brightBlueBtnText: {
    fontSize: 20,
    lineHeight: 27,
    fontFamily: "Segoe-UI-900",
    color: palette.mainText,
    textAlign: "center",
  },
  blueBtn: {
    padding: 8,
    borderRadius: 14,
    backgroundColor: palette.blue,
    width: "74%",
  },
  blueBtnText: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "Segoe-UI-900",
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
  },
});
