import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserProvider } from "./contexts/userContext";
import { AppProvider } from "./contexts/app.Context";
import { ServiceProvider } from "./contexts/service.Context";
import ErrorBoundary from "./components/errorboundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppProvider>
        <UserProvider>
          <ServiceProvider>
            <App />
          </ServiceProvider>
        </UserProvider>
      </AppProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
