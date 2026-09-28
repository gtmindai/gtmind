import { Link } from "react-router-dom";
import { SITE } from "../../config/site";

export default function Wordmark({ className = "" }) {
  return (
    <Link
      to="/"
      aria-label={`${SITE.name} home`}
      className={`font-serif text-[23px] leading-none sm:text-[25px] font-medium tracking-[-0.02em] ${className}`}
    >
      {SITE.name}
    </Link>
  );
}
