import React from "react";
import Header from "../components/Header/";
import HomeMenu from "../components/HomeMenu/";
import Footer from "../components/Footer/";
import Logo from "../assets/image/logo.png";
import TopNav from "../components/TopNav/";
import "./Layout.scss";
import { useLocation } from "react-router-dom";
function Layout({ children }) {
  const location = useLocation();
  return (
    <div className="main-layout">
      <TopNav />
      <Header
        logo={Logo}
        isSticky={false}
        isHide={location.pathname === "/administrator" ? true : false}
      />
      <HomeMenu />
      <div className="main-content">{children}</div>
      <Footer isHide={location.pathname === "/administrator" ? true : false} />
    </div>
  );
}

export default Layout;
