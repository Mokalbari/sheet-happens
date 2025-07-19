import { classes, translations } from "@/db/schema";
import { createMainFunction, seed } from "../utils";
import { SYSTEM_ID_SHADOW_DARK } from "./constants";

type ClassesInsert = typeof classes.$inferInsert;

const classesSeedData: ClassesInsert[] = [
  {
    slug: "sd-fighter",
    defaultName: "Fighter",
    defaultDescription:
      "Blood-soaked gladiators in dented armor, acrobatic duelists with darting swords, or far-eyed elven archers who carve their legends with steel and grit.",
    defaultHitDice: "d8",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-priest",
    defaultName: "Priest",
    defaultDescription:
      "Crusading templars, prophetic shamans, or mad-eyed zealots who wield the power of their gods to cleanse the unholy.",
    defaultHitDice: "d6",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-thief",
    defaultName: "Thief",
    defaultDescription:
      "Rooftop assassins, grinning con artists, or cloaked cat burglars who can pluck a gem from the claws of a sleeping demon and sell it for twice its worth.",
    defaultHitDice: "d4",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
  {
    slug: "sd-wizard",
    defaultName: "Wizard",
    defaultDescription:
      "Rune-tattooed adepts, bespectacled magi, and flameconjuring witches who dare to manipulate the fell forces of magic.",
    defaultHitDice: "d4",
    systemId: SYSTEM_ID_SHADOW_DARK,
  },
];

const classesTranslations = {
  "sd-fighter": {
    name: {
      en: "Fighter",
      fr: "Guerrier",
    },
    description: {
      en: "Blood-soaked gladiators in dented armor, acrobatic duelists with darting swords, or far-eyed elven archers who carve their legends with steel and grit.",
      fr: "Gladiateurs ensanglantés en armure cabossée, duellistes acrobatiques à la lame vive ou archers elfiques à la vue perçante, sculptant leur légende par l’acier et la ténacité.",
    },
  },
  "sd-priest": {
    name: {
      en: "Priest",
      fr: "Prêtre",
    },
    description: {
      en: "Crusading templars, prophetic shamans, or mad-eyed zealots who wield the power of their gods to cleanse the unholy.",
      fr: "Templiers en croisade, chamans prophétiques ou zélotes aux yeux fous, maniant le pouvoir divin pour purifier l’impie.",
    },
  },
  "sd-thief": {
    name: {
      en: "Thief",
      fr: "Voleur",
    },
    description: {
      en: "Rooftop assassins, grinning con artists, or cloaked cat burglars who can pluck a gem from the claws of a sleeping demon and sell it for twice its worth.",
      fr: "Assassins des toits, escrocs souriants ou cambrioleurs masqués capables d’arracher un joyau aux griffes d’un démon endormi pour le revendre au double de sa valeur.",
    },
  },
  "sd-wizard": {
    name: {
      en: "Wizard",
      fr: "Magicien",
    },
    description: {
      en: "Rune-tattooed adepts, bespectacled magi, and flame-conjuring witches who dare to manipulate the fell forces of magic.",
      fr: "Adeptes tatoués de runes, érudits à lunettes ou sorcières invoquant les flammes, défiant les forces occultes de la magie.",
    },
  },
};

async function seedClasses(db: any) {
  return await seed(db, {
    tableName: "classes",
    table: classes,
    data: classesSeedData,
    translations: {
      entity: "classes",
      table: translations,
      translations: classesTranslations,
      fields: ["name", "description"],
    },
  });
}

const main = createMainFunction(seedClasses);

main();
