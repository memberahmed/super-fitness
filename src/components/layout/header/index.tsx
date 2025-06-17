import { NavLink } from "react-router-dom";
import { t } from "i18next";
import ThemeToggle from "@/components/features/toggle-dark-mode/theme-toggle";
import { Button } from "@/components/ui/button";
import ArrowIconRight from "@/components/common/right-arrow-icon/ArrowIconRight";
import LangToggle from "@/components/features/toggle-lang/lang-toggle";

export default function Header() {
  return (
    <header className="fixed top-10 inset-x-0 z-50 flex items-center justify-between p-4 container mx-auto font-baloo dark:text-cloudy ">
      {/* Logo */}
      <img src="/src/assets/images/logo.svg" className="w-16" alt="logo" />

      {/* Navigation */}
      <nav className="flex items-center gap-6 text-charcoal dark:text-cloudy text-xl">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-flame font-bold" : "font-bold")}
        >
          {t("Home")}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-primary font-bold" : "font-bold")}
        >
          {t("About")}
        </NavLink>
        <NavLink
          to="/classes"
          className={({ isActive }) => (isActive ? "text-primary font-bold" : "font-bold")}
        >
          {t("Classes")}
        </NavLink>
        <NavLink
          to="/healthy"
          className={({ isActive }) => (isActive ? "text-primary font-bold" : "font-bold")}
        >
          {t("Healthy")}
        </NavLink>
      </nav>

      {/* Authentication & Toggle buttons */}
      <div className="flex items-center gap-8">
        <Button variant="flame" size="flameLg">
          {t("login")}
          <ArrowIconRight />
        </Button>
        <Button variant="flameOutline" size="flameLg">
          {t("sign up")}
          <ArrowIconRight />
        </Button>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Language Toggle */}
        <LangToggle />
      </div>
    </header>
  );
}
