import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Page404 from "../AdminPanel/views/pages/page404/Page404";
import Layout from "../layout/Layout";
import HomeScrean from "../Screen/HomeScrean";
import BlogScreen from "../Screen/BlogScreen";
export default function WebsiteRoutes() {
  const location = useLocation();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeScrean />} />
        <Route path="blogs" element={<BlogScreen />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Layout>
  );
}
