import { useState } from "react";
import { FAQS } from "../../data/home";
import Container from "../ui/Container";
import { PlusIcon } from "../ui/Icons";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="pb-20 md:pb-28 lg:pb-36">
      <Container>
        <SectionHeader eyebrow="Questions" title="What people ask on the first call." />

        <Reveal className="mx-auto mt-10 max-w-[820px] border-t border-line lg:mt-14">
          {FAQS.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.q} className="border-b border-line">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-0.5 py-5 text-left text-base font-semibold tracking-[-0.015em] sm:gap-5 sm:py-6 sm:text-lg"
                >
                  <span>{faq.q}</span>
                  <span
                    className={`grid size-7 flex-none place-items-center rounded-full border transition-all duration-300 ${
                      open ? "rotate-45 border-ink bg-ink text-white" : "border-line-strong"
                    }`}
                  >
                    <PlusIcon size={12} />
                  </span>
                </button>
                <div
                  id={`faq-${i}`}
                  className={`grid transition-[grid-template-rows] duration-[400ms] ease-out-soft ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[66ch] pb-6 pl-0.5 text-[15px] text-ink-muted sm:pr-12 sm:pb-[26px] sm:text-base">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
