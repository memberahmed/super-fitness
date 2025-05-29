import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      {/* Logo */}
      <img src="/src/assets/images/logo.svg" className="w-16" alt="logo" />

      {/* Navigation */}
      <nav className="flex items-center gap-4">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          About
        </NavLink>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Classes
        </NavLink>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Healthy
        </NavLink>
      </nav>

      {/* Authentication buttons */}
      <div>
        <button>login</button>
        <button>sign up</button>
      </div>
    </header>
  );
}
