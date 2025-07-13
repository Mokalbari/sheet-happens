import dedent from "ts-dedent";
import { SYSTEM_ID_DD5E } from "../constants";

export const speciesSeed = [
  {
    slug: "aasimar",
    defaultName: "Aasimar",
    defaultDescription: dedent(`
      Aasimar (pronounced AH-sih-mar) are mortals who carry a spark of the Upper Planes within their souls. Whether descended from an angelic being or infused with celestial power, they can fan that spark to bring light, healing, and heavenly fury.
      Aasimar can arise among any population of mortals. They resemble their parents, but they live for up to 160 years and have features that hint at their celestial heritage, such as metallic freckles, luminous eyes, a halo, or the skin color of an angel (silver, opalescent green, or coppery red). These features start subtle and become obvious when the aasimar learns to reveal their full celestial nature.
      `),
    hasDarkvision: true,
    speed: 30,
    size: "medium",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "dragonborn",
    defaultName: "Dragonborn",
    defaultDescription: dedent(`
      The ancestors of dragonborn hatched from the eggs of chromatic and metallic dragons. One story holds that these eggs were blessed by the dragon gods Bahamut and Tiamat, who wanted to populate the multiverse with people created in their image.
      Another story claims that dragons created the first dragonborn without the gods’ blessings. Whatever their origin, dragonborn have made homes for themselves on the Material Plane.
      Dragonborn look like wingless, bipedal dragons—scaly, bright-eyed, and thick-boned with horns on their heads—and their coloration and other features are reminiscent of their draconic ancestors.
      `),
    hasDarkvision: true,
    speed: 30,
    size: "medium",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    id: 3,
    slug: "dwarf",
    defaultName: "Dwarf",
    defaultDescription: dedent(`
      Dwarves were raised from the earth in the elder days by a deity of the forge. Called by various names on different worlds—Moradin, Reorx, and others—that god gave dwarves an affinity for stone and metal and for living underground.
      The god also made them resilient like the mountains, with a life span of about 350 years. Squat and often bearded, the original dwarves carved cities and strongholds into mountainsides and under the earth.
      Their oldest legends tell of conflicts with the monsters of mountaintops and the Underdark, whether those monsters were towering giants or subterranean horrors.
      Inspired by those tales, dwarves of any culture often sing of valorous deeds—especially of the little overcoming the mighty.
      On some worlds in the multiverse, the first settlements of dwarves were built in hills or mountains, and the families who trace their ancestry to those settlements call themselves hill dwarves or mountain dwarves, respectively.
      The Greyhawk and Dragonlance settings have such communities.
      `),
    hasDarkvision: true,
    speed: 30,
    size: "medium",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "elf",
    defaultName: "Elf",
    defaultDescription: dedent(`
      Created by the god Corellon, the first elves could change their forms at will. They lost this ability when Corellon cursed them for plotting with the deity Lolth, who tried and failed to usurp Corellon’s dominion.
      When Lolth was cast into the Abyss, most elves renounced her and earned Corellon’s forgiveness, but that which Corellon had taken from them was lost forever. No longer able to shape-shift at will, the elves retreated to the Feywild, where their sorrow was deepened by that plane’s influence. Over time, curiosity led many of them to explore other planes of existence, including worlds in the Material Plane.
      Elves have pointed ears and lack facial and body hair. They live for around 750 years, and they don’t sleep but instead enter a trance when they need to rest. In that state, they remain aware of their surroundings while immersing themselves in memories and meditations. An environment subtly transforms elves after they inhabit it for a millennium or more, and it grants them certain kinds of magic. Drow, high elves, and wood elves are examples of elves who have been transformed thus.
      `),
    hasDarkvision: true,
    speed: 30,
    size: "medium",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "gnome",
    defaultName: "Gnome",
    defaultDescription: dedent(`
      Gnomes are magical folk created by gods of invention, illusions, and life underground. The earliest gnomes were seldom seen by other folk due to the gnomes’ secretive nature and their propensity for living in forests and burrows.
      What they lacked in size, they made up for in cleverness. They confounded predators with traps and labyrinthine tunnels. They also learned magic from gods like Garl Glittergold, Baervan Wildwanderer, and Baravar Cloakshadow, who visited them in disguise.
      That magic eventually created the lineages of forest gnomes and rock gnomes. Gnomes are petite folk with big eyes and pointed ears, who live around 425 years. Many gnomes like the feeling of a roof over their head, even if that “roof” is nothing more than a hat.
      `),
    hasDarkvision: true,
    speed: 30,
    size: "small",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "goliath",
    defaultName: "Goliath",
    defaultDescription: dedent(`
      Towering over most folk, goliaths are distant descendants of giants. Each goliath bears the favors of the first giants—favors that manifest in various supernatural boons, including the ability to quickly grow and temporarily approach the height of goliaths' gigantic kin.
      Goliaths have physical characteristics that are reminiscent of the giants in their family lines. For example, some goliaths look like stone giants, while others resemble fire giants.
      Whatever giants they count as kin, goliaths have forged their own path in the multiverse—unencumbered by the internecine conflicts that have ravaged giantkind for ages—and seek heights above those reached by their ancestors.
      `),
    hasDarkvision: false,
    speed: 35,
    size: "medium",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "halfling",
    defaultName: "Halfling",
    defaultDescription: dedent(`
      Cherished and guided by gods who value life, home, and hearth, halflings gravitate toward bucolic havens where family and community help shape their lives. That said, many halflings possess a brave and adventurous spirit that leads them on journeys of discovery, affording them the chance to explore a bigger world and make new friends along the way.
      Their size—similar to that of a human child—helps them pass through crowds unnoticed and slip through tight spaces. Anyone who has spent time around halflings, particularly halfling adventurers, has likely witnessed the storied "luck of the halflings" in action. When a halfling is in mortal danger, an unseen force seems to intervene on the halfling's behalf. Many halflings believe in the power of luck, and they attribute their unusual gift to one or more of their benevolent gods, including Yondalla, Brandobaris, and Charmalaine. The same gift might contribute to their robust life spans (about 150 years).
      Halfling communities come in all varieties. For every sequestered shire tucked away in an unspoiled part of the world, there’s a crime syndicate like the Boromar Clan in the Eberron setting or a territorial mob of halflings like those in the Dark Sun setting.
      `),
    hasDarkvision: false,
    speed: 30,
    size: "small",
    systemId: SYSTEM_ID_DD5E,
    variant: null,
  },
  {
    slug: "human",
    defaultName: "Human",
    defaultDescription: dedent(`
      Found throughout the multiverse, humans are as varied as they are numerous, and they endeavor to achieve as much as they can in the years they are given. Their ambition and resourcefulness are commended, respected, and feared on many worlds.
      Humans are as diverse in appearance as the people of Earth, and they have many gods. Scholars dispute the origin of humanity, but one of the earliest known human gatherings is said to have occurred in Sigil, the torus-shaped city at the center of the multiverse and the place where the Common language was born. From there, humans could have spread to every part of the multiverse, bringing the City of Doors’ cosmopolitanism with them.
      `),
    hasDarkvision: false,
    speed: 30,
    size: "medium",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "orc",
    defaultName: "Orc",
    defaultDescription: dedent(`
      Orcs trace their creation to Gruumsh, a powerful god who roamed the wide open spaces of the Material Plane. Gruumsh equipped his children with gifts to help them wander great plains, vast caverns, and churning seas and to face the monsters that lurk there. Even when they turn their devotion to other gods, orcs retain Gruumsh’s gifts: endurance, determination, and the ability to see in darkness.
      Orcs are, on average, tall and broad. They have gray skin, ears that are sharply pointed, and prominent lower canines that resemble small tusks. Orc youths on some worlds are told about their ancestors' great travels and travails. Inspired by those tales, many of those orcs wonder when Gruumsh will call on them to match the heroic deeds of old and if they will prove worthy of his favor. Other orcs are happy to leave old tales in the past and find their own way.
      `),
    hasDarkvision: true,
    speed: 30,
    size: "medium",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "tiefling",
    defaultName: "Tiefling",
    defaultDescription: dedent(`
      Tieflings are either born in the Lower Planes or have fiendish ancestors who originated there. A tiefling (pronounced TEE-fling) is linked by blood to a devil, a demon, or some other Fiend. This connection to the Lower Planes is the tiefling’s fiendish legacy, which comes with the promise of power yet has no effect on the tiefling’s moral outlook.
      A tiefling chooses whether to embrace or lament their fiendish legacy. The three legacies are Abyssal, Chthonic, and Infernal.
      `),
    hasDarkvision: true,
    speed: 30,
    size: "medium",
    systemId: SYSTEM_ID_DD5E,
  },
];

export const speciesTraitsSeed = [
  {
    speciesId: 1,
    slug: "celestial-resistance",
    defaultName: "Celestial Resistance",
    defaultDescription: `You have Resistance to Necrotic damage and Radiant damage.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 1,
    slug: "darkvision",
    defaultName: "Darkvision",
    defaultDescription: `You have Darkvision with a range of 60 feet.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 1,
    slug: "healing-hands",
    defaultName: "Healing Hands",
    defaultDescription: `As a Magic action, you touch a creature and roll a number of d4s equal to your Proficiency Bonus. The creature regains a number of Hit Points equal to the total rolled. Once you use this trait, you can’t use it again until you finish a Long Rest.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 1,
    slug: "light-bearer",
    defaultName: "Light Bearer",
    defaultDescription: `You know the Light cantrip. Charisma is your spellcasting ability for it.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 1,
    slug: "celestial-revelation",
    defaultName: "Celestial Revelation",
    defaultDescription: dedent(`
      When you reach character level 3, you can transform as a Bonus Action using one of the options below (choose the option each time you transform). The transformation lasts for 1 minute or until you end it (no action required).
      Once you transform, you can’t do so again until you finish a Long Rest. Once on each of your turns before the transformation ends, you can deal extra damage to one target when you deal damage to it with an attack or a spell.
      The extra damage equals your Proficiency Bonus, and the extra damage’s type is either Necrotic for Necrotic Shroud or Radiant for Heavenly Wings and Inner Radiance. Here are the transformation options:
      `),
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 1,
    slug: "heavenly-wings",
    defaultName: "Heavenly Wings",
    defaultDescription: `Two spectral wings sprout from your back temporarily. Until the transformation ends, you have a Fly Speed equal to your Speed.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 1,
    slug: "inner-radiance",
    defaultName: "Inner Radiance",
    defaultDescription: `Searing light temporarily radiates from your eyes and mouth. For the duration, you shed Bright Light in a 10-foot radius and Dim Light for an additional 10 feet, and at the end of each of your turns, each creature within 10 feet of you takes Radiant damage equal to your Proficiency Bonus.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 1,
    slug: "necrotic-shroud",
    defaultName: "Necrotic Shroud",
    defaultDescription: `Your eyes briefly become pools of darkness, and flightless wings sprout from your back temporarily. Creatures other than your allies within 10 feet of you must succeed on a Charisma saving throw (DC 8 plus your Charisma modifier and Proficiency Bonus) or have the Frightened condition until the end of your next turn.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 2,
    slug: "draconic-ancestry",
    defaultName: "Draconic Ancestry",
    defaultDescription: `Your lineage stems from a dragon progenitor. Choose the kind of dragon from the Draconic Ancestors table. Your choice affects your Breath Weapon and Damage Resistance traits as well as your appearance.
      `,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 2,
    slug: "breath-weapon",
    defaultName: "Breath Weapon",
    defaultDescription: dedent(`
      When you take the Attack action on your turn, you can replace one of your attacks with an exhalation of magical energy in either a 15-foot Cone or a 30-foot Line that is 5 feet wide (choose the shape each time). Each creature in that area must make a Dexterity saving throw (DC 8 + your Constitution modifier and Proficiency Bonus).
      On a failed save, a creature takes 1d10 damage of the type determined by your Draconic Ancestry trait.
      On a successful save, a creature takes half as much damage. This damage increases by 1d10 when you reach character levels 5 (2d10), 11 (3d10), and 17 (4d10).
      You can use this Breath Weapon a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.
      `),
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 2,
    slug: "damage-resistance",
    defaultName: "Damage Resistance",
    defaultDescription: `You have Resistance to the damage type determined by your Draconic Ancestry trait.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 2,
    slug: "darkvision",
    defaultName: "Darkvision",
    defaultDescription: `You have Darkvision with a range of 60 feet.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 2,
    slug: "draconic-flight",
    defaultName: "Draconic Flight",
    defaultDescription: dedent(`
      When you reach character level 5, you can channel draconic magic to give yourself temporary flight. As a Bonus Action, you sprout spectral wings on your back that last for 10 minutes or until you retract the wings (no action required) or have the Incapacitated condition.
      During that time, you have a Fly Speed equal to your Speed. Your wings appear to be made of the same energy as your Breath Weapon.
      Once you use this trait, you can’t use it again until you finish a Long Rest.
      `),
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 3,
    slug: "darkvision",
    defaultName: "Darkvision",
    defaultDescription: `You have Darkvision with a range of 120 feet.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 3,
    slug: "dwarven-resilience",
    defaultName: "Dwarven Resilience",
    defaultDescription: `You have Resistance to Poison damage. You also have Advantage on saving throws you make to avoid or end the Poisoned condition.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 3,
    slug: "dwarven-toughness",
    defaultName: "Dwarven Toughness",
    defaultDescription: `Your Hit Point maximum increases by 1, and it increases by 1 again whenever you gain a level.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 3,
    slug: "stonecunning",
    defaultName: "Stonecunning",
    defaultDescription: `As a Bonus Action, you gain Tremorsense with a range of 60 feet for 10 minutes. You must be on a stone surface or touching a stone surface to use this Tremorsense. The stone can be natural or worked. You can use this Bonus Action a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 4,
    slug: "darkvision",
    defaultName: "Darkvision",
    defaultDescription: `You have Darkvision with a range of 60 feet.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 4,
    slug: "elven-lineage",
    defaultName: "Elven Lineage",
    defaultDescription: dedent(`
      You are part of a lineage that grants you supernatural abilities. Choose a lineage from the Elven Lineages table. You gain the level 1 benefit of that lineage. When you reach character levels 3 and 5, you learn a higher-level spell, as shown on the table.
      You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level.
      Intelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait (choose the ability when you select the lineage).
      `),
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 4,
    slug: "fey-ancestry",
    defaultName: "Fey Ancestry",
    defaultDescription: `You have Advantage on saving throws you make to avoid or end the Charmed condition.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 4,
    slug: "keen-senses",
    defaultName: "Keen Senses",
    defaultDescription: `You have proficiency in the Insight, Perception, or Survival skill.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 4,
    slug: "trance",
    defaultName: "Trance",
    defaultDescription: `You don’t need to sleep, and magic can’t put you to sleep. You can finish a Long Rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 5,
    slug: "darkvision",
    defaultName: "Darkvision",
    defaultDescription: `You have Darkvision with a range of 60 feet.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 5,
    slug: "gnomish-cunning",
    defaultName: "Gnomish Cunning",
    defaultDescription: `You have Advantage on Intelligence, Wisdom, and Charisma saving throws.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 5,
    slug: "gnomish-lineage",
    defaultName: "Gnomish Lineage",
    defaultDescription: `You are part of a lineage that grants you supernatural abilities. Choose one of the following options: Forest Gnome or Rock Gnome.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 6,
    slug: "giant-ancestry",
    defaultName: "Giant Ancestry",
    defaultDescription: `You are descended from Giants. Choose one of the following supernatural boons from your ancestry: Cloud, Fire, Frost, Hill, Stone, or Storm. You can use the chosen benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 6,
    slug: "large-form",
    defaultName: "Large Form",
    defaultDescription: dedent(`
      Starting at character level 5, you can change your size to Large as a Bonus Action if you're in a big enough space. This transformation lasts for 10 minutes or until you end it (no action required).
      During that time, you have Advantage on Strength checks, and your Speed increases by 10 feet.
      Once you use this trait, you can’t use it again until you finish a Long Rest.
      `),
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 6,
    slug: "powerful-build",
    defaultName: "Powerful Build",
    defaultDescription: `You have Advantage on any saving throw you make to end the Grappled condition. You also count as one size larger when determining your carrying capacity.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 7,
    slug: "brave",
    defaultName: "Brave",
    defaultDescription: `You have Advantage on saving throws you make to avoid or end the Frightened condition.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 7,
    slug: "halfling-nimbleness",
    defaultName: "Halfling Nimbleness",
    defaultDescription: `You can move through the space of any creature that is a size larger than you, but you can’t stop in the same space.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 7,
    slug: "luck",
    defaultName: "Luck",
    defaultDescription: `When you roll a 1 on the d20 of a D20 Test, you can reroll the die, and you must use the new roll.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 7,
    slug: "naturally-stealthy",
    defaultName: "Naturally Stealthy",
    defaultDescription: `You can take the Hide action even when you are obscured only by a creature that is at least one size larger than you.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 8,
    slug: "resourceful",
    defaultName: "Resourceful",
    defaultDescription: `You gain Heroic Inspiration whenever you finish a Long Rest.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 8,
    slug: "skillful",
    defaultName: "Skillful",
    defaultDescription: `You gain proficiency in one skill of your choice.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 8,
    slug: "versatile",
    defaultName: "Versatile",
    defaultDescription: `You gain an Origin feat of your choice (see chapter 5). Skilled is recommended.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 9,
    slug: "adrenaline-rush",
    defaultName: "Adrenaline Rush",
    defaultDescription: `You can take the Dash action as a Bonus Action. When you do so, you gain a number of Temporary Hit Points equal to your Proficiency Bonus. You can use this trait a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Short or Long Rest.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 9,
    slug: "darkvision",
    defaultName: "Darkvision",
    defaultDescription: `You have Darkvision with a range of 120 feet.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 9,
    slug: "relentless-endurance",
    defaultName: "Relentless Endurance",
    defaultDescription: `When you are reduced to 0 Hit Points but not killed outright, you can drop to 1 Hit Point instead. Once you use this trait, you can’t do so again until you finish a Long Rest.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 10,
    slug: "darkvision",
    defaultName: "Darkvision",
    defaultDescription: `You have Darkvision with a range of 60 feet.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 10,
    slug: "fiendish-legacy",
    defaultName: "Fiendish Legacy",
    defaultDescription: dedent(`
      You are the recipient of a legacy that grants you supernatural abilities. Choose a legacy from the Fiendish Legacies table. You gain the level 1 benefit of the chosen legacy. When you reach character levels 3 and 5, you learn a higher-level spell, as shown on the table.
      You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level.
      Intelligence, Wisdom, or Charisma is your spellcasting ability for the spells (choose when you select your legacy).
      `),
    systemId: SYSTEM_ID_DD5E,
  },
  {
    speciesId: 10,
    slug: "otherworldly-presence",
    defaultName: "Otherworldly Presence",
    defaultDescription: `You know the Thaumaturgy cantrip. When you cast it with this trait, the spell uses the same spellcasting ability you use for your Fiendish Legacy trait.`,
    systemId: SYSTEM_ID_DD5E,
  },
];

export const subspeciesSeed = [
  // === DRAGONBORN ANCESTRIES ===
  {
    slug: "black-dragonborn",
    speciesId: 2,
    defaultName: "Black Dragonborn",
    defaultDescription:
      "Descended from black dragons. Breath Weapon & Resistance: Acid.",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "blue-dragonborn",
    speciesId: 2,
    defaultName: "Blue Dragonborn",
    defaultDescription:
      "Descended from blue dragons. Breath Weapon & Resistance: Lightning.",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "brass-dragonborn",
    speciesId: 2,
    defaultName: "Brass Dragonborn",
    defaultDescription:
      "Descended from brass dragons. Breath Weapon & Resistance: Fire.",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "bronze-dragonborn",
    speciesId: 2,
    defaultName: "Bronze Dragonborn",
    defaultDescription:
      "Descended from bronze dragons. Breath Weapon & Resistance: Lightning.",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "copper-dragonborn",
    speciesId: 2,
    defaultName: "Copper Dragonborn",
    defaultDescription:
      "Descended from copper dragons. Breath Weapon & Resistance: Acid.",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "gold-dragonborn",
    speciesId: 2,
    defaultName: "Gold Dragonborn",
    defaultDescription:
      "Descended from gold dragons. Breath Weapon & Resistance: Fire.",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "green-dragonborn",
    speciesId: 2,
    defaultName: "Green Dragonborn",
    defaultDescription:
      "Descended from green dragons. Breath Weapon & Resistance: Poison.",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "red-dragonborn",
    speciesId: 2,
    defaultName: "Red Dragonborn",
    defaultDescription:
      "Descended from red dragons. Breath Weapon & Resistance: Fire.",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "silver-dragonborn",
    speciesId: 2,
    defaultName: "Silver Dragonborn",
    defaultDescription:
      "Descended from silver dragons. Breath Weapon & Resistance: Cold.",
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "white-dragonborn",
    speciesId: 2,
    defaultName: "White Dragonborn",
    defaultDescription:
      "Descended from white dragons. Breath Weapon & Resistance: Cold.",
    systemId: SYSTEM_ID_DD5E,
  },
  // === ELF VARIANTS ===
  {
    slug: "drow",
    speciesId: 4,
    defaultName: "Drow",
    defaultDescription: `Drow typically dwell in the Underdark and have been shaped by it. Some drow individuals and societies avoid the Underdark altogether yet carry its magic. In the Eberron setting, for example, drow dwell in rainforests and cyclopean ruins on the continent of Xen’drik.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "high-elf",
    speciesId: 4,
    defaultName: "High Elf",
    defaultDescription: `High elves have been infused with the magic of crossings between the Feywild and the Material Plane. On some worlds, high elves refer to themselves by other names. For example, they call themselves sun or moon elves in the Forgotten Realms setting, Silvanesti and Qualinesti in the Dragonlance setting, and Aereni in the Eberron setting.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "wood-elf",
    speciesId: 4,
    defaultName: "Wood Elf",
    defaultDescription: `Wood elves carry the magic of primeval forests within themselves. They are known by many other names, including wild elves, green elves, and forest elves. Grugach are reclusive wood elves of the Greyhawk setting, while the Kagonesti and the Tairnadal are wood elves of the Dragonlance and Eberron settings, respectively.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "forest-gnome",
    speciesId: 5, // assuming gnome is 5th species
    defaultName: "Forest Gnome",
    defaultDescription: `You know the Minor Illusion cantrip. You also always have the Speak with Animals spell prepared. You can cast it without a spell slot a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest. You can also use any spell slots you have to cast the spell.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "rock-gnome",
    speciesId: 5,
    defaultName: "Rock Gnome",
    defaultDescription: `You know the Mending and Prestidigitation cantrips. In addition, you can spend 10 minutes casting Prestidigitation to create a Tiny clockwork device (AC 5, 1 HP), such as a toy, fire starter, or music box. The device produces an effect whenever you or another creature takes a Bonus Action to activate it with a touch. If the chosen effect has options, you choose one when you create the device. You can have up to 3 such devices at once, and each falls apart 8 hours after its creation or when you dismantle it with a Utilize action.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "cloud-giant-goliath",
    speciesId: 6,
    defaultName: "Cloud Giant Ancestry",
    defaultDescription: `Cloud’s Jaunt: As a Bonus Action, you magically teleport up to 30 feet to an unoccupied space you can see.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "fire-giant-goliath",
    speciesId: 6,
    defaultName: "Fire Giant Ancestry",
    defaultDescription: `Fire’s Burn: When you hit a target with an attack roll and deal damage to it, you can also deal 1d10 Fire damage to that target.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "frost-giant-goliath",
    speciesId: 6,
    defaultName: "Frost Giant Ancestry",
    defaultDescription: `Frost’s Chill: When you hit a target with an attack roll and deal damage to it, you can also deal 1d6 Cold damage and reduce its Speed by 10 feet until the start of your next turn.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "hill-giant-goliath",
    speciesId: 6,
    defaultName: "Hill Giant Ancestry",
    defaultDescription: `Hill’s Tumble: When you hit a Large or smaller creature with an attack roll and deal damage to it, you can give that target the Prone condition.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "stone-giant-goliath",
    speciesId: 6,
    defaultName: "Stone Giant Ancestry",
    defaultDescription: `Stone’s Endurance: When you take damage, you can take a Reaction to roll 1d12. Add your Constitution modifier to the number rolled and reduce the damage by that total.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "storm-giant-goliath",
    speciesId: 6,
    defaultName: "Storm Giant Ancestry",
    defaultDescription: `Storm’s Thunder: When you take damage from a creature within 60 feet of you, you can take a Reaction to deal 1d8 Thunder damage to that creature.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "strongheart-halfling",
    speciesId: 7,
    defaultName: "Strongheart Halfling",
    defaultDescription: `Halflings who prefer to live underground are sometimes called strongheart halflings or stouts.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "lightfoot-halfling",
    speciesId: 7,
    defaultName: "Lightfoot Halfling",
    defaultDescription: `Nomadic halflings, as well as those who live among humans and other tall folk, are sometimes called lightfoot halflings or tallfellows.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "abyssal-tiefling",
    speciesId: 10,
    defaultName: "Abyssal Tiefling",
    defaultDescription: `The entropy of the Abyss, the chaos of Pandemonium, and the despair of Carceri call to tieflings who have the abyssal legacy. Horns, fur, tusks, and peculiar scents are common physical features of such tieflings, most of whom have the blood of demons coursing through their veins.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "chthonic-tiefling",
    speciesId: 10,
    defaultName: "Chthonic Tiefling",
    defaultDescription: `Tieflings who have the chthonic legacy feel not only the tug of Carceri but also the greed of Gehenna and the gloom of Hades. Some of these tieflings look cadaverous. Others possess the unearthly beauty of a succubus, or they have physical features in common with a night hag, a yugoloth, or some other Neutral Evil fiendish ancestor.`,
    systemId: SYSTEM_ID_DD5E,
  },
  {
    slug: "infernal-tiefling",
    speciesId: 10,
    defaultName: "Infernal Tiefling",
    defaultDescription: `The infernal legacy connects tieflings not only to Gehenna but also the Nine Hells and the raging battlefields of Acheron. Horns, spines, tails, golden eyes, and a faint odor of sulfur or smoke are common physical features of such tieflings, most of whom trace their ancestry to devils.`,
    systemId: SYSTEM_ID_DD5E,
  },
];

// Translations
export const speciesTranslations = {
  aasimar: {
    name: "Aasimar",
    description: dedent(`
      Les Aasimars (prononcé A-si-mar) sont des mortels porteurs d'une étincelle des Plans Supérieurs dans leur âme. Qu'ils descendent d’un être angélique ou qu’ils aient été imprégnés d’un pouvoir céleste, ils peuvent attiser cette étincelle pour apporter lumière, guérison et fureur divine.
      Un Aasimar peut naître dans n’importe quelle population mortelle. Il ressemble à ses parents, mais vit jusqu’à 160 ans et présente des traits célestes tels que des taches de rousseur métalliques, des yeux lumineux, un halo ou une peau argentée, vert opalescent ou rouge cuivré.
      Ces marques sont d’abord discrètes mais deviennent évidentes lorsque l’Aasimar embrasse pleinement sa nature céleste.
      `),
  },
  dragonborn: {
    name: "Drakéide",
    description: dedent(`
      Les ancêtres des drakéides ont éclos d’œufs de dragons chromatiques ou métalliques. Certains récits racontent que ces œufs furent bénis par Bahamut et Tiamat pour peupler le multivers à leur image. D’autres prétendent que les dragons eux-mêmes ont créé les premiers drakéides, sans intervention divine.
      Quelles que soient leurs origines, les drakéides se sont installés sur le Plan Matériel. Ils ressemblent à des dragons bipèdes et sans ailes : écailles, yeux vifs, ossature robuste et cornes leur donnent une apparence draconique fidèle à leurs ancêtres.
      `),
  },
  dwarf: {
    name: "Nain",
    description: dedent(`
      Les nains furent sculptés de la terre aux temps anciens par un dieu de la forge, connu sous divers noms tels que Moradin ou Reorx. Ce dieu leur donna une affinité avec la pierre, le métal et la vie souterraine, ainsi qu’une grande résilience. Leur espérance de vie avoisine les 350 ans.
      Petits, trapus, souvent barbus, les nains ont bâti des cités fortifiées dans les montagnes et sous terre.
      Leurs légendes les plus anciennes racontent des conflits avec des géants et les horreurs de l’Outreterre. Dans certaines régions, on distingue les nains des collines et des montagnes selon leurs origines géographiques.
      `),
  },
  elf: {
    name: "Elfe",
    description: dedent(`
      Créés par le dieu Corellon, les premiers elfes pouvaient changer de forme à volonté. Ils perdirent ce don après avoir conspiré avec la déesse Lolth. Lorsque cette dernière fut bannie dans l’Abysse, la plupart des elfes la rejetèrent et furent pardonnés, mais leur pouvoir originel resta perdu.
      Retirés dans le Feywild, ils y furent façonnés par la magie de ce plan. Curieux, ils finirent par explorer d'autres mondes, notamment sur le Plan Matériel.
      Les elfes ont les oreilles pointues, ne possèdent ni poils ni barbe, vivent environ 750 ans et méditent plutôt que de dormir.
      Leur environnement les transforme subtilement après plusieurs siècles, donnant naissance à des variantes telles que les drows, hauts-elfes et elfes des bois.
      `),
  },
  gnome: {
    name: "Gnome",
    description: dedent(`
      Les gnomes sont des êtres magiques créés par des dieux de l’invention, de l’illusion et de la vie souterraine. Discrets et reclus, ils vivaient dans des forêts et des terriers, évitant les autres peuples. Leur petite taille était compensée par une grande intelligence.
      Ils piégeaient leurs prédateurs et creusaient des galeries complexes. Ils apprirent la magie auprès de dieux comme Garl Brilledor et Baervan le Vagabond. Cette magie donna naissance à deux lignées : les gnomes des forêts et les gnomes des rochers.
      Les gnomes sont petits, avec de grands yeux et des oreilles pointues, et vivent environ 425 ans. Beaucoup aiment avoir un toit au-dessus de la tête, même si ce toit est parfois un simple chapeau.
      `),
  },
  goliath: {
    name: "Goliath",
    description: dedent(`
      Les goliaths, plus grands que la plupart des peuples, sont les lointains descendants des géants. Ils portent les faveurs de leurs ancêtres, qui se manifestent par des dons surnaturels comme la capacité de grandir temporairement jusqu’à approcher la taille de leurs aïeux.
      Leurs traits varient selon leur ascendance : certains rappellent les géants de pierre, d’autres les géants de feu. Malgré ce lien, les goliaths ont tracé leur propre voie dans le multivers, loin des querelles qui déchirent les géants, et cherchent à dépasser les exploits de leurs ancêtres.
      `),
  },
  halfling: {
    name: "Halfelin",
    description: dedent(`
      Guidés par des dieux protecteurs de la vie et du foyer, les halfelins vivent dans des communautés paisibles où famille et entraide sont centrales. Pourtant, leur esprit curieux pousse certains à explorer le vaste monde. De la taille d’un enfant humain, ils se faufilent aisément dans la foule ou les endroits étroits.
      Leur légendaire chance semble leur sauver la vie dans les pires situations, un don qu’ils attribuent à leurs divinités comme Yondalla ou Brandobaris. Cette bénédiction pourrait aussi expliquer leur longévité, avoisinant les 150 ans.
      Leurs sociétés sont variées : des villages champêtres aux réseaux criminels comme le clan Boromar.
      `),
  },
  human: {
    name: "Humain",
    description: dedent(`
      Présents dans tout le multivers, les humains sont d’une diversité remarquable. Leur ambition, leur ingéniosité et leur volonté d’aller toujours plus loin les rendent admirés ou redoutés.
      Leur apparence varie tout autant que celle des peuples de la Terre. Leur origine exacte est disputée, mais certains érudits situent les premiers regroupements humains à Sigil, la Cité des Portes, où naquit la langue commune. Depuis, les humains ont essaimé partout, apportant avec eux une culture cosmopolite.
      `),
  },
  orc: {
    name: "Orque",
    description: dedent(`
      Les orques furent créés par Gruumsh, un puissant dieu errant à travers le Plan Matériel. Il leur donna la force de survivre aux vastes étendues sauvages et aux monstres qui s’y cachent. Même lorsqu’ils vénèrent d’autres dieux, les orques conservent les dons de Gruumsh : endurance, ténacité et vision nocturne.
      De taille imposante, à la peau grise, avec des oreilles pointues et des crocs proéminents, ils sont marqués par leur héritage. Nombre d’orques grandissent en écoutant les exploits de leurs ancêtres, rêvant de les égaler. D’autres préfèrent se forger leur propre voie, libérés du poids des traditions.
      `),
  },
  tiefling: {
    name: "Tieffelin",
    description: dedent(`
      Les tieffelins sont nés dans les Plans Inférieurs ou descendent d’êtres fiélons comme des démons ou des diables. Ce lien de sang leur confère un legs infernal : une promesse de puissance, mais aussi une apparence souvent stigmatisée.
      Ils peuvent choisir d’embrasser ou de rejeter cet héritage. Les trois principales lignées sont l’Abyssale, la Chthonienne et l’Infernale, chacune liée à une forme de pouvoir des Plans Inférieurs.
      `),
  },
};

export const speciesTraitsTranslations = {
  "celestial-resistance": {
    name: "Résistance céleste",
    description: `Vous avez la Résistance aux dégâts nécrotiques et radiants.`,
  },
  darkvision: {
    name: "Vision dans le noir",
    description: `Vous avez la vision dans le noir sur une portée de 18 mètres.`,
  },
  "healing-hands": {
    name: "Mains guérisseuses",
    description: `En tant qu’action magique, vous touchez une créature et lancez un nombre de d4 égal à votre bonus de maîtrise. La créature regagne un nombre de points de vie égal au total obtenu. Une fois ce trait utilisé, vous devez terminer un repos long pour l’utiliser de nouveau.`,
  },
  "light-bearer": {
    name: "Porte-lumière",
    description: `Vous connaissez le tour de magie *Lumière*. Le Charisme est la caractéristique d'incantation associée.`,
  },
  "celestial-revelation": {
    name: "Révélation céleste",
    description: dedent(`
      À partir du niveau 3, vous pouvez vous transformer en utilisant une action bonus et en choisissant une des options suivantes (à choisir à chaque transformation).
      La transformation dure 1 minute ou jusqu’à ce que vous y mettiez fin (aucune action requise).
      Une fois transformé, vous ne pouvez pas réutiliser ce trait avant un repos long.
      Une fois par tour durant la transformation, vous pouvez infliger des dégâts supplémentaires à une cible touchée par une attaque ou un sort.
      Ces dégâts supplémentaires sont égaux à votre bonus de maîtrise et sont de type nécrotique (Ombre nécrotique) ou radiant (Ailes célestes, Radiance intérieure).
    `),
  },
  "heavenly-wings": {
    name: "Ailes célestes",
    description: dedent(`
      Deux ailes spectrales apparaissent temporairement dans votre dos.
      Tant que la transformation dure, vous bénéficiez d'une vitesse de vol égale à votre vitesse de déplacement.
    `),
  },
  "inner-radiance": {
    name: "Radiance intérieure",
    description: dedent(`
      Une lumière intense émane temporairement de vos yeux et de votre bouche.
      Vous émettez une lumière vive dans un rayon de 3 mètres et une lumière faible sur 3 mètres supplémentaires.
      À la fin de chacun de vos tours, chaque créature dans un rayon de 3 mètres subit un nombre de dégâts radiants égal à votre bonus de maîtrise.
    `),
  },
  "necrotic-shroud": {
    name: "Ombre nécrotique",
    description: dedent(`
      Vos yeux deviennent brièvement des puits de ténèbres, et des ailes atrophiées apparaissent temporairement dans votre dos.
      Les créatures (sauf vos alliés) dans un rayon de 3 mètres doivent réussir un jet de sauvegarde de Charisme (DD = 8 + votre modificateur de Charisme + votre bonus de maîtrise), ou être Effrayées jusqu’à la fin de votre prochain tour.
    `),
  },
  "draconic-ancestry": {
    name: "Ascendance draconique",
    description: dedent(`
      Votre lignée est issue d’un ancêtre draconique. Choisissez un type de dragon dans la table des ancêtres draconiques.
      Ce choix détermine votre Souffle et votre Résistance aux dégâts, ainsi que certains aspects de votre apparence.
    `),
  },
  "breath-weapon": {
    name: "Souffle",
    description: dedent(`
      Lorsque vous effectuez une action d’attaque, vous pouvez remplacer une de vos attaques par une exhalation d’énergie magique : un cône de 4,50 m ou une ligne de 9 m de long pour 1,50 m de large (à choisir à chaque fois).
      Chaque créature dans la zone doit effectuer un jet de sauvegarde de Dextérité (DD = 8 + votre modificateur de Constitution + bonus de maîtrise).
      En cas d’échec, la créature subit 1d10 dégâts (type selon votre ascendance). En cas de réussite, elle subit la moitié.
      Les dégâts augmentent à 2d10 au niveau 5, 3d10 au niveau 11, 4d10 au niveau 17.
      Vous pouvez utiliser ce souffle un nombre de fois égal à votre bonus de maîtrise, et regagnez toutes les utilisations après un repos long.
    `),
  },
  "damage-resistance": {
    name: "Résistance aux dégâts",
    description: `Vous avez la Résistance au type de dégâts associé à votre ascendance draconique.`,
  },
  "draconic-flight": {
    name: "Vol draconique",
    description: dedent(`
      Au niveau 5, vous pouvez canaliser la magie draconique pour voler temporairement. En action bonus, vous faites apparaître des ailes spectrales pour 10 minutes ou jusqu’à ce que vous les fassiez disparaître (aucune action) ou que vous deveniez incapable d’agir.
      Durant ce temps, vous obtenez une vitesse de vol égale à votre vitesse de déplacement. Les ailes reflètent l’énergie de votre souffle. Ce trait est utilisable une fois par repos long.
    `),
  },
  "dwarven-resilience": {
    name: "Résilience naine",
    description: `Vous avez la Résistance aux dégâts de Poison et un Avantage aux jets de sauvegarde pour éviter ou mettre fin à l’état Empoisonné.`,
  },
  "dwarven-toughness": {
    name: "Robustesse naine",
    description: `Votre maximum de points de vie augmente de 1, et augmente encore de 1 à chaque fois que vous gagnez un niveau.`,
  },
  stonecunning: {
    name: "Connaissance de la pierre",
    description: dedent(`
      En action bonus, vous obtenez la Tremorsense dans un rayon de 18 mètres pendant 10 minutes. Vous devez être en contact avec de la pierre naturelle ou travaillée. Vous pouvez utiliser ce trait un nombre de fois égal à votre bonus de maîtrise, et récupérez toutes les utilisations après un repos long.
    `),
  },
  "elven-lineage": {
    name: "Lignée elfique",
    description: dedent(`
      Vous appartenez à une lignée magique vous conférant des aptitudes surnaturelles. Choisissez une lignée parmi celles proposées. Vous gagnez un sort de niveau 1 associé. Aux niveaux 3 et 5, vous obtenez des sorts supplémentaires. Vous les avez toujours préparés, pouvez les lancer une fois sans emplacement, et récupérez cette utilisation après un repos long. Vous pouvez aussi les lancer avec vos emplacements de sorts. Choisissez Intelligence, Sagesse ou Charisme comme caractéristique d’incantation.
    `),
  },
  "fey-ancestry": {
    name: "Ascendance féerique",
    description: `Vous avez l’Avantage aux jets de sauvegarde contre l’état Charmé.`,
  },
  "keen-senses": {
    name: "Sens aiguisés",
    description: `Vous maîtrisez l’une des compétences suivantes : Intuition, Perception ou Survie.`,
  },
  trance: {
    name: "Transe",
    description: dedent(`
      Vous n’avez pas besoin de dormir et la magie ne peut pas vous endormir.
      Un repos long ne vous prend que 4 heures si vous méditez en pleine conscience.
    `),
  },
  "gnomish-cunning": {
    name: "Ruse gnomique",
    description: `Vous avez l’Avantage aux jets de sauvegarde d’Intelligence, de Sagesse et de Charisme.`,
  },
  "gnomish-lineage": {
    name: "Lignée gnomique",
    description: dedent(`
      Vous appartenez à une lignée magique vous conférant des capacités surnaturelles.
      Choisissez entre Gnome des forêts ou Gnome des rochers.
    `),
  },
  "giant-ancestry": {
    name: "Ascendance géante",
    description: dedent(`
      Vous descendez des géants.
      Choisissez une bénédiction surnaturelle parmi les suivantes : Nuage, Feu, Givre, Colline, Pierre ou Tempête.
      Vous pouvez l’utiliser un nombre de fois égal à votre bonus de maîtrise, et récupérez toutes les utilisations après un repos long.
    `),
  },
  "large-form": {
    name: "Forme gigantesque",
    description: dedent(`
      À partir du niveau 5, vous pouvez augmenter votre taille à « Grande » en action bonus si l’espace le permet.
      La transformation dure 10 minutes ou jusqu’à ce que vous y mettiez fin (aucune action).
      Pendant ce temps, vous avez l’Avantage aux tests de Force et votre vitesse augmente de 3 mètres.
      Ce trait est utilisable une fois par repos long.
    `),
  },
  "powerful-build": {
    name: "Puissante carrure",
    description: dedent(`
      Vous avez l’Avantage aux jets de sauvegarde pour mettre fin à l’état Agrippé.
      De plus, vous êtes considéré comme une taille de plus pour calculer votre capacité de port.
    `),
  },
  brave: {
    name: "Courageux",
    description: `Vous avez l’Avantage aux jets de sauvegarde contre l’état Effrayé.`,
  },
  "halfling-nimbleness": {
    name: "Agilité halfeline",
    description: `Vous pouvez vous déplacer à travers l’espace de toute créature d’une taille supérieure à la vôtre, sans pouvoir vous arrêter dans cet espace.`,
  },
  luck: {
    name: "Chance",
    description: `Lorsque vous obtenez un 1 sur un d20 lors d’un test, vous pouvez relancer le dé et devez utiliser le nouveau résultat.`,
  },
  "naturally-stealthy": {
    name: "Discrétion naturelle",
    description: `Vous pouvez vous cacher même si vous êtes seulement dissimulé par une créature d’au moins une taille supérieure à la vôtre.`,
  },
  resourceful: {
    name: "Débrouillard",
    description: `Vous gagnez de l’Inspiration héroïque à chaque fois que vous terminez un repos long.`,
  },
  skillful: {
    name: "Compétent",
    description: `Vous gagnez la maîtrise dans une compétence de votre choix.`,
  },
  versatile: {
    name: "Polyvalent",
    description: `Vous gagnez un don d’origine de votre choix (voir chapitre 5). Le don « Compétent » est recommandé.`,
  },
  "adrenaline-rush": {
    name: "Poussée d’adrénaline",
    description: dedent(`
      Vous pouvez utiliser l’action Se précipiter comme une action bonus.
      Lorsque vous le faites, vous gagnez un nombre de points de vie temporaires égal à votre bonus de maîtrise.
      Vous pouvez utiliser ce trait un nombre de fois égal à votre bonus de maîtrise, et récupérez toutes les utilisations après un repos court ou long.
    `),
  },
  "relentless-endurance": {
    name: "Endurance inébranlable",
    description: `Lorsque vous tombez à 0 point de vie sans mourir sur le coup, vous pouvez rester à 1 point de vie à la place. Vous ne pouvez utiliser ce trait qu’une fois par repos long.`,
  },
  "fiendish-legacy": {
    name: "Héritage fiélon",
    description: dedent(`
      Vous êtes le réceptacle d’un héritage vous conférant des pouvoirs surnaturels.
      Choisissez une lignée parmi la table des héritages fiélons.
      Vous obtenez un sort de niveau 1.
      Aux niveaux 3 et 5, vous apprenez de nouveaux sorts.
      Vous pouvez lancer chacun d’eux une fois sans emplacement de sort, puis à nouveau après un repos long.
      Vous pouvez aussi les lancer avec vos emplacements de sort. Choisissez Intelligence, Sagesse ou Charisme comme caractéristique d’incantation.
    `),
  },
  "otherworldly-presence": {
    name: "Présence d’un autre monde",
    description: `Vous connaissez le tour de magie Thaumaturgie. Lorsque vous le lancez avec ce trait, il utilise la même caractéristique d’incantation que votre héritage fiélon.`,
  },
};

export const subspeciesTranslations = {
  "black-dragonborn": {
    name: "Drakéide noir",
    description: "Descendant des dragons noirs. Souffle & Résistance : Acide.",
  },
  "blue-dragonborn": {
    name: "Drakéide bleu",
    description: "Descendant des dragons bleus. Souffle & Résistance : Foudre.",
  },
  "brass-dragonborn": {
    name: "Drakéide de laiton",
    description:
      "Descendant des dragons de laiton. Souffle & Résistance : Feu.",
  },
  "bronze-dragonborn": {
    name: "Drakéide de bronze",
    description:
      "Descendant des dragons de bronze. Souffle & Résistance : Foudre.",
  },
  "copper-dragonborn": {
    name: "Drakéide de cuivre",
    description:
      "Descendant des dragons de cuivre. Souffle & Résistance : Acide.",
  },
  "gold-dragonborn": {
    name: "Drakéide d’or",
    description: "Descendant des dragons d’or. Souffle & Résistance : Feu.",
  },
  "green-dragonborn": {
    name: "Drakéide vert",
    description: "Descendant des dragons verts. Souffle & Résistance : Poison.",
  },
  "red-dragonborn": {
    name: "Drakéide rouge",
    description: "Descendant des dragons rouges. Souffle & Résistance : Feu.",
  },
  "silver-dragonborn": {
    name: "Drakéide d’argent",
    description:
      "Descendant des dragons d’argent. Souffle & Résistance : Froid.",
  },
  "white-dragonborn": {
    name: "Drakéide blanc",
    description: "Descendant des dragons blancs. Souffle & Résistance : Froid.",
  },

  // ELF VARIANTS
  drow: {
    name: "Elfe noir",
    description:
      "Les drows vivent généralement dans l’Outreterre et ont été transformés par elle. Certains drows évitent ce lieu tout en portant sa magie. Dans le monde d’Eberron, par exemple, ils vivent dans des jungles et ruines cyclopéennes du continent de Xen’drik.",
  },
  "high-elf": {
    name: "Haut elfe",
    description:
      "Les hauts elfes sont imprégnés de la magie entre le Feywild et le Plan Matériel. Ils portent divers noms selon les mondes : elfes du soleil ou de la lune dans les Royaumes Oubliés, Silvanesti et Qualinesti dans Dragonlance, Aereni dans Eberron.",
  },
  "wood-elf": {
    name: "Elfe des bois",
    description:
      "Les elfes des bois portent la magie des forêts primordiales. On les appelle aussi elfes sauvages, verts ou forestiers. Les Grugach sont des elfes des bois solitaires de Greyhawk, les Kagonesti et Tairnadal sont respectivement de Dragonlance et Eberron.",
  },

  // GNOME VARIANTS
  "forest-gnome": {
    name: "Gnome des forêts",
    description: "Vous connaissez le tour de magie Illusion mineure.",
  },
  "rock-gnome": {
    name: "Gnome des rochers",
    description:
      "Vous connaissez les tours de magie Réparation et Prestidigitation. En plus, vous pouvez passer 10 minutes à lancer Prestidigitation pour créer un petit appareil mécanique (CA 5, 1 PV), tel qu’un jouet, un allume-feu ou une boîte à musique. Il produit un effet lorsqu’il est activé par une action bonus. Vous choisissez l’effet à la création. Vous pouvez en avoir 3 au maximum, chacun durant 8 heures ou jusqu’à démantèlement.",
  },

  // GOLIATH (GIANT ANCESTRIES)
  "cloud-giant-goliath": {
    name: "Géant des nuages",
    description:
      "Bond des nuages : En action bonus, vous vous téléportez magiquement jusqu’à 9 mètres dans un espace inoccupé que vous voyez.",
  },
  "fire-giant-goliath": {
    name: "Géant du feu",
    description:
      "Brûlure du feu : Quand vous touchez une cible avec une attaque, vous pouvez lui infliger 1d10 dégâts de feu supplémentaires.",
  },
  "frost-giant-goliath": {
    name: "Géant du givre",
    description:
      "Frisson du givre : Quand vous touchez une cible avec une attaque, vous pouvez lui infliger 1d6 dégâts de froid et réduire sa vitesse de 3 mètres jusqu’à votre prochain tour.",
  },
  "hill-giant-goliath": {
    name: "Géant des collines",
    description:
      "Chute des collines : Quand vous touchez une créature de taille Grande ou moins avec une attaque, vous pouvez la faire tomber à terre (état : à terre).",
  },
  "stone-giant-goliath": {
    name: "Géant de pierre",
    description:
      "Endurance de pierre : Quand vous subissez des dégâts, vous pouvez utiliser une réaction pour lancer 1d12, ajouter votre modificateur de Constitution, et réduire les dégâts de ce total.",
  },
  "storm-giant-goliath": {
    name: "Géant des tempêtes",
    description:
      "Tonnerre de la tempête : Quand une créature dans un rayon de 18 mètres vous inflige des dégâts, vous pouvez utiliser une réaction pour lui infliger 1d8 dégâts de tonnerre.",
  },

  // HALFLING VARIANTS
  "strongheart-halfling": {
    name: "Halfelin cœur-vaillant",
    description:
      "Les halfelins qui vivent sous terre sont parfois appelés cœurs-vaillants ou robustes.",
  },
  "lightfoot-halfling": {
    name: "Halfelin pied-léger",
    description:
      "Les halfelins nomades ou vivant parmi les humains sont parfois appelés pieds-légers ou grands compagnons.",
  },

  // TIEFLING LEGACIES
  "abyssal-tiefling": {
    name: "Tieffelin abyssal",
    description:
      "L’entropie de l’Abysse, le chaos du Pandémonium et le désespoir de Carcéri appellent les tieffelins à l’héritage abyssal. Cornes, fourrure, défenses et odeurs étranges sont fréquents chez eux, qui portent souvent le sang des démons.",
  },
  "chthonic-tiefling": {
    name: "Tieffelin chtonien",
    description:
      "Les tieffelins à l’héritage chtonien ressentent l’appel de Carcéri, la cupidité de Géhenne et la morosité des Enfers gris. Certains ont une allure cadavérique, d’autres la beauté étrange d’une succube, ou des traits rappelant une sorcière nocturne ou un yugoloth.",
  },
  "infernal-tiefling": {
    name: "Tieffelin infernal",
    description:
      "L’héritage infernal lie les tieffelins aux Neuf Enfers, à Géhenne et aux champs de bataille d’Achéron. Cornes, épines, queue, yeux dorés et une légère odeur de soufre ou de fumée sont fréquents chez ceux qui descendent des diables.",
  },
};
