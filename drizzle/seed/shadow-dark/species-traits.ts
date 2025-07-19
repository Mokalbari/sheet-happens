import { speciesTraits, translations } from "../../schema";
import { createMainFunction, seed } from "../utils";
import { SYSTEM_ID_SHADOW_DARK } from "./constants";

type SpeciesTraitsInsertSchema = typeof speciesTraits.$inferInsert;

const speciesTraitsSeedData: SpeciesTraitsInsertSchema[] = [
  {
    slug: "sd-stout",
    defaultName: "Stout",
    defaultDescription:
      "Start with +2 HP. Roll hit points per level with advantage.",
    speciesId: 1,
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-farsight",
    defaultName: "Farsight",
    defaultDescription:
      "You get a +1 bonus  to attack rolls with ranged  weapons or a +1 bonus to  spellcasting checks.",
    systemId: SYSTEM_ID_SHADOW_DARK,
    speciesId: 2,
  },
  {
    slug: "sd-keen-senses",
    defaultName: "Keen senses",
    defaultDescription: "You can't be surprised.",
    systemId: SYSTEM_ID_SHADOW_DARK,
    speciesId: 3,
  },
  {
    slug: "sd-mighty",
    defaultName: "Mighty",
    defaultDescription:
      "You have a +1 bonus to attack and damage rolls with melee weapons.",
    speciesId: 4,
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-stealthy",
    defaultName: "Stealthy",
    defaultDescription: "Once per day, you can  become invisible for 3 rounds.",
    systemId: SYSTEM_ID_SHADOW_DARK,
    speciesId: 5,
  },
  {
    slug: "sd-ambitious",
    defaultName: "Ambitious",
    defaultDescription: "You gain one additional talent roll at 1st level.",
    systemId: SYSTEM_ID_SHADOW_DARK,
    speciesId: 6,
  },
];

const speciesTraitsTranslations = {
  "sd-stout": {
    name: {
      en: "Stout",
      fr: "Solide",
    },
    description: {
      en: "Start with +2 HP. Roll hit points per level with advantage.",
      fr: "Commencez avec +2 PV. Lancez les points de vie par niveau avec avantage.",
    },
  },
  "sd-farsight": {
    name: {
      en: "Farsight",
      fr: "Vision perçante",
    },
    description: {
      en: "You get a +1 bonus to attack rolls with ranged weapons or a +1 bonus to spellcasting checks.",
      fr: "Vous gagnez un bonus de +1 aux jets d’attaque à distance ou un bonus de +1 aux tests de lancement de sorts.",
    },
  },
  "sd-keen-senses": {
    name: {
      en: "Keen senses",
      fr: "Sens aiguisés",
    },
    description: {
      en: "You can't be surprised.",
      fr: "Vous ne pouvez pas être surpris.",
    },
  },
  "sd-mighty": {
    name: {
      en: "Mighty",
      fr: "Puissant",
    },
    description: {
      en: "You have a +1 bonus to attack and damage rolls with melee weapons.",
      fr: "Vous avez un bonus de +1 aux jets d’attaque et de dégâts avec des armes de mêlée.",
    },
  },
  "sd-stealthy": {
    name: {
      en: "Stealthy",
      fr: "Discret",
    },
    description: {
      en: "Once per day, you can become invisible for 3 rounds.",
      fr: "Une fois par jour, vous pouvez devenir invisible pendant 3 tours.",
    },
  },
  "sd-ambitious": {
    name: {
      en: "Ambitious",
      fr: "Ambitieux",
    },
    description: {
      en: "You gain one additional talent roll at 1st level.",
      fr: "Vous gagnez un jet de talent supplémentaire au niveau 1.",
    },
  },
};

async function seedSpecies(db: any) {
  return await seed(db, {
    tableName: "species_traits",
    table: speciesTraits,
    data: speciesTraitsSeedData,
    translations: {
      entity: "speciesTraits",
      table: translations,
      translations: speciesTraitsTranslations,
      fields: ["name", "description"],
    },
  });
}

const main = createMainFunction(seedSpecies);

main();
