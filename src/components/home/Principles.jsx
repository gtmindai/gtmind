import { PRINCIPLES } from "../../data/home";
import Reveal from "../ui/Reveal";

const ICONS = {
  eye: (
    <g className="origin-[12px_12px] animate-blink">
      <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </g>
  ),
  revert: (
    <path
      className="origin-[12px_12px] transition-transform duration-700 ease-out-soft group-hover:-rotate-360"
      d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5"
    />
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5.5c0 4 2.9 7.7 7 9.5 4.1-1.8 7-5.5 7-9.5V6Z" />
      <path
        className="transition-[stroke-dashoffset] delay-500 duration-600 [stroke-dasharray:14] [stroke-dashoffset:14] group-[.in]:[stroke-dashoffset:0]"
        d="M8.8 12.2l2.3 2.3 4.2-4.4"
      />
    </>
  ),
};

export default function Principles() {
  return (
    <section className="pb-[clamp(72px,9vw,120px)]">
      <div className="mx-auto max-w-page px-gutter">
        <div className="mx-auto max-w-narrow">
          <Reveal className="mb-5 flex items-center gap-4 after:h-px after:flex-1 after:bg-line after:content-['']">
            <span className="text-xs font-semibold tracking-[0.14em] text-ink-subtle uppercase">
              How the agents behave
            </span>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-3">
            {PRINCIPLES.map((principle, i) => (
              <Reveal
                key={principle.title}
                delay={i}
                className="group hover:-translate-y-1 rounded-[22px] border border-line bg-surface px-7 pt-7 pb-[30px] hover:border-line-strong"
              >
                <div className="grid size-12 place-items-center rounded-[14px] bg-primary/[0.07] text-primary">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="overflow-visible"
                  >
                    {ICONS[principle.icon]}
                  </svg>
                </div>
                <h4 className="mt-5 text-lg font-semibold tracking-[-0.015em]">{principle.title}</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{principle.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
