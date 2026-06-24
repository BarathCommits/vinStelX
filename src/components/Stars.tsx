export function Stars() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 25% 45%, rgba(255,255,255,0.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 45% 10%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 65% 35%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 80% 60%, rgba(255,255,255,0.45) 0%, transparent 100%),
            radial-gradient(1px 1px at 15% 75%, rgba(255,255,255,0.25) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 85%, rgba(255,255,255,0.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 90% 25%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 35% 65%, rgba(255,255,255,0.2) 0%, transparent 100%),
            radial-gradient(1px 1px at 70% 90%, rgba(255,255,255,0.25) 0%, transparent 100%)
          `,
        }}
      />
      <div
        className="absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, var(--color-glow) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
