// 1. Define a new character table type
export type CharacterTable =
  | "weaponsAndDamageCantrips"
  | "classFeatures"
  | "speciesTraits"
  | "feats"
  | "overview";

type BaseCharacterTable = {
  id: number;
  acquisitionLevel: number;
};

// 2. Define the columns for each character table
export type WeaponsAndDamageCantrips = {
  name: string;
  atkRoll: string;
  damage: string;
} & BaseCharacterTable;

export type ClassFeatures = {
  feature: string;
} & BaseCharacterTable;

export type SpeciesTraits = {
  trait: string;
} & BaseCharacterTable;

export type Feats = {
  feat: string;
} & BaseCharacterTable;

export type Overview = {
  level: number;
  speed: string;
  size: string;
  passivePerception: number;
};

// 3. Add the new character table type to the map
const characterTableTypeMap = {
  weaponsAndDamageCantrips: {} as WeaponsAndDamageCantrips,
  classFeatures: {} as ClassFeatures,
  speciesTraits: {} as SpeciesTraits,
  feats: {} as Feats,
  overview: {} as Overview,
} as const satisfies Record<CharacterTable, unknown>;

export type CharacterTableDataMap = typeof characterTableTypeMap;
