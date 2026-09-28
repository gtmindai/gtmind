import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SITE } from "../../config/site";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.append(canonical);
    }
    canonical.href = `${SITE.url}${pathname}`;
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main id="top">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
