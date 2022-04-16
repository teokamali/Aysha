import React from "react";
import "./Newsletter.scss";
function Newsletter() {
  return (
    <div className="mt-2 p-4 newsletter">
      <div className="social-media-wrapper row">
        <div className="col-6 col-md-3">
          <div className="social-media">
            <i className="fa-brands fa-instagram"></i>
            <a href="/" className="social-item">
              اینستاگرام
            </a>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="social-media">
            <i className="fa-brands fa-instagram"></i>
            <a href="/" className="social-item">
              اینستاگرام
            </a>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="social-media">
            <i className="fa-brands fa-instagram"></i>
            <a href="/" className="social-item">
              اینستاگرام
            </a>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="social-media">
            <i className="fa-brands fa-instagram"></i>
            <a href="/" className="social-item">
              اینستاگرام
            </a>
          </div>
        </div>
      </div>
      <form className="newsletter-form">
        <h3>به خبرنامه ما بپیوندید</h3>
        <input type="email" placeholder="آدرس ایمیل" />
        <button type="submit">عضویت</button>
      </form>
    </div>
  );
}

export default Newsletter;
