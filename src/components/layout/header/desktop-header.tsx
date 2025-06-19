import ArrowIconRight from "@/components/common/right-arrow-icon/ArrowIconRight";
import ThemeToggle from "@/components/features/toggle-dark-mode/theme-toggle";
import LangToggle from "@/components/features/toggle-lang/lang-toggle";
import { Button } from "@/components/ui/button";
import i18n from "@/lib/utils/i18n";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

export default function DesktopHeader() {
  //Translation
  const { t } = useTranslation();

  // Navigation links
  const nanLinks = [
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

      {/* Header buttons */}
      <div className="flex gap-5 items-center text-base font-bold">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Language Toggle */}
        <LangToggle />

        {/* Login Button */}
        <Button
          variant={"flame"}
          size={"default"}
          className={`relative min-w-20 min-h-11 flex items-center gap-2 uppercase ${
            i18n.dir() === "rtl" ? "flex-row-reverse" : ""
          }`}
        >
          {t("login")}
          <div>
            <ArrowIconRight />
          </div>
        </Button>

        {/* Sign Up Button */}
        <Button
          variant={"flameOutline"}
          size={"default"}
          className={`relative border-2 min-w-20 min-h-11 flex items-center gap-2 uppercase ${
            i18n.dir() === "rtl" ? "flex-row-reverse" : ""
          }`}
        >
          {t("sign-up")}
          <div>
            <ArrowIconRight />
          </div>
        </Button>
      </div>
    </header>
  );
}
