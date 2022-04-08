import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import HeroBackground from "../assets/image/banner2.png";
import image1 from "../assets/image/firstsection.jpeg";
import ring1 from "../assets/image/ring1.png";
import ring2 from "../assets/image/ring2.png";
import ring3 from "../assets/image/ring3.png";
import "./HomeScreen.scss";
function HomeScrean() {
  const [show, setShow] = useState(false);
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
      <section id="first-section">
        <div className="first-section flex-column-reverse flex-md-row m-0">
          {show && (
            <div id="first-col" className=" col-md-6 mt-3">
              <div className="wrapper">
                <div className="item">
                  <img src={ring1} alt="" />
                  <div className="info">
                    <span>حلقه عروسی طلایی جدید</span>
                    <a href="/" className="btn btn-outline-secondary">
                      خرید محصول
                    </a>
                  </div>
                </div>
                <div className="item">
                  <img src={ring2} alt="" />
                  <div className="info">
                    <span>حلقه عروسی طلایی جدید</span>
                    <a href="/" className="btn btn-outline-secondary">
                      خرید محصول
                    </a>
                  </div>
                </div>
                <div className="item">
                  <img src={ring3} alt="" />
                  <div className="info">
                    <span>حلقه عروسی طلایی جدید</span>
                    <a href="/" className="btn btn-outline-secondary">
                      خرید محصول
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div id="seconde-col" className=" col-md-6 container mt-3">
            <h3>Hello world</h3>
            <p className="w-50 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              aut molestias nisi
            </p>
            <div className="image-wrapper">
              <img src={image1} alt="most popular item" />
              <div className="shopping-bag" onClick={()=> setShow(!show)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M416 160h-72V120C344 53.83 290.2 0 224 0S104 53.83 104 120V160H32C14.33 160 0 174.3 0 192v240C0 476.2 35.82 512 80 512h288c44.18 0 80-35.82 80-80V192C448 174.3 433.7 160 416 160zM152 120C152 80.3 184.3 48 224 48s72 32.3 72 72V160h-144V120zM400 432c0 17.64-14.36 32-32 32h-288c-17.64 0-32-14.36-32-32v-224h56v56C104 277.3 114.8 288 128 288s24-10.75 24-24V208h144v56C296 277.3 306.8 288 320 288s24-10.75 24-24V208h56V432z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeScrean;
