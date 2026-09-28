import { useId, useState } from "react";
import { EYEBROW } from "../ui/typography";

const FIELDS = [
  { key: "sessions", label: "Monthly organic sessions", suffix: "", step: 100 },
  { key: "leadRate", label: "Visit → lead rate", suffix: "%", step: 0.1 },
  { key: "closeRate", label: "Lead → customer rate", suffix: "%", step: 0.5 },
  { key: "dealValue", label: "Average deal value", suffix: "$", step: 500 },
  { key: "cost", label: "Monthly SEO cost", suffix: "$", step: 500 },
];

// Matches the worked example in the SEO ROI post.
const DEFAULTS = { sessions: 5000, leadRate: 2, closeRate: 4, dealValue: 12000, cost: 6000 };

const money = (n) => `$${Math.round(n).toLocaleString("en-US")}`;

export default function SeoRoiCalculator() {
  const id = useId();
  const [values, setValues] = useState(DEFAULTS);

  const leads = values.sessions * (values.leadRate / 100);
  const customers = leads * (values.closeRate / 100);
  const revenue = customers * values.dealValue;
  const roi = values.cost > 0 ? ((revenue - values.cost) / values.cost) * 100 : 0;
  const perDollar = values.cost > 0 ? revenue / values.cost : null;

  const set = (key) => (event) => {
    const next = Number(event.target.value);
    setValues((prev) => ({ ...prev, [key]: Number.isFinite(next) && next >= 0 ? next : 0 }));
  };

  const results = [
    ["Leads / month", Math.round(leads).toLocaleString("en-US")],
    ["Customers / month", customers.toFixed(1)],
    ["Revenue / month", money(revenue)],
    ["SEO ROI", `${Math.round(roi).toLocaleString("en-US")}%`],
    ["Revenue per $1 of SEO", perDollar === null ? "—" : `$${perDollar.toFixed(2)}`],
  ];

  return (
    <section
      aria-labelledby={`${id}-title`}
      className="my-10 overflow-hidden rounded-3xl border border-line bg-surface-warm"
    >
      <div className="border-b border-line px-6 pt-6 pb-5 sm:px-8">
        <p className={`${EYEBROW} text-[11px] text-primary`}>Calculator</p>
        <h3 id={`${id}-title`} className="mt-2 font-serif text-2xl font-normal tracking-[-0.01em]">
          SEO ROI calculator
        </h3>
        <p className="mt-1.5 text-sm text-ink-muted">
          Revenue here assumes one deal per customer in the month it closes. Edit any number.
        </p>
      </div>

      <div className="grid gap-8 px-6 py-7 sm:px-8 md:grid-cols-2">
        <div className="grid gap-4">
          {FIELDS.map((field) => (
            <label key={field.key} className="grid gap-1.5">
              <span className="text-[13px] font-medium text-ink-muted">{field.label}</span>
              <span className="flex items-center rounded-xl border border-line-strong bg-white focus-within:border-primary">
                {field.suffix === "$" && <span className="pl-3.5 text-sm text-ink-subtle">$</span>}
                <input
                  type="number"
                  inputMode="decimal"
                  min="0"
                  step={field.step}
                  value={values[field.key]}
                  onChange={set(field.key)}
                  className="h-11 w-full min-w-0 bg-transparent px-3.5 text-[15px] font-medium outline-none"
                />
                {field.suffix === "%" && <span className="pr-3.5 text-sm text-ink-subtle">%</span>}
              </span>
            </label>
          ))}
        </div>

        <dl className="grid gap-px self-start overflow-hidden rounded-2xl border border-line bg-line" aria-live="polite">
          {results.map(([label, value], i) => (
            <div key={label} className={`flex items-baseline justify-between gap-4 bg-white px-5 py-4 ${i === 3 ? "bg-secondary! text-white" : ""}`}>
              <dt className={`text-[13px] ${i === 3 ? "text-white/70" : "text-ink-muted"}`}>{label}</dt>
              <dd className={`font-semibold tabular-nums ${i === 3 ? "text-2xl" : "text-lg"}`}>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
