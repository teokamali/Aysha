import React from "react";
import "./DynamicImage.scss";
import styled from "styled-components";
import SectionHeading from "../SectionHeading/SectionHeading";
function DynamicImage({ gallery }) {
  const StyledA = styled.a`
    background-image: ${(props) => `url(${props.image})`}; ;
  `;
  return (
    <div className="dynamic-image container">
      <div className="container">
        <SectionHeading
          title="گالری محصولات"
          desc="
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            و قرار گیرد.
          "
        />
        <div className="gallery-wrap">
          {gallery.map((item, i) => (
            <StyledA
              key={i}
              image={item}
              href="/"
              className="item item-1"
            ></StyledA>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DynamicImage;
