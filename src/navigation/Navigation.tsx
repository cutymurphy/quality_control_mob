import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../components/pages/Home";
import UI from "../components/pages/UI";
import { ERoutes } from "./routes";
import { StatusBar } from "react-native";
import AnotherPage from "../components/pages/AnotherPage";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="default" />
      <Stack.Navigator
        screenOptions={{ animation: "slide_from_right", headerShown: false }}
      >
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
