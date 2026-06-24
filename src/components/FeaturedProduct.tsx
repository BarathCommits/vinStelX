import { SectionLabel } from "./SectionLabel";
import { InternalLink } from "./InternalLink";

export function FeaturedProduct() {
  return (
    <section className="border-t border-border px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Products</SectionLabel>
        <div className="mt-12 grid gap-12 border border-border p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div>
            <p className="text-xs tracking-widest text-muted uppercase">
              First product
            </p>
            <h2 className="mt-4 text-3xl font-light text-white">Vinsta Compute</h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted md:text-base">
              Modular orbital edge compute for constellation operators. Process,
              store, and run AI inference on-orbit — downlink insights, not
              raw terabytes.
            </p>
            <InternalLink
              href="/products"
              className="mt-8 inline-flex text-xs tracking-wide text-white uppercase transition-opacity hover:opacity-70"
            >
              Explore Vinsta Compute →
            </InternalLink>
          </div>
          <div className="hidden h-px w-24 bg-border md:block" aria-hidden />
        </div>
      </div>
    </section>
  );
}
