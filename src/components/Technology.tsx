import { SectionLabel } from "./SectionLabel";

const specs = [
  {
    label: "Orbit",
    value: "Low Earth Orbit (LEO)",
    detail: "400–600 km deployment altitude",
  },
  {
    label: "Compute",
    value: "Modular edge nodes",
    detail: "CPU, GPU, and AI accelerator options",
  },
  {
    label: "Connectivity",
    value: "Optical & RF crosslinks",
    detail: "Mesh-ready constellation integration",
  },
  {
    label: "Security",
    value: "End-to-end encryption",
    detail: "Policy-controlled downlink and key management",
  },
  {
    label: "Environment",
    value: "Radiation-hardened",
    detail: "Qualified for long-duration LEO missions",
  },
  {
    label: "Integration",
    value: "Open workload APIs",
    detail: "Containerized deployments and ground orchestration",
  },
];

export function Technology() {
  return (
    <section id="technology" className="border-t border-border px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Technology</SectionLabel>
        <h2 className="mt-4 text-2xl font-light text-white md:text-3xl">
          Engineered for the orbital edge.
        </h2>
        <ul className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {specs.map((spec) => (
            <li key={spec.label} className="bg-surface p-8">
              <p className="text-xs tracking-widest text-muted uppercase">
                {spec.label}
              </p>
              <p className="mt-3 text-white">{spec.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {spec.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
