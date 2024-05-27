import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";

// QueryClient, QueryClientProvider: Tools from @tanstack/react-query for data fetching and caching.

const config = {
  intialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

// config: An object that sets the initial color mode to 'light' and disables using the system color mode.
// extendTheme: A function from Chakra UI that takes the configuration and returns a theme object.

const queryClient = new QueryClient();

// queryClient: An instance of QueryClient which is used to configure and provide React
//  Query capabilities like caching and fetching data.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
