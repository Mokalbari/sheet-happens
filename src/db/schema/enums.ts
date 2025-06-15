import { pgEnum } from "drizzle-orm/pg-core";

export const SYSTEM_ENUM = ["dd5e2024", "homebrew"] as const;
export type System = (typeof SYSTEM_ENUM)[number];
export const systemEnum = pgEnum("system", SYSTEM_ENUM);

export const LOCALE_ENUM = ["en", "fr"] as const;
export type Locale = (typeof LOCALE_ENUM)[number];
export const localeEnum = pgEnum("locale", LOCALE_ENUM);

export const TRANSLATION_ENTITY_ENUM = ["abilities"] as const;
export type TranslationEntity = (typeof TRANSLATION_ENTITY_ENUM)[number];
export const translationEntityEnum = pgEnum(
  "translation_entity",
  TRANSLATION_ENTITY_ENUM
);

export const CLASS_ABILITY_ROLE_ENUM = ["main", "save"] as const;
export type ClassAbilityRole = (typeof CLASS_ABILITY_ROLE_ENUM)[number];
export const classAbilityRoleEnum = pgEnum(
  "class_ability_role",
  CLASS_ABILITY_ROLE_ENUM
);

export const HIT_DICE_ENUM = ["d4", "d6", "d8", "d10", "d12"] as const;
export type HitDice = (typeof HIT_DICE_ENUM)[number];
export const hitDiceEnum = pgEnum("hit_dice", HIT_DICE_ENUM);

export const WEAPON_MASTERY_ENUM = [
  "cleave",
  "graze",
  "nick",
  "push",
  "sap",
  "slow",
  "topple",
  "vex",
] as const;
export type WeaponMastery = (typeof WEAPON_MASTERY_ENUM)[number];
export const weaponMasteryEnum = pgEnum("weapon_mastery", WEAPON_MASTERY_ENUM);
