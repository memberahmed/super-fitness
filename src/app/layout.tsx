import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      {/* Application Content */}
      <Header />
      <main className="container mx-auto p-4 bg-red-200 dark:bg-green-200 ">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
