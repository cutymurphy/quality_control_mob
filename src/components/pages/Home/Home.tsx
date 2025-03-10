import React from "react";
import {
  StyleSheet,
  Pressable,
  ScrollView,
  Text,
  View,
  Button,
} from "react-native";
import { usePalette, useTheme } from "../../../services";
import { ERoutes } from "../../../navigation";

// eslint-disable-next-line react/prop-types
const Home = ({ navigation }) => {
  const { theme, toggleTheme } = useTheme();
  const currentPalette = usePalette();

  return (
    <ScrollView
      style={[styles.screen, { backgroundColor: currentPalette.background }]}
    >
      <View style={styles.wrapper}>
        <Text
          style={[
            styles.text,
            {
              color: currentPalette.mainText,
            },
          ]}
        >
          Контроль качества продукции
        </Text>
        <Button
          title={`Press me to toggle to ${
            theme === "dark" ? "light" : "dark"
          } mode`}
          onPress={toggleTheme}
        />
        <Pressable
          style={[
            styles.button,
            { backgroundColor: currentPalette.menuContrast },
          ]}
          // eslint-disable-next-line react/prop-types
          onPress={() => navigation.navigate(ERoutes.UI)}
        >
          <Text style={[styles.btnText, { color: currentPalette.mainText }]}>
            Open UI
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            { backgroundColor: currentPalette.menuContrast },
          ]}
          // eslint-disable-next-line react/prop-types
          onPress={() => navigation.navigate(ERoutes.ANOTHER)}
        >
          <Text style={[styles.btnText, { color: currentPalette.mainText }]}>
            Какая-то страничка для затеста...
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  wrapper: {
    gap: 20,
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
    width: "100%",
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Home;
