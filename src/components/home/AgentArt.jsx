const ART = {
  seo: (
    <>
      <path d="M10 120h180M10 120V20" />
      <path d="M20 100l34-18 30 10 36-34 30 8 36-40" />
      <path d="M160 26h26v26" />
      <circle cx="120" cy="58" r="5" fill="#fff" />
    </>
  ),
  geo: (
    <>
      <path d="M22 20h120a14 14 0 0 1 14 14v46a14 14 0 0 1-14 14H74l-28 24V94H22A14 14 0 0 1 8 80V34a14 14 0 0 1 14-14Z" />
      <path d="M36 46h86M36 66h56" />
      <path d="M168 64l6 14 15 1-12 9 4 15-13-8-13 8 4-15-12-9 15-1Z" />
    </>
  ),
  content: (
    <>
      <rect x="40" y="14" width="86" height="110" rx="10" />
      <path d="M58 40h50M58 58h50M58 76h32" />
      <rect x="70" y="4" width="86" height="110" rx="10" opacity=".5" />
      <circle cx="150" cy="104" r="24" />
      <path d="M139 104l8 8 15-16" />
    </>
  ),
  pipeline: (
    <>
      <path d="M14 16h172l-62 56v44l-48 16V72Z" />
      <path d="M40 40h120" />
    </>
  ),
  analytics: (
    <>
      <path d="M6 60h40l12-28 18 58 16-44 10 14h22" />
      <path d="M124 60l10 34h60" />
      <path d="M134 94V20l30 12-30 12" />
    </>
  ),
};

export default function AgentArt({ name }) {
  return (
    <svg
      viewBox="0 0 200 140"
      fill="none"
      stroke="#fff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ART[name]}
    </svg>
  );
}
