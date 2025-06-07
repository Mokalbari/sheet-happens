export type GlowColor = "blue" | "pink" | "green" | "orange";
export type GlowRule = {
  condition: boolean | undefined;
  color: GlowColor;
};

export const COLOR_MAP: Record<GlowColor, string> = {
  blue: "bg-blue-500",
  pink: "bg-pink-500",
  green: "bg-emerald-500",
  orange: "bg-orange-500",
};
