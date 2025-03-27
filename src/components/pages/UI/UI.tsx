import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { IPaletteColor } from "./types";
import { palette } from "../../../constants/palette";

const UI = () => {
  const paletteColors: IPaletteColor[] = [
    {
      id: 0,
      description: "Background color",
      color: palette.background,
    },
    {
      id: 1,
      description: "Menu main color",
      color: palette.menuMain,
    },
    {
      id: 2,
      description: "Menu contrast color, used to show up buttons",
      color: palette.menuContrast,
    },
    {
      id: 3,
      description:
        "Defects contrast, depends on situation of camera. A little demo is on preview using slider gradient from #272945 to #CA5B5B",
      color: palette.defectsContrast,
    },
    {
      id: 4,
      description:
        "Show more button, using slightly darker color to contrast it from the background",
      color: palette.showMoreButton,
    },
    {
      id: 5,
      description: "Main text color",
      color: palette.mainText,
    },
    {
      id: 6,
      description: "Sub text color",
      color: palette.subText,
    },
  ];

  return (
    <ScrollView style={{ backgroundColor: palette.background }}>
      <View style={styles.container}>
        <View style={styles.colors}>
          {paletteColors.map(({ id, description, color }: IPaletteColor) => (
            <View key={id} style={styles.colorContainer}>
              <View
                style={[
                  styles.colorCircle,
                  {
                    backgroundColor: color,
                    borderColor: palette.mainText,
                  },
                ]}
              ></View>
              <Text style={[styles.colorText, { color: palette.mainText }]}>
                {description}
              </Text>
            </View>
          ))}
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
