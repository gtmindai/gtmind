import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import { EYEBROW } from "../components/ui/typography";

export default function NotFound() {
  return (
    <section className="pt-36 pb-28 text-center lg:pt-48 lg:pb-40">
      <Container>
        <p className={`${EYEBROW} text-primary`}>404</p>
        <h1 className="mt-4 font-serif text-[40px] leading-[1.08] font-normal tracking-[-0.018em] sm:text-[56px]">
          This page doesn’t exist.
        </h1>
        <p className="mx-auto mt-4 max-w-[46ch] text-base leading-[1.7] text-ink-muted">
          The link may be old, or the address mistyped.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" arrow>
            Go to the homepage
          </Button>
          <Button href="/blog" variant="line">
            Read the blog
          </Button>
        </div>
      </Container>
    </section>
  );
}
