import {
  abilities,
  ARMOR_TYPE_ENUM,
  classAbilities,
  classes,
  classSkills,
  HIT_DICE_ENUM,
  skills,
  translations,
  WEAPON_TYPE_ENUM,
} from "@/db/schema";
import z from "zod";
import { SYSTEM_ID_DD5E } from "../constants";
import { createMainFunction, seed } from "../utils";

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

// Class skill proficiencies mapping
const classSkillProficiencies: Record<string, string[]> = {
  barbarian: [
    "animal-handling",
    "athletics",
    "intimidation",
    "nature",
    "perception",
    "survival",
  ],
  bard: [
    "acrobatics",
    "animal-handling",
    "arcana",
    "athletics",
    "deception",
    "history",
    "insight",
    "intimidation",
    "investigation",
    "medicine",
    "nature",
    "perception",
    "performance",
    "persuasion",
    "religion",
    "sleight-of-hand",
    "stealth",
    "survival",
  ],
  cleric: ["history", "insight", "medicine", "persuasion", "religion"],
  druid: [
    "arcana",
    "animal-handling",
    "insight",
    "medicine",
    "nature",
    "perception",
    "religion",
    "survival",
  ],
  fighter: [
    "acrobatics",
    "animal-handling",
    "athletics",
    "history",
    "insight",
    "intimidation",
    "persuasion",
    "perception",
    "survival",
  ],
  monk: [
    "acrobatics",
    "athletics",
    "history",
    "insight",
    "religion",
    "stealth",
  ],
  paladin: [
    "athletics",
    "insight",
    "intimidation",
    "medicine",
    "persuasion",
    "religion",
  ],
  ranger: [
    "animal-handling",
    "athletics",
    "insight",
    "investigation",
    "nature",
    "perception",
    "stealth",
    "survival",
  ],
  rogue: [
    "acrobatics",
    "athletics",
    "deception",
    "insight",
    "intimidation",
    "investigation",
    "perception",
    "persuasion",
    "sleight-of-hand",
    "stealth",
  ],
  sorcerer: [
    "arcana",
    "deception",
    "insight",
    "intimidation",
    "persuasion",
    "religion",
  ],
  warlock: [
    "arcana",
    "deception",
    "history",
    "intimidation",
    "investigation",
    "nature",
    "religion",
  ],
  wizard: [
    "arcana",
    "history",
    "insight",
    "investigation",
    "medicine",
    "nature",
    "religion",
  ],
};

// Class ability mapping
const classAbilityImprovements: Record<
  string,
  Array<{ ability: string; role: "main" | "save" }>
> = {
  barbarian: [
    { ability: "strength", role: "main" },
    { ability: "constitution", role: "save" },
    { ability: "strength", role: "save" },
  ],
  bard: [
    { ability: "charisma", role: "main" },
    { ability: "dexterity", role: "save" },
    { ability: "charisma", role: "save" },
  ],
  cleric: [
    { ability: "wisdom", role: "main" },
    { ability: "charisma", role: "save" },
    { ability: "wisdom", role: "save" },
  ],
  druid: [
    { ability: "wisdom", role: "main" },
    { ability: "intelligence", role: "save" },
    { ability: "wisdom", role: "save" },
  ],
  fighter: [
    { ability: "strength", role: "main" },
    { ability: "dexterity", role: "main" },
    { ability: "constitution", role: "save" },
    { ability: "strength", role: "save" },
  ],
  monk: [
    { ability: "dexterity", role: "main" },
    { ability: "wisdom", role: "main" },
    { ability: "strength", role: "save" },
    { ability: "dexterity", role: "save" },
  ],
  paladin: [
    { ability: "strength", role: "main" },
    { ability: "charisma", role: "main" },
    { ability: "wisdom", role: "save" },
    { ability: "charisma", role: "save" },
  ],
  ranger: [
    { ability: "dexterity", role: "main" },
    { ability: "wisdom", role: "main" },
    { ability: "strength", role: "save" },
    { ability: "dexterity", role: "save" },
  ],
  rogue: [
    { ability: "dexterity", role: "main" },
    { ability: "dexterity", role: "save" },
    { ability: "intelligence", role: "save" },
  ],
  sorcerer: [
    { ability: "charisma", role: "main" },
    { ability: "constitution", role: "save" },
    { ability: "charisma", role: "save" },
  ],
  warlock: [
    { ability: "charisma", role: "main" },
    { ability: "wisdom", role: "save" },
    { ability: "charisma", role: "save" },
  ],
  wizard: [
    { ability: "intelligence", role: "main" },
    { ability: "wisdom", role: "save" },
    { ability: "intelligence", role: "save" },
  ],
};

async function seedClasses(db: any) {
  // First, insert the classes
  const classesResult = await seed(db, {
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

  // Get the inserted classes to get their IDs
  const insertedClasses = classesResult.data;
  const classSlugToId: Record<string, number> = {};
  insertedClasses.forEach((cls: any) => {
    classSlugToId[cls.slug] = cls.id;
  });

  // Get abilities to link them
  const abilitiesData = await db.select().from(abilities);
  const abilitySlugToId: Record<string, number> = {};
  abilitiesData.forEach((ability: any) => {
    abilitySlugToId[ability.slug] = ability.id;
  });

  // Get skills to link them
  const skillsData = await db.select().from(skills);
  const skillSlugToId: Record<string, number> = {};
  skillsData.forEach((skill: any) => {
    skillSlugToId[skill.slug] = skill.id;
  });

  // Create class-ability relationships
  const classAbilitiesData: ClassAbilityInsertSchema[] = [];
  for (const [classSlug, improvements] of Object.entries(
    classAbilityImprovements
  )) {
    const classId = classSlugToId[classSlug];
    if (!classId) continue;

    for (const improvement of improvements) {
      const abilityId = abilitySlugToId[improvement.ability];
      if (!abilityId) continue;

      classAbilitiesData.push({
        classId,
        abilityId,
        role: improvement.role,
      });
    }
  }

  // Insert class-ability relationships
  if (classAbilitiesData.length > 0) {
    console.log(
      `📝 Inserting ${classAbilitiesData.length} class-ability relationships...`
    );
    const insertedClassAbilities = await db
      .insert(classAbilities)
      .values(classAbilitiesData)
      .returning();
    console.log(
      "✅ Class-ability relationships inserted successfully:",
      insertedClassAbilities
    );
  }

  // Create class-skill relationships
  const classSkillsData: ClassSkillInsertSchema[] = [];
  for (const [classSlug, skillSlugs] of Object.entries(
    classSkillProficiencies
  )) {
    const classId = classSlugToId[classSlug];
    if (!classId) continue;

    for (const skillSlug of skillSlugs) {
      const skillId = skillSlugToId[skillSlug];
      if (!skillId) continue;

      classSkillsData.push({
        classId,
        skillId,
      });
    }
  }

  // Insert class-skill relationships
  if (classSkillsData.length > 0) {
    console.log(
      `📝 Inserting ${classSkillsData.length} class-skill relationships...`
    );
    const insertedClassSkills = await db
      .insert(classSkills)
      .values(classSkillsData)
      .returning();
    console.log(
      "✅ Class-skill relationships inserted successfully:",
      insertedClassSkills
    );
  }

  return classesResult;
}

const main = createMainFunction(seedClasses);

main();
