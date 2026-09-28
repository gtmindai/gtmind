import { Link } from "react-router-dom";
import { coverUrl } from "../../data/blog";
import { EYEBROW } from "../ui/typography";
import PostMeta from "./PostMeta";

export default function PostCard({ post, featured = false, headingLevel: Heading = "h2" }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition duration-300 hover:-translate-y-0.5 hover:shadow-card ${
        featured ? "lg:grid lg:grid-cols-[1.2fr_1fr] lg:items-center" : ""
      }`}
    >
      <img
        src={coverUrl(post.slug)}
        alt={post.coverAlt}
        width="1200"
        height="630"
        loading={featured ? "eager" : "lazy"}
        decoding="async"
        className={`aspect-1200/630 w-full border-b border-line object-cover ${
          featured ? "lg:m-5 lg:w-[calc(100%-2.5rem)] lg:rounded-2xl lg:border" : ""
        }`}
      />
      <div className={`flex flex-1 flex-col p-6 ${featured ? "lg:justify-center lg:p-10" : ""}`}>
        <p className={`${EYEBROW} text-[11px] text-primary`}>{post.category}</p>
        <Heading
          className={`mt-3 font-serif leading-[1.15] font-normal tracking-[-0.015em] text-balance group-hover:text-primary ${
            featured ? "text-[28px] sm:text-[34px]" : "text-[22px]"
          }`}
        >
          {post.h1}
        </Heading>
        <p className="mt-3 text-[15px] leading-relaxed text-pretty text-ink-muted">{post.excerpt}</p>
        <PostMeta post={post} className="mt-auto pt-5" />
      </div>
    </Link>
  );
}
