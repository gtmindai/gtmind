import { SITE } from "../../config/site";
import { ArrowRightIcon } from "./Icons";

const VARIANTS = {
  dark: "bg-secondary text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_8px_20px_-10px_rgb(27_31_59/0.6)] hover:-translate-y-px hover:bg-secondary-hover",
  line: "border border-line-strong bg-surface text-ink hover:border-ink-subtle",
  white: "bg-white text-secondary hover:-translate-y-px",
  ghost: "border border-white/20 text-white hover:border-white/50",
};

const SIZES = {
  md: "h-12 rounded-xl px-[22px] text-[15px]",
  sm: "h-10 rounded-[10px] px-4 text-sm",
};

export default function Button({
  href,
  booking = false,
  variant = "dark",
  size = "md",
  arrow = false,
  className = "",
  children,
}) {
  const linkProps = booking
    ? { href: SITE.calUrl, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  return (
    <a
      {...linkProps}
      className={`group inline-flex items-center gap-[9px] font-semibold tracking-[-0.005em] whitespace-nowrap transition duration-200 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      {children}
      {arrow && (
        <ArrowRightIcon
          size={size === "sm" ? 14 : 15}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </a>
  );
}
