import { SectionLabel } from "./SectionLabel";

const milestones = [
  {
    phase: "2025",
    title: "Architecture validation",
    description:
      "Orbital node design, radiation testing, and ground segment integration.",
    status: "Complete",
  },
  {
    phase: "2026",
    title: "Orbital demonstrator",
    description:
      "First Vinsta Compute node in LEO with live workload processing.",
    status: "In progress",
  },
  {
    phase: "2027",
    title: "Pilot constellation",
    description:
      "Multi-node deployment with select constellation operator partners.",
    status: "Planned",
  },
  {
    phase: "2028",
    title: "Production scale",
    description:
      "Commercial orbital compute service across LEO operator networks.",
    status: "Planned",
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="border-t border-border bg-elevated px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Roadmap</SectionLabel>
        <h2 className="mt-4 text-2xl font-light text-white md:text-3xl">
          From demonstrator to constellation scale.
        </h2>
        <ol className="mt-16 space-y-0">
          {milestones.map((item, i) => (
            <li
              key={item.phase}
              className="grid gap-4 border-b border-border py-8 md:grid-cols-[100px_1fr_auto] md:items-start md:gap-8"
            >
              <span className="text-sm text-muted">{item.phase}</span>
              <div>
                <h3 className="text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
              <span
                className={`text-xs tracking-wide uppercase ${
                  item.status === "In progress"
                    ? "text-white"
                    : item.status === "Complete"
                      ? "text-muted"
                      : "text-muted/60"
                }`}
              >
                {item.status}
              </span>
              {i < milestones.length - 1 && (
                <div
                  className="col-span-full hidden h-px bg-border md:block"
                  aria-hidden
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
