import React from "react";
import { Navigation } from "./src/navigation";
import { ThemeProvider } from "./src/services";

const App = () => (
  <ThemeProvider>
    <Navigation />
  </ThemeProvider>
);

export default App;
