const stats = [
  { value: "<50ms", label: "Orbital inference latency" },
  { value: "90%", label: "Less data downlinked" },
  { value: "24/7", label: "On-orbit availability" },
  { value: "LEO", label: "Low Earth Orbit deployment" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-elevated px-6 py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <p className="text-2xl font-light tracking-tight text-white md:text-3xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
