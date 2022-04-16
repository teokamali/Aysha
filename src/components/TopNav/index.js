import { Link } from "react-router-dom";
import "./index.scss";

const topNavMenus = {
  left: [
    {
      name: "درباره ما",
      icon: "fa-thin fa-book",
      ref: "/about-us",
    },
    {
      name: "خدمات ما",
      icon: "fa-thin fa-address-card",
      ref: "/about-us",
    },
    {
      name: "ارتباط با ما",
      icon: "fa-thin fa-address-card",
      ref: "/about-us",
    },
    {
      name: "جستجو",
      icon: "fa-thin fa-address-card",
      ref: "/about-us",
    },
  ],
  right: [
    {
      name: "خبرنامه",
      icon: "fa-thin fa-address-card",
      ref: "/about-us",
    },
    {
      name: "حساب کاربری",
      icon: "fa-thin fa-address-card",
      ref: "/about-us",
    },
    {
      name: "لیست دوست داشتنی",
      icon: "fa-thin fa-address-card",
      ref: "/about-us",
    },
    {
      name: "سبد خرید",
      icon: "fa-thin fa-address-card",
      ref: "/about-us",
    },
  ],
};

const TopNav = () => {
  const LeftMenu = () => {
    return (
      <div className="left-menu-container">
        {topNavMenus.left.map((menu, index) => {
          return (
            <Link to={"#"} key={`top-nav-${index}`}>
              <i className={menu.icon} />
              <p>{menu.name}</p>
            </Link>
          );
        })}
      </div>
    );
  };
  const RightMenu = () => {
    return (
      <div className="right-menu-container">
        {topNavMenus.right.map((menu, index) => {
          return (
            <Link to={"#"} key={`top-nav-${index}`}>
              <i className={menu.icon} />
              <p>{menu.name}</p>
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <main className="top-nav-container">
      <section>
        <LeftMenu />
      </section>
      <section>
        <RightMenu />
      </section>
    </main>
  );
};
export default TopNav;
