import dedent from "ts-dedent";
import z from "zod";
import { SYSTEM_ID_DD5E } from "./constants";

const featsSchema = z.object({
  slug: z.string().min(1),
  defaultName: z.string().min(1),
  defaultDescription: z.string().min(1),
  systemId: z.number(),
  isOrigin: z.boolean().default(false),
  isEpicBoon: z.boolean().default(false),
  isWeaponFighting: z.boolean().default(false),
  minLevel: z.number().min(1).max(20).default(1),
  isGrantingAbilityScore: z.boolean().default(false),
  isGrantingSkill: z.boolean().default(false),
  isGrantingTool: z.boolean().default(false),
  isGrantingSpell: z.boolean().default(false),
  isRepeatable: z.boolean().default(false),
  requiredAbilityScoreId: z.number().nullable().default(null).optional(),
  minAbilityScore: z.number().nullable().default(null).optional(),
});

type FeatsInsert = z.infer<typeof featsSchema>;

export const feats: FeatsInsert[] = [
  {
    slug: "alert",
    defaultName: "Alert",
    defaultDescription: dedent(`
      You gain the following benefits.
      **Initiative Proficiency.** When you roll Initiative, you can add your Proficiency Bonus to the roll.
      **Initiative Swap.** Immediately after you roll Initiative, you can swap your Initiative with the Initiative of one willing ally in the same combat. You can't make this swap if you or the ally has the Incapacitated condition.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: true,
    minLevel: 1,
    isEpicBoon: false,
    isWeaponFighting: false,
    isGrantingAbilityScore: false,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
  },
  {
    slug: "crafter",
    defaultName: "Crafter",
    defaultDescription: dedent(`
      You gain the following benefits.
      **Tool Proficiency.** You gain proficiency with three different Artisan's Tools of your choice from the Fast Crafting table.
      **Discount.** Whenever you buy a nonmagical item, you receive a 20 percent discount on it.
      **Fast Crafting.** When you finish a Long Rest, you can craft one piece of gear from the Fast Crafting table, provided you have the Artisan's Tools associated with that item and have proficiency with those tools. The item lasts until you finish another Long Rest, at which point the item falls apart.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: true,
    minLevel: 1,
    isEpicBoon: false,
    isWeaponFighting: false,
    isGrantingAbilityScore: false,
    isGrantingSkill: false,
    isGrantingTool: true,
    isGrantingSpell: false,
    isRepeatable: false,
  },
  {
    slug: "healer",
    defaultName: "Healer",
    defaultDescription: dedent(`
      You gain the following benefits.
      **Battle Medic.** If you have a Healer’s Kit, you can expend one use of it and tend to a creature within 5 feet of yourself as a Use action. That creature can expend one of its Hit Dice, and you then roll that die. The creature regains a number of Hit Points equal to the roll plus your Proficiency Bonus.
      **Healing Rerolls.** Whenever you roll a die to determine the number of Hit Points you restore with a spell or with this feat’s Battle Medic benefit, you can reroll the die if it rolls a 1, and you must use the new roll.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: true,
    minLevel: 1,
    isEpicBoon: false,
    isWeaponFighting: false,
    isGrantingAbilityScore: false,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
  },
  {
    slug: "lucky",
    defaultName: "Lucky",
    defaultDescription: dedent(`
      You gain the following benefits.
      **Luck Points.** You have a number of Luck Points equal to your Proficiency Bonus and can spend the points on the benefits below. You regain your expended Luck Points when you finish a Long Rest.
      **Advantage.** When you roll a d20 for a D20 Test, you can spend 1 Luck Point to give yourself Advantage on the roll.
      **Disadvantage.** When a creature rolls a d20 for an attack roll against you, you can spend 1 Luck Point to impose Disadvantage on that roll.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: true,
    minLevel: 1,
    isEpicBoon: false,
    isWeaponFighting: false,
    isGrantingAbilityScore: false,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
  },
  {
    slug: "magic-initiate",
    defaultName: "Magic Initiate",
    defaultDescription: dedent(`
      You gain the following benefits.
      **Two Cantrips.** You learn two cantrips of your choice from the Cleric, Druid, or Wizard spell list.
      **Intelligence, Wisdom, or Charisma** is your spellcasting ability for this feat’s spells (choose when you select this feat).
      **Level 1 Spell.** Choose a level 1 spell from the same list you selected for this feat’s cantrips. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have.
      **Spell Change.** Whenever you gain a new level, you can replace one of the spells you chose for this feat with a different spell of the same level from the chosen spell list.
      **Repeatable.** You can take this feat more than once, but you must choose a different spell list each time.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: true,
    minLevel: 1,
    isEpicBoon: false,
    isWeaponFighting: false,
    isGrantingAbilityScore: false,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: true,
    isRepeatable: true,
  },
  {
    slug: "musician",
    defaultName: "Musician",
    defaultDescription: dedent(`
      You gain the following benefits.
      **Instrument Training.** You gain proficiency with three Musical Instruments of your choice.
      **Encouraging Song.** As you finish a Short or Long Rest, you can play a song on a Musical Instrument with which you have proficiency and give Heroic Inspiration to allies who hear the song. The number of allies you can affect in this way equals your Proficiency Bonus.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: true,
    minLevel: 1,
    isEpicBoon: false,
    isWeaponFighting: false,
    isGrantingAbilityScore: false,
    isGrantingSkill: false,
    isGrantingTool: true,
    isGrantingSpell: false,
    isRepeatable: false,
  },
  {
    slug: "savage-attacker",
    defaultName: "Savage Attacker",
    defaultDescription: dedent(`
      You’ve trained to deal particularly damaging strikes. Once per turn when you hit a target with a weapon, you can roll the weapon’s damage dice twice and use either roll against the target.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: true,
    minLevel: 1,
    isEpicBoon: false,
    isWeaponFighting: true,
    isGrantingAbilityScore: false,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
  },
  {
    slug: "skilled",
    defaultName: "Skilled",
    defaultDescription: dedent(`
      You gain proficiency in any combination of three skills or tools of your choice.
      **Repeatable.** You can take this feat more than once.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: true,
    minLevel: 1,
    isEpicBoon: false,
    isWeaponFighting: false,
    isGrantingAbilityScore: false,
    isGrantingSkill: true,
    isGrantingTool: true,
    isGrantingSpell: false,
    isRepeatable: true,
  },
  {
    slug: "tavern-brawler",
    defaultName: "Tavern Brawler",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Enhanced Unarmed Strike.** When you hit with your Unarmed Strike and deal damage, you can deal Bludgeoning damage equal to 1d4 plus your Strength modifier instead of the normal damage of an Unarmed Strike.
  **Damage Rerolls.** Whenever you roll a damage die for your Unarmed Strike, you can reroll the die if it rolls a 1, and you must use the new roll.
  **Improvised Weapons.** You have proficiency with improvised weapons.
  **Push.** When you hit a creature with an Unarmed Strike as part of the Attack action on your turn, you can deal damage to the target and also push it 5 feet away from you. You can use this benefit only once per turn.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: true,
    minLevel: 1,
    isEpicBoon: false,
    isWeaponFighting: false,
    isGrantingAbilityScore: false,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
  },
  {
    slug: "tough",
    defaultName: "Tough",
    defaultDescription: dedent(`
  Your Hit Point maximum increases by an amount equal to twice your character level when you gain this feat. Whenever you gain a character level thereafter, your Hit Point maximum increases by an additional 2 Hit Points.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: true,
    minLevel: 1,
    isEpicBoon: false,
    isWeaponFighting: false,
    isGrantingAbilityScore: false,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
  },
  {
    slug: "ability-score-improvement",
    defaultName: "Ability Score Improvement",
    defaultDescription: dedent(`
  Increase one ability score of your choice by 2, or increase two ability scores of your choice by 1. This feat can't increase an ability score above 20.
  **Repeatable.** You can take this feat more than once.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
    minLevel: 4,
    isEpicBoon: false,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: true,
  },
  {
    slug: "actor",
    defaultName: "Actor",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Charisma score by 1, to a maximum of 20.
  **Impersonation.** While you’re disguised as a real or fictional person, you have Advantage on Charisma (Deception or Performance) checks to convince others that you are that person.
  **Mimicry.** You can mimic the sounds of other creatures, including speech. A creature that hears the mimicry must succeed on a Wisdom (Insight) check to determine the effect is faked (DC 8 plus your Charisma modifier and Proficiency Bonus).
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
    minLevel: 1,
    isEpicBoon: false,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
  },
  {
    slug: "athlete",
    defaultName: "Athlete",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Strength or Dexterity score by 1, to a maximum of 20.
  **Climb Speed.** You gain a Climb Speed equal to your Speed.
  **Hop Up.** When you have the Prone condition, you can right yourself with only 5 feet of movement.
  **Jumping.** You can make a running Long or High Jump after moving only 5 feet.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
    minLevel: 4,
    isEpicBoon: false,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
  },
  {
    slug: "charger",
    defaultName: "Charger",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Strength or Dexterity score by 1, to a maximum of 20.
  **Improved Dash.** When you take the Dash action, your Speed increases by 10 feet for that action.
  **Charge Attack.** If you move at least 10 feet in a straight line toward a target immediately before hitting it with a melee attack roll as part of the Attack action, choose one of the following effects: gain a 1d8 bonus to the attack’s damage roll, or push the target up to 10 feet away if it is no more than one size larger than you. You can use this benefit only once on each of your turns.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
    minLevel: 1,
    isEpicBoon: false,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
  },
  {
    slug: "chef",
    defaultName: "Chef",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Constitution or Wisdom score by 1, to a maximum of 20.
  **Cook’s Utensils.** You gain proficiency with Cook’s Utensils if you don’t already have it.
  **Replenishing Meal.** As part of a Short Rest, you can cook special food if you have ingredients and Cook’s Utensils on hand. You can prepare enough of this food for a number of creatures equal to 4 plus your Proficiency Bonus. At the end of the Short Rest, any creature who eats the food and spends one or more Hit Dice to regain Hit Points regains an extra 1d8 Hit Points.
  **Bolstering Treats.** With 1 hour of work or when you finish a Long Rest, you can cook a number of treats equal to your Proficiency Bonus if you have ingredients and Cook’s Utensils on hand. These special treats last 8 hours after being made. A creature can use a Bonus Action to eat one of those treats to gain a number of Temporary Hit Points equal to your Proficiency Bonus.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
    minLevel: 4,
    isEpicBoon: false,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
  },
  {
    slug: "crossbow-expert",
    defaultName: "Crossbow Expert",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Dexterity score by 1, to a maximum of 20.
  **Ignore Loading.** You ignore the Loading property of the Hand Crossbow, Heavy Crossbow, and Light Crossbow (all called crossbows elsewhere in this feat). If you’re holding one of them, you can load a piece of ammunition into it even if you lack a free hand.
  **Firing in Melee.** Being within 5 feet of an enemy doesn’t impose Disadvantage on your attack rolls with crossbows.
  **Dual Wielding.** When you make the extra attack of the Light property, you can add your ability modifier to the damage of the extra attack if that attack is with a crossbow that has the Light property and you aren’t already adding that modifier to the damage.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "crusher",
    defaultName: "Crusher",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Strength or Constitution score by 1, to a maximum of 20.
  **Push.** Once per turn, when you hit a creature with an attack that deals Bludgeoning damage, you can move it 5 feet to an unoccupied space if the target is no more than one size larger than you.
  **Enhanced Critical.** When you score a Critical Hit that deals Bludgeoning damage to a creature, attack rolls against that creature have Advantage until the start of your next turn.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "defensive-duelist",
    defaultName: "Defensive Duelist",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Dexterity score by 1, to a maximum of 20.
  **Parry.** If you’re holding a Finesse weapon and another creature hits you with a melee attack, you can take a Reaction to add your Proficiency Bonus to your Armor Class, potentially causing the attack to miss you. You gain this bonus to your AC against melee attacks until the start of your next turn.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "dual-wielder",
    defaultName: "Dual Wielder",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Strength or Dexterity score by 1, to a maximum of 20.
  **Enhanced Dual Wielding.** When you take the Attack action on your turn and attack with a weapon that has the Light property, you can make one extra attack as a Bonus Action later on the same turn with a different weapon, which must be a Melee weapon that lacks the Two-Handed property. You don’t add your ability modifier to the extra attack’s damage unless that modifier is negative.
  **Quick Draw.** You can draw or stow two weapons that lack the Two-Handed property when you would normally be able to draw or stow only one.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "durable",
    defaultName: "Durable",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Constitution score by 1, to a maximum of 20.
  **Defy Death.** You have Advantage on Death Saving Throws.
  **Speedy Recovery.** As a Bonus Action, you can expend one of your Hit Point Dice, roll the die, and regain a number of Hit Points equal to the roll.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "elemental-adept",
    defaultName: "Elemental Adept",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.
  **Energy Mastery.** Choose one of the following damage types: Acid, Cold, Fire, Lightning, or Thunder. Spells you cast ignore Resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2.
  **Repeatable.** You can take this feat more than once, but you must choose a different damage type each time for Energy Mastery.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "fey-touched",
    defaultName: "Fey-Touched",
    defaultDescription: dedent(`
  Your exposure to the Feywild’s magic grants you the following benefits.
  **Ability Score Increase.** Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.
  **Fey Magic.** Choose one level 1 spell from the Divination or Enchantment school of magic. You always have that spell and the Misty Step spell prepared. You can cast each of these spells without expending a spell slot. Once you cast either spell in this way, you can’t cast that spell in this way again until you finish a Long Rest. You can also cast these spells using spell slots you have of the appropriate level. The spells’ spellcasting ability is the ability increased by this feat.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "grappler",
    defaultName: "Grappler",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Strength or Dexterity score by 1, to a maximum of 20.
  **Punch and Grab.** When you hit a creature with an Unarmed Strike as part of the Attack action on your turn, you can use both the Damage and the Grapple option. You can use this benefit only once per turn.
  **Attack Advantage.** You have Advantage on attack rolls against a creature Grappled by you.
  **Fast Wrestler.** Your Speed isn’t halved when you move a creature Grappled by you if the creature is your size or smaller.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "great-weapon-master",
    defaultName: "Great Weapon Master",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Strength score by 1, to a maximum of 20.
  **Heavy Weapon Mastery.** When you hit a creature with a weapon that has the Heavy property as part of the Attack action on your turn, you can cause the weapon to deal extra damage to the target. The extra damage equals your Proficiency Bonus.
  **Hew.** Immediately after you score a Critical Hit with a Melee weapon or reduce a creature to 0 Hit Points with one, you can make one attack with the same weapon as a Bonus Action.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "heavily-armored",
    defaultName: "Heavily Armored",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Constitution or Strength score by 1, to a maximum of 20.
  **Armor Training.** You gain training with Heavy Armor.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "heavy-armor-master",
    defaultName: "Heavy Armor Master",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Constitution or Strength score by 1, to a maximum of 20.
  **Damage Reduction.** When you’re hit by an attack while you’re wearing Heavy Armor, any Bludgeoning, Piercing, and Slashing damage dealt to you by that attack is reduced by an amount equal to your Proficiency Bonus.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "inspiring-leader",
    defaultName: "Inspiring Leader",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Wisdom or Charisma score by 1, to a maximum of 20.
  **Bolstering Performance.** When you finish a Short or Long Rest, you can give an inspiring performance: a speech, song, or dance. When you do so, choose up to six allies (which can include yourself) within 30 feet of yourself who witness the performance. The chosen creatures each gain Temporary Hit Points equal to your character level plus the modifier of the ability you increased with this feat.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "keen-mind",
    defaultName: "Keen Mind",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Intelligence score by 1, to a maximum of 20.
  **Lore Knowledge.** Choose one of the following skills: Arcana, History, Investigation, Nature, or Religion. If you lack proficiency in the chosen skill, you gain proficiency in it, and if you already have proficiency in it, you gain Expertise in it.
  **Quick Study.** You can take the Study action as a Bonus Action.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "lightly-armored",
    defaultName: "Lightly Armored",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Strength or Dexterity score by 1, to a maximum of 20.
  **Armor Training.** You gain training with Light armor and Shields.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "mage-slayer",
    defaultName: "Mage Slayer",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Strength or Dexterity score by 1, to a maximum of 20.
  **Concentration Breaker.** When you damage a creature that is concentrating, it has Disadvantage on the saving throw it makes to maintain Concentration.
  **Guarded Mind.** If you fail an Intelligence, a Wisdom, or a Charisma saving throw, you can cause yourself to succeed instead. Once you use this benefit, you can’t use it again until you finish a Short or Long Rest.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "martial-weapon-training",
    defaultName: "Martial Weapon Training",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Strength or Dexterity score by 1, to a maximum of 20.
  **Weapon Proficiency.** You gain proficiency with Martial weapons.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "medium-armor-master",
    defaultName: "Medium Armor Master",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Strength or Dexterity score by 1, to a maximum of 20.
  **Dexterous Wearer.** While you’re wearing Medium armor, you can add 3, rather than 2, to your AC if you have a Dexterity score of 16 or higher.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "moderately-armored",
    defaultName: "Moderately Armored",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Strength or Dexterity score by 1, to a maximum of 20.
  **Armor Training.** You gain training with Medium armor.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "mounted-combatant",
    defaultName: "Mounted Combatant",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Strength, Dexterity, or Wisdom score by 1, to a maximum of 20.
  **Mounted Strike.** While mounted, you have Advantage on attack rolls against any unmounted creature within 5 feet of your mount that is at least one size smaller than the mount.
  **Leap Aside.** If your mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw and only half damage if it fails. For your mount to gain this benefit, you must be riding it, and neither of you can have the Incapacitated condition.
  **Veer.** While mounted, you can force an attack that hits your mount to hit you instead if you don’t have the Incapacitated condition.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "observant",
    defaultName: "Observant",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Intelligence or Wisdom score by 1, to a maximum of 20.
  **Keen Observer.** Choose one of the following skills: Insight, Investigation, or Perception. If you lack proficiency with the chosen skill, you gain proficiency in it, and if you already have proficiency in it, you gain Expertise in it.
  **Quick Search.** You can take the Search action as a Bonus Action.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "piercer",
    defaultName: "Piercer",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Strength or Dexterity by 1, to a maximum of 20.
  **Puncture.** Once per turn, when you hit a creature with an attack that deals Piercing damage, you can reroll one of the attack’s damage dice, and you must use the new roll.
  **Enhanced Critical.** When you score a Critical Hit that deals Piercing damage to a creature, you can roll one additional damage die when determining the extra Piercing damage the target takes.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "poisoner",
    defaultName: "Poisoner",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Dexterity or Intelligence score by 1, to a maximum of 20.
  **Potent Poison.** When you make a damage roll that deals Poison damage, it ignores Resistance to Poison damage.
  **Brew Poison.** You gain proficiency with the Poisoner’s Kit. With 1 hour of work using such a kit and expending 50 GP worth of materials, you can create a number of poison doses equal to your Proficiency Bonus. As a Bonus Action, you can apply a poison dose to a weapon or piece of ammunition. Once applied, the poison retains its potency for 1 minute or until you hit with the poisoned item, whichever is shorter. When a creature takes damage from the poisoned item, that creature must succeed on a Constitution saving throw (DC 8 plus the modifier of the ability increased by this feat and your Proficiency Bonus) or take 2d8 Poison damage and have the Poisoned condition until the end of your next turn.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "polearm-master",
    defaultName: "Polearm Master",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Dexterity or Strength score by 1, to a maximum of 20.
  **Pole Strike.** Immediately after you take the Attack action and attack with a Quarterstaff, a Spear, or a weapon that has the Heavy and Reach properties, you can use a Bonus Action to make a melee attack with the opposite end of the weapon. The weapon deals Bludgeoning damage, and the weapon’s damage die for this attack is a d4.
  **Reactive Strike.** While you’re holding a Quarterstaff, a Spear, or a weapon that has the Heavy and Reach properties, you can take a Reaction to make one melee attack against a creature that enters the reach you have with that weapon.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "resilient",
    defaultName: "Resilient",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Choose one ability in which you lack saving throw proficiency. Increase the chosen ability score by 1, to a maximum of 20.
  **Saving Throw Proficiency.** You gain saving throw proficiency with the chosen ability.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "ritual-caster",
    defaultName: "Ritual Caster",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.
  **Ritual Spells.** Choose a number of level 1 spells equal to your Proficiency Bonus that have the Ritual tag. You always have those spells prepared, and you can cast them with any spell slots you have.
  **Quick Ritual.** With this benefit, you can cast a Ritual spell that you have prepared using its regular casting time rather than the extended time for a Ritual. Doing so doesn’t require a spell slot. Once you cast the spell in this way, you can’t use this benefit again until you finish a Long Rest.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "sentinel",
    defaultName: "Sentinel",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Strength or Dexterity score by 1, to a maximum of 20.
  **Guardian.** Immediately after a creature within 5 feet of you takes the Disengage action or hits a target other than you with an attack, you can make an Opportunity Attack against that creature.
  **Halt.** When you hit a creature with an Opportunity Attack, the creature’s Speed becomes 0 for the rest of the current turn.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "shadow-touched",
    defaultName: "Shadow-Touched",
    defaultDescription: dedent(`
  Your exposure to the Shadowfell’s magic grants you the following benefits.
  **Ability Score Increase.** Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.
  **Shadow Magic.** Choose one level 1 spell from the Illusion or Necromancy school of magic. You always have that spell and the Invisibility spell prepared. You can cast each of these spells without expending a spell slot. Once you cast either spell in this way, you can’t cast that spell in this way again until you finish a Long Rest. You can also cast these spells using spell slots you have of the appropriate level. The spells’ spellcasting ability is the ability increased by this feat.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "sharpshooter",
    defaultName: "Sharpshooter",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Dexterity score by 1, to a maximum of 20.
  **Bypass Cover.** Your ranged attacks with weapons ignore Half Cover and Three-Quarters Cover.
  **Firing in Melee.** Being within 5 feet of an enemy doesn’t impose Disadvantage on your attack rolls with Ranged weapons.
  **Long Shots.** Attacking at long range doesn’t impose Disadvantage on your attack rolls with Ranged weapons.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "shield-master",
    defaultName: "Shield Master",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Strength score by 1, to a maximum of 20.
  **Shield Bash.** If you attack a creature within 5 feet of you as part of the Attack action and hit with a Melee weapon, you can immediately bash the target with your Shield if it’s equipped, forcing the target to make a Strength saving throw (DC 8 plus your Strength modifier and Proficiency Bonus). On a failed save, you either push the target 5 feet from you or cause it to have the Prone condition (your choice). You can use this benefit only once on each of your turns.
  **Interpose Shield.** If you’re subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you can take a Reaction to take no damage if you succeed on the saving throw and are holding a Shield.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "skill-expert",
    defaultName: "Skill Expert",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase one ability score of your choice by 1, to a maximum of 20.
  **Skill Proficiency.** You gain proficiency in one skill of your choice.
  **Expertise.** Choose one skill in which you have proficiency but lack Expertise. You gain Expertise with that skill.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "skulker",
    defaultName: "Skulker",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Dexterity score by 1, to a maximum of 20.
  **Blindsight.** You have Blindsight with a range of 10 feet.
  **Fog of War.** You exploit the distractions of battle, gaining Advantage on any Dexterity (Stealth) check you make as part of the Hide action during combat.
  **Sniper.** If you make an attack roll while hidden and the roll misses, making the attack roll doesn’t reveal your location.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "slasher",
    defaultName: "Slasher",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Strength or Dexterity score by 1, to a maximum of 20.
  **Hamstring.** Once per turn when you hit a creature with an attack that deals Slashing damage, you can reduce the Speed of that creature by 10 feet until the start of your next turn.
  **Enhanced Critical.** When you score a Critical Hit that deals Slashing damage to a creature, it has Disadvantage on attack rolls until the start of your next turn.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "speedy",
    defaultName: "Speedy",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Dexterity or Constitution score by 1, to a maximum of 20.
  **Speed Increase.** Your Speed increases by 10 feet.
  **Dash over Difficult Terrain.** When you take the Dash action on your turn, Difficult Terrain doesn’t cost you extra movement for the rest of that turn.
  **Agile Movement.** Opportunity Attacks have Disadvantage against you.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "spell-sniper",
    defaultName: "Spell Sniper",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.
  **Bypass Cover.** Your attack rolls for spells ignore Half Cover and Three-Quarters Cover.
  **Casting in Melee.** Being within 5 feet of an enemy doesn’t impose Disadvantage on your attack rolls with spells.
  **Increased Range.** When you cast a spell that has a range of at least 10 feet and requires you to make an attack roll, you can increase the spell’s range by 60 feet.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "telekinetic",
    defaultName: "Telekinetic",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.
  **Minor Telekinesis.** You learn the Mage Hand spell. You can cast it without Verbal or Somatic components, you can make the spectral hand Invisible, and its range increases by 30 feet when you cast it. The spell’s spellcasting ability is the ability increased by this feat.
  **Telekinetic Shove.** As a Bonus Action, you can telekinetically shove one creature you can see within 30 feet of yourself. When you do so, the target must succeed on a Strength saving throw (DC 8 plus the ability modifier of the score increased by this feat and your Proficiency Bonus) or be moved 5 feet toward or away from you.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
  {
    slug: "telepathic",
    defaultName: "Telepathic",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.
  **Telepathic Utterance.** You can speak telepathically to any creature you can see within 60 feet of yourself. Your telepathic utterances are in a language you know, and the creature understands you only if it knows that language. Your communication doesn’t give the creature the ability to respond to you telepathically.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
  },
];
