import React, { useEffect } from "react";
import { Navigation } from "./src/navigation";
import * as Font from "expo-font";

const App = () => {
  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        "Segoe-UI-900": require("./assets/fonts/Segoe UI Black.ttf"),
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        "Segoe-UI-800": require("./assets/fonts/Segoe UI Bold.ttf"),
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        "Segoe-UI-700": require("./assets/fonts/Segoe UI Semibold.ttf"),
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        "Segoe-UI-600": require("./assets/fonts/Segoe UI.ttf"),
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        "Segoe-UI-500": require("./assets/fonts/Segoe UI Semilight.ttf"),
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        "Segoe-UI-400": require("./assets/fonts/Segoe UI Light.ttf"),
      });
    };
    loadFont();
  }, []);

  return <Navigation />;
};

export default App;
