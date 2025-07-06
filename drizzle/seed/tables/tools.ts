import z from "zod";
import { ABILITIES_IDS, SYSTEM_ID_DD5E } from "../constants";

const toolsSchema = z.object({
  slug: z.string(),
  defaultName: z.string().min(1).max(255),
  defaultUtility: z.string().min(1).max(255),
  defaultCraft: z.string().min(1).max(255).optional(),
  abilityId: z.number(),
  weight: z.number().optional(),
  value: z.number().optional(),
  systemId: z.number(),
  isMusicalInstrument: z.boolean().optional(),
  isGamingTool: z.boolean().optional(),
});

type ToolInsertSchema = z.infer<typeof toolsSchema>;

const toolsData: ToolInsertSchema[] = [
  {
    slug: "alchemists-supplies",
    defaultName: "Alchemist's Supplies",
    defaultUtility: "Identify a substance (DC 15), or start a fire (DC 15)",
    defaultCraft:
      "Acid, Alchemist's Fire, Component Pouch, Oil, Paper, Perfume",
    abilityId: ABILITIES_IDS.INTELLIGENCE,
    weight: 8,
    value: 5000,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "brewers-supplies",
    defaultName: "Brewer's Supplies",
    defaultUtility:
      "Detect poisoned drink (DC 15), or identify alcohol (DC 10)",
    defaultCraft: "Antitoxin",
    abilityId: ABILITIES_IDS.INTELLIGENCE,
    weight: 9,
    value: 2000,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "calligraphers-supplies",
    defaultName: "Calligrapher's Supplies",
    defaultUtility:
      "Write text with impressive flourishes that guard against forgery (DC 15)",
    defaultCraft: "Ink, Spell Scroll",
    abilityId: ABILITIES_IDS.DEXTERITY,
    weight: 5,
    value: 1000,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "carpenters-tools",
    defaultName: "Carpenter's Tools",
    defaultUtility: "Seal or pry open a door or container (DC 20)",
    defaultCraft:
      "Club, Greatclub, Quarterstaff, Barrel, Chest, Ladder, Pole, Portable Ram, Torch",
    abilityId: ABILITIES_IDS.STRENGTH,
    weight: 6,
    value: 800,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "cartographers-tools",
    defaultName: "Cartographer's Tools",
    defaultUtility: "Draft a map of a small area (DC 15)",
    defaultCraft: "Map",
    abilityId: ABILITIES_IDS.WISDOM,
    weight: 6,
    value: 1500,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "cobblers-tools",
    defaultName: "Cobbler's Tools",
    defaultUtility:
      "Modify footwear to give Advantage on the wearer's next Dexterity (Acrobatics) check (DC 10)",
    defaultCraft: "Climber's Kit",
    abilityId: ABILITIES_IDS.DEXTERITY,
    weight: 5,
    value: 500,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "cooks-utensils",
    defaultName: "Cook's Utensils",
    defaultUtility:
      "Improve food's flavor (DC 10), or detect spoiled or poisoned food (DC 15)",
    defaultCraft: "Rations",
    abilityId: ABILITIES_IDS.WISDOM,
    weight: 8,
    value: 100,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "glassblowers-tools",
    defaultName: "Glassblower's Tools",
    defaultUtility:
      "Discern what a glass object held in the past 24 hours (DC 15)",
    defaultCraft: "Glass Bottle, Magnifying Glass, Spyglass, Vial",
    abilityId: ABILITIES_IDS.INTELLIGENCE,
    weight: 5,
    value: 3000,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "jewelers-tools",
    defaultName: "Jeweler's Tools",
    defaultUtility: "Discern a gem's value (DC 15)",
    defaultCraft: "Arcane Focus, Holy Symbol",
    abilityId: ABILITIES_IDS.INTELLIGENCE,
    weight: 2,
    value: 2500,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "leatherworkers-tools",
    defaultName: "Leatherworker's Tools",
    defaultUtility: "Add a design to a leather item (DC 10)",
    defaultCraft:
      "Sling, Whip, Hide Armor, Leather Armor, Studded Leather Armor, Backpack, Crossbow Bolt Case, Map or Scroll Case, Parchment, Pouch, Quiver, Waterskin",
    abilityId: ABILITIES_IDS.DEXTERITY,
    weight: 5,
    value: 500,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "masons-tools",
    defaultName: "Mason's Tools",
    defaultUtility: "Chisel a symbol or hole in stone (DC 10)",
    defaultCraft: "Block and Tackle",
    abilityId: ABILITIES_IDS.STRENGTH,
    weight: 8,
    value: 1000, // 10 GP
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "painters-supplies",
    defaultName: "Painter's Supplies",
    defaultUtility:
      "Paint a recognizable image of something you've seen (DC 10)",
    defaultCraft: "Druidic Focus, Holy Symbol",
    abilityId: ABILITIES_IDS.WISDOM,
    weight: 5,
    value: 1000, // 10 GP
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "potters-tools",
    defaultName: "Potter's Tools",
    defaultUtility:
      "Discern what a ceramic object held in the past 24 hours (DC 15)",
    defaultCraft: "Jug, Lamp",
    abilityId: ABILITIES_IDS.INTELLIGENCE,
    weight: 3,
    value: 1000, // 10 GP
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "smiths-tools",
    defaultName: "Smith's Tools",
    defaultUtility: "Pry open a door or container (DC 20)",
    defaultCraft:
      "Any Melee weapon (except Whip), Greatclub, Quarterstaff, Heavy armor, Ball Bearings, Bucket, Caltrops, Chain, Crowbar, Firearm Bullets, Grappling Hook, Iron Pot, Iron Spikes, Sling Bullets",
    abilityId: ABILITIES_IDS.STRENGTH,
    weight: 8,
    value: 2000, // 20 GP
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "tinkers-tools",
    defaultName: "Tinker's Tools",
    defaultUtility:
      "Assemble a Tiny item composed of scrap, which falls apart in 1 minute (DC 20)",
    defaultCraft:
      "Musket, Pistol, Bell, Bullseye Lantern, Flask, Hooded Lantern, Hunting Trap, Lock, Manacles, Mirror, Shovel, Signal Whistle, Tinderbox",
    abilityId: ABILITIES_IDS.DEXTERITY,
    weight: 10,
    value: 5000, // 50 GP
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "weavers-tools",
    defaultName: "Weaver's Tools",
    defaultUtility:
      "Mend a tear in clothing (DC 10), or sew a Tiny design (DC 10)",
    defaultCraft:
      "Padded Armor, Basket, Bedroll, Blanket, Fine Clothes, Net, Robe, Rope, Sack, String, Tent, Traveler's Clothes",
    abilityId: ABILITIES_IDS.DEXTERITY,
    weight: 5,
    value: 100, // 1 GP
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "woodcarvers-tools",
    defaultName: "Woodcarver's Tools",
    defaultUtility: "Carve a pattern in wood (DC 10)",
    defaultCraft:
      "Club, Greatclub, Quarterstaff, Ranged weapons (except Pistol, Musket, and Sling), Arcane Focus, Arrows, Bolts, Druidic Focus, Ink Pen, Needles",
    abilityId: ABILITIES_IDS.DEXTERITY,
    weight: 5,
    value: 100, // 1 GP
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "disguise-kit",
    defaultName: "Disguise Kit",
    defaultUtility: "Apply makeup (DC 10)",
    defaultCraft: "Costume",
    abilityId: ABILITIES_IDS.CHARISMA,
    weight: 3,
    value: 2500, // 25 GP
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "forgery-kit",
    defaultName: "Forgery Kit",
    defaultUtility:
      "Mimic 10 or fewer words of someone else's handwriting (DC 15), or duplicate a wax seal (DC 20)",
    abilityId: ABILITIES_IDS.DEXTERITY,
    weight: 5,
    value: 1500, // 15 GP
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "herbalism-kit",
    defaultName: "Herbalism Kit",
    defaultUtility: "Identify a plant (DC 10)",
    defaultCraft: "Antitoxin, Candle, Healer's Kit, Potion of Healing",
    abilityId: ABILITIES_IDS.INTELLIGENCE,
    weight: 3,
    value: 500, // 5 GP
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "bagpipes",
    defaultName: "Bagpipes",
    defaultUtility: "Play a known tune (DC 10), or improvise a song (DC 15)",
    abilityId: ABILITIES_IDS.CHARISMA,
    weight: 6,
    value: 3000, // 30 GP
    systemId: SYSTEM_ID_DD5E,
    isMusicalInstrument: true,
  },
  {
    slug: "drum",
    defaultName: "Drum",
    defaultUtility: "Play a known tune (DC 10), or improvise a song (DC 15)",
    abilityId: ABILITIES_IDS.CHARISMA,
    weight: 3,
    value: 600, // 6 GP
    systemId: SYSTEM_ID_DD5E,
    isMusicalInstrument: true,
  },
  {
    slug: "dulcimer",
    defaultName: "Dulcimer",
    defaultUtility: "Play a known tune (DC 10), or improvise a song (DC 15)",
    abilityId: ABILITIES_IDS.CHARISMA,
    weight: 10,
    value: 2500, // 25 GP
    systemId: SYSTEM_ID_DD5E,
    isMusicalInstrument: true,
  },
  {
    slug: "flute",
    defaultName: "Flute",
    defaultUtility: "Play a known tune (DC 10), or improvise a song (DC 15)",
    abilityId: ABILITIES_IDS.CHARISMA,
    weight: 1,
    value: 200, // 2 GP
    systemId: SYSTEM_ID_DD5E,
    isMusicalInstrument: true,
  },
  {
    slug: "horn",
    defaultName: "Horn",
    defaultUtility: "Play a known tune (DC 10), or improvise a song (DC 15)",
    abilityId: ABILITIES_IDS.CHARISMA,
    weight: 2,
    value: 300, // 3 GP
    systemId: SYSTEM_ID_DD5E,
    isMusicalInstrument: true,
  },
  {
    slug: "lute",
    defaultName: "Lute",
    defaultUtility: "Play a known tune (DC 10), or improvise a song (DC 15)",
    abilityId: ABILITIES_IDS.CHARISMA,
    weight: 2,
    value: 3500, // 35 GP
    systemId: SYSTEM_ID_DD5E,
    isMusicalInstrument: true,
  },
  {
    slug: "lyre",
    defaultName: "Lyre",
    defaultUtility: "Play a known tune (DC 10), or improvise a song (DC 15)",
    abilityId: ABILITIES_IDS.CHARISMA,
    weight: 2,
    value: 3000, // 30 GP
    systemId: SYSTEM_ID_DD5E,
    isMusicalInstrument: true,
  },
  {
    slug: "pan-flute",
    defaultName: "Pan Flute",
    defaultUtility: "Play a known tune (DC 10), or improvise a song (DC 15)",
    abilityId: ABILITIES_IDS.CHARISMA,
    weight: 2,
    value: 1200, // 12 GP
    systemId: SYSTEM_ID_DD5E,
    isMusicalInstrument: true,
  },
  {
    slug: "shawm",
    defaultName: "Shawm",
    defaultUtility: "Play a known tune (DC 10), or improvise a song (DC 15)",
    abilityId: ABILITIES_IDS.CHARISMA,
    weight: 1,
    value: 200, // 2 GP
    systemId: SYSTEM_ID_DD5E,
    isMusicalInstrument: true,
  },
  {
    slug: "viol",
    defaultName: "Viol",
    defaultUtility: "Play a known tune (DC 10), or improvise a song (DC 15)",
    abilityId: ABILITIES_IDS.CHARISMA,
    weight: 1,
    value: 3000, // 30 GP
    systemId: SYSTEM_ID_DD5E,
    isMusicalInstrument: true,
  },
  {
    slug: "dice-set",
    defaultName: "Dice Set",
    defaultUtility:
      "Discern whether someone is cheating (DC 10), or win the game (DC 20)",
    abilityId: ABILITIES_IDS.WISDOM,
    value: 10, // 1 SP
    systemId: SYSTEM_ID_DD5E,
    isGamingTool: true,
  },
  {
    slug: "dragonchess-set",
    defaultName: "Dragonchess Set",
    defaultUtility:
      "Discern whether someone is cheating (DC 10), or win the game (DC 20)",
    abilityId: ABILITIES_IDS.WISDOM,
    value: 100, // 1 GP
    systemId: SYSTEM_ID_DD5E,
    isGamingTool: true,
  },
  {
    slug: "playing-cards-set",
    defaultName: "Playing Cards Set",
    defaultUtility:
      "Discern whether someone is cheating (DC 10), or win the game (DC 20)",
    abilityId: ABILITIES_IDS.WISDOM,
    value: 50, // 5 SP
    systemId: SYSTEM_ID_DD5E,
    isGamingTool: true,
  },
  {
    slug: "three-dragon-ante-set",
    defaultName: "Three-Dragon Ante Set",
    defaultUtility:
      "Discern whether someone is cheating (DC 10), or win the game (DC 20)",
    abilityId: ABILITIES_IDS.WISDOM,
    value: 100, // 1 GP
    systemId: SYSTEM_ID_DD5E,
    isGamingTool: true,
  },
  {
    slug: "navigators-tools",
    defaultName: "Navigator's Tools",
    defaultUtility:
      "Plot a course (DC 10), or determine position by stargazing (DC 15)",
    abilityId: ABILITIES_IDS.WISDOM,
    weight: 2,
    value: 2500, // 25 GP
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "poisoners-kit",
    defaultName: "Poisoner's Kit",
    defaultUtility: "Detect a poisoned object (DC 10)",
    defaultCraft: "Basic Poison",
    abilityId: ABILITIES_IDS.INTELLIGENCE,
    weight: 2,
    value: 5000, // 50 GP
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "thieves-tools",
    defaultName: "Thieves' Tools",
    defaultUtility: "Pick a lock (DC 15), or disarm a trap (DC 15)",
    abilityId: ABILITIES_IDS.DEXTERITY,
    weight: 1,
    value: 2500, // 25 GP
    systemId: SYSTEM_ID_DD5E,
  },
];

// Tool translations for all tools, musical instruments, and gaming sets
export const toolTranslations = {
  "alchemists-supplies": {
    en: {
      name: "Alchemist's Supplies",
      utility: "Identify a substance (DC 15), or start a fire (DC 15)",
      craft: "Acid, Alchemist's Fire, Component Pouch, Oil, Paper, Perfume",
    },
    fr: {
      name: "Matériel d'alchimiste",
      utility: "Identifier une substance (DD 15), ou allumer un feu (DD 15)",
      craft: "Acide, Feu grégeois, Bourse de composants, Huile, Papier, Parfum",
    },
  },
  "brewers-supplies": {
    en: {
      name: "Brewer's Supplies",
      utility: "Detect poisoned drink (DC 15), or identify alcohol (DC 10)",
      craft: "Antitoxin",
    },
    fr: {
      name: "Matériel de brasseur",
      utility:
        "Détecter une boisson empoisonnée (DD 15), ou identifier de l'alcool (DD 10)",
      craft: "Antitoxine",
    },
  },
  "calligraphers-supplies": {
    en: {
      name: "Calligrapher's Supplies",
      utility:
        "Write text with impressive flourishes that guard against forgery (DC 15)",
      craft: "Ink, Spell Scroll",
    },
    fr: {
      name: "Matériel de calligraphe",
      utility:
        "Écrire un texte avec des fioritures impressionnantes qui protègent contre la contrefaçon (DD 15)",
      craft: "Encre, Parchemin de sort",
    },
  },
  "carpenters-tools": {
    en: {
      name: "Carpenter's Tools",
      utility: "Seal or pry open a door or container (DC 20)",
      craft:
        "Club, Greatclub, Quarterstaff, Barrel, Chest, Ladder, Pole, Portable Ram, Torch",
    },
    fr: {
      name: "Outils de charpentier",
      utility: "Sceller ou forcer une porte ou un conteneur (DD 20)",
      craft:
        "Gourdin, Massue, Bâton, Baril, Coffre, Échelle, Perche, Bélier portatif, Torche",
    },
  },
  "cartographers-tools": {
    en: {
      name: "Cartographer's Tools",
      utility: "Draft a map of a small area (DC 15)",
      craft: "Map",
    },
    fr: {
      name: "Outils de cartographe",
      utility: "Dessiner une carte d'une petite zone (DD 15)",
      craft: "Carte",
    },
  },
  "cobblers-tools": {
    en: {
      name: "Cobbler's Tools",
      utility:
        "Modify footwear to give Advantage on the wearer's next Dexterity (Acrobatics) check (DC 10)",
      craft: "Climber's Kit",
    },
    fr: {
      name: "Outils de cordonnier",
      utility:
        "Modifier des chaussures pour donner l'avantage au prochain test de Dextérité (Acrobaties) du porteur (DD 10)",
      craft: "Kit d'escalade",
    },
  },
  "cooks-utensils": {
    en: {
      name: "Cook's Utensils",
      utility:
        "Improve food's flavor (DC 10), or detect spoiled or poisoned food (DC 15)",
      craft: "Rations",
    },
    fr: {
      name: "Ustensiles de cuisine",
      utility:
        "Améliorer la saveur de la nourriture (DD 10), ou détecter de la nourriture avariée ou empoisonnée (DD 15)",
      craft: "Rations",
    },
  },
  "glassblowers-tools": {
    en: {
      name: "Glassblower's Tools",
      utility: "Discern what a glass object held in the past 24 hours (DC 15)",
      craft: "Glass Bottle, Magnifying Glass, Spyglass, Vial",
    },
    fr: {
      name: "Outils de souffleur de verre",
      utility:
        "Déterminer ce qu'un objet en verre a contenu dans les 24 dernières heures (DD 15)",
      craft: "Bouteille en verre, Loupe, Longue-vue, Fiole",
    },
  },
  "jewelers-tools": {
    en: {
      name: "Jeweler's Tools",
      utility: "Discern a gem's value (DC 15)",
      craft: "Arcane Focus, Holy Symbol",
    },
    fr: {
      name: "Outils de joaillier",
      utility: "Déterminer la valeur d'une gemme (DD 15)",
      craft: "Focalisateur arcanique, Symbole sacré",
    },
  },
  "leatherworkers-tools": {
    en: {
      name: "Leatherworker's Tools",
      utility: "Add a design to a leather item (DC 10)",
      craft:
        "Sling, Whip, Hide Armor, Leather Armor, Studded Leather Armor, Backpack, Crossbow Bolt Case, Map or Scroll Case, Parchment, Pouch, Quiver, Waterskin",
    },
    fr: {
      name: "Outils de travailleur du cuir",
      utility: "Ajouter un motif à un objet en cuir (DD 10)",
      craft:
        "Fronde, Fouet, Armure de peaux, Armure de cuir, Armure de cuir clouté, Sac à dos, Étui à carreaux d'arbalète, Étui à cartes ou parchemins, Parchemin, Bourse, Carquois, Outre",
    },
  },
  "masons-tools": {
    en: {
      name: "Mason's Tools",
      utility: "Chisel a symbol or hole in stone (DC 10)",
      craft: "Block and Tackle",
    },
    fr: {
      name: "Outils de maçon",
      utility: "Sculpter un symbole ou un trou dans la pierre (DD 10)",
      craft: "Palan et poulie",
    },
  },
  "painters-supplies": {
    en: {
      name: "Painter's Supplies",
      utility: "Paint a recognizable image of something you've seen (DC 10)",
      craft: "Druidic Focus, Holy Symbol",
    },
    fr: {
      name: "Fournitures de peintre",
      utility:
        "Peindre une image reconnaissable de quelque chose que vous avez vu (DD 10)",
      craft: "Focalisateur druidique, Symbole sacré",
    },
  },
  "potters-tools": {
    en: {
      name: "Potter's Tools",
      utility:
        "Discern what a ceramic object held in the past 24 hours (DC 15)",
      craft: "Jug, Lamp",
    },
    fr: {
      name: "Outils de potier",
      utility:
        "Déterminer ce qu'un objet en céramique a contenu dans les 24 dernières heures (DD 15)",
      craft: "Cruche, Lampe",
    },
  },
  "smiths-tools": {
    en: {
      name: "Smith's Tools",
      utility: "Pry open a door or container (DC 20)",
      craft:
        "Any Melee weapon (except Whip), Greatclub, Quarterstaff, Heavy armor, Ball Bearings, Bucket, Caltrops, Chain, Crowbar, Firearm Bullets, Grappling Hook, Iron Pot, Iron Spikes, Sling Bullets",
    },
    fr: {
      name: "Outils de forgeron",
      utility: "Forcer une porte ou un conteneur (DD 20)",
      craft:
        "Toute arme de mêlée (sauf fouet), Massue, Bâton, Armure lourde, Billes de fer, Seau, Chaînes, Pied-de-biche, Balles d'arme à feu, Crochet de grappin, Marmite, Pointes de fer, Billes de fronde",
    },
  },
  "tinkers-tools": {
    en: {
      name: "Tinker's Tools",
      utility:
        "Assemble a Tiny item composed of scrap, which falls apart in 1 minute (DC 20)",
      craft:
        "Musket, Pistol, Bell, Bullseye Lantern, Flask, Hooded Lantern, Hunting Trap, Lock, Manacles, Mirror, Shovel, Signal Whistle, Tinderbox",
    },
    fr: {
      name: "Outils de bricoleur",
      utility:
        "Assembler un petit objet composé de bric-à-brac, qui se désagrège en 1 minute (DD 20)",
      craft:
        "Mousquet, Pistolet, Cloche, Lanterne sourde, Flacon, Lanterne sourde, Piège à gibier, Cadenas, Menottes, Miroir, Pelle, Sifflet, Boîte à amadou",
    },
  },
  "weavers-tools": {
    en: {
      name: "Weaver's Tools",
      utility: "Mend a tear in clothing (DC 10), or sew a Tiny design (DC 10)",
      craft:
        "Padded Armor, Basket, Bedroll, Blanket, Fine Clothes, Net, Robe, Rope, Sack, String, Tent, Traveler's Clothes",
    },
    fr: {
      name: "Outils de tisserand",
      utility: "Rapiécer un vêtement (DD 10), ou coudre un petit motif (DD 10)",
      craft:
        "Armure matelassée, Panier, Sac de couchage, Couverture, Vêtements de qualité, Filet, Robe, Corde, Sac, Ficelle, Tente, Vêtements de voyage",
    },
  },
  "woodcarvers-tools": {
    en: {
      name: "Woodcarver's Tools",
      utility: "Carve a pattern in wood (DC 10)",
      craft:
        "Club, Greatclub, Quarterstaff, Ranged weapons (except Pistol, Musket, and Sling), Arcane Focus, Arrows, Bolts, Druidic Focus, Ink Pen, Needles",
    },
    fr: {
      name: "Outils de sculpteur sur bois",
      utility: "Sculpter un motif dans le bois (DD 10)",
      craft:
        "Gourdin, Massue, Bâton, Armes à distance (sauf pistolet, mousquet et fronde), Focalisateur arcanique, Flèches, Carreaux, Focalisateur druidique, Stylo, Aiguilles",
    },
  },
  "disguise-kit": {
    en: {
      name: "Disguise Kit",
      utility: "Apply makeup (DC 10)",
      craft: "Costume",
    },
    fr: {
      name: "Kit de déguisement",
      utility: "Appliquer du maquillage (DD 10)",
      craft: "Costume",
    },
  },
  "forgery-kit": {
    en: {
      name: "Forgery Kit",
      utility:
        "Mimic 10 or fewer words of someone else's handwriting (DC 15), or duplicate a wax seal (DC 20)",
      craft: "",
    },
    fr: {
      name: "Kit de contrefaçon",
      utility:
        "Imiter 10 mots ou moins de l'écriture de quelqu'un d'autre (DD 15), ou dupliquer un sceau de cire (DD 20)",
      craft: "",
    },
  },
  "herbalism-kit": {
    en: {
      name: "Herbalism Kit",
      utility: "Identify a plant (DC 10)",
      craft: "Antitoxin, Candle, Healer's Kit, Potion of Healing",
    },
    fr: {
      name: "Kit d'herboristerie",
      utility: "Identifier une plante (DD 10)",
      craft: "Antitoxine, Bougie, Trousse de soins, Potion de soins",
    },
  },
  bagpipes: {
    en: {
      name: "Bagpipes",
      utility: "Play a known tune (DC 10), or improvise a song (DC 15)",
      craft: "",
    },
    fr: {
      name: "Cornemuse",
      utility: "Jouer un air connu (DD 10), ou improviser une chanson (DD 15)",
      craft: "",
    },
  },
  drum: {
    en: {
      name: "Drum",
      utility: "Play a known tune (DC 10), or improvise a song (DC 15)",
      craft: "",
    },
    fr: {
      name: "Tambour",
      utility: "Jouer un air connu (DD 10), ou improviser une chanson (DD 15)",
      craft: "",
    },
  },
  dulcimer: {
    en: {
      name: "Dulcimer",
      utility: "Play a known tune (DC 10), or improvise a song (DC 15)",
      craft: "",
    },
    fr: {
      name: "Dulcimer",
      utility: "Jouer un air connu (DD 10), ou improviser une chanson (DD 15)",
      craft: "",
    },
  },
  flute: {
    en: {
      name: "Flute",
      utility: "Play a known tune (DC 10), or improvise a song (DC 15)",
      craft: "",
    },
    fr: {
      name: "Flûte",
      utility: "Jouer un air connu (DD 10), ou improviser une chanson (DD 15)",
      craft: "",
    },
  },
  horn: {
    en: {
      name: "Horn",
      utility: "Play a known tune (DC 10), or improvise a song (DC 15)",
      craft: "",
    },
    fr: {
      name: "Cor",
      utility: "Jouer un air connu (DD 10), ou improviser une chanson (DD 15)",
      craft: "",
    },
  },
  lute: {
    en: {
      name: "Lute",
      utility: "Play a known tune (DC 10), or improvise a song (DC 15)",
      craft: "",
    },
    fr: {
      name: "Luth",
      utility: "Jouer un air connu (DD 10), ou improviser une chanson (DD 15)",
      craft: "",
    },
  },
  lyre: {
    en: {
      name: "Lyre",
      utility: "Play a known tune (DC 10), or improvise a song (DC 15)",
      craft: "",
    },
    fr: {
      name: "Lyre",
      utility: "Jouer un air connu (DD 10), ou improviser une chanson (DD 15)",
      craft: "",
    },
  },
  "pan-flute": {
    en: {
      name: "Pan Flute",
      utility: "Play a known tune (DC 10), or improvise a song (DC 15)",
      craft: "",
    },
    fr: {
      name: "Flûte de Pan",
      utility: "Jouer un air connu (DD 10), ou improviser une chanson (DD 15)",
      craft: "",
    },
  },
  shawm: {
    en: {
      name: "Shawm",
      utility: "Play a known tune (DC 10), or improvise a song (DC 15)",
      craft: "",
    },
    fr: {
      name: "Chalemie",
      utility: "Jouer un air connu (DD 10), ou improviser une chanson (DD 15)",
      craft: "",
    },
  },
  viol: {
    en: {
      name: "Viol",
      utility: "Play a known tune (DC 10), or improvise a song (DC 15)",
      craft: "",
    },
    fr: {
      name: "Viole",
      utility: "Jouer un air connu (DD 10), ou improviser une chanson (DD 15)",
      craft: "",
    },
  },
  "dice-set": {
    en: {
      name: "Dice Set",
      utility:
        "Discern whether someone is cheating (DC 10), or win the game (DC 20)",
      craft: "",
    },
    fr: {
      name: "Jeu de dés",
      utility:
        "Détecter si quelqu'un triche (DD 10), ou gagner la partie (DD 20)",
      craft: "",
    },
  },
  "dragonchess-set": {
    en: {
      name: "Dragonchess Set",
      utility:
        "Discern whether someone is cheating (DC 10), or win the game (DC 20)",
      craft: "",
    },
    fr: {
      name: "Jeu d'échecs draconiques",
      utility:
        "Détecter si quelqu'un triche (DD 10), ou gagner la partie (DD 20)",
      craft: "",
    },
  },
  "playing-cards-set": {
    en: {
      name: "Playing Cards Set",
      utility:
        "Discern whether someone is cheating (DC 10), or win the game (DC 20)",
      craft: "",
    },
    fr: {
      name: "Jeu de cartes",
      utility:
        "Détecter si quelqu'un triche (DD 10), ou gagner la partie (DD 20)",
      craft: "",
    },
  },
  "three-dragon-ante-set": {
    en: {
      name: "Three-Dragon Ante Set",
      utility:
        "Discern whether someone is cheating (DC 10), or win the game (DC 20)",
      craft: "",
    },
    fr: {
      name: "Jeu des trois dragons",
      utility:
        "Détecter si quelqu'un triche (DD 10), ou gagner la partie (DD 20)",
      craft: "",
    },
  },
  "navigators-tools": {
    en: {
      name: "Navigator's Tools",
      utility:
        "Plot a course (DC 10), or determine position by stargazing (DC 15)",
      craft: "",
    },
    fr: {
      name: "Outils de navigateur",
      utility:
        "Tracer une route (DD 10), ou déterminer la position par l'observation des étoiles (DD 15)",
      craft: "",
    },
  },
  "poisoners-kit": {
    en: {
      name: "Poisoner's Kit",
      utility: "Detect a poisoned object (DC 10)",
      craft: "Basic Poison",
    },
    fr: {
      name: "Kit de poison",
      utility: "Détecter un objet empoisonné (DD 10)",
      craft: "Poison basique",
    },
  },
  "thieves-tools": {
    en: {
      name: "Thieves' Tools",
      utility: "Pick a lock (DC 15), or disarm a trap (DC 15)",
      craft: "",
    },
    fr: {
      name: "Outils de voleur",
      utility: "Crocheter une serrure (DD 15), ou désamorcer un piège (DD 15)",
      craft: "",
    },
  },
};
