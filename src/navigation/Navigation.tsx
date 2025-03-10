import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../components/pages/Home";
import UI from "../components/pages/UI";
import { usePalette } from "../services";
import { ERoutes } from "./routes";
import { StatusBar } from "react-native";
import AnotherPage from "../components/pages/AnotherPage";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const currentPalette = usePalette();

  const screenOptions = {
    headerStyle: { backgroundColor: currentPalette.background },
    headerTitleStyle: { color: currentPalette.mainText },
  };

  return (
    <NavigationContainer>
      <StatusBar barStyle="default" />
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name={ERoutes.HOME}
          component={Home}
          options={{ title: ERoutes.HOME }}
        />
        <Stack.Screen
          name={ERoutes.UI}
          component={UI}
          options={{ title: ERoutes.UI }}
        />
        <Stack.Screen
          name={ERoutes.ANOTHER}
          component={AnotherPage}
          options={{ title: ERoutes.ANOTHER }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
