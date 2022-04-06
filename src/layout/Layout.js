import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Logo from "../assets/image/logo.png";
import "./Layout.scss";
import { useLocation } from "react-router-dom";
function Layout({ children }) {
  const location = useLocation();
  return (
    <div className="main-layout">
      <Header
        logo={Logo}
        isSticky={false}
        isHide={location.pathname === "/administrator" ? true : false}
      />
      <div className="main-content">{children}</div>
      <Footer
        isHide={location.pathname === "/administrator" ? true : false}
      />
    </div>
  );
}

export default Layout;
