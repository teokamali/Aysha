import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomeScrean from "../Screen/HomeScrean";
import AdminPanel from "../Screen/AdminPanel";
import routes from "../AdminPanel/routes";
import FAQScreen from "../Screen/FAQScreen";
import AboutUs from "../Screen/AboutUs";

// Containers
const DefaultLayout = React.lazy(() =>
  import("../AdminPanel/layout/DefaultLayout")
);

// Pages
const Login = React.lazy(() => import("../AdminPanel/views/pages/login/Login"));
const Register = React.lazy(() =>
  import("../AdminPanel/views/pages/register/Register")
);
const Page404 = React.lazy(() =>
  import("../AdminPanel/views/pages/page404/Page404")
);
const Page500 = React.lazy(() =>
  import("../AdminPanel/views/pages/page500/Page500")
);

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={loading}>
      <Routes>
        <Route path="/" element={<HomeScrean />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="faq" element={<FAQScreen />} />
        <Route path="administrator" element={<AdminPanel />}>
          <Route path="login" name="Login Page" element={<Login />} />
          <Route path="register" name="Register Page" element={<Register />} />
          <Route path="404" name="Page 404" element={<Page404 />} />
          <Route path="500" name="Page 500" element={<Page500 />} />
          <Route path="*" name="dashboard" element={<DefaultLayout />}>
            {routes.map((route, idx) => {
              return (
                route.element && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element={<route.element />}
                  />
                )
              );
            })}
            <Route path="*" element={<Navigate to="dashboard" replace />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
