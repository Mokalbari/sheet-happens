const DD5E_COMMON_METRICS = [
  "Level",
  "Hit points",
  "CA",
  "Initiative",
  "Hit dice",
  "Death saves",
  "Proficiency bonus",
  "Heroic inspiration",
  "Class features",
  "Species traits",
  "Feats",
  "Equipment Training",
  "Proficiencies",
  "Alignment",
  "Background",
  "Class",
  "Subclass",
  "Specie",
  "Languages",
] as const;

export type DD5ECommonMetrics = (typeof DD5E_COMMON_METRICS)[number];
