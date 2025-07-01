import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Register, Layout } from "../app/index";
import { Suspense } from "react";
import AboutPage from "../app/About/about";
import ProtectedRoute from "../components/common/ProdectRoute";
import ClassesPage from "@/app/Classes/classes";
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
          <ProtectedRoute>
            <Suspense fallback={<h1>Loading.......</h1>}>
              <Home />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "about",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<h1>Loading.......</h1>}>
              <AboutPage />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "classes",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<h1>Loading.......</h1>}>
              <ClassesPage />
            </Suspense>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
