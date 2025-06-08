import { MoveUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Header() {
  // Function to handle NavLink className
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-bold text-base ${isActive ? "text-orange-500" : "text-black"}`;

  return (
    <header className="flex items-center justify-between mt-5 mx-20">
      {/* Logo */}
      <img src="/src/assets/images/logo.svg" className="w-[87px] h-14 object-contain" alt="logo" />

      {/* Navigation */}
      <nav className="flex items-center gap-4">
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={getNavLinkClass}>
          About
        </NavLink>
        <NavLink to="/classes" className={getNavLinkClass}>
          Classes
        </NavLink>
        <NavLink to="/healthy" className={getNavLinkClass}>
          Healthy
        </NavLink>
      </nav>

      {/* Authentication buttons */}
      <div className="flex gap-5 items-center">
        {/* Login Button */}
        <button className="relative min-w-20 min-h-11 bg-orange-600  text-white px-4 py-2 rounded-full text-base font-bold transition-all duration-300 flex items-center uppercase">
          login
          <span className="absolute -right-5">
            <div className="w-9 h-9 rounded-full bg-orange-600 border-[3px] border-white flex items-center justify-center">
              <MoveUpRight size={16} className="text-white" />
            </div>
          </span>
        </button>

        {/* Sign Up Button */}
        <button className="relative min-w-20 min-h-11 border-2 border-orange-600 px-4 py-2 rounded-full text-base font-bold text-black transition-all duration-300 flex items-center uppercase">
          sign up
          <span className="absolute -right-5">
            <div className="w-9 h-9 rounded-full bg-orange-600 border-[3px] border-white flex items-center justify-center">
              <MoveUpRight size={16} className="text-white" />
            </div>
          </span>
        </button>
      </div>
    </header>
  );
}
