import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

export default function Closer() {
  return (
    <section className="pb-[clamp(56px,7vw,96px)]">
      <div className="mx-auto max-w-page px-gutter">
        <Reveal className="rounded-[32px] bg-secondary px-[clamp(24px,5vw,72px)] py-[clamp(56px,7vw,96px)] text-center text-white">
          <p className="text-eyebrow uppercase text-primary-tint">Thirty minutes</p>
          <h2 className="font-serif text-title text-balance mt-[18px]">See what your go-to-market is leaving on the table.</h2>
          <p className="mx-auto max-w-[60ch] text-lede text-pretty mt-[22px] text-white/70">
            Bring your questions. We'll bring a read of where the money is — whether or not we end up working together.
          </p>
          <div className="mt-[34px] flex flex-wrap justify-center gap-3">
            <Button booking variant="white" arrow>
              Book a meeting
            </Button>
            <Button href="#how" variant="ghost">
              How it works
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
