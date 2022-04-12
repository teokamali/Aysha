import React, { useContext } from "react";
import Ring3 from "../assets/image/ring3.png";
import Ring2 from "../assets/image/ring2.png";
import { BlogContext } from "../context/BlogContextProvider";
import "./BlogScreen.scss";
import BlogCard from "../components/BlogCard/BlogCard";
import { Link } from "react-router-dom";
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
      category: "2طلا و جواهرات",
      _id: "/",
    },
  ];
  const categories = [
    { name: "طلا", id: 1, reletivePosts: 120, url: "/" },
    { name: "نقره", id: 2, reletivePosts: 420, url: "/" },
    { name: "بدلیجات", id: 3, reletivePosts: 50, url: "/" },
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
                <div className="row mt-3">
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
            <div className="mt-4">
              <h3 className="text-center py-3 text-bold">پست های پیشنهادی</h3>
              <div className="row">
                {blogs.slice(0, 3).map((b, i) => (
                  <div key={i} className="col-12 col-lg-4">
                    <BlogCard type="column" data={b} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 row">
              <article className="col-12 col-lg-8">
                <div className="row">
                  {data.map((b, i) => (
                    <div className="col-12 col-lg-6" key={i}>
                      <BlogCard type="row" data={b} />
                    </div>
                  ))}
                </div>
              </article>
              <aside className="col-12 col-lg-4">
                <h3>دسته بندی ها</h3>
                <ul className="col-12 category-list">
                  {categories.map((b) => (
                    <li className="category-item" key={b.id}>
                      <Link to={b.url} className="category-link">
                        <span className="category-title">{b.name}</span>
                        <span className="badge category-relative-post">
                          {b.reletivePosts}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BlogScreen;
