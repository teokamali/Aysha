import "./assets/fontawesome/pro/css/all.css";
import React from "react";

// import "./styles/normalize.css";
// context
import ThemeContextProvider from "./context/ThemeContextProvider";
import WebsiteRoutes from "./Routes/WebsiteRoutes";
import PanelRoutes from "./Routes/PanelRoutes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeContextProvider>
      <Routes>
        <Route path="/*" element={<WebsiteRoutes />} />
        <Route path="/administrator/*" element={<PanelRoutes />} />
      </Routes>
    </ThemeContextProvider>
  );
}

export default App;
