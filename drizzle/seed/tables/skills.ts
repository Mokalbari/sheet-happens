import { abilities, skills, translations } from "@/db/schema";
import "dotenv/config";
import { z } from "zod";
import { SYSTEM_ID_DD5E } from "../constants";
import { createMainFunction, seed } from "../utils";

const skillSchema = z.object({
  slug: z.string().min(1).max(100),
  defaultName: z.string().min(1).max(200),
  abilityId: z.number(),
  systemId: z.number(),
});

type SkillInsertSchema = typeof skills.$inferInsert;

const skillsSeedData: Omit<SkillInsertSchema, "abilityId">[] = [
  {
    slug: "acrobatics",
    defaultName: "Acrobatics",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "animal-handling",
    defaultName: "Animal Handling",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "arcana",
    defaultName: "Arcana",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "athletics",
    defaultName: "Athletics",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "deception",
    defaultName: "Deception",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "history",
    defaultName: "History",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "insight",
    defaultName: "Insight",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "intimidation",
    defaultName: "Intimidation",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "investigation",
    defaultName: "Investigation",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "medicine",
    defaultName: "Medicine",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "nature",
    defaultName: "Nature",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "perception",
    defaultName: "Perception",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "performance",
    defaultName: "Performance",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "persuasion",
    defaultName: "Persuasion",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "religion",
    defaultName: "Religion",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "sleight-of-hand",
    defaultName: "Sleight of Hand",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "stealth",
    defaultName: "Stealth",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "survival",
    defaultName: "Survival",
    systemId: SYSTEM_ID_DD5E,
  },
];

const skillTranslations = {
  acrobatics: {
    en: "Acrobatics",
    fr: "Acrobaties",
  },
  "animal-handling": {
    en: "Animal Handling",
    fr: "Dressage",
  },
  arcana: {
    en: "Arcana",
    fr: "Arcanes",
  },
  athletics: {
    en: "Athletics",
    fr: "Athlétisme",
  },
  deception: {
    en: "Deception",
    fr: "Tromperie",
  },
  history: {
    en: "History",
    fr: "Histoire",
  },
  insight: {
    en: "Insight",
    fr: "Perspicacité",
  },
  intimidation: {
    en: "Intimidation",
    fr: "Intimidation",
  },
  investigation: {
    en: "Investigation",
    fr: "Investigation",
  },
  medicine: {
    en: "Medicine",
    fr: "Médecine",
  },
  nature: {
    en: "Nature",
    fr: "Nature",
  },
  perception: {
    en: "Perception",
    fr: "Perception",
  },
  performance: {
    en: "Performance",
    fr: "Représentation",
  },
  persuasion: {
    en: "Persuasion",
    fr: "Persuasion",
  },
  religion: {
    en: "Religion",
    fr: "Religion",
  },
  "sleight-of-hand": {
    en: "Sleight of Hand",
    fr: "Escamotage",
  },
  stealth: {
    en: "Stealth",
    fr: "Discrétion",
  },
  survival: {
    en: "Survival",
    fr: "Survie",
  },
};

// mapping skills -> slug
const skillToAbilityMapping: Record<string, string> = {
  acrobatics: "dexterity",
  "animal-handling": "wisdom",
  arcana: "intelligence",
  athletics: "strength",
  deception: "charisma",
  history: "intelligence",
  insight: "wisdom",
  intimidation: "charisma",
  investigation: "intelligence",
  medicine: "wisdom",
  nature: "intelligence",
  perception: "wisdom",
  performance: "charisma",
  persuasion: "charisma",
  religion: "intelligence",
  "sleight-of-hand": "dexterity",
  stealth: "dexterity",
  survival: "wisdom",
};

async function seedSkills(db: any) {
  const abilitiesData = await db.select().from(abilities);

  const abilitySlugToId: Record<string, number> = {};
  abilitiesData.forEach((ability: any) => {
    abilitySlugToId[ability.slug] = ability.id;
  });

  const skillsWithAbilityIds: SkillInsertSchema[] = skillsSeedData.map(
    (skill) => ({
      ...skill,
      abilityId: abilitySlugToId[skillToAbilityMapping[skill.slug]],
    })
  );

  return await seed(db, {
    tableName: "skills",
    table: skills,
    data: skillsWithAbilityIds,
    schema: skillSchema,
    translations: {
      entity: "skills",
      table: translations,
      translations: skillTranslations,
      field: "name",
    },
  });
}

const main = createMainFunction(seedSkills);

main();
