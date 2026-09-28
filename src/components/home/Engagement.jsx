import useInView from "../../hooks/useInView";
import Button from "../ui/Button";
import { ClockIcon } from "../ui/Icons";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
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
    <div aria-hidden="true" className="relative mb-[22px] h-10 max-lg:hidden">
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
    <section className="py-section">
      <div className="mx-auto max-w-page px-gutter">
        <SectionHeader
          eyebrow="Working together"
          title="From the first call to the first play."
          lede="Three steps. Nothing ships until you say yes."
        />

        <div ref={ref} className="mx-auto max-w-narrow relative mt-[clamp(48px,5.5vw,72px)]">
          <Rail active={seen} />

          <div className="grid gap-5 lg:grid-cols-3">
            {STAGES.map(({ title, text, when, Visual }, i) => (
              <Reveal
                as="article"
                key={title}
                delay={i}
                className="hover:-translate-y-1 flex flex-col rounded-3xl border border-line bg-surface px-3.5 pt-3.5 pb-[26px] hover:border-line-strong hover:shadow-float"
              >
                <div
                  aria-hidden="true"
                  className="relative h-[168px] overflow-hidden rounded-2xl border border-line bg-surface-soft p-4"
                >
                  <Visual live={visible} />
                </div>
                <div className="flex-1 px-3.5 pt-[22px]">
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">{title}</h3>
                  <p className="mt-2.5 text-[15.5px] leading-relaxed text-ink-muted">{text}</p>
                </div>
                <span className="mx-3.5 mt-[22px] inline-flex items-center gap-2 self-start rounded-full bg-primary/[0.07] py-1.5 pr-3 pl-[9px] text-[13px] font-semibold text-primary">
                  <ClockIcon size={13} />
                  {when}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-11 text-center">
          <Button booking arrow>
            Book a meeting
          </Button>
          <p className="mt-3.5 text-[13.5px] text-ink-subtle">
            Thirty minutes · No slides · A read of where the money is, either way
          </p>
        </Reveal>
      </div>
    </section>
  );
}
