import React, { useContext } from "react";
import Ring3 from "../assets/image/ring3.png";
import Ring2 from "../assets/image/ring2.png";
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
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و ",
      publishDate: "23 فروردین",
      category: "طلا و جواهرات",
      _id: "/",
    },
    {
      image: Ring3,
      title: "لورم ایپسوم متن ساختگی با تولید سادگی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و ",
      publishDate: "23 اردیبهشت",
      category: "طلا و جواهرات",
      _id: "/",
    },
  ];
  return (
    <main id="BlogPage" className="Blog">
      <div className="container">
        <div className="featured-blogs row">
          <div className="col-12 col-md-6">
            <BlogCard data={data[0]} type="featured" />
          </div>
          <div className="col-12 col-md-6">
            <BlogCard data={data[1]} type="featured" />
          </div>
        </div>
        <div className="recent-posts mt-3">
          <h3 className="recent-posts-title">پست های اخیر</h3>
          <div className="row">
            {blogs.slice(0, 8).map((b, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-3">
                <BlogCard data={b} type="column" />
              </div>
            ))}
          </div>
          <div className="main-wrapper">
            <div className="row">
              <article className="col-12 col-lg-8">
                <BlogCard data={data[0]} type="featured" />
                <div className="row">
                  {blogs.slice(0, 6).map((b, i) => (
                    <div className="col-12 col-lg-6" key={i}>
                      <BlogCard type="column" data={b} />
                    </div>
                  ))}
                </div>
              </article>
              <aside className="col-12 col-lg-4">
                <h3>بیشترین بازدید</h3>
                {blogs.slice(0, 4).map((b, i) => (
                  <div className="col-12 " key={i}>
                    <BlogCard type="row-without-badge" data={b} />
                  </div>
                ))}
                <div className="py-3">
                  <BlogCard data={data[0]} type="featured" />
                </div>
                <div className="py-3">
                  <BlogCard data={data[1]} type="featured" />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BlogScreen;
