import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Register, Layout } from "../app/index";
import ProdectRoute from "../components/common/ProdectRoute";
import { Suspense } from "react";

export const routes = createBrowserRouter([
  {
    path: "/register",
    element: (
      <Suspense fallback={<h1>Loading.......</h1>}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<h1>Loading.......</h1>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<h1>Loading.......</h1>}>
        <Layout />
      </Suspense>
    ),

    children: [
      {
        index: true,
        element: (
          <ProdectRoute>
            <Suspense fallback={<h1>Loading.......</h1>}>
              <Home />
            </Suspense>
          </ProdectRoute>
        ),
      },
    ],
  },
]);
