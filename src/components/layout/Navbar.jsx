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
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white/85 backdrop-blur-md backdrop-saturate-150 transition-colors duration-300 ${
        scrolled || menuOpen ? "border-line" : "border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center gap-4 lg:h-[68px] lg:gap-7">
        <Wordmark />

        <nav aria-label="Primary" className="ml-3 hidden gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-[14.5px] font-medium text-ink-muted transition-colors duration-200 hover:bg-surface-soft hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2.5">
          <Button booking size="sm">
            Book a meeting
          </Button>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-10 cursor-pointer place-items-center rounded-[10px] border border-line-strong lg:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <nav aria-label="Mobile" className="border-t border-line bg-white lg:hidden">
          <Container className="pt-2 pb-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-line px-1 py-3.5 text-base font-medium last:border-b-0"
              >
                {link.label}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
