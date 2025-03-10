import React, { useEffect } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolateColor,
  LinearTransition,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { IPaletteColor } from "./types";
import { darkPalette, lightPalette } from "../../../constants/palette";
import { usePalette, useTheme } from "../../../services";

const UI = () => {
  const { theme, toggleTheme } = useTheme();
  const currentPalette = usePalette();
  const modeValue = useSharedValue(0);

  const palette: IPaletteColor[] = [
    {
      id: 0,
      description: "Background color",
      lightColor: lightPalette.background,
      darkColor: darkPalette.background,
    },
    {
      id: 1,
      description: "Menu main color",
      lightColor: lightPalette.menuMain,
      darkColor: darkPalette.menuMain,
    },
    {
      id: 2,
      description: "Menu contrast color, used to show up buttons",
      lightColor: lightPalette.menuContrast,
      darkColor: darkPalette.menuContrast,
    },
    {
      id: 3,
      description:
        "Defects contrast, depends on situation of camera. A little demo is on preview using slider gradient from #272945 to #CA5B5B",
      lightColor: lightPalette.defectsContrast,
      darkColor: darkPalette.defectsContrast,
    },
    {
      id: 4,
      description:
        "Show more button, using slightly darker color to contrast it from the background",
      lightColor: lightPalette.showMoreButton,
      darkColor: darkPalette.showMoreButton,
    },
    {
      id: 5,
      description: "Main text color",
      lightColor: lightPalette.mainText,
      darkColor: darkPalette.mainText,
    },
    {
      id: 6,
      description: "Sub text color",
      lightColor: lightPalette.subText,
      darkColor: darkPalette.subText,
    },
  ];

  useEffect(() => {
    modeValue.value = withTiming(theme === "light" ? 0 : 1, { duration: 300 });
  }, [theme]);

  return (
    <ScrollView style={{ backgroundColor: currentPalette.background }}>
      <View style={styles.container}>
        <Pressable
          style={[styles.button, { backgroundColor: currentPalette.menuMain }]}
          onPress={toggleTheme}
        >
          <Text style={{ color: currentPalette.mainText }}>Toggle theme</Text>
        </Pressable>
        <View style={styles.colors}>
          {palette.map(
            ({ id, description, lightColor, darkColor }: IPaletteColor) => {
              const animatedStyle = useAnimatedStyle(() => ({
                backgroundColor: interpolateColor(
                  modeValue.value,
                  [0, 1],
                  [lightColor, darkColor]
                ),
              }));

              return (
                <View key={id} style={styles.colorContainer}>
                  <Animated.View
                    layout={LinearTransition}
                    style={[
                      styles.colorCircle,
                      animatedStyle,
                      {
                        borderColor: currentPalette.mainText,
                      },
                    ]}
                  ></Animated.View>
                  <Text
                    style={[
                      styles.colorText,
                      { color: currentPalette.mainText },
                    ]}
                  >
                    {description}
                  </Text>
                </View>
              );
            }
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    gap: 20,
    alignItems: "center",
    padding: 20,
  },
  button: {
    width: "100%",
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
  },
  colors: {
    gap: 20,
    width: "100%",
    justifyContent: "flex-start",
  },
  colorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 36,
  },
  colorCircle: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 50,
  },
  colorText: {
    width: 100,
    flexGrow: 1,
  },
});

export default UI;
