import React, { FC, PropsWithChildren } from "react";
import { View, ScrollView } from "react-native";
import RadialGradientBg from "../../atoms/RadialGradient";
import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../../constants/screenSize";

const GradientPageTemplate: FC<PropsWithChildren> = ({ children }) => (
  <View style={styles.container}>
    <RadialGradientBg screenWidth={screenWidth} screenHeight={screenHeight} />
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {children}
    </ScrollView>
  </View>
);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  scrollContainer: {
    flexGrow: 1,
  },
});

export default GradientPageTemplate;
