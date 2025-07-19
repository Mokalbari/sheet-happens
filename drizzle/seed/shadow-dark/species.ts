import { species, translations } from "@/db/schema";
import { createMainFunction, seed } from "../utils";
import { SYSTEM_ID_SHADOW_DARK } from "./constants";

type SpeciesInsertSchema = typeof species.$inferInsert;

const speciesSeedData: SpeciesInsertSchema[] = [
  {
    slug: "sd-dwarf",
    defaultName: "Dwarf",
    defaultDescription:
      "Brave, stalwart folk as sturdy as the stone kingdoms they carve inside mountains.",
    systemId: SYSTEM_ID_SHADOW_DARK,
    knownLanguages: ["Common", "Dwarvish"],
  },
  {
    slug: "sd-elf",
    defaultName: "Elf",
    defaultDescription:
      "Ethereal, graceful people who revere knowledge and beauty. Elves see far and live long.",
    systemId: SYSTEM_ID_SHADOW_DARK,
    knownLanguages: ["Common", "Elvish", "Sylvan"],
  },
  {
    slug: "sd-goblin",
    defaultName: "Goblin",
    defaultDescription:
      "Green, clever beings who thrive in dark, cramped places. As fierce as they are tiny.",
    systemId: SYSTEM_ID_SHADOW_DARK,
    knownLanguages: ["Common", "Goblin"],
  },
  {
    slug: "sd-half-orc",
    defaultName: "Half-Orc",
    defaultDescription:
      "Towering, tusked warriors who  are as daring as humans and as  relentless as orcs.",
    systemId: SYSTEM_ID_SHADOW_DARK,
    knownLanguages: ["Common", "Orcish"],
  },
  {
    slug: "sd-halfling",
    defaultName: "Halfling",
    defaultDescription:
      "Small, cheerful country folk with  mischievous streaks. They enjoy  life’s simple pleasures.",
    systemId: SYSTEM_ID_SHADOW_DARK,
    knownLanguages: ["Common"],
  },
  {
    slug: "sd-human",
    defaultName: "Human",
    defaultDescription:
      "Bold, adaptable, and diverse  people who learn quickly and  accomplish mighty deeds.",
    systemId: SYSTEM_ID_SHADOW_DARK,
    knownLanguages: ["Common"],
  },
];

const speciesTranslations = {
  "sd-dwarf": {
    name: {
      en: "Dwarf",
      fr: "Nain",
    },
    description: {
      en: "Brave, stalwart folk as sturdy as the stone kingdoms they carve inside mountains.",
      fr: "Peuple brave et robuste, aussi solide que les royaumes de pierre qu’ils sculptent au cœur des montagnes.",
    },
  },
  "sd-elf": {
    name: {
      en: "Elf",
      fr: "Elfe",
    },
    description: {
      en: "Ethereal, graceful people who revere knowledge and beauty. Elves see far and live long.",
      fr: "Peuple gracieux et éthéré qui vénère la connaissance et la beauté. Les elfes voient loin et vivent longtemps.",
    },
  },
  "sd-goblin": {
    name: {
      en: "Goblin",
      fr: "Gobelin",
    },
    description: {
      en: "Green, clever beings who thrive in dark, cramped places. As fierce as they are tiny.",
      fr: "Créatures vertes et rusées qui prospèrent dans les endroits sombres et exigus. Aussi féroces que petites.",
    },
  },
  "sd-half-orc": {
    name: {
      en: "Half-Orc",
      fr: "Demi-orc",
    },
    description: {
      en: "Towering, tusked warriors who are as daring as humans and as relentless as orcs.",
      fr: "Guerriers imposants et défensifs, aussi audacieux que les humains et aussi tenaces que les orcs.",
    },
  },
  "sd-halfling": {
    name: {
      en: "Halfling",
      fr: "Halfelin",
    },
    description: {
      en: "Small, cheerful country folk with mischievous streaks. They enjoy life’s simple pleasures.",
      fr: "Petits campagnards joyeux, souvent espiègles. Ils savourent les plaisirs simples de la vie.",
    },
  },
  "sd-human": {
    name: {
      en: "Human",
      fr: "Humain",
    },
    description: {
      en: "Bold, adaptable, and diverse people who learn quickly and accomplish mighty deeds.",
      fr: "Peuple audacieux, adaptable et diversifié, qui apprend vite et accomplit de grandes choses.",
    },
  },
};

async function seedSpecies(db: any) {
  return await seed(db, {
    tableName: "species",
    table: species,
    data: speciesSeedData,
    translations: {
      entity: "species",
      table: translations,
      translations: speciesTranslations,
      fields: ["name", "description"],
    },
  });
}

const main = createMainFunction(seedSpecies);

main();
