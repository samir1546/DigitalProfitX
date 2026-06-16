import Background from "./Background";

export function PremiumBackground() {
  return (
    <div>
      <Background />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(closest-side,oklch(0.75_0.2_255/0.55),transparent)] animate-float-slow" />
        <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(closest-side,oklch(0.8_0.15_280/0.5),transparent)] animate-float-slower " />
      </div>
    </div>
  );
}
  