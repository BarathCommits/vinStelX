export function OrbitalDiagram() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm" aria-hidden>
      <svg
        viewBox="0 0 400 400"
        fill="none"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="200"
          cy="200"
          r="140"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="200"
          r="100"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="0.5"
          strokeDasharray="2 6"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="140"
          ry="40"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
          transform="rotate(-20 200 200)"
        />
        <circle
          cx="200"
          cy="200"
          r="48"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="0.75"
        />
        <circle cx="200" cy="200" r="4" fill="rgba(255,255,255,0.9)" />
        <rect
          x="188"
          y="188"
          width="24"
          height="24"
          rx="2"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="0.75"
          transform="rotate(45 200 200)"
        />
        <circle cx="340" cy="200" r="3" fill="rgba(255,255,255,0.5)" />
        <circle cx="95" cy="130" r="2" fill="rgba(255,255,255,0.35)" />
        <circle cx="120" cy="290" r="2.5" fill="rgba(255,255,255,0.4)" />
        <line
          x1="248"
          y1="200"
          x2="337"
          y2="200"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="0.5"
          strokeDasharray="3 4"
        />
        <line
          x1="152"
          y1="200"
          x2="98"
          y2="132"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
          strokeDasharray="3 4"
        />
        <line
          x1="176"
          y1="232"
          x2="122"
          y2="287"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
          strokeDasharray="3 4"
        />
      </svg>
      <p className="absolute right-0 bottom-0 left-0 text-center text-xs tracking-widest text-muted uppercase">
        Vinsta Compute · LEO
      </p>
    </div>
  );
}
