import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import Providers from "@/components/providers";
import { useEffect } from "react";
import i18n from "./lib/utils/i18n";

export default function App() {
  const { lang, direction, theme } = localStorage;
  useEffect(() => {
    if (lang && direction) {
      i18n.changeLanguage(lang);
      document.body.style.direction = direction;
      document.body.classList.add(lang);
    } else {
      localStorage.lang = "en";
      localStorage.direction = "ltr";
    }
    if (!theme) {
      localStorage.theme = "light";
    }
  }, []);

  return (
    <Providers>
      <div className={`${theme == "dark" && "dark"}`}>
        <RouterProvider router={routes} />
      </div>
    </Providers>
  );
}
