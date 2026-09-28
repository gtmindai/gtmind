import { GAPS } from "../../data/home";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { SECTION_Y } from "../ui/typography";

export default function Gap() {
  return (
    <section className={SECTION_Y}>
      <Container>
        <SectionHeader eyebrow="The gap" title="Every tool knows a piece. None of them knows the business." />

        <div className="mx-auto mt-10 grid max-w-narrow gap-4 md:grid-cols-3 lg:mt-16 lg:gap-[18px]">
          {GAPS.map((gap, i) => (
            <Reveal
              key={gap.source}
              delay={i}
              className="rounded-[22px] border border-line bg-surface p-6 hover:-translate-y-1 hover:border-line-strong lg:p-7"
            >
              <span className="inline-flex items-center gap-[9px] rounded-full border border-line py-[5px] pr-3 pl-2 text-[13px] font-semibold text-ink-muted">
                <i className="size-2 rounded-full" style={{ backgroundColor: gap.color }} />
                {gap.source}
              </span>
              <p className="mt-4 text-[17px] leading-[1.45] font-medium tracking-[-0.015em] lg:mt-[18px] lg:text-[19px]">
                {gap.knows} <span className="text-ink-subtle">{gap.misses}</span>
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal
          as="p"
          className="mx-auto mt-8 max-w-[58ch] text-center font-serif text-xl leading-[1.35] lg:mt-9 lg:text-[26px]"
        >
          The brain is the layer that joins them, remembers what worked, and acts on it.
        </Reveal>
      </Container>
    </section>
  );
}
