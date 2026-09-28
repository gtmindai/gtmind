const TAIL = "absolute -bottom-[9px] size-[13px] rotate-45 rounded-[0_50%_50%_50%] bg-primary-light opacity-0 transition-opacity delay-900 duration-300 group-[.in]:opacity-100";

export default function Marker({ children }) {
  return (
    <span className="relative isolate mt-[0.12em] inline-block -rotate-[1.2deg] rounded-[10px] px-[0.24em] pt-[0.02em] pb-[0.08em] text-ink transition-colors delay-500 duration-350 group-[.in]:text-white before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:rounded-[inherit] before:bg-primary-light before:transition-transform before:delay-250 before:duration-700 before:ease-in-out-soft before:content-[''] group-[.in]:before:scale-x-100">
      {children}
      <i className={`${TAIL} -left-[7px]`} />
      <i className={`${TAIL} -right-[7px]`} />
    </span>
  );
}
