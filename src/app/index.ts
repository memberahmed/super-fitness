import { lazy } from "react";

// Auth pages
export const Login = lazy(() => import("./Auth/Login"));
export const Register = lazy(() => import("./Auth/Register"));

// Main pages
export const Layout = lazy(() => import("./layout"));
export const Home = lazy(() => import("./Home"));
