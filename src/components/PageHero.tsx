import { Stars } from "./Stars";

type PageHeroProps = {
  label: string;
  title: string;
  description: string;
};

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border px-6 pt-14">
      <Stars />
      <div className="relative mx-auto max-w-6xl py-24 md:py-32">
        <p className="text-xs tracking-[0.2em] text-muted uppercase">{label}</p>
        <h1 className="mt-6 max-w-2xl text-4xl leading-[1.1] font-light tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
