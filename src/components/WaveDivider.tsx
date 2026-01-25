interface WaveDividerProps {
  variant?: "primary" | "muted" | "navy" | "forest";
  flip?: boolean;
  className?: string;
}

export function WaveDivider({ variant = "primary", flip = false, className = "" }: WaveDividerProps) {
  const colors = {
    primary: "hsl(var(--muted))",
    muted: "hsl(var(--background))",
    navy: "hsl(var(--navy))",
    forest: "hsl(var(--forest))",
  };

  const fill = colors[variant];

  return (
    <div 
      className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24"
      >
        <path
          d="M0,40 C240,100 480,0 720,60 C960,120 1200,20 1440,80 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function WaveDividerAlt({ variant = "primary", flip = false, className = "" }: WaveDividerProps) {
  const colors = {
    primary: "hsl(var(--muted))",
    muted: "hsl(var(--background))",
    navy: "hsl(var(--navy))",
    forest: "hsl(var(--forest))",
  };

  const fill = colors[variant];

  return (
    <div 
      className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-20"
      >
        <path
          d="M0,50 Q360,100 720,50 T1440,50 L1440,100 L0,100 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
