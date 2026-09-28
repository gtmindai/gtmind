import { useState } from "react";
import { LOOP_STEPS } from "../../data/home";
import useInView from "../../hooks/useInView";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

export default function HowItWorks() {
  const { ref, seen } = useInView({ threshold: 0.3 });
  const [active, setActive] = useState(0);
  const [runId, setRunId] = useState(0);
  const [paused, setPaused] = useState(false);

  const step = LOOP_STEPS[active];

  const goTo = (index) => {
    setActive(index);
    setRunId((id) => id + 1);
  };

  return (
    <section id="how" className="pb-section">
      <div className="mx-auto max-w-page px-gutter">
        <SectionHeader
          eyebrow="How it works"
          title="It doesn't stop at the report."
          lede="Four steps on repeat. Most tools do the first one and hand you a dashboard. Click any step to hold it."
        />

        <Reveal
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="mx-auto mt-[clamp(44px,5vw,64px)] grid max-w-narrow items-stretch gap-[clamp(24px,3vw,44px)] lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div ref={ref} className="grid content-start gap-2.5">
            {LOOP_STEPS.map((s, i) => {
              const on = i === active;
              return (
                <button
                  key={s.title}
                  type="button"
                  aria-pressed={on}
                  onClick={() => goTo(i)}
                  className={`relative grid cursor-pointer grid-cols-[44px_1fr] gap-x-3.5 gap-y-1 overflow-hidden rounded-[18px] border bg-surface px-[22px] py-5 text-left transition-colors duration-300 max-[560px]:p-[18px] ${
                    on ? "border-ink" : "border-line hover:border-line-strong"
                  }`}
                >
                  <span className={`row-span-2 pt-[3px] text-[13px] font-semibold tabular-nums ${on ? "text-primary" : "text-ink-subtle"}`}>
                    0{i + 1}
                  </span>
                  <span className="text-lg font-semibold tracking-[-0.015em]">{s.title}</span>
                  <span
                    className={`overflow-hidden text-[14.5px] leading-normal text-ink-subtle transition-[max-height,opacity] duration-[450ms] ${
                      on ? "max-h-[90px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {s.detail}
                  </span>
                  {on && seen && (
                    <span
                      key={runId}
                      onAnimationEnd={() => goTo((active + 1) % LOOP_STEPS.length)}
                      style={{ animationPlayState: paused ? "paused" : "running" }}
                      className="absolute bottom-0 left-0 h-0.5 w-0 animate-step-fill bg-primary"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div aria-live="polite" className="flex flex-col rounded-3xl border border-line bg-surface-soft p-[clamp(24px,3vw,36px)]">
            <div key={`body-${runId}`} className="animate-fade-up">
              <p className="text-xs font-semibold tracking-[0.14em] text-ink-subtle uppercase">{step.kicker}</p>
              <h3 className="mt-3 font-serif text-[clamp(28px,2.8vw,38px)] leading-[1.12] font-normal tracking-[-0.015em]">
                {step.heading}
              </h3>
              <p className="mt-3.5 max-w-[48ch] text-ink-muted">{step.detail.split(".")[0]}.</p>
            </div>

            <div className="mt-auto pt-[26px]">
              <div key={`ev-${runId}`} className="animate-fade-up overflow-hidden rounded-2xl border border-line bg-white">
                <div className="flex items-center justify-between border-b border-line px-4 py-3 text-xs font-medium text-ink-subtle">
                  <span>{step.evidenceTitle}</span>
                  <span>Illustrative example</span>
                </div>
                <div className="divide-y divide-line">
                  {step.evidence.map(([label, value, good]) => (
                    <div key={label} className="flex justify-between gap-4 px-4 py-3 text-sm">
                      <span className="text-ink-muted">{label}</span>
                      <span className={`text-right font-semibold tabular-nums ${good ? "text-success" : ""}`}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
