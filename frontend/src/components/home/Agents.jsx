import { useEffect, useRef, useState } from "react";
import analyticsArt from "../../assets/agents/analytics.svg";
import contentArt from "../../assets/agents/content.svg";
import geoArt from "../../assets/agents/geo.svg";
import pipelineArt from "../../assets/agents/pipeline.svg";
import seoArt from "../../assets/agents/seo.svg";
import { AGENTS } from "../../data/home";
import Container from "../ui/Container";
import { ChevronLeftIcon, ChevronRightIcon } from "../ui/Icons";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { SECTION_Y } from "../ui/typography";

const ART = {
  seo: seoArt,
  geo: geoArt,
  content: contentArt,
  pipeline: pipelineArt,
  analytics: analyticsArt,
};

const COUNT = AGENTS.length;
const INTERVAL = 4800;

function offsetFrom(index, active) {
  const off = (((index - active) % COUNT) + COUNT) % COUNT;
  return off > COUNT / 2 ? off - COUNT : off;
}

function ArrowButton({ label, onClick, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid size-11 cursor-pointer place-items-center rounded-full border border-line-strong bg-white transition-colors duration-200 hover:border-ink-subtle sm:size-[42px]"
    >
      {children}
    </button>
  );
}

export default function Agents() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0);
  const swipeStart = useRef(null);

  const show = (index) => {
    setActive(((index % COUNT) + COUNT) % COUNT);
    setCycle((c) => c + 1);
  };

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % COUNT), INTERVAL);
    return () => clearTimeout(id);
  }, [active, paused, cycle]);

  useEffect(() => {
    const onSelect = (e) => {
      setActive(e.detail);
      setCycle((c) => c + 1);
    };
    window.addEventListener("select-agent", onSelect);
    return () => window.removeEventListener("select-agent", onSelect);
  }, []);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") show(active - 1);
    if (e.key === "ArrowRight") show(active + 1);
  };

  const onPointerUp = (e) => {
    if (swipeStart.current === null) return;
    const dx = e.clientX - swipeStart.current;
    swipeStart.current = null;
    if (Math.abs(dx) > 40) show(active + (dx < 0 ? 1 : -1));
  };

  return (
    <section
      id="agents"
      className={`overflow-hidden bg-surface-warm bg-[linear-gradient(rgb(17_17_19/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(17_17_19/0.05)_1px,transparent_1px)] bg-size-[124px_124px] bg-top ${SECTION_Y}`}
    >
      <Container>
        <SectionHeader
          eyebrow="Agents"
          title="An agent for every play."
          lede="Each one runs on the brain, and only as far as you let it."
        />

        <Reveal
          tabIndex={0}
          aria-roledescription="carousel"
          aria-label="Agents"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onKeyDown={onKeyDown}
          onPointerDown={(e) => (swipeStart.current = e.clientX)}
          onPointerUp={onPointerUp}
          className="relative mt-10 h-[400px] touch-pan-y select-none [--step:92%] sm:h-[420px] md:h-[460px] md:[--step:62%] lg:mt-16 lg:h-[520px] lg:[--step:58%]"
        >
          {AGENTS.map((agent, i) => {
            const off = offsetFrom(i, active);
            const distance = Math.abs(off);
            const side = distance === 1;

            return (
              <article
                key={agent.key}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${COUNT}: ${agent.name}`}
                aria-hidden={off !== 0}
                onClick={() => i !== active && show(i)}
                style={{
                  backgroundColor: agent.color,
                  transform: `translate(calc(-50% + ${off} * var(--step)), -50%) scale(${off === 0 ? 1 : 0.82})`,
                  opacity: distance > 1 ? 0 : 1,
                  zIndex: 10 - distance,
                  pointerEvents: distance > 1 ? "none" : "auto",
                }}
                className={`absolute top-1/2 left-1/2 h-full w-[88%] cursor-pointer overflow-hidden rounded-3xl text-white shadow-[0_30px_60px_-30px_rgb(17_17_19/0.5)] transition-[transform,opacity,filter] duration-700 ease-out-soft md:w-[80%] lg:w-[min(760px,74%)] lg:rounded-[32px] ${
                  side ? "brightness-[.92] saturate-[.75]" : ""
                }`}
              >
                <img
                  src={ART[agent.key]}
                  alt=""
                  className={`pointer-events-none absolute top-1/2 right-[6%] hidden w-2/5 -translate-y-1/2 transition-opacity duration-500 sm:block ${
                    side ? "opacity-0" : "opacity-20"
                  }`}
                />

                <div
                  className={`absolute inset-0 flex flex-col justify-between p-6 transition-opacity duration-500 sm:p-8 lg:p-12 ${
                    side ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <span className="inline-flex items-center gap-[9px] self-start rounded-full bg-white/15 py-[7px] pr-3.5 pl-2.5 text-[13px] font-semibold tracking-[0.02em]">
                    <i className="size-[7px] rounded-full bg-white" />
                    {agent.name}
                  </span>
                  <h3 className="max-w-[14ch] font-serif text-[30px] leading-[1.08] font-normal tracking-[-0.02em] text-balance sm:text-4xl lg:text-5xl">
                    {agent.headline}
                  </h3>
                  <div className="flex flex-col gap-2 text-[13px] text-white/80 sm:flex-row sm:flex-wrap sm:gap-x-[22px] sm:text-sm">
                    {agent.meta.map(([label, value]) => (
                      <span key={label}>
                        {label} <b className="font-semibold text-white">{value}</b>
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </Reveal>

        <div className="mt-7 flex items-center justify-center gap-3.5 lg:mt-[30px]">
          <ArrowButton label="Previous agent" onClick={() => show(active - 1)}>
            <ChevronLeftIcon />
          </ArrowButton>
          <div className="flex items-center gap-1.5 rounded-full bg-ink px-3 py-[9px]">
            {AGENTS.map((agent, i) => (
              <button
                key={agent.key}
                type="button"
                aria-label={`Show ${agent.name}`}
                onClick={() => show(i)}
                className={`h-[7px] cursor-pointer rounded-full transition-[width,background-color] duration-300 ${
                  i === active ? "w-[26px] bg-white" : "w-[7px] bg-white/40"
                }`}
              />
            ))}
          </div>
          <ArrowButton label="Next agent" onClick={() => show(active + 1)}>
            <ChevronRightIcon />
          </ArrowButton>
        </div>
      </Container>
    </section>
  );
}
