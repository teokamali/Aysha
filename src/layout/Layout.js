import React, { useEffect, useState } from "react";
import Header from "../components/Header/";
import HomeMenu from "../components/HomeMenu/";
import Footer from "../components/Footer/";
import Logo from "../assets/image/header-logo.png";
import TopNav from "../components/TopNav/";
import "./Layout.scss";
import MiniNavbar from "../components/MiniNavbar";
function Layout({ children }) {
  const [isMiniNavbar, setIsMiniNavbar] = useState(false);
  const listenScrollEvent = () => {
    window.scrollY > 0 ? setIsMiniNavbar(true) : setIsMiniNavbar(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div className="main-layout">
      {isMiniNavbar ? (
        <MiniNavbar logo={Logo} />
      ) : (
        <>
          <TopNav />
          <Header logo={Logo} />
          <HomeMenu />
        </>
      )}
      <div className="main-content">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
