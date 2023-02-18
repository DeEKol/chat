import React from "react";
import { store } from "store/store";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import StoreTest from "components/StoreTest/StoreTest";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <RouterProvider router={router} />
        </main>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
