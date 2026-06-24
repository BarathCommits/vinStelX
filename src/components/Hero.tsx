import { Stars } from "./Stars";
import { OrbitalDiagram } from "./OrbitalDiagram";
import { InternalLink } from "./InternalLink";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-14">
      <Stars />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 py-20 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="animate-fade-up text-xs tracking-[0.2em] text-muted uppercase">
            Orbital infrastructure
          </p>
          <h1 className="animate-fade-up-delay-1 mt-6 max-w-xl text-4xl leading-[1.1] font-light tracking-tight text-white sm:text-5xl lg:text-6xl">
            Compute at the
            <br />
            edge of space
          </h1>
          <p className="animate-fade-up-delay-2 mt-8 max-w-md text-base leading-relaxed text-muted lg:text-lg">
            vinStelX builds orbital systems that process data where it&apos;s
            created — so constellations move faster, downlink less, and decide
            in real time.
          </p>
          <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap items-center gap-5">
            <InternalLink
              href="/products"
              className="inline-flex h-10 items-center bg-white px-6 text-xs tracking-wide text-surface uppercase transition-opacity hover:opacity-90"
            >
              View products
            </InternalLink>
            <InternalLink
              href="/about"
              className="text-xs tracking-wide text-muted uppercase transition-colors hover:text-white"
            >
              About us
            </InternalLink>
          </div>
        </div>
        <div className="animate-fade-up-delay-2 hidden lg:block">
          <OrbitalDiagram />
        </div>
      </div>
    </section>
  );
}
