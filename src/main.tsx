import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppProvider } from "./context/useGlobalContext.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <ChakraProvider>
        <App />
        <ToastContainer position="top-center" />
      </ChakraProvider>
    </AppProvider>
  </React.StrictMode>
);
