import { formatDate } from "./formatDate";

export default function PostMeta({ post, className = "" }) {
  return (
    <p className={`flex flex-wrap items-center gap-x-2 text-[13px] text-ink-subtle ${className}`}>
      <time dateTime={post.published}>{formatDate(post.published)}</time>
      <span aria-hidden="true">·</span>
      <span>{post.readingTime} min read</span>
    </p>
  );
}
