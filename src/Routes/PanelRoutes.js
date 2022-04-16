import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import UserContextProvider from "../AdminPanel/context/UserContextProvider";
import ProductsContextProvider from "../AdminPanel/context/ProductsContextProvider";
import BlogContextProvider from "../AdminPanel/context/BlogContextProvider";
import store from "../AdminPanel/store";
import ProtectedRoute from "../AdminPanel/components/ProtectedRoute";
import routes from "../AdminPanel/routes";
import Dashboard from "../AdminPanel/views/dashboard/Dashboard";
export default function PanelRoutes() {
  // Containers
  const DefaultLayout = React.lazy(() =>
    import("../AdminPanel/layout/DefaultLayout")
  );

  // Pages

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
  console.log(typeof ProtectedRoute);
  console.log(typeof Route);

  return (
    <Suspense fallback={loading}>
      <Provider store={store}>
        <UserContextProvider>
          <ProductsContextProvider>
            <BlogContextProvider>
              <Routes>
                <Route path="/" element={<DefaultLayout />} />
                <Route path="404" name="Page 404" element={<Page404 />} />
                <Route path="500" name="Page 500" element={<Page500 />} />
                <Route path="/*" name="dashboard" element={<DefaultLayout />}>
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
                </Route>
              </Routes>
            </BlogContextProvider>
          </ProductsContextProvider>
        </UserContextProvider>
      </Provider>
    </Suspense>
  );
}

// <Route path="administrator" element={<AdminPanel />}>
// {/* <Route path="*" element={<Navigate to="dashboard" replace />} /> */}
// </Route>
