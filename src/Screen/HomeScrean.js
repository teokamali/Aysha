import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import HeroBackground from "../assets/image/banner2.png";
import image1 from "../assets/image/firstsection.jpeg";
import ring1 from "../assets/image/ring1.png";
import ring2 from "../assets/image/ring2.png";
import ring3 from "../assets/image/ring3.png";
import DynamicImage from "../components/DynamicImage/DynamicImage";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import OutLineButton from "../components/Button/OutLineButton";
import Gallery from "../components/Gallery/Gallery";
import "./HomeScreen.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function HomeScrean() {
  const [show, setShow] = useState(false);
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
  return (
    <>
      <Hero background={HeroBackground} overlayColor="rgb(51 51 51 / 80%)">
        <div className="banner">
          <h3 className="banner__title">Aysha shop</h3>
          <a href="/" className="banner__button">
            <svg width="277" height="62">
              <defs>
                <linearGradient id="grad1">
                  <stop offset="0%" stopColor="#FF8282" />
                  <stop offset="100%" stopColor="#E178ED" />
                </linearGradient>
              </defs>
              <rect
                x="5"
                y="5"
                rx="25"
                fill="none"
                stroke="url(#grad1)"
                width="266"
                height="50"
              ></rect>
            </svg>
            <span>بازدید از فروشگاه</span>
          </a>
        </div>
      </Hero>
      <section id="first-section" className="mt-3">
        <SectionHeading
          title="جدیدترین ها"
          desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از "
        />
        <div className="first-section flex-column-reverse flex-md-row m-0">
          {show && (
            <div id="first-col" className=" col-md-6 ">
              <div className="wrapper">
                <div className="item">
                  <img src={ring1} alt="" />
                  <div className="info">
                    <span>حلقه عروسی طلایی جدید</span>
                    <OutLineButton link="/" text="خریدد محصول" />
                  </div>
                </div>
                <div className="item">
                  <img src={ring2} alt="" />
                  <div className="info">
                    <span>حلقه عروسی طلایی جدید</span>
                    <OutLineButton link="/" text="خریدد محصول" />
                  </div>
                </div>
                <div className="item">
                  <img src={ring3} alt="" />
                  <div className="info">
                    <span>حلقه عروسی طلایی جدید</span>
                    <OutLineButton link="/" text="خریدد محصول" />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div id="seconde-col" className=" col-md-6 container ">
            <div className="image-wrapper">
              <img src={image1} alt="most popular item" />
              <div className="shopping-bag" onClick={() => setShow(!show)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M416 160h-72V120C344 53.83 290.2 0 224 0S104 53.83 104 120V160H32C14.33 160 0 174.3 0 192v240C0 476.2 35.82 512 80 512h288c44.18 0 80-35.82 80-80V192C448 174.3 433.7 160 416 160zM152 120C152 80.3 184.3 48 224 48s72 32.3 72 72V160h-144V120zM400 432c0 17.64-14.36 32-32 32h-288c-17.64 0-32-14.36-32-32v-224h56v56C104 277.3 114.8 288 128 288s24-10.75 24-24V208h144v56C296 277.3 306.8 288 320 288s24-10.75 24-24V208h56V432z" />
                </svg>
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
        <div className="mt-3 ">
          <SectionHeading title="گالری محصولات" />
          <Gallery data={gallery2} />
        </div>
        <div className="container">
          <Swiper
            navigation={true}
            slidesPerView={4}
            spaceBetween={30}

            modules={[Navigation]}
            className="mySwiper"
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
    </>
  );
}

export default HomeScrean;
