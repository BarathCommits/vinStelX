import { SectionLabel } from "./SectionLabel";

const capabilities = [
  {
    title: "Orbital compute",
    description:
      "Edge servers deployed in low Earth orbit, sized for your constellation's workload profile.",
  },
  {
    title: "In-orbit storage",
    description:
      "Buffer, tier, and archive on-board before selective downlink to ground stations.",
  },
  {
    title: "AI at the edge",
    description:
      "On-board inference for earth observation, signal intelligence, and anomaly detection.",
  },
  {
    title: "Secure downlink",
    description:
      "Encrypted, policy-controlled delivery to your ground segment or sovereign cloud.",
  },
];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="border-t border-border bg-elevated px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Capabilities</SectionLabel>
        <h2 className="mt-4 text-2xl font-light text-white md:text-3xl">
          Built for orbital workloads.
        </h2>
        <ul className="mt-16 divide-y divide-border">
          {capabilities.map((item) => (
            <li
              key={item.title}
              className="group grid gap-3 py-9 transition-colors md:grid-cols-[1fr_1.2fr] md:gap-12"
            >
              <h3 className="text-white transition-colors group-hover:text-white/80">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
