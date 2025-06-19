import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/images/logo.svg";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import ThemeToggle from "@/components/features/toggle-dark-mode/theme-toggle";
import LangToggle from "@/components/features/toggle-lang/lang-toggle";

export default function MobileHeader() {
  // Translation
  const { t } = useTranslation();

  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    {
      id: 1,
      name: t("Home"),
      link: "/",
    },
    {
      id: 2,
      name: t("About"),
      link: "/about",
    },
    {
      id: 3,
      name: t("Classes"),
      link: "/classes",
    },
    {
      id: 4,
      name: t("Healthy"),
      link: "/healthy",
    },
  ];

  // Functions
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="lg:hidden flex z-50 items-center justify-between mx-5 top-5 left-0 right-0 absolute font-baloo">
      {/* Logo */}
      <Link to="/" onClick={closeMenu}>
        <img src={logo} className="w-[87px] h-14 object-contain" alt="logo" />
      </Link>

      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Lang Toggle */}
        <LangToggle />

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="w-12 h-12 bg-flame text-white rounded-full flex items-center justify-center"
        >
          <Menu size={25} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={closeMenu} />}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-auto w-80 bg-surface shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Menu Header with Logo */}
        <div className="flex items-center justify-between mx-auto mt-6 mb-4">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} className="w-[87px] mx-4 h-14 object-contain" alt="logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col px-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.link}
              className="mb-4 font-baloo font-bold text-xl text-foreground"
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Login Button */}
        <Button
          onClick={closeMenu}
          variant={"flame"}
          className="w-[90%] mt-10 min-h-12 mx-auto px-5 py-3 flex items-center justify-center uppercase "
        >
          {t("login")}
        </Button>

        {/* Sign Up Button */}
        <Button
          onClick={closeMenu}
          variant={"flameOutline"}
          className="w-[90%] min-h-12 mt-3 mb-6 mx-auto px-5 py-3 flex items-center justify-center uppercase "
        >
          {t("sign-up")}
        </Button>
      </div>
    </header>
  );
}
