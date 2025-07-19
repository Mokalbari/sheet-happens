import { armors } from "../../schema";
import { SYSTEM_ID_SHADOW_DARK } from "./constants";

type ArmorInsertSchema = typeof armors.$inferInsert;

const armorsSeedData: ArmorInsertSchema[] = [
  {
    slug: "sd-leather-armor",
    defaultName: "Leather Armor",
    systemId: SYSTEM_ID_SHADOW_DARK,
    weight: 1,
    hasStealthDisadvantage: false,
    canSwim: true,
    value: 1000,
    armorClass: 11,
    hasDexterityBonus: true,
  },
  {
    slug: "sd-chainmail",
    defaultName: "Chainmail",
    systemId: SYSTEM_ID_SHADOW_DARK,
    weight: 2,
    hasStealthDisadvantage: true,
    canSwim: true,
    value: 6000,
    armorClass: 13,
    hasDexterityBonus: true,
  },
  {
    slug: "sd-plate-mail",
    defaultName: "Plate Mail",
    systemId: SYSTEM_ID_SHADOW_DARK,
    weight: 3,
    hasStealthDisadvantage: true,
    canSwim: false,
    value: 13000,
    armorClass: 15,
    hasDexterityBonus: false,
  },
  {
    slug: "sd-shield",
    defaultName: "Shield",
    systemId: SYSTEM_ID_SHADOW_DARK,
    weight: 1,
    hasStealthDisadvantage: true,
    canSwim: true,
    value: 1000,
    armorTypeBonus: 2,
    armorType: "shield",
  },
];

const armorsTranslations = {
  "sd-leather-armor": {
    en: "Leather Armor",
    fr: "Armure en cuir",
  },
  "sd-chainmail": {
    en: "Chainmail",
    fr: "Armure en maille",
  },
  "sd-plate-mail": {
    en: "Plate Mail",
    fr: "Armure en plate",
  },
  "sd-shield": {
    en: "Shield",
    fr: "Bouclier",
  },
};

// async function seedArmors(db: any) {
//   return await seed(db, {
//     tableName: "armors",
//     table: armors,
//     data: armorsSeedData,
//     translations: {
//       entity: "armors",
//       table: translations,
//       translations: armorsTranslations,
//       field: "name",
//     },
//   });
// }

// const main = createMainFunction(seedArmors);

// main();
