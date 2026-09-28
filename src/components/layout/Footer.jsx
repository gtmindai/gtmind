import { Link } from "react-router-dom";
import { SITE } from "../../config/site";
import { AGENTS, FOOTER_COLUMNS, NAV_LINKS } from "../../data/home";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { ArrowUpIcon, LinkedInIcon, XIcon, YouTubeIcon } from "../ui/Icons";
import Wordmark from "../ui/Wordmark";

const SOCIALS = [
  { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
  { label: "X", href: "#", Icon: XIcon },
  { label: "YouTube", href: "#", Icon: YouTubeIcon },
];

const linkClass =
  "cursor-pointer text-left text-sm text-ink-muted transition-colors duration-200 hover:text-ink sm:text-[14.5px]";

function FooterColumn({ title, children }) {
  return (
    <nav aria-label={title}>
      <h5 className="mt-1.5 mb-4 text-xs font-semibold tracking-[0.14em] text-ink-subtle uppercase">{title}</h5>
      <ul className="grid gap-3">{children}</ul>
    </nav>
  );
}

function showAgent(index) {
  document.getElementById("agents")?.scrollIntoView();
  window.dispatchEvent(new CustomEvent("select-agent", { detail: index }));
}

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-line bg-surface">
      <Container>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 pt-14 pb-12 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-[1.35fr_repeat(4,1fr)] lg:pt-[88px]">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Wordmark className="text-[28px] sm:text-[30px]" />
            <p className="mt-3.5 max-w-[34ch] text-sm leading-relaxed text-ink-muted sm:text-[14.5px]">
              The GTM brain for B2B teams. One model of your brand, search, content and pipeline — and the agents that
              act on it.
            </p>
            <Button booking size="sm" arrow className="mt-6">
              Book a meeting
            </Button>
          </div>

          <FooterColumn title="Product">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Agents">
            {AGENTS.map((agent, i) => (
              <li key={agent.key}>
                <button type="button" onClick={() => showAgent(i)} className={linkClass}>
                  {agent.name}
                </button>
              </li>
            ))}
          </FooterColumn>

          {FOOTER_COLUMNS.map((column) => (
            <FooterColumn key={column.title} title={column.title}>
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.to ? (
                    <Link to={link.to} className={linkClass}>
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.booking ? SITE.calUrl : link.href}
                      {...(link.booking && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      className={linkClass}
                    >
                      {link.label}
                      {link.soon && (
                        <span className="ml-2 rounded-full border border-line px-1.75 py-px align-[1px] text-[10.5px] font-semibold tracking-[0.06em] text-ink-subtle uppercase">
                          Soon
                        </span>
                      )}
                    </a>
                  )}
                </li>
              ))}
            </FooterColumn>
          ))}
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="pointer-events-none mb-[-0.12em] text-center font-serif text-[96px] leading-[0.78] font-normal tracking-[-0.045em] text-surface-soft select-none sm:text-[160px] lg:text-[240px] xl:text-[320px]"
      >
        {SITE.name}
      </div>

      <Container>
        <div className="flex flex-col items-start gap-4 pt-5 pb-7 text-[13px] text-ink-subtle sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6">
          <span>
            © {new Date().getFullYear()} {SITE.name} · {SITE.domain}. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5">
            <span>Figures shown are illustrative.</span>
            <a href="#top" className="inline-flex items-center gap-1.5 text-ink-muted hover:text-ink">
              Back to top
              <ArrowUpIcon size={12} />
            </a>
          </div>
          <div className="flex gap-2">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid size-10 place-items-center rounded-[10px] border border-line text-ink-muted transition-colors duration-200 hover:border-line-strong hover:text-ink sm:size-9"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
