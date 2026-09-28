import Button from "../ui/Button";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { EYEBROW, LEDE, TITLE } from "../ui/typography";

export default function Closer() {
  return (
    <section className="pb-14 lg:pb-24">
      <Container>
        <Reveal className="rounded-3xl bg-secondary px-6 py-14 text-center text-white sm:px-12 sm:py-16 lg:rounded-[32px] lg:px-[72px] lg:py-24">
          <p className={`${EYEBROW} text-primary-tint`}>Thirty minutes</p>
          <h2 className={`${TITLE} mt-4`}>See what your go-to-market is leaving on the table.</h2>
          <p className={`${LEDE} mt-5 text-white/70`}>
            Bring your questions. We'll bring a read of where the money is — whether or not we end up working together.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button booking variant="white" arrow className="w-full sm:w-auto">
              Book a meeting
            </Button>
            <Button href="#how" variant="ghost" className="w-full sm:w-auto">
              How it works
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
