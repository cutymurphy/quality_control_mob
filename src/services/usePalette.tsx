import { darkPalette, lightPalette } from "../constants/palette";
import { useTheme } from "./useThemeContext";

export const usePalette = () => {
  const { theme } = useTheme();
  return theme === "light" ? lightPalette : darkPalette;
};
