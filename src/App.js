import "./assets/fontawesome/pro/css/all.css";
import React from "react";

// import "./styles/normalize.css";
// context
import ThemeContextProvider from "./context/ThemeContextProvider";
import ProductsContextProvider from "./context/ProductsContextProvider";

// routes
import WebsiteRoutes from "./Routes/WebsiteRoutes";
import PanelRoutes from "./Routes/PanelRoutes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeContextProvider>
      <ProductsContextProvider>
        <Routes>
          <Route path="/*" element={<WebsiteRoutes />} />
          <Route path="/administrator/*" element={<PanelRoutes />} />
        </Routes>
      </ProductsContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
