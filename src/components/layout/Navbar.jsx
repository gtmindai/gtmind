import { useEffect, useState } from "react";
import { NAV_LINKS } from "../../data/home";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { CloseIcon, MenuIcon } from "../ui/Icons";
import Wordmark from "../ui/Wordmark";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 8);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 lg:pt-4">
      <Container>
        <div
          className={`flex h-14 items-center gap-4 rounded-full border bg-white/80 pr-2 pl-5 backdrop-blur-md backdrop-saturate-150 transition-[border-color,box-shadow] duration-300 lg:h-[60px] lg:gap-6 lg:pl-6 ${
            scrolled || menuOpen ? "border-line shadow-float" : "border-line/70"
          }`}
        >
          <Wordmark />

          <nav aria-label="Primary" className="mx-auto hidden gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-[14.5px] font-medium text-ink-muted transition-colors duration-200 hover:bg-surface-soft hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <Button booking size="sm" className="rounded-full!">
              Book a meeting
            </Button>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="grid size-10 cursor-pointer place-items-center rounded-full border border-line-strong lg:hidden"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            aria-label="Mobile"
            className="mt-2 animate-fade-up rounded-3xl border border-line bg-white px-4 py-2 shadow-float lg:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-line px-2 py-3.5 text-base font-medium last:border-b-0"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}
