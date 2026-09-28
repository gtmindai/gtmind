import checklistArt from "../../assets/illustrations/checklist.svg";
import { HERO_NOTES, HERO_RESULT_POINTS, HERO_SETUP_POINTS } from "../../data/home";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Marker from "../ui/Marker";
import Reveal from "../ui/Reveal";
import { DISPLAY, EYEBROW, LEDE } from "../ui/typography";

const TILTS = {
  left: "md:-rotate-[1.4deg]",
  right: "md:rotate-[1.1deg]",
};

const TILE = "flex-none border border-line bg-white shadow-tile";

function TiltCard({ tilt, delay, icon, title, children }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className={`group rounded-3xl border border-line bg-surface p-6 shadow-card hover:-translate-y-1 hover:shadow-lift sm:p-8 md:hover:rotate-0 lg:rounded-[28px] lg:p-11 ${TILTS[tilt]}`}
    >
      <div className="flex flex-col items-start gap-4 lg:flex-row lg:gap-[18px]">
        {icon}
        <h3 className="text-2xl leading-[1.18] font-semibold tracking-[-0.03em] sm:text-[28px] lg:mt-1 xl:text-[34px]">
          {title}
        </h3>
      </div>
      {children}
    </Reveal>
  );
}

function ChecklistTile() {
  return (
    <div aria-hidden="true" className={`${TILE} grid size-16 place-items-center rounded-2xl lg:size-[76px] lg:rounded-[18px]`}>
      <img src={checklistArt} alt="" className="w-9 lg:w-11" />
    </div>
  );
}

function RankedTile() {
  return (
    <div aria-hidden="true" className={`${TILE} w-16 overflow-hidden rounded-[14px] text-center lg:w-[76px]`}>
      <b className="block bg-success-soft py-1 text-[9px] tracking-[0.16em] text-success-deep lg:text-[10px]">RANKED</b>
      <span className="block pt-2 pb-2.5 text-lg font-semibold tracking-[-0.02em] lg:pt-[9px] lg:pb-[11px] lg:text-[22px]">
        #1
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="pt-28 pb-10 sm:pt-36 lg:pt-44 lg:pb-16">
      <Container>
        <div className="text-center">
          <Reveal as="p" className={`${EYEBROW} text-primary`}>
            The GTM brain
          </Reveal>
          <Reveal as="h1" delay={1} className={`${DISPLAY} mt-5`}>
            Every source. One brain. <br className="hidden sm:block" />A number on every play.
          </Reveal>
          <Reveal as="p" delay={2} className={`${LEDE} mt-5 text-ink-muted`}>
            It reads your CRM, your analytics and your search data together, learns how your company actually wins, and
            hands you a ranked list of plays — each one a specific job, with the revenue attached.
          </Reveal>
          <Reveal delay={3} className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button booking arrow className="w-full sm:w-auto">
              Book a meeting
            </Button>
            <Button href="#how" variant="line" className="w-full sm:w-auto">
              See how it works
            </Button>
          </Reveal>
          <Reveal
            as="p"
            className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-[13px] text-ink-subtle sm:gap-x-[18px] sm:text-[13.5px]"
          >
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

        <div className="mx-auto mt-14 grid max-w-narrow gap-5 sm:mt-16 md:grid-cols-2 md:gap-6 lg:mt-24 lg:gap-8">
          <TiltCard
            tilt="left"
            icon={<ChecklistTile />}
            title={
              <>
                Three connections and <Marker>one afternoon.</Marker>
              </>
            }
          >
            <ul className="mt-6 divide-y divide-dashed divide-line-strong lg:mt-[30px]">
              {HERO_SETUP_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-4 py-3.5 text-[15.5px] font-medium tracking-[-0.01em] before:size-[9px] before:flex-none before:rounded-full before:bg-accent before:content-[''] sm:py-4 sm:text-[17px]"
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
            <div className="mt-6 grid gap-5 lg:mt-7 lg:gap-[22px]">
              {HERO_RESULT_POINTS.map((point) => (
                <div
                  key={point.text}
                  style={{ "--c": point.color }}
                  className="relative pl-6 text-[15.5px] leading-normal font-medium tracking-[-0.01em] before:absolute before:inset-y-[3px] before:left-0 before:w-1 before:rounded before:bg-(--c) before:content-[''] sm:pl-[26px] sm:text-[17px]"
                >
                  {point.text}
                </div>
              ))}
            </div>
          </TiltCard>
        </div>
      </Container>
    </section>
  );
}
