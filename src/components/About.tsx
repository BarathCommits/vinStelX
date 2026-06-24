import { SectionLabel } from "./SectionLabel";

type AboutProps = {
  variant?: "home" | "page";
};

export function About({ variant = "home" }: AboutProps) {
  if (variant === "page") {
    return (
      <section className="px-6 py-28 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionLabel>Our story</SectionLabel>
              <h2 className="mt-4 text-2xl font-light text-white md:text-3xl">
                Space infrastructure for the data age.
              </h2>
            </div>
            <div className="space-y-5 text-sm leading-relaxed text-muted md:text-base">
              <p>
                vinStelX was founded on a simple observation: satellite
                constellations are generating more data than they can
                efficiently return to Earth. The bottleneck isn&apos;t in space
                — it&apos;s in how we process and move that data.
              </p>
              <p>
                We&apos;re building the orbital infrastructure layer that
                brings compute to the edge of space. Our mission is to enable
                constellation operators to process, store, and infer at the
                source — reducing latency, bandwidth costs, and dependency on
                ground availability.
              </p>
              <p>
                Vinsta Compute is our first product, with more orbital systems
                on the roadmap as we scale from demonstrator missions to
                production constellation deployments.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-border px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <SectionLabel>About vinStelX</SectionLabel>
            <h2 className="mt-4 text-2xl font-light text-white md:text-3xl">
              Space infrastructure for the data age.
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-relaxed text-muted md:text-base">
            <p>
              vinStelX builds orbital infrastructure that brings compute closer
              to where data is created. We believe the next generation of
              satellite constellations shouldn&apos;t be limited by what they
              can send back to Earth.
            </p>
            <p>
              Vinsta Compute is our first product — a modular orbital edge
              platform for operators who need real-time processing and sovereign
              control over on-orbit data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
