import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { applyHead } from "../../seo/head";
import { getMeta } from "../../seo/meta";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  const { pathname } = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    // A prerendered page already ships the right <head> (scripts/prerender.js);
    // only client-side navigations need it swapped.
    if (firstRender.current) {
      firstRender.current = false;
      if (document.head.querySelector("[data-head]")) return;
    }
    window.scrollTo({ top: 0, behavior: "instant" });
    applyHead(getMeta(pathname));
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
