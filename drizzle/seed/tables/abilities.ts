import { abilities, translations } from "@/db/schema";
import "dotenv/config";
import { z } from "zod";
import { SYSTEM_ID_DD5E } from "../constants";
import { createMainFunction, seed } from "../utils";

const abilitySchema = z.object({
  slug: z.string().min(1).max(100),
  systemId: z.number(),
  defaultName: z.string().min(1).max(200),
  defaultDescription: z.string().max(2000).optional(),
});

type AbilityInsertSchema = typeof abilities.$inferInsert;

const abilitiesSeedData: AbilityInsertSchema[] = [
  {
    slug: "strength",
    systemId: SYSTEM_ID_DD5E,
    defaultName: "Strength",
  },
  {
    slug: "dexterity",
    systemId: SYSTEM_ID_DD5E,
    defaultName: "Dexterity",
  },
  {
    slug: "constitution",
    systemId: SYSTEM_ID_DD5E,
    defaultName: "Constitution",
  },
  {
    slug: "intelligence",
    systemId: SYSTEM_ID_DD5E,
    defaultName: "Intelligence",
  },
  {
    slug: "wisdom",
    systemId: SYSTEM_ID_DD5E,
    defaultName: "Wisdom",
  },
  {
    slug: "charisma",
    systemId: SYSTEM_ID_DD5E,
    defaultName: "Charisma",
  },
];

const abilityTranslations = {
  strength: {
    en: "Strength",
    fr: "Force",
  },
  dexterity: {
    en: "Dexterity",
    fr: "Dextérité",
  },
  constitution: {
    en: "Constitution",
    fr: "Constitution",
  },
  intelligence: {
    en: "Intelligence",
    fr: "Intelligence",
  },
  wisdom: {
    en: "Wisdom",
    fr: "Sagesse",
  },
  charisma: {
    en: "Charisma",
    fr: "Charisme",
  },
};

async function seedAbilities(db: any) {
  return await seed(db, {
    tableName: "abilities",
    table: abilities,
    data: abilitiesSeedData,
    schema: abilitySchema,
    translations: {
      entity: "abilities",
      table: translations,
      translations: abilityTranslations,
      field: "name",
    },
  });
}

const main = createMainFunction(seedAbilities);

main();
