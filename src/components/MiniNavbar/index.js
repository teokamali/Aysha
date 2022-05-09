import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgHand from "../../assets/image/react.jpg";
import "./index.scss";

function MiniNavbar({ logo }) {
  const menus = [
    {
      name: "ست و نیم ست",
      image: imgHand,
      imgLink: "https://google.com",
      subMenus: [
        {
          header: "انواع نیم ست",
          items: [
            "نیم ست با سنگ و نگین",
            "نیم ست بدون نگین",
            "نیم ست ظریف",
            "نیم ست با مروارید",
            "نیم ست مولتی کالر",
          ],
        },
        {
          header: "رنج قیمت",
          items: [
            "تا 4 میلیون تومان",
            "4 تا6 میلیون تومان",
            "6 تا 8 میلیون تومان",
            "بالای8 میلیون تومان",
          ],
        },
      ],
    },
    {
      name: "گردنبند",
      image: imgHand,
      imgLink: "https://google.com",
      subMenus: [
        {
          header: "انواع نیم ست",
          items: [
            "نیم ست با سنگ و نگین",
            "نیم ست بدون نگین",
            "نیم ست ظریف",
            "نیم ست با مروارید",
            "نیم ست مولتی کالر",
          ],
        },
        {
          header: "رنج قیمت",
          items: [
            "تا 4 میلیون تومان",
            "4 تا6 میلیون تومان",
            "6 تا 8 میلیون تومان",
            "بالای8 میلیون تومان",
          ],
        },
      ],
    },
    {
      name: "گوشواره",
      image: imgHand,
      imgLink: "https://google.com",
      subMenus: [
        {
          header: "انواع نیم ست",
          items: [
            "نیم ست با سنگ و نگین",
            "نیم ست بدون نگین",
            "نیم ست ظریف",
            "نیم ست با مروارید",
            "نیم ست مولتی کالر",
          ],
        },
        {
          header: "رنج قیمت",
          items: [
            "تا 4 میلیون تومان",
            "4 تا6 میلیون تومان",
            "6 تا 8 میلیون تومان",
            "بالای8 میلیون تومان",
          ],
        },
      ],
    },
    {
      name: "دستبند",
      image: imgHand,
      imgLink: "https://google.com",
      subMenus: [
        {
          header: "انواع نیم ست",
          items: [
            "نیم ست با سنگ و نگین",
            "نیم ست بدون نگین",
            "نیم ست ظریف",
            "نیم ست با مروارید",
            "نیم ست مولتی کالر",
          ],
        },
        {
          header: "رنج قیمت",
          items: [
            "تا 4 میلیون تومان",
            "4 تا6 میلیون تومان",
            "6 تا 8 میلیون تومان",
            "بالای8 میلیون تومان",
          ],
        },
      ],
    },
    {
      name: "انگشتر",
      image: imgHand,
      imgLink: "https://google.com",
      subMenus: [
        {
          header: "انواع نیم ست",
          items: [
            "نیم ست با سنگ و نگین",
            "نیم ست بدون نگین",
            "نیم ست ظریف",
            "نیم ست با مروارید",
            "نیم ست مولتی کالر",
          ],
        },
        {
          header: "رنج قیمت",
          items: [
            "تا 4 میلیون تومان",
            "4 تا6 میلیون تومان",
            "6 تا 8 میلیون تومان",
            "بالای8 میلیون تومان",
          ],
        },
      ],
    },
    {
      name: "پابند",
      image: imgHand,
      imgLink: "https://google.com",
      subMenus: [
        {
          header: "انواع نیم ست",
          items: [
            "نیم ست با سنگ و نگین",
            "نیم ست بدون نگین",
            "نیم ست ظریف",
            "نیم ست با مروارید",
            "نیم ست مولتی کالر",
          ],
        },
        {
          header: "رنج قیمت",
          items: [
            "تا 4 میلیون تومان",
            "4 تا6 میلیون تومان",
            "6 تا 8 میلیون تومان",
            "بالای8 میلیون تومان",
          ],
        },
      ],
    },
    {
      name: "آویز ساعت ",
      image: imgHand,
      imgLink: "https://google.com",
      subMenus: [
        {
          header: "انواع نیم ست",
          items: [
            "نیم ست با سنگ و نگین",
            "نیم ست بدون نگین",
            "نیم ست ظریف",
            "نیم ست با مروارید",
            "نیم ست مولتی کالر",
          ],
        },
        {
          header: "رنج قیمت",
          items: [
            "تا 4 میلیون تومان",
            "4 تا6 میلیون تومان",
            "6 تا 8 میلیون تومان",
            "بالای8 میلیون تومان",
          ],
        },
      ],
    },
  ];
  const rightMenu = [
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
  ];
  const SubMenu = ({ items, image }) => {
    return (
      <Container fluid className="sub-menu-container">
        <Container className="sub-menu-holder">
          <div className="sub-menu-right">
            {items.map((subMenu, index) => {
              return (
                <div key={`sub-menu-${index}`} className="sub-menu">
                  <h1>{subMenu.header}</h1>
                  <section>
                    {subMenu.items.map((item, index) => {
                      return <p key={`item-${index}`}>{item}</p>;
                    })}
                  </section>
                </div>
              );
            })}
          </div>
          <img
            className="sub-menu-image"
            src={image}
            onClick={() => window.location}
          />
        </Container>
      </Container>
    );
  };
  const Menu = () => {
    return (
      <section className="menus-container">
        {menus.map((menu, index) => {
          return (
            <div key={`menu-${index}`} className="menu">
              <p className="menu-title">{menu.name}</p>
              <SubMenu items={menu.subMenus} image={menu.image} />
            </div>
          );
        })}
      </section>
    );
  };

  const RightMenu = () => {
    return (
      <div className="right-menu-container">
        {rightMenu.map((menu, index) => {
          return (
            <Link to={"#"} key={`top-nav-${index}`}>
              <i className={menu.icon} />
            </Link>
          );
        })}
      </div>
    );
  };
  return (
    <header className="mini-navbar">
      <div className="mini-nav-content">
        <RightMenu />
        <Menu />
        <img className="mini-navbar-logo" src={logo} alt="logo" />
      </div>
    </header>
  );
}

export default MiniNavbar;
