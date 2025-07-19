import { classTalents, translations } from "@/db/schema";
import { createMainFunction, seed } from "../utils";

type ClassTalentsInsert = typeof classTalents.$inferInsert;

const classTalentsSeedData: ClassTalentsInsert[] = [
  // Fighter (classId: 13)
  {
    classId: 13,
    slug: "fighter-additional-weapon-mastery",
    defaultName: "Gain Weapon Mastery with one additional weapon type",
  },
  {
    classId: 13,
    slug: "fighter-plus1-attack",
    defaultName: "+1 to melee and ranged attacks",
  },
  {
    classId: 13,
    slug: "fighter-plus2-physical-stat",
    defaultName: "+2 to Strength, Dexterity, or Constitution stat",
  },
  {
    classId: 13,
    slug: "fighter-plus1-armor-type",
    defaultName: "Choose one kind of armor. You get +1 AC from that armor",
  },
  {
    classId: 13,
    slug: "fighter-free-choice",
    defaultName: "Choose a talent or +2 points to distribute to stats",
  },

  // Priest (classId: 14)
  {
    classId: 14,
    slug: "priest-advantage-cast",
    defaultName: "Gain advantage on casting one spell you know",
  },
  {
    classId: 14,
    slug: "priest-plus1-attack",
    defaultName: "+1 to melee or ranged attacks",
  },
  {
    classId: 14,
    slug: "priest-plus1-spellcheck",
    defaultName: "+1 to priest spellcasting checks",
  },
  {
    classId: 14,
    slug: "priest-plus2-stat",
    defaultName: "+2 to Strength or Wisdom stat",
  },
  {
    classId: 14,
    slug: "priest-free-choice",
    defaultName: "Choose a talent or +2 points to distribute to stats",
  },

  // Thief (classId: 15)
  {
    classId: 15,
    slug: "thief-initiative-advantage",
    defaultName: "Gain advantage on initiative rolls (reroll if duplicate)",
  },
  {
    classId: 15,
    slug: "thief-backstab-plus1-die",
    defaultName: "Your Backstab deals +1 dice of damage",
  },
  {
    classId: 15,
    slug: "thief-plus2-stat",
    defaultName: "+2 to Strength, Dexterity, or Charisma stat",
  },
  {
    classId: 15,
    slug: "thief-plus1-attack",
    defaultName: "+1 to melee and ranged attacks",
  },
  {
    classId: 15,
    slug: "thief-free-choice",
    defaultName: "Choose a talent or +2 points to distribute to stats",
  },

  // Wizard (classId: 16)
  {
    classId: 16,
    slug: "wizard-create-magic-item",
    defaultName: "Make 1 random magic item of a type you choose",
  },
  {
    classId: 16,
    slug: "wizard-int-or-cast-bonus",
    defaultName: "+2 to Intelligence stat or +1 to wizard spellcasting checks",
  },
  {
    classId: 16,
    slug: "wizard-advantage-cast",
    defaultName: "Gain advantage on casting one spell you know",
  },
  {
    classId: 16,
    slug: "wizard-additional-spell",
    defaultName: "Learn one additional wizard spell of any tier you know",
  },
  {
    classId: 16,
    slug: "wizard-free-choice",
    defaultName: "Choose a talent or +2 points to distribute to stats",
  },
];

const classTalentTranslations = {
  "fighter-additional-weapon-mastery": {
    name: {
      en: "Gain Weapon Mastery with one additional weapon type.",
      fr: "Vous maîtrisez un type d’arme supplémentaire.",
    },
  },
  "fighter-plus1-attack": {
    name: {
      en: "You gain +1 to melee and ranged attack rolls.",
      fr: "Vous gagnez +1 à vos jets d’attaque au corps à corps et à distance.",
    },
  },
  "fighter-plus2-physical-stat": {
    name: {
      en: "Increase Strength, Dexterity, or Constitution by +2.",
      fr: "Augmentez de +2 votre Force, Dextérité ou Constitution.",
    },
  },
  "fighter-plus1-armor-type": {
    name: {
      en: "Choose one kind of armor. You gain +1 AC when wearing it.",
      fr: "Choisissez un type d’armure. Vous gagnez +1 en classe d’armure lorsque vous la portez.",
    },
  },
  "fighter-free-choice": {
    name: {
      en: "Choose a talent or gain +2 points to distribute among your stats.",
      fr: "Choisissez un talent ou gagnez +2 points à répartir dans vos caractéristiques.",
    },
  },

  "priest-advantage-cast": {
    name: {
      en: "You gain advantage on casting one spell you know.",
      fr: "Vous avez l’avantage lors du lancement d’un sort que vous connaissez.",
    },
  },
  "priest-plus1-attack": {
    name: {
      en: "You gain +1 to melee or ranged attack rolls.",
      fr: "Vous gagnez +1 à vos jets d’attaque au corps à corps ou à distance.",
    },
  },
  "priest-plus1-spellcheck": {
    name: {
      en: "You gain +1 to all priest spellcasting checks.",
      fr: "Vous gagnez +1 à tous vos jets de lancement de sorts de prêtre.",
    },
  },
  "priest-plus2-stat": {
    name: {
      en: "Increase Strength or Wisdom by +2.",
      fr: "Augmentez de +2 votre Force ou votre Sagesse.",
    },
  },
  "priest-free-choice": {
    name: {
      en: "Choose a talent or gain +2 points to distribute among your stats.",
      fr: "Choisissez un talent ou gagnez +2 points à répartir dans vos caractéristiques.",
    },
  },

  "thief-initiative-advantage": {
    name: {
      en: "Gain advantage on initiative rolls (reroll if duplicate).",
      fr: "Vous avez l’avantage aux jets d’initiative (relancez en cas de doublon).",
    },
  },
  "thief-backstab-plus1-die": {
    name: {
      en: "Your Backstab deals +1 additional weapon die of damage.",
      fr: "Votre attaque sournoise inflige un dé de dégâts d’arme supplémentaire.",
    },
  },
  "thief-plus2-stat": {
    name: {
      en: "Increase Strength, Dexterity, or Charisma by +2.",
      fr: "Augmentez de +2 votre Force, Dextérité ou Charisme.",
    },
  },
  "thief-plus1-attack": {
    name: {
      en: "You gain +1 to melee and ranged attack rolls.",
      fr: "Vous gagnez +1 à vos jets d’attaque au corps à corps et à distance.",
    },
  },
  "thief-free-choice": {
    name: {
      en: "Choose a talent or gain +2 points to distribute among your stats.",
      fr: "Choisissez un talent ou gagnez +2 points à répartir dans vos caractéristiques.",
    },
  },

  "wizard-create-magic-item": {
    name: {
      en: "Make 1 random magic item of a type you choose.",
      fr: "Créez un objet magique aléatoire d’un type de votre choix.",
    },
  },
  "wizard-int-or-cast-bonus": {
    name: {
      en: "Gain +2 to Intelligence or +1 to wizard spellcasting checks.",
      fr: "Gagnez +2 en Intelligence ou +1 à vos jets de lancement de sorts de magicien.",
    },
  },
  "wizard-advantage-cast": {
    name: {
      en: "Gain advantage on casting one wizard spell you know.",
      fr: "Vous avez l’avantage lors du lancement d’un sort de magicien que vous connaissez.",
    },
  },
  "wizard-additional-spell": {
    name: {
      en: "Learn one additional wizard spell of any tier you know.",
      fr: "Apprenez un sort de magicien supplémentaire de n’importe quel niveau que vous connaissez déjà.",
    },
  },
  "wizard-free-choice": {
    name: {
      en: "Choose a talent or gain +2 points to distribute among your stats.",
      fr: "Choisissez un talent ou gagnez +2 points à répartir dans vos caractéristiques.",
    },
  },
};

async function seedClassTalents(db: any) {
  return await seed(db, {
    tableName: "classTalents",
    table: classTalents,
    data: classTalentsSeedData,
    translations: {
      entity: "classTalents",
      table: translations,
      translations: classTalentTranslations,
      fields: ["name"],
    },
  });
}

const main = createMainFunction(seedClassTalents);

main();
