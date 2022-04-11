import React from "react";
import Header from "../components/Header/";
import HomeMenu from "../components/HomeMenu/";
import Footer from "../components/Footer/";
import Logo from "../assets/image/logo.png";
import TopNav from "../components/TopNav/";
import "./Layout.scss";
function Layout({ children }) {
  return (
    <div className="main-layout">
      <TopNav />
      <Header logo={Logo} isSticky={false} />
      <HomeMenu />
      <div className="main-content">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
