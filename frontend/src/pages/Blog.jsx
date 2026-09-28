import PostCard from "../components/blog/PostCard";
import Container from "../components/ui/Container";
import { EYEBROW } from "../components/ui/typography";
import { BLOG, POSTS } from "../data/blog";

export default function Blog() {
  const [featured, ...rest] = POSTS;

  return (
    <section className="pt-28 pb-20 sm:pt-36 lg:pt-40 lg:pb-28">
      <Container>
        <header className="max-w-180">
          <p className={`${EYEBROW} text-primary`}>Blog</p>
          <h1 className="mt-4 font-serif text-[40px] leading-[1.08] font-normal tracking-[-0.018em] text-balance sm:text-[48px] lg:text-[56px]">
            {BLOG.heading}
          </h1>
          <p className="mt-4 text-base leading-[1.7] text-pretty text-ink-muted lg:text-lg">{BLOG.description}</p>
        </header>

        {featured && (
          <div className="mt-12 lg:mt-16">
            <PostCard post={featured} featured />
          </div>
        )}

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
