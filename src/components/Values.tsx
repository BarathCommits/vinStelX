import { SectionLabel } from "./SectionLabel";

const values = [
  {
    title: "Compute where data lives",
    description:
      "We build infrastructure at the source of data creation — not downstream on the ground.",
  },
  {
    title: "Sovereign by design",
    description:
      "Operators control what is processed, stored, and transmitted from orbit.",
  },
  {
    title: "Built to scale",
    description:
      "Modular nodes designed to grow from demonstrator missions to full constellations.",
  },
];

export function Values() {
  return (
    <section className="border-t border-border px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Our principles</SectionLabel>
        <h2 className="mt-4 text-2xl font-light text-white md:text-3xl">
          What guides us.
        </h2>
        <ul className="mt-16 grid gap-12 md:grid-cols-3">
          {values.map((value) => (
            <li key={value.title}>
              <h3 className="text-white">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {value.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
