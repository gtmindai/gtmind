import { HERO_NOTES, HERO_RESULT_POINTS, HERO_SETUP_POINTS } from "../../data/home";
import Button from "../ui/Button";
import Marker from "../ui/Marker";
import Reveal from "../ui/Reveal";

const TILTS = {
  left: "-rotate-[1.4deg]",
  right: "rotate-[1.1deg]",
};

function TiltCard({ tilt, delay, icon, title, children }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className={`group rounded-[28px] border border-line bg-surface p-[clamp(28px,3.2vw,44px)] shadow-card hover:-translate-y-1 hover:rotate-0 hover:shadow-lift ${TILTS[tilt]}`}
    >
      <div className="flex items-start gap-[18px]">
        {icon}
        <h3 className="mt-1 text-[clamp(24px,2.5vw,34px)] leading-[1.18] font-semibold tracking-[-0.03em]">{title}</h3>
      </div>
      {children}
    </Reveal>
  );
}

function ChecklistTile() {
  return (
    <div aria-hidden="true" className="grid size-[76px] flex-none place-items-center rounded-[18px] border border-line bg-white shadow-tile">
      <svg width="44" height="34" viewBox="0 0 44 34" fill="none">
        <circle cx="4" cy="5" r="3" fill="#F59E0B" />
        <rect x="12" y="3.5" width="30" height="3" rx="1.5" fill="#D9DBE2" />
        <circle cx="4" cy="17" r="3" fill="#2FA86B" />
        <rect x="12" y="15.5" width="26" height="3" rx="1.5" fill="#D9DBE2" />
        <circle cx="4" cy="29" r="3" fill="#E0514F" />
        <rect x="12" y="27.5" width="30" height="3" rx="1.5" fill="#D9DBE2" />
      </svg>
    </div>
  );
}

function RankedTile() {
  return (
    <div aria-hidden="true" className="w-[76px] flex-none overflow-hidden rounded-[14px] border border-line bg-white text-center shadow-tile">
      <b className="block bg-success-soft py-1 text-[10px] tracking-[0.16em] text-success-deep">RANKED</b>
      <span className="block pt-[9px] pb-[11px] text-[22px] font-semibold tracking-[-0.02em]">#1</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="pt-[clamp(128px,15vw,184px)] pb-[clamp(40px,6vw,72px)]">
      <div className="mx-auto max-w-page px-gutter">
        <div className="text-center">
          <Reveal as="p" className="text-eyebrow uppercase text-primary">
            The GTM brain
          </Reveal>
          <Reveal as="h1" delay={1} className="font-serif text-display text-balance mt-[22px]">
            Every source. One brain.
            <br />A number on every play.
          </Reveal>
          <Reveal as="p" delay={2} className="mx-auto max-w-[60ch] text-lede text-pretty mt-[22px] text-ink-muted">
            It reads your CRM, your analytics and your search data together, learns how your company actually wins, and
            hands you a ranked list of plays — each one a specific job, with the revenue attached.
          </Reveal>
          <Reveal delay={3} className="mt-[34px] flex flex-wrap justify-center gap-3">
            <Button booking arrow>
              Book a meeting
            </Button>
            <Button href="#how" variant="line">
              See how it works
            </Button>
          </Reveal>
          <Reveal as="p" className="mt-[18px] flex flex-wrap justify-center gap-x-[18px] gap-y-1.5 text-[13.5px] text-ink-subtle">
            {HERO_NOTES.map((note) => (
              <span
                key={note}
                className="inline-flex items-center gap-[7px] before:size-[5px] before:rounded-full before:bg-line-strong before:content-['']"
              >
                {note}
              </span>
            ))}
          </Reveal>
        </div>

        <div className="mx-auto max-w-narrow mt-[clamp(56px,7vw,92px)] grid gap-[clamp(18px,2.4vw,32px)] lg:grid-cols-2">
          <TiltCard
            tilt="left"
            icon={<ChecklistTile />}
            title={
              <>
                Three connections and <Marker>one afternoon.</Marker>
              </>
            }
          >
            <ul className="mt-[30px] divide-y divide-dashed divide-line-strong">
              {HERO_SETUP_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-4 py-4 text-[17px] font-medium tracking-[-0.01em] before:size-[9px] before:flex-none before:rounded-full before:bg-accent before:content-[''] max-[560px]:text-[15.5px]"
                >
                  {point}
                </li>
              ))}
            </ul>
          </TiltCard>

          <TiltCard
            tilt="right"
            delay={1}
            icon={<RankedTile />}
            title={
              <>
                What comes back: <Marker>a list of plays.</Marker>
              </>
            }
          >
            <div className="mt-7 grid gap-[22px]">
              {HERO_RESULT_POINTS.map((point) => (
                <div
                  key={point.text}
                  style={{ "--c": point.color }}
                  className="relative pl-[26px] text-[17px] leading-normal font-medium tracking-[-0.01em] before:absolute before:inset-y-[3px] before:left-0 before:w-1 before:rounded before:bg-(--c) before:content-[''] max-[560px]:text-[15.5px]"
                >
                  {point.text}
                </div>
              ))}
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
