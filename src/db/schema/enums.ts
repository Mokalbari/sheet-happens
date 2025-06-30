import { pgEnum } from "drizzle-orm/pg-core";
import { I18N_LOCALES, I18N_TRANSLATION_ENTITIES } from "./i18n-constants";

export const AREA_OF_EFFECT_ENUM = [
  "sphere",
  "cube",
  "cylinder",
  "line",
] as const;
export type AreaOfEffect = (typeof AREA_OF_EFFECT_ENUM)[number];
export const areaOfEffectEnum = pgEnum("area_of_effect", AREA_OF_EFFECT_ENUM);

export const ARMOR_TYPE_ENUM = ["light", "medium", "heavy", "shield"] as const;
export type ArmorType = (typeof ARMOR_TYPE_ENUM)[number];
export const armorTypeEnum = pgEnum("armor_type", ARMOR_TYPE_ENUM);

export const HEROE_INFORMATION_ENUM = [
  "appearance",
  "backstory",
  "personalityTraits",
  "ideals",
  "bonds",
  "flaws",
] as const;
export type HeroInformation = (typeof HEROE_INFORMATION_ENUM)[number];
export const heroInformationEnum = pgEnum(
  "hero_information",
  HEROE_INFORMATION_ENUM
);

export const DND5E_CLASS_ENUM = [
  "barbarian",
  "bard",
  "cleric",
  "druid",
  "fighter",
  "monk",
  "paladin",
  "ranger",
  "rogue",
  "sorcerer",
  "warlock",
  "wizard",
] as const;
export type DND5EClass = (typeof DND5E_CLASS_ENUM)[number];
export const dnd5eClassEnum = pgEnum("dnd5e_class", DND5E_CLASS_ENUM);

export const CLASS_ABILITY_ROLE_ENUM = ["main", "save"] as const;
export type ClassAbilityRole = (typeof CLASS_ABILITY_ROLE_ENUM)[number];
export const classAbilityRoleEnum = pgEnum(
  "class_ability_role",
  CLASS_ABILITY_ROLE_ENUM
);

export const HIT_DICE_ENUM = ["d4", "d6", "d8", "d10", "d12"] as const;
export type HitDice = (typeof HIT_DICE_ENUM)[number];
export const hitDiceEnum = pgEnum("hit_dice", HIT_DICE_ENUM);

export const LOCALE_ENUM = I18N_LOCALES;
export type Locale = (typeof LOCALE_ENUM)[number];
export const localeEnum = pgEnum("locale", LOCALE_ENUM);

export const SPELL_SCHOOL_ENUM = [
  "abjuration",
  "conjuration",
  "divination",
  "enchantment",
  "evocation",
  "illusion",
  "necromancy",
  "transmutation",
] as const;
export type SpellSchool = (typeof SPELL_SCHOOL_ENUM)[number];
export const spellSchoolEnum = pgEnum("spell_school", SPELL_SCHOOL_ENUM);

export const SPELL_CASTING_TIME_ENUM = [
  "bonus_action",
  "action",
  "reaction",
  "minute",
  "hour",
  "day",
] as const;
export type SpellCastingTime = (typeof SPELL_CASTING_TIME_ENUM)[number];
export const spellCastingTimeEnum = pgEnum(
  "spell_casting_time",
  SPELL_CASTING_TIME_ENUM
);

export const SPELL_DURATION_ENUM = [
  "instant",
  "long",
  "until_dispelled",
] as const;
export type SpellDuration = (typeof SPELL_DURATION_ENUM)[number];
export const spellDurationEnum = pgEnum("spell_duration", SPELL_DURATION_ENUM);

export const SPELL_RANGE_ENUM = ["touch", "self", "range", "infinite"] as const;
export type SpellRange = (typeof SPELL_RANGE_ENUM)[number];
export const spellRangeEnum = pgEnum("spell_range", SPELL_RANGE_ENUM);

export const SPELL_SAVING_THROW_ENUM = [
  "strength",
  "dexterity",
  "constitution",
  "wisdom",
  "intelligence",
  "charisma",
] as const;
export type SpellSavingThrow = (typeof SPELL_SAVING_THROW_ENUM)[number];
export const spellSavingThrowEnum = pgEnum(
  "spell_saving_throw",
  SPELL_SAVING_THROW_ENUM
);

export const SPECIES_SIZE_ENUM = [
  "tiny",
  "small",
  "medium",
  "large",
  "huge",
  "gargantuan",
] as const;
export type SpeciesSize = (typeof SPECIES_SIZE_ENUM)[number];
export const speciesSizeEnum = pgEnum("species_size", SPECIES_SIZE_ENUM);

export const SYSTEM_ENUM = ["dd5e2024", "homebrew"] as const;
export type SystemEnum = (typeof SYSTEM_ENUM)[number];
export const systemEnum = pgEnum("system", SYSTEM_ENUM);

export const TRANSLATION_ENTITY_ENUM = I18N_TRANSLATION_ENTITIES;
export type TranslationEntity = (typeof TRANSLATION_ENTITY_ENUM)[number];
export const translationEntityEnum = pgEnum(
  "translation_entity",
  TRANSLATION_ENTITY_ENUM
);

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

export const WEAPON_TYPE_ENUM = ["simple", "martial", "exotic"] as const;
export type WeaponType = (typeof WEAPON_TYPE_ENUM)[number];
export const weaponTypeEnum = pgEnum("weapon_type", WEAPON_TYPE_ENUM);

export const SPELL_GRANT_TYPE_ENUM = [
  "specific_spell", // Grants a specific spell (e.g., Minor Illusion)
  "spell_choice", // Choose from a list of spells
  "class_spell_choice", // Choose from a class spell list
  "school_spell_choice", // Choose from a school of magic
  "level_spell_choice", // Choose from spells of a specific level
] as const;
export type SpellGrantType = (typeof SPELL_GRANT_TYPE_ENUM)[number];
export const spellGrantTypeEnum = pgEnum(
  "spell_grant_type",
  SPELL_GRANT_TYPE_ENUM
);

export const ABILITY_SCORE_GRANT_TYPE_ENUM = [
  "specific_ability", // Grants +1 to a specific ability (e.g., +1 STR)
  "ability_choice", // Choose +1 to any ability from a list
  "any_ability", // Choose +1 to any ability
  "multiple_abilities", // Grants multiple bonuses (e.g., +2 to one, +1 to another)
] as const;
export type AbilityScoreGrantType =
  (typeof ABILITY_SCORE_GRANT_TYPE_ENUM)[number];
export const abilityScoreGrantTypeEnum = pgEnum(
  "ability_score_grant_type",
  ABILITY_SCORE_GRANT_TYPE_ENUM
);

export const ALIGNMENT_ENUM = [
  "lawful_good",
  "neutral_good",
  "chaotic_good",
  "lawful_neutral",
  "true_neutral",
  "chaotic_neutral",
  "lawful_evil",
  "neutral_evil",
  "chaotic_evil",
] as const;
export type Alignment = (typeof ALIGNMENT_ENUM)[number];
export const alignmentEnum = pgEnum("alignment", ALIGNMENT_ENUM);
