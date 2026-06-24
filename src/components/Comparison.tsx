import { SectionLabel } from "./SectionLabel";

const rows = [
  {
    aspect: "Latency",
    ground: "Minutes to hours per ground pass",
    orbital: "Sub-second on-orbit inference",
  },
  {
    aspect: "Data transfer",
    ground: "Downlink full raw datasets",
    orbital: "Downlink insights and alerts only",
  },
  {
    aspect: "Cost model",
    ground: "Bandwidth scales with data volume",
    orbital: "Compute scales with constellation",
  },
  {
    aspect: "Control",
    ground: "Processing tied to ground availability",
    orbital: "Autonomous operation in orbit",
  },
];

export function Comparison() {
  return (
    <section className="border-t border-border bg-elevated px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Ground vs orbit</SectionLabel>
        <h2 className="mt-4 text-2xl font-light text-white md:text-3xl">
          Why move compute off the ground.
        </h2>
        <div className="mt-16 overflow-x-auto">
          <table className="w-full min-w-[540px] text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-4 pr-6 font-normal text-muted" />
                <th className="pb-4 pr-6 font-normal tracking-wide text-muted uppercase">
                  Ground processing
                </th>
                <th className="pb-4 font-normal tracking-wide text-white uppercase">
                  Vinsta Compute
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.aspect} className="border-b border-border">
                  <td className="py-5 pr-6 text-white">{row.aspect}</td>
                  <td className="py-5 pr-6 text-muted">{row.ground}</td>
                  <td className="py-5 text-white/90">{row.orbital}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
