import useInView from "../../hooks/useInView";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { ClockIcon } from "../ui/Icons";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { SECTION_Y } from "../ui/typography";
import { ApproveVisual, BuildVisual, CalendarVisual } from "./EngagementVisuals";

const STAGES = [
  {
    title: "Book thirty minutes",
    text: "We walk through your stack and where you think revenue is leaking. You leave with a view either way.",
    when: "One call",
    Visual: CalendarVisual,
  },
  {
    title: "We build your brain",
    text: "Read-only connections, one overnight pass, and a profile of your brand, buyers and competitors you can edit.",
    when: "One night",
    Visual: BuildVisual,
  },
  {
    title: "You approve the plays",
    text: "Ranked, priced and evidenced. The agents run the ones you say yes to — nothing else.",
    when: "Your call, every time",
    Visual: ApproveVisual,
  },
];

const NODE_POSITIONS = ["16.6667%", "50%", "83.3333%"];
const NODE_DELAYS = ["0.25s", "1s", "1.75s"];

function Rail({ active }) {
  return (
    <div aria-hidden="true" className="relative mb-[22px] hidden h-10 lg:block">
      <div className="absolute inset-x-[16.6667%] top-1/2 -mt-px h-0.5 rounded-sm bg-line" />
      <div
        className={`absolute inset-x-[16.6667%] top-1/2 -mt-px h-0.5 origin-left rounded-sm bg-primary transition-transform delay-200 duration-[1600ms] ease-in-out-soft ${
          active ? "scale-x-100" : "scale-x-0"
        }`}
      />
      {NODE_POSITIONS.map((left, i) => (
        <span
          key={left}
          style={{ left, transitionDelay: active ? NODE_DELAYS[i] : "0s" }}
          className={`absolute top-1/2 -mt-5 -ml-5 grid size-10 place-items-center rounded-full border-[1.5px] text-[13px] font-semibold tabular-nums transition-all duration-[400ms] ${
            active
              ? "border-primary bg-primary text-white shadow-[0_0_0_6px_rgb(61_78_216/0.1)]"
              : "border-line-strong bg-white text-ink-subtle"
          }`}
        >
          0{i + 1}
        </span>
      ))}
    </div>
  );
}

export default function Engagement() {
  const { ref, visible, seen } = useInView({ threshold: 0.25, rootMargin: "0px", once: false });

  return (
    <section className={SECTION_Y}>
      <Container>
        <SectionHeader
          eyebrow="Working together"
          title="From the first call to the first play."
          lede="Three steps. Nothing ships until you say yes."
        />

        <div ref={ref} className="relative mx-auto mt-10 max-w-narrow lg:mt-16">
          <Rail active={seen} />

          <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
            {STAGES.map(({ title, text, when, Visual }, i) => (
              <Reveal
                as="article"
                key={title}
                delay={i}
                className="flex flex-col gap-5 rounded-3xl border border-line bg-surface p-3.5 pb-6 hover:-translate-y-1 hover:border-line-strong hover:shadow-float sm:grid sm:grid-cols-[minmax(0,260px)_1fr] sm:items-center sm:gap-6 sm:pb-3.5 lg:flex lg:gap-0 lg:pb-[26px]"
              >
                <div
                  aria-hidden="true"
                  className="relative h-[168px] w-full overflow-hidden rounded-2xl border border-line bg-surface-soft p-4"
                >
                  <Visual live={visible} />
                </div>
                <div className="flex flex-1 flex-col px-3.5 sm:px-0 sm:pr-4 lg:w-full lg:px-3.5 lg:pt-[22px]">
                  <span className="mb-2 text-xs font-semibold tracking-[0.14em] text-ink-subtle tabular-nums lg:hidden">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] sm:text-xl">{title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted sm:text-[15.5px] lg:flex-1">{text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-primary/[0.07] py-1.5 pr-3 pl-[9px] text-[13px] font-semibold text-primary lg:mt-[22px]">
                    <ClockIcon size={13} />
                    {when}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-10 text-center lg:mt-11">
          <Button booking arrow className="w-full sm:w-auto">
            Book a meeting
          </Button>
          <p className="mt-3.5 text-[13px] text-ink-subtle sm:text-[13.5px]">
            Thirty minutes · No slides · A read of where the money is, either way
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
