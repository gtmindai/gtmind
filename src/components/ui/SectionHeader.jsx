import Reveal from "./Reveal";
import { EYEBROW, LEDE, TITLE } from "./typography";

export default function SectionHeader({ eyebrow, title, lede }) {
  return (
    <div className="mx-auto max-w-[900px] text-center">
      <Reveal as="p" className={`${EYEBROW} text-primary`}>
        {eyebrow}
      </Reveal>
      <Reveal as="h2" delay={1} className={`${TITLE} mt-4`}>
        {title}
      </Reveal>
      {lede && (
        <Reveal as="p" delay={2} className={`${LEDE} mt-4 text-ink-muted`}>
          {lede}
        </Reveal>
      )}
    </div>
  );
}
