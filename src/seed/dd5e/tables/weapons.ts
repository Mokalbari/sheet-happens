import {
  hitDiceEnum,
  translations,
  weaponDamageTypeEnum,
  weaponMasteryEnum,
  weaponPropertyEnum,
  weapons,
  weaponTypeEnum,
} from "@/db/schema";
import { z } from "zod";
import { createMainFunction, seed } from "../../utils";
import { SYSTEM_ID_DD5E } from "../constants";

const weaponSchema = z.object({
  slug: z.string().min(1).max(100),
  defaultName: z.string().min(1).max(200),
  defaultDamageDice: z.enum(hitDiceEnum.enumValues),
  secondaryDamageDice: z.enum(hitDiceEnum.enumValues).optional(),
  weaponType: z.enum(weaponTypeEnum.enumValues),
  weaponProperties: z.array(z.enum(weaponPropertyEnum.enumValues)),
  weaponMastery: z.enum(weaponMasteryEnum.enumValues),
  damageType: z.enum(weaponDamageTypeEnum.enumValues),
  range: z.object({ min: z.number(), max: z.number() }).optional(),
  weight: z.number().min(0).max(1000),
  value: z.number().min(0).max(200_000),
  systemId: z.number(),
});

type WeaponInsertSchema = typeof weapons.$inferInsert;

const weaponsSeedData: WeaponInsertSchema[] = [
  {
    slug: "club",
    defaultName: "Club",
    defaultDamageDice: "d4",
    weaponType: "simple",
    weaponMastery: "slow",
    systemId: SYSTEM_ID_DD5E,
    weight: 2,
    value: 10,
    weaponProperties: ["light"],
    damageType: "bludgeoning",
  },
  {
    slug: "dagger",
    defaultName: "Dagger",
    defaultDamageDice: "d4",
    weaponType: "simple",
    weaponMastery: "nick",
    systemId: SYSTEM_ID_DD5E,
    weight: 1,
    value: 200,
    weaponProperties: ["finesse", "light", "thrown"],
    damageType: "piercing",
    range: {
      min: 20,
      max: 60,
    },
  },
  {
    slug: "greatclub",
    defaultName: "Greatclub",
    defaultDamageDice: "d8",
    weaponType: "simple",
    weaponMastery: "push",
    systemId: SYSTEM_ID_DD5E,
    weight: 10,
    value: 20,
    weaponProperties: ["two-handed"],
    damageType: "bludgeoning",
  },
  {
    slug: "handaxe",
    defaultName: "Handaxe",
    defaultDamageDice: "d6",
    weaponType: "simple",
    weaponMastery: "vex",
    systemId: SYSTEM_ID_DD5E,
    weight: 2,
    value: 500,
    weaponProperties: ["light", "thrown"],
    damageType: "slashing",
    range: {
      min: 20,
      max: 60,
    },
  },
  {
    slug: "javelin",
    defaultName: "Javelin",
    defaultDamageDice: "d6",
    weaponType: "simple",
    weaponMastery: "slow",
    systemId: SYSTEM_ID_DD5E,
    weight: 2,
    value: 50,
    weaponProperties: ["thrown"],
    damageType: "piercing",
    range: {
      min: 30,
      max: 120,
    },
  },
  {
    slug: "light-hammer",
    defaultName: "Light Hammer",
    defaultDamageDice: "d4",
    weaponType: "simple",
    weaponMastery: "nick",
    systemId: SYSTEM_ID_DD5E,
    weight: 2,
    value: 200,
    weaponProperties: ["light", "thrown"],
    damageType: "bludgeoning",
    range: {
      min: 20,
      max: 60,
    },
  },
  {
    slug: "mace",
    defaultName: "Mace",
    defaultDamageDice: "d6",
    weaponType: "simple",
    weaponMastery: "sap",
    systemId: SYSTEM_ID_DD5E,
    weight: 4,
    value: 500,
    weaponProperties: [],
    damageType: "bludgeoning",
  },
  {
    slug: "quarterstaff",
    defaultName: "Quarterstaff",
    defaultDamageDice: "d6",
    secondaryDamageDice: "d8",
    weaponType: "simple",
    weaponMastery: "topple",
    systemId: SYSTEM_ID_DD5E,
    weight: 4,
    value: 20,
    weaponProperties: ["versatile"],
    damageType: "bludgeoning",
  },
  {
    slug: "sickle",
    defaultName: "Sickle",
    defaultDamageDice: "d4",
    weaponType: "simple",
    weaponMastery: "nick",
    systemId: SYSTEM_ID_DD5E,
    weight: 2,
    value: 100,
    weaponProperties: ["light"],
    damageType: "slashing",
  },
  {
    slug: "spear",
    defaultName: "Spear",
    defaultDamageDice: "d6",
    secondaryDamageDice: "d8",
    weaponType: "simple",
    weaponMastery: "sap",
    systemId: SYSTEM_ID_DD5E,
    weight: 3,
    value: 100,
    weaponProperties: ["thrown", "versatile"],
    damageType: "piercing",
    range: {
      min: 20,
      max: 60,
    },
  },
  {
    slug: "dart",
    defaultName: "Dart",
    defaultDamageDice: "d4",
    weaponType: "simple",
    weaponMastery: "vex",
    systemId: SYSTEM_ID_DD5E,
    weight: 0.25,
    value: 5,
    weaponProperties: ["finesse", "thrown"],
    damageType: "piercing",
    range: {
      min: 20,
      max: 60,
    },
  },
  {
    slug: "light-crossbow",
    defaultName: "Light Crossbow",
    defaultDamageDice: "d8",
    weaponType: "simple",
    weaponMastery: "slow",
    systemId: SYSTEM_ID_DD5E,
    weight: 5,
    value: 2500,
    weaponProperties: ["ammunition", "loading", "two-handed"],
    damageType: "piercing",
    range: {
      min: 80,
      max: 320,
    },
  },
  {
    slug: "shortbow",
    defaultName: "Shortbow",
    defaultDamageDice: "d6",
    weaponType: "simple",
    weaponMastery: "vex",
    systemId: SYSTEM_ID_DD5E,
    weight: 2,
    value: 2500,
    weaponProperties: ["ammunition", "two-handed"],
    damageType: "piercing",
    range: {
      min: 80,
      max: 320,
    },
  },
  {
    slug: "sling",
    defaultName: "Sling",
    defaultDamageDice: "d4",
    weaponType: "simple",
    weaponMastery: "slow",
    systemId: SYSTEM_ID_DD5E,
    weight: 0,
    value: 10,
    weaponProperties: ["ammunition"],
    damageType: "bludgeoning",
    range: {
      min: 30,
      max: 120,
    },
  },
  {
    slug: "battleaxe",
    defaultName: "Battleaxe",
    defaultDamageDice: "d8",
    secondaryDamageDice: "d10",
    weaponType: "martial",
    weaponMastery: "topple",
    systemId: SYSTEM_ID_DD5E,
    weight: 4,
    value: 1000,
    weaponProperties: ["versatile"],
    damageType: "slashing",
  },
  {
    slug: "flail",
    defaultName: "Flail",
    defaultDamageDice: "d8",
    weaponType: "martial",
    weaponMastery: "sap",
    systemId: SYSTEM_ID_DD5E,
    weight: 2,
    value: 1000,
    weaponProperties: [],
    damageType: "bludgeoning",
  },
  {
    slug: "glaive",
    defaultName: "Glaive",
    defaultDamageDice: "d10",
    weaponType: "martial",
    weaponMastery: "graze",
    systemId: SYSTEM_ID_DD5E,
    weight: 6,
    value: 2000,
    weaponProperties: ["heavy", "reach", "two-handed"],
    damageType: "slashing",
  },
  {
    slug: "greataxe",
    defaultName: "Greataxe",
    defaultDamageDice: "d12",
    weaponType: "martial",
    weaponMastery: "cleave",
    systemId: SYSTEM_ID_DD5E,
    weight: 7,
    value: 3000,
    weaponProperties: ["heavy", "two-handed"],
    damageType: "slashing",
  },
  {
    slug: "greatsword",
    defaultName: "Greatsword",
    defaultDamageDice: "2d6",
    weaponType: "martial",
    weaponMastery: "graze",
    systemId: SYSTEM_ID_DD5E,
    weight: 6,
    value: 5000,
    weaponProperties: ["heavy", "two-handed"],
    damageType: "slashing",
  },
  {
    slug: "halberd",
    defaultName: "Halberd",
    defaultDamageDice: "d10",
    weaponType: "martial",
    weaponMastery: "cleave",
    systemId: SYSTEM_ID_DD5E,
    weight: 6,
    value: 2000,
    weaponProperties: ["heavy", "reach", "two-handed"],
    damageType: "slashing",
  },
  {
    slug: "lance",
    defaultName: "Lance",
    defaultDamageDice: "d12",
    weaponType: "martial",
    weaponMastery: "topple",
    systemId: SYSTEM_ID_DD5E,
    weight: 6,
    value: 1000,
    weaponProperties: ["reach", "two-handed"],
    damageType: "piercing",
  },
  {
    slug: "longsword",
    defaultName: "Longsword",
    defaultDamageDice: "d8",
    secondaryDamageDice: "d10",
    weaponType: "martial",
    weaponMastery: "sap",
    systemId: SYSTEM_ID_DD5E,
    weight: 3,
    value: 1500,
    weaponProperties: ["versatile"],
    damageType: "slashing",
  },
  {
    slug: "maul",
    defaultName: "Maul",
    defaultDamageDice: "2d6",
    weaponType: "martial",
    weaponMastery: "topple",
    systemId: SYSTEM_ID_DD5E,
    weight: 10,
    value: 1000,
    weaponProperties: ["heavy", "two-handed"],
    damageType: "bludgeoning",
  },
  {
    slug: "morningstar",
    defaultName: "Morningstar",
    defaultDamageDice: "d8",
    weaponType: "martial",
    weaponMastery: "sap",
    systemId: SYSTEM_ID_DD5E,
    weight: 4,
    value: 1500,
    weaponProperties: [],
    damageType: "piercing",
  },
  {
    slug: "pike",
    defaultName: "Pike",
    defaultDamageDice: "d10",
    weaponType: "martial",
    weaponMastery: "push",
    systemId: SYSTEM_ID_DD5E,
    weight: 18,
    value: 500,
    weaponProperties: ["heavy", "reach", "two-handed"],
    damageType: "piercing",
  },
  {
    slug: "rapier",
    defaultName: "Rapier",
    defaultDamageDice: "d8",
    weaponType: "martial",
    weaponMastery: "vex",
    systemId: SYSTEM_ID_DD5E,
    weight: 2,
    value: 2500,
    weaponProperties: ["finesse"],
    damageType: "piercing",
  },
  {
    slug: "scimitar",
    defaultName: "Scimitar",
    defaultDamageDice: "d6",
    weaponType: "martial",
    weaponMastery: "nick",
    systemId: SYSTEM_ID_DD5E,
    weight: 3,
    value: 2500,
    weaponProperties: ["finesse", "light"],
    damageType: "slashing",
  },
  {
    slug: "shortsword",
    defaultName: "Shortsword",
    defaultDamageDice: "d6",
    weaponType: "martial",
    weaponMastery: "vex",
    systemId: SYSTEM_ID_DD5E,
    weight: 2,
    value: 1000,
    weaponProperties: ["finesse", "light"],
    damageType: "piercing",
  },
  {
    slug: "trident",
    defaultName: "Trident",
    defaultDamageDice: "d8",
    secondaryDamageDice: "d10",
    weaponType: "martial",
    weaponMastery: "topple",
    systemId: SYSTEM_ID_DD5E,
    weight: 4,
    value: 500,
    weaponProperties: ["thrown", "versatile"],
    damageType: "piercing",
    range: {
      min: 20,
      max: 60,
    },
  },
  {
    slug: "warhammer",
    defaultName: "Warhammer",
    defaultDamageDice: "d8",
    secondaryDamageDice: "d10",
    weaponType: "martial",
    weaponMastery: "push",
    systemId: SYSTEM_ID_DD5E,
    weight: 5,
    value: 1500,
    weaponProperties: ["versatile"],
    damageType: "bludgeoning",
  },
  {
    slug: "war-pick",
    defaultName: "War Pick",
    defaultDamageDice: "d8",
    weaponType: "martial",
    weaponMastery: "sap",
    systemId: SYSTEM_ID_DD5E,
    weight: 2,
    value: 500,
    weaponProperties: [],
    damageType: "piercing",
  },
  {
    slug: "whip",
    defaultName: "Whip",
    defaultDamageDice: "d4",
    weaponType: "martial",
    weaponMastery: "slow",
    systemId: SYSTEM_ID_DD5E,
    weight: 3,
    value: 200,
    weaponProperties: ["finesse", "reach"],
    damageType: "slashing",
  },
  {
    slug: "hand-crossbow",
    defaultName: "Hand Crossbow",
    defaultDamageDice: "d6",
    weaponType: "martial",
    weaponMastery: "vex",
    systemId: SYSTEM_ID_DD5E,
    weight: 3,
    value: 7500,
    weaponProperties: ["ammunition", "loading", "light"],
    damageType: "piercing",
    range: {
      min: 30,
      max: 120,
    },
  },
  {
    slug: "heavy-crossbow",
    defaultName: "Heavy Crossbow",
    defaultDamageDice: "d10",
    weaponType: "martial",
    weaponMastery: "push",
    systemId: SYSTEM_ID_DD5E,
    weight: 18,
    value: 5000,
    weaponProperties: ["ammunition", "heavy", "loading", "two-handed"],
    damageType: "piercing",
    range: {
      min: 100,
      max: 400,
    },
  },
  {
    slug: "longbow",
    defaultName: "Longbow",
    defaultDamageDice: "d8",
    weaponType: "martial",
    weaponMastery: "slow",
    systemId: SYSTEM_ID_DD5E,
    weight: 2,
    value: 5000,
    weaponProperties: ["ammunition", "heavy", "two-handed"],
    damageType: "piercing",
    range: {
      min: 150,
      max: 600,
    },
  },
  {
    slug: "musket",
    defaultName: "Musket",
    defaultDamageDice: "d12",
    weaponType: "martial",
    weaponMastery: "slow",
    systemId: SYSTEM_ID_DD5E,
    weight: 10,
    value: 50000,
    weaponProperties: ["ammunition", "loading", "two-handed"],
    damageType: "piercing",
    range: {
      min: 40,
      max: 120,
    },
  },
  {
    slug: "pistol",
    defaultName: "Pistol",
    defaultDamageDice: "d10",
    weaponType: "martial",
    weaponMastery: "vex",
    systemId: SYSTEM_ID_DD5E,
    weight: 3,
    value: 25000,
    weaponProperties: ["ammunition", "loading"],
    damageType: "piercing",
    range: {
      min: 30,
      max: 90,
    },
  },
];

export const weaponTranslations = {
  club: { en: "Club", fr: "Gourdin" },
  dagger: { en: "Dagger", fr: "Dague" },
  greatclub: { en: "Greatclub", fr: "Massue" },
  handaxe: { en: "Handaxe", fr: "Hachette" },
  javelin: { en: "Javelin", fr: "Javelot" },
  "light-hammer": { en: "Light Hammer", fr: "Marteau léger" },
  mace: { en: "Mace", fr: "Masse" },
  quarterstaff: { en: "Quarterstaff", fr: "Bâton" },
  sickle: { en: "Sickle", fr: "Faucille" },
  spear: { en: "Spear", fr: "Lance" },
  dart: { en: "Dart", fr: "Dard" },
  "light-crossbow": { en: "Light Crossbow", fr: "Arbalète légère" },
  shortbow: { en: "Shortbow", fr: "Arc court" },
  sling: { en: "Sling", fr: "Fronde" },

  battleaxe: { en: "Battleaxe", fr: "Hache de guerre" },
  flail: { en: "Flail", fr: "Fléau" },
  glaive: { en: "Glaive", fr: "Glaive" },
  greataxe: { en: "Greataxe", fr: "Hache à deux mains" },
  greatsword: { en: "Greatsword", fr: "Épée à deux mains" },
  halberd: { en: "Halberd", fr: "Hallebarde" },
  lance: { en: "Lance", fr: "Lance" },
  longsword: { en: "Longsword", fr: "Épée longue" },
  maul: { en: "Maul", fr: "Marteau à deux mains" },
  morningstar: { en: "Morningstar", fr: "Étoile du matin" },
  pike: { en: "Pike", fr: "Pique" },
  rapier: { en: "Rapier", fr: "Rapière" },
  scimitar: { en: "Scimitar", fr: "Cimeterre" },
  shortsword: { en: "Shortsword", fr: "Épée courte" },
  trident: { en: "Trident", fr: "Trident" },
  warhammer: { en: "Warhammer", fr: "Marteau de guerre" },
  "war-pick": { en: "War Pick", fr: "Piochon" },
  whip: { en: "Whip", fr: "Fouet" },

  blowgun: { en: "Blowgun", fr: "Sarbacane" },
  "hand-crossbow": { en: "Hand Crossbow", fr: "Arbalète de poing" },
  "heavy-crossbow": { en: "Heavy Crossbow", fr: "Arbalète lourde" },
  longbow: { en: "Longbow", fr: "Arc long" },
  musket: { en: "Musket", fr: "Mousquet" },
  pistol: { en: "Pistol", fr: "Pistolet" },
};

async function seedWeapons(db: any) {
  return await seed(db, {
    tableName: "weapons",
    table: weapons,
    data: weaponsSeedData,
    schema: weaponSchema,
    translations: {
      entity: "weapons",
      table: translations,
      translations: weaponTranslations,
      field: "name",
    },
  });
}

const main = createMainFunction(seedWeapons);

main();
