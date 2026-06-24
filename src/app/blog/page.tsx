import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionLabel } from "@/components/SectionLabel";
import { InternalLink } from "@/components/InternalLink";
import { useCaseArticles } from "@/data/use-cases";

export const metadata: Metadata = {
  title: "Blog & Articles",
  description:
    "Use cases for in-orbit data centres — earth observation, defense, telecom, science, disaster response, and more.",
};

export default function BlogPage() {
  return (
    <main>
      <PageHero
        label="Blog & articles"
        title="In-orbit data centre use cases"
        description="How Vinsta Compute and in-orbit processing are transforming industries — from earth observation to autonomous constellation operations."
      />
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>All articles</SectionLabel>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Explore how in-orbit data centres enable real-time processing,
            reduced downlink costs, and sovereign control across mission types.
          </p>
          <ul className="mt-16 divide-y divide-border border-y border-border">
            {useCaseArticles.map((article) => (
              <li key={article.slug}>
                <InternalLink
                  href={`/blog/${article.slug}`}
                  className="group grid gap-4 py-8 transition-colors md:grid-cols-[140px_1fr_auto] md:items-start md:gap-8"
                >
                  <div className="text-xs text-muted">
                    <p>{article.category}</p>
                    <p className="mt-1">{article.readTime} read</p>
                  </div>
                  <div>
                    <h2 className="text-lg font-light text-white transition-colors group-hover:text-white/80">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {article.excerpt}
                    </p>
                  </div>
                  <span className="text-xs tracking-wide text-muted uppercase transition-colors group-hover:text-white">
                    Read →
                  </span>
                </InternalLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
