import React, { useContext } from "react";
import Ring3 from "../assets/image/ring3.png";
import Ring2 from "../assets/image/ring2.png";
import FeaturedBlog from "../components/FeaturedBlog/FeaturedBlog";
import { BlogContext } from "../context/BlogContextProvider";
import "./BlogScreen.scss";
import BlogCard from "../components/BlogCard/BlogCard";
function BlogScreen() {
  const { blogs } = useContext(BlogContext);
  console.log(blogs);

  const data = [
    {
      image: Ring2,
      title: "لورم ایپسوم متن ساختگی با تولید سادگی ",
      publishDate: "23 فروردین",
      category: "طلا و جواهرات",
    },
    {
      image: Ring3,
      title: "لورم ایپسوم متن ساختگی با تولید سادگی",
      publishDate: "23 اردیبهشت",
      category: "طلا و جواهرات",
    },
  ];
  return (
    <main id="BlogPage" className="Blog">
      <div className="container">
        <div className="featured-blogs row">
          <div className="col-12 col-md-6">
            <FeaturedBlog data={data[0]} />
          </div>
          <div className="col-12 col-md-6">
            <FeaturedBlog data={data[1]} />
          </div>
        </div>
        <div className="recent-posts mt-3">
          <h3 className="recent-posts-title">پست های اخیر</h3>
          <div className="row">
            {blogs.slice(0, 8).map((b, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-3">
                <BlogCard data={b} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default BlogScreen;
