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
