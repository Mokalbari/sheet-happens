import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Gradient({ children }: Props) {
  return (
    <div className="min-h-screen w-full relative">
      {/* Golden Horizon Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251, 191, 36, 0.25), transparent 70%), #000000",
        }}
      />

      {children}
    </div>
  );
}
