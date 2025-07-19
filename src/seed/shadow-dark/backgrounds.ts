import { backgrounds, translations } from "@/db/schema";
import { createMainFunction, seed } from "../utils";
import { SYSTEM_ID_SHADOW_DARK } from "./constants";

type BackgroundsInsert = typeof backgrounds.$inferInsert;

const backgroundsSeedData: BackgroundsInsert[] = [
  {
    slug: "sd-urchin",
    defaultName: "Urchin",
    defaultDescription: "You grew up in the merciless streets of a large city.",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-wanted",
    defaultName: "Wanted",
    defaultDescription: "There's a price on your head, but you have allies.",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-cult-initiate",
    defaultName: "Cult Initiate",
    defaultDescription: "You know blasphemous secrets and rituals.",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-thieves-guild",
    defaultName: "Thieves' Guild",
    defaultDescription: "You have connections, contacts, and debts.",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-banished",
    defaultName: "Banished",
    defaultDescription: "Your people cast you out for supposed crimes.",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-orphaned",
    defaultName: "Orphaned",
    defaultDescription: "An unusual guardian rescued and raised you.",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-wizard-apprentice",
    defaultName: "Wizard's Apprentice",
    defaultDescription: "You have a knack and eye for magic.",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-jeweler",
    defaultName: "Jeweler",
    defaultDescription: "You can easily appraise value and authenticity.",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-herbalist",
    defaultName: "Herbalist",
    defaultDescription: "You know plants, medicines, and poisons.",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-barbarian",
    defaultName: "Barbarian",
    defaultDescription: "You left the horde, but it never quite left you.",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-mercenary",
    defaultName: "Mercenary",
    defaultDescription: "You fought friend and foe alike for your coin.",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-sailor",
    defaultName: "Sailor",
    defaultDescription: "Pirate, privateer, or merchant — the seas are yours.",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-acolyte",
    defaultName: "Acolyte",
    defaultDescription: "You're well trained in religious rites and doctrines.",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-soldier",
    defaultName: "Soldier",
    defaultDescription: "You served as a fighter in an organized army.",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-ranger",
    defaultName: "Ranger",
    defaultDescription: "The woods and wilds are your true home.",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-scout",
    defaultName: "Scout",
    defaultDescription: "You survived on stealth, observation, and speed.",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-minstrel",
    defaultName: "Minstrel",
    defaultDescription: "You've traveled far with your charm and talent.",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-scholar",
    defaultName: "Scholar",
    defaultDescription: "You know much about ancient history and lore.",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-noble",
    defaultName: "Noble",
    defaultDescription: "A famous name has opened many doors for you.",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-chirurgeon",
    defaultName: "Chirurgeon",
    defaultDescription: "You know anatomy, surgery, and first aid.",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
];

const backgroundTranslations = {
  "sd-urchin": {
    name: { en: "Urchin", fr: "Gamin des rues" },
    description: {
      en: "You grew up in the merciless streets of a large city.",
      fr: "Vous avez grandi dans les rues impitoyables d’une grande cité.",
    },
  },
  "sd-wanted": {
    name: { en: "Wanted", fr: "Recherché·e" },
    description: {
      en: "There's a price on your head, but you have allies.",
      fr: "Une prime est mise sur votre tête, mais vous avez des alliés.",
    },
  },
  "sd-cult-initiate": {
    name: { en: "Cult Initiate", fr: "Initié·e d’un culte" },
    description: {
      en: "You know blasphemous secrets and rituals.",
      fr: "Vous connaissez des secrets et rituels blasphématoires.",
    },
  },
  "sd-thieves-guild": {
    name: { en: "Thieves' Guild", fr: "Guilde des voleurs" },
    description: {
      en: "You have connections, contacts, and debts.",
      fr: "Vous avez des connexions, des contacts et quelques dettes.",
    },
  },
  "sd-banished": {
    name: { en: "Banished", fr: "Banni·e" },
    description: {
      en: "Your people cast you out for supposed crimes.",
      fr: "Votre peuple vous a chassé pour des crimes présumés.",
    },
  },
  "sd-orphaned": {
    name: { en: "Orphaned", fr: "Orphelin·e" },
    description: {
      en: "An unusual guardian rescued and raised you.",
      fr: "Un tuteur peu commun vous a recueilli et élevé.",
    },
  },
  "sd-wizard-apprentice": {
    name: { en: "Wizard's Apprentice", fr: "Apprenti·e magicien·ne" },
    description: {
      en: "You have a knack and eye for magic.",
      fr: "Vous avez un don et un œil pour la magie.",
    },
  },
  "sd-jeweler": {
    name: { en: "Jeweler", fr: "Joaillier·e" },
    description: {
      en: "You can easily appraise value and authenticity.",
      fr: "Vous évaluez aisément la valeur et l’authenticité d’un objet.",
    },
  },
  "sd-herbalist": {
    name: { en: "Herbalist", fr: "Herboriste" },
    description: {
      en: "You know plants, medicines, and poisons.",
      fr: "Vous connaissez les plantes, les remèdes et les poisons.",
    },
  },
  "sd-barbarian": {
    name: { en: "Barbarian", fr: "Barbare" },
    description: {
      en: "You left the horde, but it never quite left you.",
      fr: "Vous avez quitté la horde, mais elle ne vous a jamais vraiment quitté.",
    },
  },
  "sd-mercenary": {
    name: { en: "Mercenary", fr: "Mercenaire" },
    description: {
      en: "You fought friend and foe alike for your coin.",
      fr: "Vous avez combattu amis comme ennemis pour quelques pièces.",
    },
  },
  "sd-sailor": {
    name: { en: "Sailor", fr: "Marin·e" },
    description: {
      en: "Pirate, privateer, or merchant — the seas are yours.",
      fr: "Pirate, corsaire ou marchand·e, les mers sont votre domaine.",
    },
  },
  "sd-acolyte": {
    name: { en: "Acolyte", fr: "Acolyte" },
    description: {
      en: "You're well trained in religious rites and doctrines.",
      fr: "Vous êtes formé·e aux rites religieux et aux doctrines.",
    },
  },
  "sd-soldier": {
    name: { en: "Soldier", fr: "Soldat" },
    description: {
      en: "You served as a fighter in an organized army.",
      fr: "Vous avez combattu dans une armée organisée.",
    },
  },
  "sd-ranger": {
    name: { en: "Ranger", fr: "Rôdeur·euse" },
    description: {
      en: "The woods and wilds are your true home.",
      fr: "Les forêts et les terres sauvages sont votre vrai foyer.",
    },
  },
  "sd-scout": {
    name: { en: "Scout", fr: "Éclaireur·euse" },
    description: {
      en: "You survived on stealth, observation, and speed.",
      fr: "Vous avez survécu grâce à la discrétion, l’observation et la rapidité.",
    },
  },
  "sd-minstrel": {
    name: { en: "Minstrel", fr: "Ménestrel·le" },
    description: {
      en: "You've traveled far with your charm and talent.",
      fr: "Vous avez beaucoup voyagé grâce à votre charme et votre talent.",
    },
  },
  "sd-scholar": {
    name: { en: "Scholar", fr: "Érudit·e" },
    description: {
      en: "You know much about ancient history and lore.",
      fr: "Vous en savez long sur l’histoire ancienne et les légendes.",
    },
  },
  "sd-noble": {
    name: { en: "Noble", fr: "Noble" },
    description: {
      en: "A famous name has opened many doors for you.",
      fr: "Un nom prestigieux vous a ouvert bien des portes.",
    },
  },
  "sd-chirurgeon": {
    name: { en: "Chirurgeon", fr: "Chirurgien·ne" },
    description: {
      en: "You know anatomy, surgery, and first aid.",
      fr: "Vous connaissez l’anatomie, la chirurgie et les premiers secours.",
    },
  },
};

async function seedBackgrounds(db: any) {
  return await seed(db, {
    tableName: "backgrounds",
    table: backgrounds,
    data: backgroundsSeedData,
    translations: {
      entity: "backgrounds",
      table: translations,
      translations: backgroundTranslations,
      fields: ["name", "description"],
    },
  });
}

const main = createMainFunction(seedBackgrounds);

main();
