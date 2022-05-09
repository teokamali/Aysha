import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import HeroBackground from "../assets/image/banner.png";
import firstsection from "../assets/image/firstsection.png";
import ring1 from "../assets/image/ring1.png";
import ring2 from "../assets/image/ring2.png";
import ring3 from "../assets/image/ring3.png";
import DynamicImage from "../components/DynamicImage/DynamicImage";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import OutLineButton from "../components/Button/OutLineButton";
import Gallery from "../components/Gallery/Gallery";
import PreFooter from "../components/PreFooter/PreFooter";

import "./HomeScreen.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Newsletter from "../components/NewsLetter/Newsletter";
import classnames from "classnames";
const gallery = [
  "https://images.unsplash.com/photo-1499198116522-4a6235013d63?auto=format&fit=crop&w=1233&q=80",
  "https://images.unsplash.com/photo-1492760864391-753aaae87234?auto=format&fit=crop&w=1336&q=80",
  "https://images.unsplash.com/photo-1503631285924-e1544dce8b28?auto=format&fit=crop&w=1234&q=80",
  "https://images.unsplash.com/photo-1510425463958-dcced28da480?auto=format&fit=crop&w=1352&q=80",
  "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1234&q=80",
];
const gallery2 = [
  {
    id: 1,
    name: "آیتم اول",
    image:
      "https://images.unsplash.com/photo-1499198116522-4a6235013d63?auto=format&fit=crop&w=1233&q=80",
    link: "/",
  },
  {
    id: 2,
    name: "آیتم دوم",
    image:
      "https://images.unsplash.com/photo-1492760864391-753aaae87234?auto=format&fit=crop&w=1336&q=80",
    link: "/",
  },
  {
    id: 3,
    name: "آیتم سوم",
    image:
      "https://images.unsplash.com/photo-1503631285924-e1544dce8b28?auto=format&fit=crop&w=1234&q=80",

    link: "/",
  },
  {
    id: 4,
    name: "آیتم چهارم",
    image:
      "https://images.unsplash.com/photo-1510425463958-dcced28da480?auto=format&fit=crop&w=1352&q=80",
    link: "/",
  },
];
function HomeScrean() {
  const [isActiveCard, setIsActiveCard] = useState(false);
  const [isItemActive, setIsItemActive] = useState(-1);
  const cardStyles = classnames({
    "hotspot-card": true,
    "hotspot-card-active": isActiveCard,
  });
  const itemStyles0 = classnames({
    "hotspot-card__spotlight": true,
    active: isItemActive === 0,
  });
  const itemStyles1 = classnames({
    "hotspot-card__spotlight": true,
    active: isItemActive === 1,
  });
  const itemStyles2 = classnames({
    "hotspot-card__spotlight": true,
    active: isItemActive === 2,
  });
  const listItemStyles0 = classnames({
    "hotspot-card__item": true,
    active: isItemActive === 0,
  });
  const listItemStyles1 = classnames({
    "hotspot-card__item": true,
    active: isItemActive === 1,
  });
  const listItemStyles2 = classnames({
    "hotspot-card__item": true,
    active: isItemActive === 2,
  });
  const spotlightsStyles = classnames({
    "hotspot-card__spotlights": true,
    show: isActiveCard,
  });
  return (
    <>
      <Hero background={HeroBackground} overlayColor="rgb(51 51 51 / 80%)">
        <div className="banner">
          <div className="banner__content__wrapper">
            <h3 className="banner__title">
              بازدید از تمام محصولات گالری آیشا و خرید
            </h3>
            <a href="/" className="banner__button">
              بازدید از محصولات و خرید
            </a>
          </div>
        </div>
      </Hero>
      <div className="container">
        <section id="first-section" className="mt-3">
          <SectionHeading
            title="جدیدترین ها"
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از "
          />
          <div className={cardStyles}>
            <div className="hotspot-card__container">
              <div className="hotspot-card__product ">
                <div className="image-wrapper">
                  <img src={firstsection} alt="most popular item" />
                  <button
                    className="shopping-bag"
                    type="button"
                    onClick={() => {
                      setIsActiveCard((prev) => !prev);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 160h-72V120C344 53.83 290.2 0 224 0S104 53.83 104 120V160H32C14.33 160 0 174.3 0 192v240C0 476.2 35.82 512 80 512h288c44.18 0 80-35.82 80-80V192C448 174.3 433.7 160 416 160zM152 120C152 80.3 184.3 48 224 48s72 32.3 72 72V160h-144V120zM400 432c0 17.64-14.36 32-32 32h-288c-17.64 0-32-14.36-32-32v-224h56v56C104 277.3 114.8 288 128 288s24-10.75 24-24V208h144v56C296 277.3 306.8 288 320 288s24-10.75 24-24V208h56V432z" />
                    </svg>
                  </button>
                </div>
                <ul className={spotlightsStyles}>
                  <li
                    className={itemStyles0}
                    onMouseEnter={() => setIsItemActive(0)}
                    onMouseLeave={() => setIsItemActive(-1)}
                  >
                    <div className="hotspot-card__spotlight-dot"></div>
                  </li>
                  <li
                    className={itemStyles1}
                    onMouseEnter={() => setIsItemActive(1)}
                    onMouseLeave={() => setIsItemActive(-1)}
                  >
                    <div className="hotspot-card__spotlight-dot"></div>
                  </li>
                  <li
                    className={itemStyles2}
                    onMouseEnter={() => setIsItemActive(2)}
                    onMouseLeave={() => setIsItemActive(-1)}
                  >
                    <div className="hotspot-card__spotlight-dot"></div>
                  </li>
                </ul>
              </div>
              <div className="hotspot-card__detail">
                <div className="hotspot-card__list">
                  <div
                    className={listItemStyles0}
                    onMouseEnter={() => setIsItemActive(0)}
                    onMouseLeave={() => setIsItemActive(-1)}
                  >
                    <img src={ring1} alt="" />
                    <div className="info">
                      <span>حلقه عروسی طلایی جدید</span>
                      <OutLineButton link="/" text="خریدد محصول" />
                    </div>
                  </div>
                  <div
                    className={listItemStyles1}
                    onMouseEnter={() => setIsItemActive(1)}
                    onMouseLeave={() => setIsItemActive(-1)}
                  >
                    <img src={ring2} alt="" />
                    <div className="info">
                      <span>حلقه عروسی طلایی جدید</span>
                      <OutLineButton link="/" text="خریدد محصول" />
                    </div>
                  </div>
                  <div
                    className={listItemStyles2}
                    onMouseEnter={() => setIsItemActive(2)}
                    onMouseLeave={() => setIsItemActive(-1)}
                  >
                    <img src={ring3} alt="" />
                    <div className="info">
                      <span>حلقه عروسی طلایی جدید</span>
                      <OutLineButton link="/" text="خریدد محصول" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <OutLineButton link="/" text="نمایش بیشتر" />
        </section>
        <section id="seconde-section">
          <DynamicImage gallery={gallery} />
          <OutLineButton link="/" text="نمایش بیشتر" />
        </section>
        <section id="third-section">
          <div className="mt-3">
            <SectionHeading title="گالری محصولات" />
            <Gallery data={gallery2} />
          </div>
          <div className="container">
            <Swiper
              navigation={true}
              slidesPerView={4}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            >
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide className="slider-gallery">
                  <a href="/" className="item">
                    <img
                      src="https://images.unsplash.com/photo-1499198116522-4a6235013d63?auto=format&fit=crop&w=1233&q=80"
                      alt="img"
                    />
                    <p>آیتم اول</p>
                  </a>
                </SwiperSlide>

                <SwiperSlide className="slider-gallery">
                  <a href="/" className="item">
                    <img
                      src="https://images.unsplash.com/photo-1499198116522-4a6235013d63?auto=format&fit=crop&w=1233&q=80"
                      alt="img"
                    />
                    <p>آیتم اول</p>
                  </a>
                </SwiperSlide>

                <SwiperSlide className="slider-gallery">
                  <a href="/" className="item">
                    <img
                      src="https://images.unsplash.com/photo-1499198116522-4a6235013d63?auto=format&fit=crop&w=1233&q=80"
                      alt="img"
                    />
                    <p>آیتم اول</p>
                  </a>
                </SwiperSlide>

                <SwiperSlide className="slider-gallery">
                  <a href="/" className="item">
                    <img
                      src="https://images.unsplash.com/photo-1499198116522-4a6235013d63?auto=format&fit=crop&w=1233&q=80"
                      alt="img"
                    />
                    <p>آیتم اول</p>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="slider-gallery">
                  <a href="/" className="item">
                    <img
                      src="https://images.unsplash.com/photo-1499198116522-4a6235013d63?auto=format&fit=crop&w=1233&q=80"
                      alt="img"
                    />
                    <p>آیتم اول</p>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="slider-gallery">
                  <a href="/" className="item">
                    <img
                      src="https://images.unsplash.com/photo-1499198116522-4a6235013d63?auto=format&fit=crop&w=1233&q=80"
                      alt="img"
                    />
                    <p>آیتم اول</p>
                  </a>
                </SwiperSlide>
              </Swiper>
            </Swiper>
          </div>
        </section>
      </div>
      <PreFooter />
      <Newsletter />
    </>
  );
}

export default HomeScrean;
