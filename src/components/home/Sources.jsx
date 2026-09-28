import { useEffect, useRef } from "react";
import { SOURCE_BOARD, SOURCES } from "../../data/home";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

const CELLS = SOURCE_BOARD.flatMap((row, r) =>
  row.split(" ").map((key, col) => ({ id: `${r}-${col}`, key, col })),
);

const LOGO_CELL =
  "z-1 grid place-items-center bg-white shadow-logo transition-[translate,box-shadow] duration-350 ease-out-soft hover:z-2 hover:-translate-y-1 hover:shadow-logo-hover data-ping:-translate-y-[3px] after:absolute after:top-2.5 after:right-2.5 after:size-1.5 after:scale-40 after:rounded-full after:bg-success after:opacity-0 after:transition after:duration-300 after:content-[''] data-ping:after:scale-100 data-ping:after:opacity-100";

function cellClass({ key, col }) {
  const classes = ["relative"];
  if (key === "g") classes.push("bg-ink/[0.045]");
  if (key === "G") classes.push("bg-ink/[0.075]");
  if (SOURCES[key]) classes.push(LOGO_CELL);
  if (col >= 6) classes.push("max-lg:hidden");
  if (col >= 5) classes.push("max-[560px]:hidden");
  return classes.join(" ");
}

export default function Sources() {
  const logoRefs = useRef(new Map());

  useEffect(() => {
    const timers = new Set();
    let index = 0;

    const interval = setInterval(() => {
      const visible = [...logoRefs.current.values()].filter((el) => el.offsetParent !== null);
      if (!visible.length) return;
      const el = visible[index++ % visible.length];
      el.dataset.ping = "";
      const id = setTimeout(() => {
        delete el.dataset.ping;
        timers.delete(id);
      }, 1100);
      timers.add(id);
    }, 900);

    return () => {
      clearInterval(interval);
      timers.forEach(clearTimeout);
    };
  }, []);

  const registerLogo = (id) => (el) => {
    if (el) logoRefs.current.set(id, el);
    else logoRefs.current.delete(id);
  };

  return (
    <section id="sources" className="bg-surface-soft bg-[repeating-linear-gradient(135deg,rgb(26_30_58/0.028)_0_1px,transparent_1px_11px)] py-section">
      <div className="mx-auto max-w-page px-gutter">
        <SectionHeader
          eyebrow="Sources"
          title="The stack you already pay for."
          lede="Read together, in one model, for the first time."
        />

        <Reveal aria-label="Supported sources" className="mt-[clamp(40px,5vw,64px)] grid auto-rows-(--cell) grid-cols-[repeat(8,var(--cell))] justify-center [--cell:clamp(58px,7vw,96px)] max-lg:grid-cols-[repeat(6,var(--cell))] max-[560px]:grid-cols-[repeat(5,var(--cell))] max-[560px]:[--cell:calc((100vw-40px)/5)]">
          {CELLS.map((cell) => {
            const source = SOURCES[cell.key];
            return (
              <div
                key={cell.id}
                ref={source ? registerLogo(cell.id) : undefined}
                title={source?.name}
                className={cellClass(cell)}
              >
                {source && (
                  <b
                    style={{ color: source.color }}
                    className="px-1.5 text-center text-[clamp(10px,1.05vw,14px)] leading-[1.1] font-bold tracking-[-0.02em]"
                  >
                    {source.name}
                  </b>
                )}
              </div>
            );
          })}
        </Reveal>

        <Reveal as="p" className="mt-[26px] text-center text-[13.5px] text-ink-subtle">
          Read-only connections. Disconnect any source and syncing stops that minute.
        </Reveal>
      </div>
    </section>
  );
}
