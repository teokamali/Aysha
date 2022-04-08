import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
function CustomSlider({ children, ...props }) {
  return (
    <div className="container">
      <Swiper {...props}>{children}</Swiper>
    </div>
  );
}

export default CustomSlider;
