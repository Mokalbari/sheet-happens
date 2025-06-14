export const SizeEnum = ["tiny", "small", "medium", "large", "huge"] as const;
export type Size = (typeof SizeEnum)[number];

export const AbilityTypeEnum = [
  "racial",
  "class",
  "background",
  "feat",
  "custom",
] as const;
export type AbilityType = (typeof AbilityTypeEnum)[number];
