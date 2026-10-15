type CTAProps = {
  title?: string;
  description?: string;
};

export function CTA({
  title = "Bring your workload to orbit.",
  description = "Tell us about your constellation and processing needs. We'll schedule a conversation with our team.",
}: CTAProps) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border px-6 py-28 md:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, var(--color-glow), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-6xl text-center">
        <p className="text-xs tracking-[0.2em] text-muted uppercase">
          Get started
        </p>
        <h2 className="mx-auto mt-4 max-w-lg text-2xl font-light text-white md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted">
          {description}
        </p>
      </div>
    </section>
  );
}
