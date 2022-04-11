import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedBlog.scss";
function FeaturedBlog({ data }) {
  return (
    <Link to="/">
      <div className="card featured-card">
        <img src={data.image} className="card-img" alt={data.image} />
        <div className="card-img-overlay">
          <div className="d-flex justify-content-evenly align-items-center w-50 mb-3">
            <span className="badge cs-badge me-2">{data.category}</span>
            <p className="card-text blog-date">{data.publishDate}</p>
          </div>
          <p className="card-text blog-title">{data.title}</p>
        </div>
      </div>
    </Link>
  );
}

export default FeaturedBlog;
