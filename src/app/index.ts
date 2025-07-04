import { lazy } from "react";

// Auth pages
export const Login = lazy(() => import("../components/features/components/login-form"));
export const Register = lazy(() => import("../components/features/components/register-form"));
export const ForgetPassword = lazy(() => import("../components/features/components/forget-password-form"))
export const OtpCodeForm = lazy(() => import("../components/features/components/otp-code-form"));
export const createNewPassword = lazy(() => import("../components/features/components/create-new-password"));

// Main pages
export const Layout = lazy(() => import("./layout"));
export const Home = lazy(() => import("./Home"));
