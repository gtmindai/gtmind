import { AGENTS, FOOTER_COLUMNS, NAV_LINKS } from "../../data/home";
import { SITE } from "../../config/site";
import Button from "../ui/Button";
import { ArrowUpIcon, LinkedInIcon, XIcon, YouTubeIcon } from "../ui/Icons";
import Wordmark from "../ui/Wordmark";

const SOCIALS = [
  { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
  { label: "X", href: "#", Icon: XIcon },
  { label: "YouTube", href: "#", Icon: YouTubeIcon },
];

const linkClass = "cursor-pointer text-left text-[14.5px] text-ink-muted transition-colors duration-200 hover:text-ink";

function FooterColumn({ title, children }) {
  return (
    <nav aria-label={title}>
      <h5 className="mt-1.5 mb-4 text-xs font-semibold tracking-[0.14em] text-ink-subtle uppercase">{title}</h5>
      <ul className="grid gap-[11px]">{children}</ul>
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
      <div className="mx-auto max-w-page px-gutter">
        <div className="grid grid-cols-2 gap-x-5 gap-y-9 pt-[clamp(56px,7vw,88px)] pb-12 sm:gap-x-8 sm:gap-y-10 min-[1001px]:grid-cols-[1.35fr_repeat(4,1fr)]">
          <div className="col-span-full min-[1001px]:col-span-1">
            <Wordmark className="text-[30px]" />
            <p className="mt-3.5 max-w-[34ch] text-[14.5px] leading-relaxed text-ink-muted">
              The GTM brain for B2B teams. One model of your brand, search, content and pipeline — and the agents that
              act on it.
            </p>
            <Button booking size="sm" arrow className="mt-6">
              Book a meeting
            </Button>
            <div className="mt-[22px] grid gap-2 text-[13.5px] text-ink-subtle">
              <span className="inline-flex items-center gap-[9px]">
                <i className="size-1.5 rounded-full bg-success shadow-[0_0_0_3px_rgb(47_168_107/0.14)]" />
                Taking new teams this quarter
              </span>
              <span>Read-only · Reversible by design</span>
            </div>
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
                  <a
                    href={link.booking ? SITE.calUrl : link.href}
                    {...(link.booking && { target: "_blank", rel: "noopener noreferrer" })}
                    className={linkClass}
                  >
                    {link.label}
                    {link.soon && (
                      <span className="ml-2 rounded-full border border-line px-[7px] py-px align-[1px] text-[10.5px] font-semibold tracking-[0.06em] text-ink-subtle uppercase">
                        Soon
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </FooterColumn>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none mb-[-0.12em] text-center font-serif text-[clamp(96px,22vw,320px)] leading-[0.78] font-normal tracking-[-0.045em] text-surface-soft select-none"
      >
        {SITE.name}
      </div>

      <div className="mx-auto max-w-page px-gutter">
        <div className="flex flex-col items-start justify-between gap-x-6 gap-y-3.5 border-t border-line pt-[22px] pb-7 text-[13px] text-ink-subtle min-[481px]:flex-row min-[481px]:flex-wrap min-[481px]:items-center">
          <span>
            © {new Date().getFullYear()} {SITE.name} · {SITE.domain}. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-x-[22px] gap-y-1.5">
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
                className="grid size-9 place-items-center rounded-[10px] border border-line text-ink-muted transition-colors duration-200 hover:border-line-strong hover:text-ink"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
