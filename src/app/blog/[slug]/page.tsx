import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionLabel } from "@/components/SectionLabel";
import { InternalLink } from "@/components/InternalLink";
import { CTA } from "@/components/CTA";
import { getArticle, useCaseArticles } from "@/data/use-cases";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return useCaseArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <main>
      <article className="px-6 pt-14">
        <div className="mx-auto max-w-3xl py-20 md:py-28">
          <InternalLink
            href="/blog"
            className="text-xs tracking-wide text-muted uppercase transition-colors hover:text-white"
          >
            ← All articles
          </InternalLink>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-muted">
            <span className="tracking-wide uppercase">{article.category}</span>
            <span>·</span>
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{article.readTime} read</span>
          </div>
          <h1 className="mt-6 text-3xl leading-tight font-light tracking-tight text-white md:text-4xl">
            {article.title}
          </h1>
          <p className="mt-8 text-base leading-relaxed text-muted">
            {article.summary}
          </p>

          <div className="mt-16 space-y-16">
            <section>
              <SectionLabel>Key benefits</SectionLabel>
              <ul className="mt-6 space-y-3">
                {article.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <SectionLabel>Applications</SectionLabel>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {article.applications.map((app) => (
                  <li
                    key={app}
                    className="border border-border px-4 py-3 text-sm text-muted"
                  >
                    {app}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>
      <CTA
        title="Explore Vinsta Compute for your mission"
        description="Talk to our team about deploying in-orbit processing for your constellation."
      />
    </main>
  );
}
