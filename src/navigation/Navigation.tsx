import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../components/pages/Home";
import UI from "../components/pages/UI";
import { ERoutes } from "./routes";
import AnotherPage from "../components/pages/AnotherPage";
import Registration from "../components/pages/Registration";
import { View, StyleSheet, StatusBar } from "react-native";
import { palette } from "../constants/palette";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StatusBar barStyle="default" />
        <Stack.Navigator
          screenOptions={{ animation: "fade", headerShown: false }}
        >
          <Stack.Screen name={ERoutes.HOME} component={Home} />
          <Stack.Screen name={ERoutes.REGISTRATION} component={Registration} />
          <Stack.Screen name={ERoutes.UI} component={UI} />
          <Stack.Screen name={ERoutes.ANOTHER} component={AnotherPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.background,
  },
});
