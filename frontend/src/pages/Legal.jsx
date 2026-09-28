import { NavLink } from "react-router-dom";
import Container from "../components/ui/Container";
import { EYEBROW } from "../components/ui/typography";
import { SITE } from "../config/site";
import { LEGAL_PAGES, LEGAL_UPDATED } from "../data/legal";

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function WithEmail({ text }) {
  const parts = text.split(SITE.email);
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && (
        <a href={`mailto:${SITE.email}`} className="font-medium text-primary underline-offset-4 hover:underline">
          {SITE.email}
        </a>
      )}
    </span>
  ));
}

function Block({ item }) {
  if (typeof item === "string") {
    return (
      <p>
        <WithEmail text={item} />
      </p>
    );
  }
  return (
    <ul className="grid list-disc gap-2 pl-5 marker:text-ink-subtle">
      {item.list.map((entry) => (
        <li key={entry} className="pl-1">
          <WithEmail text={entry} />
        </li>
      ))}
    </ul>
  );
}

export default function Legal({ slug }) {
  const page = LEGAL_PAGES.find((p) => p.slug === slug);

  return (
    <section className="pt-28 pb-20 sm:pt-36 lg:pt-40 lg:pb-28">
      <Container>
        <header className="max-w-180">
          <p className={`${EYEBROW} text-primary`}>Legal</p>
          <h1 className="mt-4 font-serif text-[40px] leading-[1.08] font-normal tracking-[-0.018em] text-balance sm:text-[48px] lg:text-[56px]">
            {page.title}
          </h1>
          <p className="mt-4 text-base leading-[1.7] text-pretty text-ink-muted lg:text-lg">{page.lede}</p>
          <p className="mt-5 text-[13px] text-ink-subtle">Last updated {LEGAL_UPDATED}</p>
        </header>

        <div className="mt-12 grid gap-10 border-t border-line pt-10 lg:mt-16 lg:grid-cols-[220px_1fr] lg:gap-16 lg:pt-14">
          <aside>
            <nav aria-label="Legal" className="flex flex-wrap gap-2 lg:sticky lg:top-28 lg:flex-col lg:gap-1">
              {LEGAL_PAGES.map((p) => (
                <NavLink
                  key={p.slug}
                  to={`/${p.slug}`}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 lg:px-3.5 ${
                      isActive
                        ? "bg-surface-soft text-ink"
                        : "text-ink-muted hover:bg-surface-soft hover:text-ink max-lg:border max-lg:border-line"
                    }`
                  }
                >
                  {p.label}
                </NavLink>
              ))}
            </nav>
          </aside>

          <article className="max-w-[68ch]">
            {page.sections.map((section) => (
              <section key={section.heading} id={slugify(section.heading)} className="scroll-mt-28 not-first:mt-10">
                <h2 className="font-serif text-2xl font-normal tracking-[-0.01em] sm:text-[28px]">{section.heading}</h2>
                <div className="mt-3.5 grid gap-4 text-[15px] leading-[1.75] text-ink-muted sm:text-base">
                  {section.body.map((item, i) => (
                    <Block key={i} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </Container>
    </section>
  );
}
