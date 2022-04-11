import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getBlog } from "../services/api";
export const BlogContext = createContext({});
function BlogContextProvider({ children }) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get(getBlog)
      .then((res) => res.data)
      .then((data) => setBlogs(data.blogs));
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  );
}

export default BlogContextProvider;
