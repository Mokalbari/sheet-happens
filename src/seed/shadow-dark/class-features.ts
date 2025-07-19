import { classFeatures, translations } from "@/db/schema";
import { createMainFunction, seed } from "../utils";
import { SYSTEM_ID_SHADOW_DARK } from "./constants";

type ClassFeaturesInsert = typeof classFeatures.$inferInsert;

const classFeaturesSeedData: ClassFeaturesInsert[] = [
  // Fighter classId = 13
  {
    slug: "sd-fighter-hauler",
    defaultName: "Hauler",
    defaultDescription:
      "Add your Constitution modifier, if positive, to your gear slots.",
    classId: 13,
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-fighter-weapon-mastery",
    defaultName: "Weapon Mastery",
    defaultDescription:
      "Choose one type of weapon, such as longswords. You gain +1 to attack and damage with that weapon type. In addition, add half your level to these rolls (round down).",
    classId: 13,
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-fighter-grit",
    defaultName: "Grit",
    defaultDescription:
      "Choose Strength or Dexterity. You have advantage on checks of that type to overcome an opposing force, such as kicking open a stuck door or slipping free of rusty chains.",
    classId: 13,
    systemId: SYSTEM_ID_SHADOW_DARK,
  },

  // Priest classId = 14
  {
    slug: "sd-priest-turn-undead",
    defaultName: "Turn Undead",
    defaultDescription:
      "You know the turn undead spell. It doesn’t count toward your number of known spells.",
    classId: 14,
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-priest-deity",
    defaultName: "Deity",
    defaultDescription:
      "Choose a god to serve who matches your alignment. You have a holy symbol for your god (it takes up no gear slots).",
    classId: 14,
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-priest-spellcasting",
    defaultName: "Spellcasting",
    defaultDescription:
      "You can cast priest spells you know. You know two tier 1 spells of your choice from the priest spell list. You learn more spells as you gain levels.",
    classId: 14,
    systemId: SYSTEM_ID_SHADOW_DARK,
  },

  // Thief classId = 15
  {
    slug: "sd-thief-backstab",
    defaultName: "Backstab",
    defaultDescription:
      "If you hit a creature who is unaware of your attack, you deal an extra weapon die of damage. Add additional weapon dice of damage equal to half your level (round down).",
    classId: 15,
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-thief-thievery",
    defaultName: "Thievery",
    defaultDescription:
      "You are adept at thieving skills and have the necessary tools of the trade secreted on your person (they take up no gear slots). You have advantage on checks related to climbing, sneaking, disguises, traps, pickpocketing, and lockpicking.",
    classId: 15,
    systemId: SYSTEM_ID_SHADOW_DARK,
  },

  // Wizard classId = 16
  {
    slug: "sd-wizard-learning-spells",
    defaultName: "Learning Spells",
    defaultDescription:
      "You can permanently learn a wizard spell from a spell scroll by studying it for a day and succeeding on a DC 15 Intelligence check. The scroll is expended regardless of success.",
    classId: 16,
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-wizard-spellcasting",
    defaultName: "Spellcasting",
    defaultDescription:
      "You can cast wizard spells you know. You know three tier 1 spells of your choice from the wizard spell list. You learn more spells as you gain levels.",
    classId: 16,
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
];

const classTranslations = {
  "sd-fighter-hauler": {
    name: {
      en: "Hauler",
      fr: "Porteur",
    },
    description: {
      en: "Add your Constitution modifier, if positive, to your gear slots.",
      fr: "Ajoutez votre modificateur de Constitution, s’il est positif, à votre nombre d’emplacements d’équipement.",
    },
  },
  "sd-fighter-weapon-mastery": {
    name: {
      en: "Weapon Mastery",
      fr: "Maîtrise des armes",
    },
    description: {
      en: "Choose one type of weapon, such as longswords. You gain +1 to attack and damage with that weapon type. In addition, add half your level to these rolls (round down).",
      fr: "Choisissez un type d’arme, comme les épées longues. Vous gagnez +1 aux jets d’attaque et de dégâts avec ce type d’arme. De plus, ajoutez la moitié de votre niveau à ces jets (arrondi à l’inférieur).",
    },
  },
  "sd-fighter-grit": {
    name: {
      en: "Grit",
      fr: "Nerf",
    },
    description: {
      en: "Choose Strength or Dexterity. You have advantage on checks of that type to overcome an opposing force, such as kicking open a stuck door or slipping free of rusty chains.",
      fr: "Choisissez Force ou Dextérité. Vous avez l’avantage sur les tests de cette caractéristique pour surmonter une force opposée, comme enfoncer une porte bloquée ou se libérer de chaînes rouillées.",
    },
  },
  "sd-priest-turn-undead": {
    name: {
      en: "Turn Undead",
      fr: "Repousser les morts-vivants",
    },
    description: {
      en: "You know the turn undead spell. It doesn’t count toward your number of known spells.",
      fr: "Vous connaissez le sort de renvoi des morts-vivants. Il ne compte pas dans votre nombre de sorts connus.",
    },
  },
  "sd-priest-deity": {
    name: {
      en: "Deity",
      fr: "Divinité",
    },
    description: {
      en: "Choose a god to serve who matches your alignment. You have a holy symbol for your god (it takes up no gear slots).",
      fr: "Choisissez une divinité correspondant à votre alignement. Vous possédez un symbole sacré qui ne prend aucun emplacement d’équipement.",
    },
  },
  "sd-priest-spellcasting": {
    name: {
      en: "Spellcasting",
      fr: "Lancement de sorts",
    },
    description: {
      en: "You can cast priest spells you know. You know two tier 1 spells of your choice from the priest spell list. You learn more spells as you gain levels.",
      fr: "Vous pouvez lancer les sorts de prêtre que vous connaissez. Vous connaissez deux sorts de niveau 1 de votre choix dans la liste des sorts de prêtre. Vous en apprenez davantage à mesure que vous gagnez des niveaux.",
    },
  },
  "sd-thief-backstab": {
    name: {
      en: "Backstab",
      fr: "Attaque sournoise",
    },
    description: {
      en: "If you hit a creature who is unaware of your attack, you deal an extra weapon die of damage. Add additional weapon dice of damage equal to half your level (round down).",
      fr: "Si vous touchez une créature qui n’est pas consciente de votre attaque, vous infligez un dé d’arme supplémentaire. Ajoutez un dé supplémentaire tous les deux niveaux (arrondi à l’inférieur).",
    },
  },
  "sd-thief-thievery": {
    name: {
      en: "Thievery",
      fr: "Larcin",
    },
    description: {
      en: "You are adept at thieving skills and have the necessary tools of the trade secreted on your person (they take up no gear slots). You have advantage on checks related to climbing, sneaking, disguises, traps, pickpocketing, and lockpicking.",
      fr: "Vous êtes expert dans l’art du vol et possédez sur vous les outils nécessaires (ils ne prennent pas d’emplacement d’équipement). Vous avez l’avantage sur les tests liés à l’escalade, la discrétion, les déguisements, les pièges, le vol à la tire et le crochetage.",
    },
  },
  "sd-wizard-learning-spells": {
    name: {
      en: "Learning Spells",
      fr: "Apprentissage des sorts",
    },
    description: {
      en: "You can permanently learn a wizard spell from a spell scroll by studying it for a day and succeeding on a DC 15 Intelligence check. The scroll is expended regardless of success.",
      fr: "Vous pouvez apprendre définitivement un sort de magicien à partir d’un parchemin en l’étudiant pendant une journée et en réussissant un test d’Intelligence DD 15. Le parchemin est consommé même en cas d’échec.",
    },
  },
  "sd-wizard-spellcasting": {
    name: {
      en: "Spellcasting",
      fr: "Lancement de sorts",
    },
    description: {
      en: "You can cast wizard spells you know. You know three tier 1 spells of your choice from the wizard spell list. You learn more spells as you gain levels.",
      fr: "Vous pouvez lancer les sorts de magicien que vous connaissez. Vous connaissez trois sorts de niveau 1 de votre choix dans la liste des sorts de magicien. Vous en apprenez davantage à mesure que vous gagnez des niveaux.",
    },
  },
};

async function seedClassFeatures(db: any) {
  return await seed(db, {
    tableName: "classFeatures",
    table: classFeatures,
    data: classFeaturesSeedData,
    translations: {
      entity: "classFeatures",
      table: translations,
      translations: classTranslations,
      fields: ["name", "description"],
    },
  });
}

const main = createMainFunction(seedClassFeatures);

main();
