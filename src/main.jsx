import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store.js";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme.jsx";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </ThemeProvider>
  </Provider>
);
