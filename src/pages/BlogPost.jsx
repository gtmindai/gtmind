import { Suspense, use } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SeoRoiCalculator from "../components/blog/SeoRoiCalculator";
import PostCard from "../components/blog/PostCard";
import { formatDate } from "../components/blog/formatDate";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import { EYEBROW } from "../components/ui/typography";
import { coverUrl, getLoadedBody, getPost, loadBody } from "../data/blog";
import NotFound from "./NotFound";

const COMPONENTS = {
  "seo-roi-calculator": SeoRoiCalculator,
};

// The article (body, FAQ, table of contents) loads as its own chunk. The
// prerenderer loads it up front; in the browser `use` suspends until it
// arrives, and during hydration React keeps the prerendered HTML inside the
// Suspense boundary in the meantime.
function PostContent({ post, onArticleClick }) {
  const { parts, faq, toc } = getLoadedBody(post.slug) ?? use(loadBody(post.slug));

  return (
    <div className="mx-auto mt-12 grid max-w-narrow gap-10 lg:mt-16 lg:grid-cols-[1fr_220px] lg:gap-14">
      <div className="min-w-0">
        <div className="prose-blog" onClick={onArticleClick}>
          {parts.map((part, i) => {
            if (part.type === "html") return <div key={i} dangerouslySetInnerHTML={{ __html: part.html }} />;
            const Component = COMPONENTS[part.name];
            return Component ? <Component key={i} /> : null;
          })}
        </div>

        {faq?.length > 0 && (
          <section id="faq" aria-labelledby="faq-heading" className="mt-16 scroll-mt-28 border-t border-line pt-12">
            <h2 id="faq-heading" className="font-serif text-[30px] leading-tight font-normal tracking-[-0.015em]">
              Frequently asked questions
            </h2>
            <div className="mt-6 grid gap-7">
              {faq.map(({ q, a }) => (
                <div key={q}>
                  <h3 className="text-lg font-semibold tracking-[-0.01em]">{q}</h3>
                  <p className="mt-2 text-base leading-[1.75] text-ink-muted">{a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <aside className="mt-16 rounded-3xl bg-secondary px-6 py-10 text-white sm:px-10 sm:py-12">
          <p className={`${EYEBROW} text-primary-tint`}>Thirty minutes · Read-only</p>
          <p className="mt-4 font-serif text-[26px] leading-[1.2] text-balance sm:text-[32px]">
            {post.cta ?? "See what your go-to-market is leaving on the table."}
          </p>
          <Button booking variant="white" arrow className="mt-7">
            Book a meeting
          </Button>
        </aside>
      </div>

      <aside className="hidden lg:block">
        <Toc items={toc} />
      </aside>
    </div>
  );
}

function Breadcrumbs({ post }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[13px] text-ink-subtle">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          <Link to="/" className="hover:text-ink">
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <Link to="/blog" className="hover:text-ink">
            Blog
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="text-ink-muted">{post.category}</li>
      </ol>
    </nav>
  );
}

function Toc({ items }) {
  if (items.length < 3) return null;
  return (
    <nav aria-label="On this page" className="lg:sticky lg:top-28">
      <p className={`${EYEBROW} text-[11px] text-ink-subtle`}>On this page</p>
      <ol className="mt-4 grid gap-2.5 border-l border-line">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="-ml-px block border-l border-transparent pl-4 text-[13.5px] leading-snug text-ink-muted transition-colors hover:border-ink hover:text-ink"
            >
              {item.text}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#faq"
            className="-ml-px block border-l border-transparent pl-4 text-[13.5px] leading-snug text-ink-muted transition-colors hover:border-ink hover:text-ink"
          >
            FAQ
          </a>
        </li>
      </ol>
    </nav>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPost(slug);

  if (!post) return <NotFound />;

  const related = (post.related ?? []).map(getPost).filter(Boolean).slice(0, 3);

  // Links inside the Markdown are plain <a> tags; route internal ones
  // through the router so moving between posts doesn't reload the page.
  const onArticleClick = (event) => {
    const link = event.target.closest("a");
    const href = link?.getAttribute("href");
    if (!href || link.target || event.metaKey || event.ctrlKey || event.shiftKey) return;
    if (href.startsWith("/") && !href.startsWith("//") && !href.includes("#")) {
      event.preventDefault();
      navigate(href);
    }
  };

  return (
    <article className="pt-28 pb-20 sm:pt-36 lg:pt-40 lg:pb-28">
      <Container>
        <header className="mx-auto max-w-205 text-center">
          <div className="flex justify-center">
            <Breadcrumbs post={post} />
          </div>
          <p className={`${EYEBROW} mt-8 text-primary`}>{post.category}</p>
          <h1 className="mt-4 font-serif text-[36px] leading-[1.08] font-normal tracking-[-0.018em] text-balance sm:text-[46px] lg:text-[56px]">
            {post.h1}
          </h1>
          <p className="mx-auto mt-5 max-w-[62ch] text-base leading-[1.7] text-pretty text-ink-muted lg:text-lg">
            {post.description}
          </p>
          <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[13px] text-ink-subtle">
            <span>
              By the <span className="font-medium text-ink-muted">gtmind team</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>
              Published <time dateTime={post.published}>{formatDate(post.published)}</time>
            </span>
            {post.updated !== post.published && (
              <>
                <span aria-hidden="true">·</span>
                <span>
                  Last updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                </span>
              </>
            )}
            <span aria-hidden="true">·</span>
            <span>{post.readingTime} min read</span>
          </p>
        </header>

        <img
          src={coverUrl(post.slug)}
          alt={post.coverAlt}
          width="1200"
          height="630"
          fetchPriority="high"
          className="mx-auto mt-10 aspect-1200/630 w-full max-w-narrow rounded-3xl border border-line object-cover lg:mt-14"
        />

        <Suspense fallback={<div className="min-h-screen" />}>
          <PostContent key={post.slug} post={post} onArticleClick={onArticleClick} />
        </Suspense>

        {related.length > 0 && (
          <section aria-labelledby="related-heading" className="mx-auto mt-20 max-w-narrow lg:mt-28">
            <h2 id="related-heading" className="font-serif text-[30px] leading-tight font-normal tracking-[-0.015em]">
              Keep reading
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <PostCard key={item.slug} post={item} headingLevel="h3" />
              ))}
            </div>
          </section>
        )}
      </Container>
    </article>
  );
}
