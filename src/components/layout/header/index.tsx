import { NavLink } from "react-router-dom";
import { t } from "i18next";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 container mx-auto">
      {/* Logo */}
      <img src="/src/assets/images/logo.svg" className="w-16" alt="logo" />

      {/* Navigation */}
      <nav className="flex items-center gap-4">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-primary font-bold " : "font-bold")}
        >
          {t("Home")}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-primary font-bold " : "font-bold")}
        >
          {t("About")}
        </NavLink>
        <NavLink
          to="/classes"
          className={({ isActive }) => (isActive ? "text-primary font-bold " : "font-bold")}
        >
          {t("Classes")}
        </NavLink>
        <NavLink
          to="/healthy"
          className={({ isActive }) => (isActive ? "text-primary font-bold " : "font-bold")}
        >
          {t("Healthy")}
        </NavLink>
      </nav>

      {/* Authentication buttons */}
      <div className="flex items-center gap-3">
        <button className="py-2 px-3 uppercase  bg-primary text-white rounded-full font-semibold text-xs">
          {t("login")}
        </button>
        <button className="py-2 px-3 uppercase  bg-transparent border border-primary font-semibold text-xs text-primary rounded-full ">
          {t("sign up")}
        </button>
      </div>
    </header>
  );
}
