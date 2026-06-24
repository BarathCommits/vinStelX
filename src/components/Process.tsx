import { SectionLabel } from "./SectionLabel";

const steps = [
  {
    number: "01",
    title: "Ingest",
    description:
      "Payload sensors and inter-satellite crosslinks feed data directly into the orbital node.",
  },
  {
    number: "02",
    title: "Process",
    description:
      "Compute, store, and run AI inference inside a radiation-hardened orbital enclosure.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Encrypted insights reach your ground segment or cloud — on your schedule, on your terms.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-t border-border px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Process</SectionLabel>
        <h2 className="mt-4 max-w-lg text-2xl font-light text-white md:text-3xl">
          Three steps. Zero ground bottleneck.
        </h2>
        <ol className="mt-20 grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <li key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div
                  className="absolute top-4 left-[calc(100%+1rem)] hidden h-px w-8 bg-border md:block"
                  aria-hidden
                />
              )}
              <span className="text-xs tracking-widest text-muted">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-light text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
