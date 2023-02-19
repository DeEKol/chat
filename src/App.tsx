import React from "react";
import { store } from "store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { RouterProvider } from "react-router-dom";
import { routes } from "routes/routes";
import "normalize.css";
import { GlobalStyles } from "./css/GlobalStyles";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <main>
          <RouterProvider router={routes} />
        </main>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
