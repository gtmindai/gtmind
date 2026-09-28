import { useEffect, useRef, useState } from "react";
import { BUILD_SOURCES, CALENDAR_SLOTS } from "../../data/home";
import { CheckIcon, SparkleIcon } from "../ui/Icons";

// Repeats run(); run returns the cycle length in ms.
function useCycle(active, startDelay, run) {
  const runRef = useRef(run);

  useEffect(() => {
    runRef.current = run;
  });

  useEffect(() => {
    if (!active) return;

    const timers = new Set();
    const at = (fn, ms) => {
      const id = setTimeout(() => {
        timers.delete(id);
        fn();
      }, ms);
      timers.add(id);
    };
    const cycle = () => at(cycle, runRef.current(at));

    at(cycle, startDelay);
    return () => timers.forEach(clearTimeout);
  }, [active, startDelay]);
}

const OPEN_SLOTS = CALENDAR_SLOTS.filter((slot) => slot.open).map((slot) => slot.time);

export function CalendarVisual({ live }) {
  const [slot, setSlot] = useState(OPEN_SLOTS[1]);
  const [phase, setPhase] = useState(0);
  const next = useRef(1);

  useCycle(live, 500, (at) => {
    const time = OPEN_SLOTS[next.current++ % OPEN_SLOTS.length];
    setPhase(0);
    at(() => {
      setSlot(time);
      setPhase(1);
    }, 600);
    at(() => setPhase(2), 1200);
    return 3800;
  });

  return (
    <>
      <div className="flex items-center justify-between text-xs font-semibold text-ink-muted">
        <span>Pick a time</span>
        <span className="font-medium text-ink-subtle">30 min · Video</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-[7px]">
        {CALENDAR_SLOTS.map(({ time, open }) => {
          const picked = open && phase > 0 && time === slot;
          return (
            <span
              key={time}
              className={`grid h-[30px] place-items-center rounded-lg border text-xs font-medium tabular-nums transition-all duration-300 ${
                !open
                  ? "border-line bg-transparent text-line-strong line-through"
                  : picked
                    ? "scale-[1.04] border-secondary bg-secondary text-white"
                    : "border-line bg-white text-ink-muted"
              }`}
            >
              {time}
            </span>
          );
        })}
      </div>
      <div
        className={`absolute inset-x-4 bottom-3.5 flex h-[34px] items-center gap-[9px] rounded-[10px] border border-line bg-white px-3 text-[12.5px] font-semibold transition-all duration-300 ${
          phase === 2 ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        <i className="grid size-[18px] place-items-center rounded-full bg-success text-white">
          <CheckIcon size={10} />
        </i>
        Booked
        <span className="ml-auto font-medium text-ink-subtle">{slot}</span>
      </div>
    </>
  );
}

export function BuildVisual({ live }) {
  const [rows, setRows] = useState(() => BUILD_SOURCES.map(() => 0));
  const [ready, setReady] = useState(false);

  const setRow = (index, value) => setRows((prev) => prev.map((v, i) => (i === index ? value : v)));

  useCycle(live, 900, (at) => {
    setReady(false);
    setRows(BUILD_SOURCES.map(() => 0));
    BUILD_SOURCES.forEach((_, i) => {
      at(() => setRow(i, 1), 400 + i * 700);
      at(() => setRow(i, 2), 1400 + i * 700);
    });
    at(() => setReady(true), 3300);
    return 5600;
  });

  return (
    <>
      <div className="grid gap-[9px]">
        {BUILD_SOURCES.map((source, i) => {
          const state = rows[i];
          return (
            <div
              key={source.name}
              className="grid grid-cols-[18px_1fr_44px] grid-rows-[auto_auto] items-center gap-x-2.5 gap-y-[5px] text-[12.5px] font-medium text-ink-muted"
            >
              <span className="row-span-2 size-[18px] rounded-md" style={{ backgroundColor: source.color }} />
              <span className="leading-none">{source.name}</span>
              <span
                className={`row-span-2 text-right text-[11px] font-semibold tabular-nums ${state === 2 ? "text-success" : "text-ink-subtle"}`}
              >
                {state === 0 ? "—" : state === 1 ? "syncing" : "✓"}
              </span>
              <span className="col-start-2 h-[5px] overflow-hidden rounded-[5px] border border-line bg-white">
                <b
                  className={`block h-full ${state ? "w-full transition-[width] duration-1000 ease-in-out-soft" : "w-0"}`}
                  style={{ backgroundColor: source.color }}
                />
              </span>
            </div>
          );
        })}
      </div>
      <div
        className={`absolute inset-x-4 bottom-3.5 flex h-[30px] items-center justify-center gap-2 rounded-full bg-secondary text-xs font-semibold text-white transition-all duration-300 ${
          ready ? "scale-100 opacity-100" : "scale-[.94] opacity-0"
        }`}
      >
        <SparkleIcon />
        Brain ready
      </div>
    </>
  );
}

export function ApproveVisual({ live }) {
  const [switched, setSwitched] = useState(false);
  const [running, setRunning] = useState(false);

  useCycle(live, 1300, (at) => {
    setSwitched(false);
    setRunning(false);
    at(() => setSwitched(true), 1300);
    at(() => setRunning(true), 1700);
    return 4800;
  });

  const barClass = running ? "w-full transition-[width] duration-[1600ms] ease-linear" : "w-0";

  return (
    <div className="rounded-xl border border-line bg-white px-[13px] py-3">
      <div className="flex items-start justify-between gap-2.5">
        <span className="text-[13px] leading-[1.35] font-semibold tracking-[-0.01em]">
          Comparison page vs. main competitor
        </span>
        <span className="text-[13px] font-semibold whitespace-nowrap text-success tabular-nums">$42K/mo</span>
      </div>
      <div className="mt-1.5 flex gap-2.5 text-[11px] text-ink-subtle">
        <span>89% confidence</span>
        <span>Medium effort</span>
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-dashed border-line-strong pt-2.5">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-[9px] py-[3px] text-[11.5px] font-semibold transition-colors duration-300 ${
            running ? "bg-success-soft text-success-deep" : "bg-warning-soft text-warning"
          }`}
        >
          <i className="size-1.5 rounded-full bg-current" />
          {running ? "Approved · agent running" : "Waiting for you"}
        </span>
        <span
          className={`relative h-5 w-[34px] rounded-full transition-colors duration-300 after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-white after:shadow-[0_1px_2px_rgb(0_0_0/0.2)] after:transition-transform after:duration-300 after:ease-out-soft after:content-[''] ${
            switched ? "bg-success after:translate-x-3.5" : "bg-line-strong"
          }`}
        />
      </div>
      <div className="mt-2.5 h-1 overflow-hidden rounded bg-line">
        <b className={`block h-full bg-success ${barClass}`} />
      </div>
    </div>
  );
}
