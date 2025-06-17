import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      {/* Application Content */}
      <Header />
      <main className="">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
