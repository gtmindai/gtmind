import { GAPS } from "../../data/home";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

export default function Gap() {
  return (
    <section className="py-section">
      <div className="mx-auto max-w-page px-gutter">
        <SectionHeader eyebrow="The gap" title="Every tool knows a piece. None of them knows the business." />

        <div className="mx-auto max-w-narrow mt-[clamp(44px,5vw,64px)] grid gap-[18px] lg:grid-cols-3">
          {GAPS.map((gap, i) => (
            <Reveal
              key={gap.source}
              delay={i}
              className="hover:-translate-y-1 rounded-[22px] border border-line bg-surface p-7 hover:border-line-strong"
            >
              <span className="inline-flex items-center gap-[9px] rounded-full border border-line py-[5px] pr-3 pl-2 text-[13px] font-semibold text-ink-muted">
                <i className="size-2 rounded-full" style={{ backgroundColor: gap.color }} />
                {gap.source}
              </span>
              <p className="mt-[18px] text-[19px] leading-[1.45] font-medium tracking-[-0.015em]">
                {gap.knows} <span className="text-ink-subtle">{gap.misses}</span>
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal
          as="p"
          className="mx-auto mt-9 max-w-[58ch] text-center font-serif text-[clamp(21px,2vw,26px)] leading-[1.35]"
        >
          The brain is the layer that joins them, remembers what worked, and acts on it.
        </Reveal>
      </div>
    </section>
  );
}
