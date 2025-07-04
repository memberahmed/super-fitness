import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Register, Layout, OtpCodeForm, ForgetPassword } from "../app/index";
import ProdectRoute from "../components/common/ProdectRoute";
import { Suspense } from "react";
import PagesLoader from "@/components/common/pages-loader/pages-loader";
import CreateNewPassword from "@/components/features/components/create-new-password";

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
    path: "/otp-code",
    element: (
      <Suspense fallback={<PagesLoader />}>
        <OtpCodeForm />
      </Suspense>
    ),
  },
  {
    path: "/forget-password",
    element: (
      <Suspense fallback={<PagesLoader />}>
        <ForgetPassword />
      </Suspense>
    ),
  },

  {
    path: "/create-New-Password",
    element: (
      <Suspense fallback={<PagesLoader />}>
        <CreateNewPassword />
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
