import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <footer className="container-fluid mt-2 cs-footer">
      <div className="row pt-3 main-footer">
        <div className="col-12 col-md-6 col-xl-3">
          <div className="footer-column-wrapper">
            <label className="footer-title">
              <span>
                <i className="fa-solid fa-square"></i>
              </span>
              درباره ما
            </label>
            <p className="footer-desc">
              طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند
              که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار
              فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از
              روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. طراحان سایت
              هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای
              اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما
              نمیدهد.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="footer-column-wrapper">
            <label className="footer-title">
              <span>
                <i className="fa-solid fa-square"></i>
              </span>
              اطلاعات تماس
            </label>
            <div className="column-content-wrapper">
              <span>
                <i className="fa-solid fa-location"></i>
                نشانی
              </span>
              <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </p>
            </div>
            <div className="column-content-wrapper">
              <span>
                <i className="fa-solid fa-phone"></i>
                شماره های تماس
              </span>
              <p> 021-65755767 09125856855 </p>
            </div>
            <div className="column-content-wrapper">
              <span>
                <i className="fa-solid fa-envelope"></i>
                ایمیل
              </span>
              <p> Aysha.gallery@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="footer-column-wrapper">
            <label className="footer-title">
              <span>
                <i className="fa-solid fa-square"></i>
              </span>
              شبکه های اجتماعی
            </label>
            <div className="social-media-footer">
              <span>اینستاگرام</span>
              <span>Aysha.gallery</span>
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="social-media-footer">
              <span>واتساپ</span>
              <span>Aysha.gallery</span>
              <i className="fa-brands fa-whatsapp"></i>
            </div>
            <div className="social-media-footer">
              <span>تلگرام</span>
              <span>Aysha.gallery</span>
              <i className="fa-brands fa-telegram"></i>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="footer-column-wrapper">
            <label className="footer-title">
              <span>
                <i className="fa-solid fa-square"></i>
              </span>
              پشتیبانی
            </label>
            <a className="footer-link" href="/">
              پاسخ به پرسشهای متداول
            </a>
            <a className="footer-link" href="/">
              استرداد محصول
            </a>
            <a className="footer-link" href="/">
              مقالات
            </a>
          </div>
        </div>
      </div>
      <div className="copy-rights">
        <p> هرگونه کپی برداری از محتوا و محصولات سایت غیر مجاز می باشد</p>
      </div>
    </footer>
  );
}

export default Footer;
