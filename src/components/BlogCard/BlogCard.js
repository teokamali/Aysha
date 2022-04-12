import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.scss";
function BlogCard({ data, type }) {
  return (
    <>
      {type === "column" && (
        <div className="blog-card">
          <div className="card">
            <img src={data.image} className="card-img-top" alt={data.image} />
            <div className="card-body">
              <div className="d-flex justify-content-start align-items-center mb-3">
                <span className="badge cs-badge me-2">دسته بندی</span>
                <p className="card-text blog-card-date">21 فروردین</p>
              </div>
              <Link to={data._id} className="blog-title">
                {data.title}
              </Link>
            </div>
          </div>
        </div>
      )}
      {type === "featured" && (
        <Link to={data._id}>
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
      )}
      {type === "row" && (
        <div className="card mb-3 card-row">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={data.image}
                className="img-fluid rounded-start"
                alt={data.image}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="d-flex justify-content-evenly align-items-center w-50 mb-3">
                  <span className="badge cs-badge me-2">{data.category}</span>
                  <p className="card-text blog-date">{data.publishDate}</p>
                </div>
                <Link to={data._id}>{data.title}</Link>
                <p className="card-text">{data.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {type === "row-without-badge" && (
        <div className="card mb-3 border-0 card-row-without-badge">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={data.image}
                className="img-fluid rounded-start"
                alt={data.image}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <Link  to={data._id}>{data.title}</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BlogCard;
