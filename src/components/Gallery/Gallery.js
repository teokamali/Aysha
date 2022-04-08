import React from "react";
import "./Gallery.scss"
function Gallery({ data }) {
  return (
    <div className="container">
      <div className="gallery">
        {data.map((item) => (
          <a href={item.link} key={item.id} className="item">
            <img src={item.image} alt={item.image} />
            <p>{item.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
