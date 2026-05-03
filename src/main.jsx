import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { TabsProvider } from "./components/TabsContext.jsx";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <TabsProvider>
      <App />
    </TabsProvider>
  </HashRouter>,
);
