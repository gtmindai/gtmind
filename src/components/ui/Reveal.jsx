import useInView from "../../hooks/useInView";

export default function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...props }) {
  const { ref, seen } = useInView();

  return (
    <Tag
      ref={ref}
      className={`transition-[opacity,translate,rotate,border-color,box-shadow] duration-700 ease-out-soft ${
        seen ? "in translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
      style={{ transitionDelay: delay ? `${delay * 80}ms` : undefined, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}
