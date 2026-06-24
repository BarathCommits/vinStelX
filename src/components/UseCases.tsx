import { SectionLabel } from "./SectionLabel";
import { InternalLink } from "./InternalLink";
import { useCaseArticles } from "@/data/use-cases";

export function UseCases() {
  return (
    <section className="border-t border-border px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Use cases</SectionLabel>
        <h2 className="mt-4 text-2xl font-light text-white md:text-3xl">
          Designed for constellation operators.
        </h2>
        <ul className="mt-16 grid gap-px bg-border sm:grid-cols-2">
          {useCaseArticles.slice(0, 4).map((item) => (
            <li
              key={item.slug}
              className="bg-surface p-8 transition-colors hover:bg-elevated"
            >
              <h3 className="text-sm text-white">{item.category}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.excerpt}
              </p>
            </li>
          ))}
        </ul>
        <InternalLink
          href="/blog"
          className="mt-10 inline-flex text-xs tracking-wide text-muted uppercase transition-colors hover:text-white"
        >
          View all articles →
        </InternalLink>
      </div>
    </section>
  );
}
