import Providers from "@/components/providers";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Providers>
        {/* Application Content */}
        <header className="text-center pt-4">
          <nav>NavBar</nav>
        </header>

        <main className="container mx-auto p-4">
          <Outlet />
        </main>

        <footer className="text-center">This is a footer</footer>
      </Providers>
    </>
  );
}
