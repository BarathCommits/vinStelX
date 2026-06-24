import { SectionLabel } from "./SectionLabel";

export function Value() {
  return (
    <section className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Why Vinsta Compute</SectionLabel>
        <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-0">
          <div className="md:pr-16 md:border-r md:border-border">
            <h2 className="text-xl font-light text-white md:text-2xl">
              The bottleneck is on the ground.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">
              Satellites generate more data than downlinks can carry. Every
              terabyte sent to Earth costs time, bandwidth, and money — and
              delays the decisions that matter.
            </p>
          </div>
          <div className="md:pl-16">
            <h2 className="text-xl font-light text-white md:text-2xl">
              Process at the source.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">
              Run workloads in orbit. Downlink insights, not raw imagery. Decide
              in real time, where the data is born — with full control over what
              leaves the constellation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
