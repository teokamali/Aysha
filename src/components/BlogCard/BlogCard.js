import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.scss";
function BlogCard({ data }) {
  return (
    <div className="blog-card">
      <div className="card">
        <img src={data.image} className="card-img-top" alt={data.image} />
        <div className="card-body">
          <div className="d-flex justify-content-start align-items-center mb-3">
            <span className="badge cs-badge me-2">دسته بندی</span>
            <p className="card-text blog-card-date">21 فروردین</p>
          </div>
          <Link to="/" className="blog-title">
            {data.title}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
