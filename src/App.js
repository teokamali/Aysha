import "./assets/fontawesome/pro/css/all.css";
import React from "react";
import Login from "./AdminPanel/views/pages/login/Login";
import Register from "./AdminPanel/views/pages/register/Register";
// context
import ThemeContextProvider from "./context/ThemeContextProvider";
import ProductsContextProvider from "./context/ProductsContextProvider";
import BlogContextProvider from "./context/BlogContextProvider";

// routes
import WebsiteRoutes from "./Routes/WebsiteRoutes";
import PanelRoutes from "./Routes/PanelRoutes";
import ProtectedRoutes from "./AdminPanel/components/ProtectedRoute";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <ThemeContextProvider>
      <BlogContextProvider>
        <ProductsContextProvider>
          <Routes>
            <Route path="/*" element={<WebsiteRoutes />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/administrator/*" element={<PanelRoutes />} />
            </Route>
            <Route path="login" name="Login Page" element={<Login />} />
            <Route
              path="register"
              name="Register Page"
              element={<Register />}
            />
          </Routes>
        </ProductsContextProvider>
      </BlogContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
