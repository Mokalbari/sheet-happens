import { DD5ECommonMetrics } from "../metrics/dd5e/metrics";

export type Color = "blue" | "pink" | "green" | "orange";

export type GlowRule = {
  condition: boolean | undefined;
  color: Color;
};

export const GLOW_COLOR_MAP = {
  CA: "blue",
  "Hit points": "pink",
} as const satisfies Partial<Record<DD5ECommonMetrics, Color>>;

export const COLOR_CLASSES: Record<
  Color,
  { tailwindClass: string; gradient: string; glow: string }
> = {
  blue: {
    tailwindClass: "bg-blue-500",
    gradient: "from-blue-400 via-sky-400 to-indigo-500",
    glow: "shadow-[0_0_16px_4px_rgba(56,189,248,0.6)]",
  },
  pink: {
    tailwindClass: "bg-pink-500",
    gradient: "from-pink-400 via-fuchsia-500 to-rose-500",
    glow: "shadow-[0_0_16px_4px_rgba(244,114,182,0.6)]",
  },
  green: {
    tailwindClass: "bg-emerald-500",
    gradient: "from-emerald-400 via-green-400 to-lime-400",
    glow: "shadow-[0_0_16px_4px_rgba(52,211,153,0.6)]",
  },
  orange: {
    tailwindClass: "bg-orange-500",
    gradient: "from-orange-400 via-amber-400 to-yellow-400",
    glow: "shadow-[0_0_16px_4px_rgba(251,146,60,0.6)]",
  },
};
