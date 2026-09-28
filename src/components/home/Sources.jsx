import { useEffect, useRef } from "react";
import { SOURCE_BOARD, SOURCES } from "../../data/home";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { SECTION_Y } from "../ui/typography";

const CELLS = SOURCE_BOARD.flatMap((row, r) =>
  row.split(" ").map((key, col) => ({ id: `${r}-${col}`, key, col })),
);

const LOGO_CELL =
  "z-1 place-items-center bg-white shadow-logo transition-[translate,box-shadow] duration-350 ease-out-soft hover:z-2 hover:-translate-y-1 hover:shadow-logo-hover data-ping:-translate-y-[3px] after:absolute after:top-1.5 after:right-1.5 after:size-1.5 after:scale-40 after:rounded-full after:bg-success after:opacity-0 after:transition after:duration-300 after:content-[''] data-ping:after:scale-100 data-ping:after:opacity-100 sm:after:top-2.5 sm:after:right-2.5";

function cellClass({ key, col }) {
  const logo = Boolean(SOURCES[key]);
  const classes = ["relative"];

  if (col >= 6) classes.push(logo ? "hidden lg:grid" : "hidden lg:block");
  else if (col === 5) classes.push(logo ? "hidden sm:grid" : "hidden sm:block");
  else classes.push(logo ? "grid" : "block");

  if (key === "g") classes.push("bg-ink/[0.045]");
  if (key === "G") classes.push("bg-ink/[0.075]");
  if (logo) classes.push(LOGO_CELL);
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
    <section
      id="sources"
      className={`bg-surface-soft bg-[repeating-linear-gradient(135deg,rgb(26_30_58/0.028)_0_1px,transparent_1px_11px)] ${SECTION_Y}`}
    >
      <Container>
        <SectionHeader
          eyebrow="Sources"
          title="The stack you already pay for."
          lede="Read together, in one model, for the first time."
        />

        <Reveal
          aria-label="Supported sources"
          className="mt-10 grid auto-rows-(--cell) grid-cols-[repeat(5,var(--cell))] justify-center [--cell:calc((100vw-40px)/5)] sm:grid-cols-[repeat(6,var(--cell))] sm:[--cell:min(13vw,110px)] lg:mt-16 lg:grid-cols-[repeat(8,var(--cell))] lg:[--cell:clamp(58px,7vw,96px)]"
        >
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
                    className="px-1 text-center text-[10px] leading-[1.1] font-bold tracking-[-0.02em] sm:px-1.5 sm:text-xs lg:text-sm"
                  >
                    {source.name}
                  </b>
                )}
              </div>
            );
          })}
        </Reveal>

        <Reveal as="p" className="mt-6 text-center text-[13px] text-ink-subtle sm:text-[13.5px] lg:mt-[26px]">
          Read-only connections. Disconnect any source and syncing stops that minute.
        </Reveal>
      </Container>
    </section>
  );
}
