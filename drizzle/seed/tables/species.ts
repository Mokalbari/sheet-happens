import { SYSTEM_ID_DD5E } from "../constants";

const speciesSeedData = [
  {
    slug: "aasimar",
    defaultName: "Aasimar",
    hasDarkvision: true,
    speed: 30,
    size: "medium",
    systemId: SYSTEM_ID_DD5E,
    variant: null,
  },
  {
    slug: "dragonborn",
    defaultName: "Dragonborn",
    defaultDescription: "",
    hasDarkvision: true,
    speed: 30,
    size: "medium",
    systemId: SYSTEM_ID_DD5E,
    variant: null,
  },
  {
    slug: "dwarf",
    defaultName: "Dwarf",
    defaultDescription: "",
    hasDarkvision: true,
    speed: 30,
    size: "medium",
    systemId: SYSTEM_ID_DD5E,
    variant: null,
  },
];

const speciesTranslations = {
  aasimar: {
    en: "Aasimar",
    fr: "Aasimar", // Adjust as needed for French
  },
  dragonborn: {
    en: "Dragonborn",
    fr: "Drakéide", // Adjust as needed for French
  },
  dwarf: {
    en: "Dwarf",
    fr: "Nain", // Adjust as needed for French
  },
};

const speciesTraitsSeedData = [
  // Aasimar Traits
  {
    speciesId: "aasimarId", // Replace with actual ID after insert
    slug: "celestial-resistance",
    defaultName: "Celestial Resistance",
    defaultDescription:
      "You have Resistance to Necrotic damage and Radiant damage.",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: "aasimarId",
    slug: "darkvision",
    defaultName: "Darkvision",
    defaultDescription: "You have Darkvision with a range of 60 feet.",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: "aasimarId",
    slug: "healing-hands",
    defaultName: "Healing Hands",
    defaultDescription:
      "As a Magic action, you touch a creature and roll a number of d4s equal to your Proficiency Bonus. The creature regains a number of Hit Points equal to the total rolled. Once you use this trait, you can’t use it again until you finish a Long Rest.",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: "aasimarId",
    slug: "light-bearer",
    defaultName: "Light Bearer",
    defaultDescription:
      "You know the Light cantrip. Charisma is your spellcasting ability for it.",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: "aasimarId",
    slug: "celestial-revelation",
    defaultName: "Celestial Revelation",
    defaultDescription:
      "When you reach character level 3, you can transform as a Bonus Action using one of the options below (choose the option each time you transform). The transformation lasts for 1 minute or until you end it (no action required). Once you transform, you can’t do so again until you finish a Long Rest. Once on each of your turns before the transformation ends, you can deal extra damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your Proficiency Bonus, and the extra damage’s type is either Necrotic for Necrotic Shroud or Radiant for Heavenly Wings and Inner Radiance. Here are the transformation options: Heavenly Wings: Two spectral wings sprout from your back temporarily. Until the transformation ends, you have a Fly Speed equal to your Speed. Inner Radiance: Searing light temporarily radiates from your eyes and mouth. For the duration, you shed Bright Light in a 10-foot radius and Dim Light for an additional 10 feet, and at the end of each of your turns, each creature within 10 feet of you takes Radiant damage equal to your Proficiency Bonus. Necrotic Shroud: Your eyes briefly become pools of darkness, and flightless wings sprout from your back temporarily. Creatures other than your allies within 10 feet of you must succeed on a Charisma saving throw (DC 8 plus your Charisma modifier and Proficiency Bonus) or have the Frightened condition until the end of your next turn.",
    systemId: SYSTEM_ID_DD5E,
  },
  // Dragonborn Traits
  {
    speciesId: "dragonbornId",
    slug: "draconic-ancestry",
    defaultName: "Draconic Ancestry",
    defaultDescription:
      "Your lineage stems from a dragon progenitor. Choose the kind of dragon from the Draconic Ancestors table. Your choice affects your Breath Weapon and Damage Resistance traits as well as your appearance.",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: "dragonbornId",
    slug: "breath-weapon",
    defaultName: "Breath Weapon",
    defaultDescription:
      "When you take the Attack action on your turn, you can replace one of your attacks with an exhalation of magical energy in either a 15-foot Cone or a 30-foot Line that is 5 feet wide (choose the shape each time). Each creature in that area must make a Dexterity saving throw (DC 8 plus your Constitution modifier and Proficiency Bonus). On a failed save, a creature takes 1d10 damage of the type determined by your Draconic Ancestry trait. On a successful save, a creature takes half as much damage. This damage increases by 1d10 when you reach character levels 5 (2d10), 11 (3d10), and 17 (4d10). You can use this Breath Weapon a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: "dragonbornId",
    slug: "damage-resistance",
    defaultName: "Damage Resistance",
    defaultDescription:
      "You have Resistance to the damage type determined by your Draconic Ancestry trait.",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: "dragonbornId",
    slug: "darkvision",
    defaultName: "Darkvision",
    defaultDescription: "You have Darkvision with a range of 60 feet.",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: "dragonbornId",
    slug: "draconic-flight",
    defaultName: "Draconic Flight",
    defaultDescription:
      "When you reach character level 5, you can channel draconic magic to give yourself temporary flight. As a Bonus Action, you sprout spectral wings on your back that last for 10 minutes or until you retract the wings (no action required) or have the Incapacitated condition. During that time, you have a Fly Speed equal to your Speed. Your wings appear to be made of the same energy as your Breath Weapon. Once you use this trait, you can’t use it again until you finish a Long Rest.",
    systemId: SYSTEM_ID_DD5E,
  },
  // Dwarf Traits
  {
    speciesId: "dwarfId",
    slug: "darkvision",
    defaultName: "Darkvision",
    defaultDescription: "You have Darkvision with a range of 120 feet.",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: "dwarfId",
    slug: "dwarven-resilience",
    defaultName: "Dwarven Resilience",
    defaultDescription:
      "You have Resistance to Poison damage. You also have Advantage on saving throws you make to avoid or end the Poisoned condition.",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: "dwarfId",
    slug: "dwarven-toughness",
    defaultName: "Dwarven Toughness",
    defaultDescription:
      "Your Hit Point maximum increases by 1, and it increases by 1 again whenever you gain a level.",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: "dwarfId",
    slug: "stonecunning",
    defaultName: "Stonecunning",
    defaultDescription:
      "As a Bonus Action, you gain Tremorsense with a range of 60 feet for 10 minutes. You must be on a stone surface or touching a stone surface to use this Tremorsense. The stone can be natural or worked. You can use this Bonus Action a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
    systemId: SYSTEM_ID_DD5E,
  },
];

const speciesTraitsTranslations = {
  "celestial-resistance": {
    en: "Celestial Resistance",
    fr: "Résistance céleste",
  },
  darkvision: { en: "Darkvision", fr: "Vision dans le noir" },
  "healing-hands": { en: "Healing Hands", fr: "Mains guérisseuses" },
  "light-bearer": { en: "Light Bearer", fr: "Porteur de lumière" },
  "celestial-revelation": {
    en: "Celestial Revelation",
    fr: "Révélation céleste",
  },
  "draconic-ancestry": { en: "Draconic Ancestry", fr: "Ascendance draconique" },
  "breath-weapon": { en: "Breath Weapon", fr: "Arme à souffle" },
  "damage-resistance": { en: "Damage Resistance", fr: "Résistance aux dégâts" },
  "draconic-flight": { en: "Draconic Flight", fr: "Vol draconique" },
  "dwarven-resilience": { en: "Dwarven Resilience", fr: "Résilience naine" },
  "dwarven-toughness": { en: "Dwarven Toughness", fr: "Robustesse naine" },
  stonecunning: { en: "Stonecunning", fr: "Connaissance de la pierre" },
};

export {
  speciesSeedData,
  speciesTraitsSeedData,
  speciesTraitsTranslations,
  speciesTranslations,
};
