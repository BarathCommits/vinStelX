import { SectionLabel } from "./SectionLabel";

const industries = [
  "Earth observation",
  "Defense & space",
  "Telecom operators",
  "Research institutions",
  "Maritime & shipping",
  "Agriculture & forestry",
  "Energy & utilities",
  "Climate & environment",
  "Disaster response",
  "Government & civil",
  "Aviation & aerospace",
  "Mining & resources",
  "Insurance & risk",
  "Financial services",
  "Media & geospatial",
  "Logistics & supply chain",
  "Space situational awareness",
  "Autonomous systems",
  "IoT & sensor networks",
  "National security",
];

export function Partners() {
  return (
    <section className="border-t border-border px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <SectionLabel>Built for</SectionLabel>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {industries.map((name) => (
            <li
              key={name}
              className="border border-border px-4 py-2 text-xs tracking-[0.12em] text-muted uppercase"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
