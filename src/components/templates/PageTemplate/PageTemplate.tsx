import React, { FC, PropsWithChildren } from "react";
import { View, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { palette } from "../../../constants/palette";

const PageTemplate: FC<PropsWithChildren & { mustScroll?: boolean }> = ({
  children,
  mustScroll = true,
}) => (
  <View style={styles.container}>
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

export default PageTemplate;
