import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const root = ReactDOM.createRoot(document.getElementById("root"));

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#FFFFFF", "#0E1514")(props),
      },
    }),
  },
});

root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
