import { translations, weapons } from "@/db/schema";
import { createMainFunction, seed } from "../utils";
import { SYSTEM_ID_SHADOW_DARK } from "./constants";

type WeaponInsertSchema = typeof weapons.$inferInsert;

const weaponsSeedData: WeaponInsertSchema[] = [
  {
    slug: "sd-bastard-sword",
    defaultName: "Bastard Sword",
    defaultDamageDice: "d8",
    secondaryDamageDice: "d10",
    weaponType: "melee",
    systemId: SYSTEM_ID_SHADOW_DARK,
    weight: 2,
    value: 1000, // 10 gp
    weaponProperties: ["versatile"],
  },
  {
    slug: "sd-club",
    defaultName: "Club",
    defaultDamageDice: "d4",
    weaponType: "melee",
    systemId: SYSTEM_ID_SHADOW_DARK,
    weight: 1,
    value: 5, // 5 cp
    weaponProperties: [],
  },
  {
    slug: "sd-crossbow",
    defaultName: "Crossbow",
    defaultDamageDice: "d6",
    weaponType: "range",
    systemId: SYSTEM_ID_SHADOW_DARK,
    weight: 1,
    value: 800, // 8 gp
    weaponProperties: ["two-handed", "loading"],
  },
  {
    slug: "sd-dagger",
    defaultName: "Dagger",
    defaultDamageDice: "d4",
    weaponType: "melee/range",
    systemId: SYSTEM_ID_SHADOW_DARK,
    weight: 1,
    value: 100, // 1 gp
    weaponProperties: ["finesse", "thrown"],
  },
  {
    slug: "sd-greataxe",
    defaultName: "Greataxe",
    defaultDamageDice: "d8",
    secondaryDamageDice: "d10",
    weaponType: "melee",
    systemId: SYSTEM_ID_SHADOW_DARK,
    weight: 2,
    value: 1000, // 10 gp
    weaponProperties: ["versatile"],
  },
  {
    slug: "sd-greatsword",
    defaultName: "Greatsword",
    defaultDamageDice: "d12",
    weaponType: "melee",
    systemId: SYSTEM_ID_SHADOW_DARK,
    weight: 2,
    value: 1200, // 12 gp
    weaponProperties: ["two-handed"],
  },
  {
    slug: "sd-javelin",
    defaultName: "Javelin",
    defaultDamageDice: "d4",
    weaponType: "melee/range",
    systemId: SYSTEM_ID_SHADOW_DARK,
    weight: 1,
    value: 50, // 5 sp
    weaponProperties: ["thrown"],
  },
  {
    slug: "sd-longbow",
    defaultName: "Longbow",
    defaultDamageDice: "d8",
    weaponType: "range",
    systemId: SYSTEM_ID_SHADOW_DARK,
    weight: 1,
    value: 800, // 8 gp
    weaponProperties: ["two-handed"],
  },
  {
    slug: "sd-longsword",
    defaultName: "Longsword",
    defaultDamageDice: "d8",
    weaponType: "melee",
    systemId: SYSTEM_ID_SHADOW_DARK,
    weight: 1,
    value: 900, // 9 gp
    weaponProperties: [],
  },
  {
    slug: "sd-mace",
    defaultName: "Mace",
    defaultDamageDice: "d6",
    weaponType: "melee",
    systemId: SYSTEM_ID_SHADOW_DARK,
    weight: 1,
    value: 500, // 5 gp
    weaponProperties: [],
  },
  {
    slug: "sd-shortbow",
    defaultName: "Shortbow",
    defaultDamageDice: "d4",
    weaponType: "range",
    systemId: SYSTEM_ID_SHADOW_DARK,
    weight: 1,
    value: 600, // 6 gp
    weaponProperties: ["two-handed"],
  },
  {
    slug: "sd-shortsword",
    defaultName: "Shortsword",
    defaultDamageDice: "d6",
    weaponType: "melee",
    systemId: SYSTEM_ID_SHADOW_DARK,
    weight: 1,
    value: 700, // 7 gp
    weaponProperties: [],
  },
  {
    slug: "sd-spear",
    defaultName: "Spear",
    defaultDamageDice: "d6",
    weaponType: "melee/range",
    systemId: SYSTEM_ID_SHADOW_DARK,
    weight: 1,
    value: 50, // 5 sp
    weaponProperties: ["thrown"],
  },
  {
    slug: "sd-staff",
    defaultName: "Staff",
    defaultDamageDice: "d4",
    weaponType: "melee",
    systemId: SYSTEM_ID_SHADOW_DARK,
    weight: 1,
    value: 50, // 5 sp
    weaponProperties: ["two-handed"],
  },
  {
    slug: "sd-warhammer",
    defaultName: "Warhammer",
    defaultDamageDice: "d10",
    weaponType: "melee",
    systemId: SYSTEM_ID_SHADOW_DARK,
    weight: 1,
    value: 1000, // 10 gp
    weaponProperties: ["two-handed"],
  },
];

const weaponsTranslations = {
  "sd-bastard-sword": {
    en: "Bastard Sword",
    fr: "Épée bâtarde",
  },
  "sd-club": {
    en: "Club",
    fr: "Gourdin",
  },
  "sd-crossbow": {
    en: "Crossbow",
    fr: "Arbalète",
  },
  "sd-dagger": {
    en: "Dagger",
    fr: "Dague",
  },
  "sd-greataxe": {
    en: "Greataxe",
    fr: "Hache lourde",
  },
  "sd-greatsword": {
    en: "Greatsword",
    fr: "Épée à deux mains",
  },
  "sd-javelin": {
    en: "Javelin",
    fr: "Javelot",
  },
  "sd-longbow": {
    en: "Longbow",
    fr: "Arc long",
  },
  "sd-longsword": {
    en: "Longsword",
    fr: "Épée longue",
  },
  "sd-mace": {
    en: "Mace",
    fr: "Masse",
  },
  "sd-shortbow": {
    en: "Shortbow",
    fr: "Arc court",
  },
  "sd-shortsword": {
    en: "Shortsword",
    fr: "Épée courte",
  },
  "sd-spear": {
    en: "Spear",
    fr: "Lance",
  },
  "sd-staff": {
    en: "Staff",
    fr: "Bâton",
  },
  "sd-warhammer": {
    en: "Warhammer",
    fr: "Marteau de guerre",
  },
};

async function seedWeapons(db: any) {
  return await seed(db, {
    tableName: "weapons",
    table: weapons,
    data: weaponsSeedData,
    translations: {
      entity: "weapons",
      table: translations,
      translations: weaponsTranslations,
      field: "name",
    },
  });
}

const main = createMainFunction(seedWeapons);

main();
