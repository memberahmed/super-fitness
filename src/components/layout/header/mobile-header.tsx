import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ArrowIconRight from "@/components/common/right-arrow-icon/ArrowIconRight";
import logo from "@/assets/images/logo.svg";

export default function MobileHeader() {
  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Classes",
      link: "/classes",
    },
    {
      id: 4,
      name: "Healthy",
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

      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="w-12 h-12 bg-flame text-white rounded-full flex items-center justify-center"
      >
        <Menu size={25} />
      </button>

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
        <button
          onClick={closeMenu}
          className="w-[90%] mt-10 min-h-12 mx-auto  bg-flame text-white px-5 py-3 rounded-full text-base font-bold flex items-center justify-center uppercase "
        >
          login
          <div className="ml-2">
            <ArrowIconRight />
          </div>
        </button>

        {/* Sign Up Button */}
        <button
          onClick={closeMenu}
          className="w-[90%] my-4 min-h-12 mx-auto border-2 border-flame px-6 py-3 rounded-full text-base font-bold text-flame flex items-center justify-center uppercase"
        >
          sign up
          <div className="ml-2">
            <ArrowIconRight />
          </div>
        </button>
      </div>
    </header>
  );
}
