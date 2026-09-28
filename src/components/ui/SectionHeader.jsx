import Reveal from "./Reveal";

export default function SectionHeader({ eyebrow, title, lede }) {
  return (
    <div className="mx-auto max-w-[900px] text-center">
      <Reveal as="p" className="text-eyebrow uppercase text-primary">
        {eyebrow}
      </Reveal>
      <Reveal as="h2" delay={1} className="font-serif text-title text-balance mt-[18px]">
        {title}
      </Reveal>
      {lede && (
        <Reveal as="p" delay={2} className="mx-auto max-w-[60ch] text-lede text-pretty mt-4 text-ink-muted">
          {lede}
        </Reveal>
      )}
    </div>
  );
}
