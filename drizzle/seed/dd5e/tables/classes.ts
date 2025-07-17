import {
  ARMOR_TYPE_ENUM,
  classAbilities,
  classes,
  classSkills,
  HIT_DICE_ENUM,
  translations,
  WEAPON_TYPE_ENUM,
} from "@/db/schema";
import z from "zod";
import { createMainFunction, seed } from "../../utils";
import { SYSTEM_ID_DD5E } from "../constants";

const classesSchema = z.object({
  slug: z.string().min(1).max(100),
  defaultName: z.string().min(1).max(20),
  defaultHitDice: z.enum(HIT_DICE_ENUM),
  systemId: z.number(),
  armorType: z.array(z.enum(ARMOR_TYPE_ENUM)),
  weaponType: z.array(z.enum(WEAPON_TYPE_ENUM)),
});

type ClassAbilityInsertSchema = typeof classAbilities.$inferInsert;
type ClassInsertSchema = typeof classes.$inferInsert;
type ClassSkillInsertSchema = typeof classSkills.$inferInsert;

const classesSeedData: ClassInsertSchema[] = [
  {
    slug: "barbarian",
    defaultName: "Barbarian",
    defaultHitDice: "d12",
    systemId: SYSTEM_ID_DD5E,
    armorType: ["light", "medium", "shield"],
    weaponType: ["simple", "martial"],
  },
  {
    slug: "bard",
    defaultName: "Bard",
    defaultHitDice: "d8",
    systemId: SYSTEM_ID_DD5E,
    armorType: ["light"],
    weaponType: ["simple"],
  },
  {
    slug: "cleric",
    defaultName: "Cleric",
    defaultHitDice: "d8",
    systemId: SYSTEM_ID_DD5E,
    armorType: ["light", "medium", "shield"],
    weaponType: ["simple"],
  },
  {
    slug: "druid",
    defaultName: "Druid",
    defaultHitDice: "d8",
    systemId: SYSTEM_ID_DD5E,
    armorType: ["light", "shield"],
    weaponType: ["simple"],
  },
  {
    slug: "fighter",
    defaultName: "Fighter",
    defaultHitDice: "d10",
    systemId: SYSTEM_ID_DD5E,
    armorType: ["light", "medium", "heavy", "shield"],
    weaponType: ["simple", "martial"],
  },
  {
    slug: "monk",
    defaultName: "Monk",
    defaultHitDice: "d8",
    systemId: SYSTEM_ID_DD5E,
    armorType: ["light", "shield"],
    weaponType: [],
  },
  {
    slug: "paladin",
    defaultName: "Paladin",
    defaultHitDice: "d10",
    systemId: SYSTEM_ID_DD5E,
    armorType: ["light", "medium", "heavy", "shield"],
    weaponType: ["simple", "martial"],
  },
  {
    slug: "ranger",
    defaultName: "Ranger",
    defaultHitDice: "d10",
    systemId: SYSTEM_ID_DD5E,
    armorType: ["light", "medium", "shield"],
    weaponType: ["simple", "martial"],
  },
  {
    slug: "rogue",
    defaultName: "Rogue",
    defaultHitDice: "d8",
    systemId: SYSTEM_ID_DD5E,
    armorType: ["light"],
    weaponType: ["simple", "martial"],
  },
  {
    slug: "sorcerer",
    defaultName: "Sorcerer",
    defaultHitDice: "d6",
    systemId: SYSTEM_ID_DD5E,
    armorType: [],
    weaponType: ["simple"],
  },
  {
    slug: "warlock",
    defaultName: "Warlock",
    defaultHitDice: "d8",
    systemId: SYSTEM_ID_DD5E,
    armorType: ["light"],
    weaponType: ["simple"],
  },
  {
    slug: "wizard",
    defaultName: "Wizard",
    defaultHitDice: "d6",
    systemId: SYSTEM_ID_DD5E,
    armorType: [],
    weaponType: ["simple"],
  },
];

const translationsSeedData = {
  barbarian: { en: "Barbarian", fr: "Barbare" },
  bard: { en: "Bard", fr: "Barde" },
  cleric: { en: "Cleric", fr: "Clerc" },
  druid: { en: "Druid", fr: "Druide" },
  fighter: { en: "Fighter", fr: "Guerrier" },
  monk: { en: "Monk", fr: "Moine" },
  paladin: { en: "Paladin", fr: "Paladin" },
  ranger: { en: "Ranger", fr: "Ranger" },
  rogue: { en: "Rogue", fr: "Voleur" },
  sorcerer: { en: "Sorcerer", fr: "Ensorceleur" },
  warlock: { en: "Warlock", fr: "Occultiste" },
  wizard: { en: "Wizard", fr: "Magicien" },
};

async function seedClasses(db: any) {
  return await seed(db, {
    tableName: "classes",
    table: classes,
    data: classesSeedData,
    schema: classesSchema,
    translations: {
      entity: "classes",
      table: translations,
      translations: translationsSeedData,
      field: "name",
    },
  });
}

const main = createMainFunction(seedClasses);

main();
