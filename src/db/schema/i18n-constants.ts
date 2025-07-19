export const TRANSLATION_DEFAULT_LOCALE = "en";

export const I18N_LOCALES = ["en", "fr"] as const;

export const I18N_TRANSLATION_ENTITIES = [
  "abilities",
  "armors",
  "backgrounds",
  "classFeatures",
  "classes",
  "feats",
  "lootables",
  "skills",
  "species",
  "speciesTraits",
  "subspecies",
  "spells",
  "subclasses",
  "tools",
  "weapons",
  "weaponProperties",
] as const;

export type I18N_ENTITY = (typeof I18N_TRANSLATION_ENTITIES)[number];

// For translation management: which fields are required for each entity
export const I18N_ENTITY_FIELDS: Record<string, string[]> = {
  abilities: ["name"],
  armors: ["name"],
  backgrounds: ["name"],
  classFeatures: ["name", "description"],
  classes: ["name"],
  feats: ["name"],
  lootables: ["name"],
  skills: ["name"],
  species: ["name", "description"],
  speciesTraits: ["name", "description"],
  subspecies: ["name", "description"],
  spells: ["name"],
  subclasses: ["name"],
  tools: ["name", "utility", "craft"],
  weapons: ["name"],
  weaponProperties: ["name"],
};

export function getTranslationFieldsForEntity(entity: I18N_ENTITY): string[] {
  return I18N_ENTITY_FIELDS[entity] ?? ["name"];
}
