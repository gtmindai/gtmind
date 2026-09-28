import { useEffect, useRef, useState } from "react";

export default function useInView({
  threshold = 0.14,
  rootMargin = "0px 0px -6% 0px",
  once = true,
} = {}) {
  const ref = useRef(null);
  const [state, setState] = useState({ visible: false, seen: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setState((prev) => ({ visible, seen: prev.seen || visible }));
        if (visible && once) observer.disconnect();
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, ...state };
}
