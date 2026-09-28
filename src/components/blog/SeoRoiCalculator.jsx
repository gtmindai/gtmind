import { useId, useState } from "react";
import { EYEBROW } from "../ui/typography";

const FIELDS = [
  { key: "sessions", label: "Monthly organic sessions", step: 100 },
  { key: "leadRate", label: "Visit → lead rate", unit: "%", step: 0.1 },
  { key: "closeRate", label: "Lead → customer rate", unit: "%", step: 0.5 },
  { key: "dealValue", label: "Average deal value", unit: "$", step: 500 },
  { key: "cost", label: "Monthly SEO cost", unit: "$", step: 500 },
];

// Matches the worked example in the SEO ROI post. Kept as the strings the
// inputs show, so a field can be cleared and retyped; parsed for the maths.
const DEFAULTS = { sessions: "5000", leadRate: "2", closeRate: "4", dealValue: "12000", cost: "6000" };

const ROI_ROW = 3;

const parse = (value) => {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : 0;
};

const money = (n) => `$${Math.round(n).toLocaleString("en-US")}`;

export default function SeoRoiCalculator() {
  const id = useId();
  const [values, setValues] = useState(DEFAULTS);

  const cost = parse(values.cost);
  const leads = parse(values.sessions) * (parse(values.leadRate) / 100);
  const customers = leads * (parse(values.closeRate) / 100);
  const revenue = customers * parse(values.dealValue);
  const roi = cost > 0 ? ((revenue - cost) / cost) * 100 : null;
  const perDollar = cost > 0 ? revenue / cost : null;

  const set = (key) => (event) => setValues((prev) => ({ ...prev, [key]: event.target.value }));

  const results = [
    ["Leads / month", Math.round(leads).toLocaleString("en-US")],
    ["Customers / month", customers.toFixed(1)],
    ["Revenue / month", money(revenue)],
    ["SEO ROI", roi === null ? "—" : `${Math.round(roi).toLocaleString("en-US")}%`],
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
                {field.unit === "$" && <span className="pl-3.5 text-sm text-ink-subtle">$</span>}
                <input
                  type="number"
                  inputMode="decimal"
                  min="0"
                  step={field.step}
                  value={values[field.key]}
                  onChange={set(field.key)}
                  className="h-11 w-full min-w-0 bg-transparent px-3.5 text-[15px] font-medium outline-none"
                />
                {field.unit === "%" && <span className="pr-3.5 text-sm text-ink-subtle">%</span>}
              </span>
            </label>
          ))}
        </div>

        <dl
          className="grid gap-px self-start overflow-hidden rounded-2xl border border-line bg-line"
          aria-live="polite"
        >
          {results.map(([label, value], i) => {
            const highlight = i === ROI_ROW;
            return (
              <div
                key={label}
                className={`flex items-baseline justify-between gap-4 px-5 py-4 ${highlight ? "bg-secondary text-white" : "bg-white"}`}
              >
                <dt className={`text-[13px] ${highlight ? "text-white/70" : "text-ink-muted"}`}>{label}</dt>
                <dd className={`font-semibold tabular-nums ${highlight ? "text-2xl" : "text-lg"}`}>{value}</dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
