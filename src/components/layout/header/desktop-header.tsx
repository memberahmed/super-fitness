import ArrowIconRight from "@/components/common/right-arrow-icon/ArrowIconRight";
import { Link, NavLink } from "react-router-dom";

export default function DesktopHeader() {
  // Navigation links
  const nanLinks = [
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

  // Function to handle active class styles
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-bold text-base ${isActive ? "text-flame" : "text-foreground"}`;

  return (
    <header className="hidden lg:flex z-10 items-center justify-between mx-20 top-10 left-0 right-0 absolute font-baloo">
      {/* Logo */}
      <Link to="/">
        <img
          src="/src/assets/images/logo.svg"
          className="w-[87px] h-14 object-contain"
          alt="logo"
        />
      </Link>

      {/* Navigation Links */}
      <nav className="flex items-center gap-4 text-xl font-bold">
        {nanLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.link}
            className={({ isActive }) => getNavLinkClass({ isActive })}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      {/* Authentication buttons */}
      <div className="flex gap-5 items-center text-base font-bold">
        {/* Login Button */}
        <button className="relative min-w-20 min-h-11 bg-flame text-white px-4 py-2 rounded-full text-base font-bold text-background transition-all duration-300 flex items-center uppercase">
          login
          <div className="mr-1">
            <ArrowIconRight />
          </div>
        </button>

        {/* Sign Up Button */}
        <button className="relative min-w-20 min-h-11 border-2 border-flame px-4 py-2 rounded-full text-base font-bold text-flame transition-all duration-300 flex items-center uppercase">
          sign up
          <div className="mr-1">
            <ArrowIconRight />
          </div>
        </button>
      </div>
    </header>
  );
}
