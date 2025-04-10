import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { routes } from "./routes";
import { StyleSheet, StatusBar, View } from "react-native";
import { palette } from "../constants/palette";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TypeRootStackParamList } from "./types";

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

export const Navigation = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" hidden />
          <Stack.Navigator
            screenOptions={{
              animation: "slide_from_right",
              headerShown: false,
            }}
          >
            {routes.map((route) => (
              <Stack.Screen key={route.name} {...route} />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.bg,
  },
});
