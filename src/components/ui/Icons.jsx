function StrokeIcon({ size = 16, strokeWidth = 2, children, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowRightIcon(props) {
  return (
    <StrokeIcon strokeWidth={2.2} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </StrokeIcon>
  );
}

export function ArrowUpIcon(props) {
  return (
    <StrokeIcon strokeWidth={2.2} {...props}>
      <path d="M12 19V5M6 11l6-6 6 6" />
    </StrokeIcon>
  );
}

export function ChevronLeftIcon(props) {
  return (
    <StrokeIcon {...props}>
      <path d="M15 6l-6 6 6 6" />
    </StrokeIcon>
  );
}

export function ChevronRightIcon(props) {
  return (
    <StrokeIcon {...props}>
      <path d="M9 6l6 6-6 6" />
    </StrokeIcon>
  );
}

export function MenuIcon(props) {
  return (
    <StrokeIcon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </StrokeIcon>
  );
}

export function CloseIcon(props) {
  return (
    <StrokeIcon {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </StrokeIcon>
  );
}

export function PlusIcon(props) {
  return (
    <StrokeIcon strokeWidth={2.6} {...props}>
      <path d="M12 5v14M5 12h14" />
    </StrokeIcon>
  );
}

export function ClockIcon(props) {
  return (
    <StrokeIcon strokeWidth={2.2} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </StrokeIcon>
  );
}

export function CheckIcon(props) {
  return (
    <StrokeIcon strokeWidth={3.4} {...props}>
      <path d="M4 12.5l5 5L20 6.5" />
    </StrokeIcon>
  );
}

export function SparkleIcon({ size = 12, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-4z" />
    </svg>
  );
}

export function XIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.75 3h3.07l-6.72 7.68L22 21h-6.18l-4.84-6.33L5.44 21H2.37l7.19-8.21L2 3h6.34l4.37 5.78L17.75 3Zm-1.08 16.2h1.7L7.4 4.7H5.57l11.1 14.5Z" />
    </svg>
  );
}

export function YouTubeIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.8 15.1V8.9l5.4 3.1-5.4 3.1Z" />
    </svg>
  );
}
