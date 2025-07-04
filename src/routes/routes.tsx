import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Register, Layout } from "../app/index";
import ProdectRoute from "../components/common/ProdectRoute";
import { Suspense } from "react";
import PagesLoader from "@/components/common/pages-loader/pages-loader";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: (
      <Suspense fallback={<PagesLoader />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<PagesLoader />}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<PagesLoader />}>
        <Layout />
      </Suspense>
    ),

    children: [
      {
        index: true,
        element: (
          <ProdectRoute>
            <Suspense fallback={<PagesLoader />}>
              <Home />
            </Suspense>
          </ProdectRoute>
        ),
      },
    ],
  },
]);
