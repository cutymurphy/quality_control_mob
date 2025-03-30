import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../components/pages/Home";
import { ERoutes } from "./routes";
import AnotherPage from "../components/pages/AnotherPage";
import Registration from "../components/pages/Registration";
import { StyleSheet, StatusBar } from "react-native";
import { palette } from "../constants/palette";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Login from "../components/pages/Login";
import ForgotPassword from "../components/pages/ForgotPassword";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <StatusBar barStyle="default" />
          <Stack.Navigator
            screenOptions={{ animation: "none", headerShown: false }}
          >
            <Stack.Screen name={ERoutes.HOME} component={Home} />
            <Stack.Screen
              name={ERoutes.REGISTRATION}
              component={Registration}
            />
            <Stack.Screen name={ERoutes.LOGIN} component={Login} />
            <Stack.Screen
              name={ERoutes.FORGOT_PASSWORD}
              component={ForgotPassword}
            />
            <Stack.Screen name={ERoutes.ANOTHER} component={AnotherPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.bg,
  },
});
