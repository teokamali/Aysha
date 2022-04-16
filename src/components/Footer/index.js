import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <footer className="container-fluid mt-2 cs-footer">
      <div className="row pt-3 main-footer">
        <div className="col-12 col-md-6 col-xl-3">
          <div className="footer-column-wrapper">
            <label className="footer-title">لورم ساختگی </label>
            <a className="footer-link" href="/">
              راهنمای خرید
            </a>
            <a className="footer-link" href="/">
              زمان تحویل و ارسال
            </a>
            <a className="footer-link" href="/">
              راهنمای تعیین سایز
            </a>
            <a className="footer-link" href="/">
              قوانین و مقررات
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="footer-column-wrapper">
            <label className="footer-title">لورم ساختگی </label>
            <a className="footer-link" href="/">
              طلای کودک
            </a>
            <a className="footer-link" href="/">
              انگشتر
            </a>
            <a className="footer-link" href="/">
              گردنبند
            </a>
            <a className="footer-link" href="/">
              گوشواره
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="footer-column-wrapper">
            <label className="footer-title">لورم ساختگی </label>
            <a className="footer-link" href="/">
              پابند
            </a>
            <a className="footer-link" href="/">
              دستبند
            </a>
            <a className="footer-link" href="/">
              آویز ساعت
            </a>
            <a className="footer-link" href="/">
              ست و نیم ست
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="footer-column-wrapper">
            <label className="footer-title">لورم ساختگی </label>
            <a className="footer-link" href="/">
              درباره ما
            </a>
            <a className="footer-link" href="/">
              تماس با ما
            </a>
          </div>
        </div>
      </div>
      <div className="copy-rights">
        <p>تمامی حقوق برای فروشگاه اینترنتی آیشا محفوظ می باشد.</p>
      </div>
    </footer>
  );
}

export default Footer;
