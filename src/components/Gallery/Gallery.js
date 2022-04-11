import React from "react";
import "./Gallery.scss";
function Gallery({ data }) {
  return (
    <div className="container">
      <div className="gallery row">
        {data.map((item) => (
          <a
            href={item.link}
            className="item col-12 col-md-6 col-lg-3 "
            key={item.id}
          >
            <img src={item.image} alt="img" />
            <p>{item.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
