export type CharacterTable =
  | "weaponsAndDamageCantrips"
  | "classFeatures"
  | "speciesTraits"
  | "feats";

export type WeaponsAndDamageCantrips = {
  id: number;
  name: string;
  atkRoll: string;
  damage: string;
  type: string;
};

export type ClassFeatures = {
  id: number;
  feature: string;
  acquisitionLevel: number;
};

export type SpeciesTraits = {
  id: number;
  trait: string;
  acquisitionLevel: number;
};

export type Feats = {
  id: number;
  feat: string;
  acquisitionLevel: number;
};
