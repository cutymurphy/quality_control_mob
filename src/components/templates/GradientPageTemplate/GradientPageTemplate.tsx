import React, { FC, PropsWithChildren } from "react";
import { View, ScrollView } from "react-native";
import RadialGradientBg from "../../atoms/RadialGradient";
import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../../constants/screenSize";
import { palette } from "../../../constants/palette";

const GradientPageTemplate: FC<
  PropsWithChildren & { mustScroll?: boolean }
> = ({ children, mustScroll = true }) => (
  <View style={styles.container}>
    <RadialGradientBg screenWidth={screenWidth} screenHeight={screenHeight} />
    {mustScroll ? (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {children}
      </ScrollView>
    ) : (
      <View style={styles.scrollContainer}>{children}</View>
    )}
  </View>
);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.bg,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});

export default GradientPageTemplate;
