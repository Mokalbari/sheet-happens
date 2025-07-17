import dedent from "ts-dedent";
import z from "zod";
import { SYSTEM_ID_DD5E } from "../constants";

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
    slug: "defensive-duelist",
    defaultName: "Defensive Duelist",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Dexterity score by 1, to a maximum of 20.
  **Parry.** If you’re holding a Finesse weapon and another creature hits you with a melee attack, you can take a Reaction to add your Proficiency Bonus to your Armor Class, potentially causing the attack to miss you. You gain this bonus to your AC against melee attacks until the start of your next turn.
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
    slug: "fey-touched",
    defaultName: "Fey-Touched",
    defaultDescription: dedent(`
  Your exposure to the Feywild’s magic grants you the following benefits.
  **Ability Score Increase.** Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.
  **Fey Magic.** Choose one level 1 spell from the Divination or Enchantment school of magic. You always have that spell and the Misty Step spell prepared. You can cast each of these spells without expending a spell slot. Once you cast either spell in this way, you can’t cast that spell in this way again until you finish a Long Rest. You can also cast these spells using spell slots you have of the appropriate level. The spells’ spellcasting ability is the ability increased by this feat.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
    minLevel: 4,
    isEpicBoon: false,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: true,
    isRepeatable: false,
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
    slug: "heavily-armored",
    defaultName: "Heavily Armored",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Constitution or Strength score by 1, to a maximum of 20.
  **Armor Training.** You gain training with Heavy Armor.
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
    slug: "heavy-armor-master",
    defaultName: "Heavy Armor Master",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Constitution or Strength score by 1, to a maximum of 20.
  **Damage Reduction.** When you’re hit by an attack while you’re wearing Heavy Armor, any Bludgeoning, Piercing, and Slashing damage dealt to you by that attack is reduced by an amount equal to your Proficiency Bonus.
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
    slug: "inspiring-leader",
    defaultName: "Inspiring Leader",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Wisdom or Charisma score by 1, to a maximum of 20.
  **Bolstering Performance.** When you finish a Short or Long Rest, you can give an inspiring performance: a speech, song, or dance. When you do so, choose up to six allies (which can include yourself) within 30 feet of yourself who witness the performance. The chosen creatures each gain Temporary Hit Points equal to your character level plus the modifier of the ability you increased with this feat.
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
    minLevel: 4,
    isEpicBoon: false,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: true,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
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
    slug: "martial-weapon-training",
    defaultName: "Martial Weapon Training",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Strength or Dexterity score by 1, to a maximum of 20.
  **Weapon Proficiency.** You gain proficiency with Martial weapons.
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
    slug: "medium-armor-master",
    defaultName: "Medium Armor Master",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Strength or Dexterity score by 1, to a maximum of 20.
  **Dexterous Wearer.** While you’re wearing Medium armor, you can add 3, rather than 2, to your AC if you have a Dexterity score of 16 or higher.
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
    slug: "moderately-armored",
    defaultName: "Moderately Armored",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Strength or Dexterity score by 1, to a maximum of 20.
  **Armor Training.** You gain training with Medium armor.
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
    minLevel: 4,
    isEpicBoon: false,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: true,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
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
    slug: "resilient",
    defaultName: "Resilient",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Choose one ability in which you lack saving throw proficiency. Increase the chosen ability score by 1, to a maximum of 20.
  **Saving Throw Proficiency.** You gain saving throw proficiency with the chosen ability.
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
    minLevel: 4,
    isEpicBoon: false,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: true,
    isRepeatable: false,
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
    slug: "shadow-touched",
    defaultName: "Shadow-Touched",
    defaultDescription: dedent(`
  Your exposure to the Shadowfell’s magic grants you the following benefits.
  **Ability Score Increase.** Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.
  **Shadow Magic.** Choose one level 1 spell from the Illusion or Necromancy school of magic. You always have that spell and the Invisibility spell prepared. You can cast each of these spells without expending a spell slot. Once you cast either spell in this way, you can’t cast that spell in this way again until you finish a Long Rest. You can also cast these spells using spell slots you have of the appropriate level. The spells’ spellcasting ability is the ability increased by this feat.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
    minLevel: 4,
    isEpicBoon: false,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: true,
    isRepeatable: false,
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
    minLevel: 4,
    isEpicBoon: false,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: true,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
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
    minLevel: 4,
    isEpicBoon: false,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: true,
    isRepeatable: false,
  },
  {
    slug: "telepathic",
    defaultName: "Telepathic",
    defaultDescription: dedent(`
  You gain the following benefits.
  **Ability Score Increase.** Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.
  **Telepathic Utterance.** You can speak telepathically to any creature you can see within 60 feet of yourself. Your telepathic utterances are in a language you know, and the creature understands you only if it knows that language. Your communication doesn’t give the creature the ability to respond to you telepathically.
  **Detect Thoughts.** You always have the Detect Thoughts spell prepared. You can cast it without a spell slot or spell components, and you must finish a Long Rest before you can cast it in this way again. You can also cast it using spell slots you have of the appropriate level. Your spellcasting ability for the spell is the ability increased by this feat.
  `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
    minLevel: 4,
    isEpicBoon: false,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: true,
    isRepeatable: false,
  },
  {
    slug: "war-caster",
    defaultName: "War Caster",
    defaultDescription: dedent(`
      You gain the following benefits.
      **Ability Score Increase.** Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.
      **Concentration.** You have Advantage on Constitution saving throws that you make to maintain Concentration.
      **Reactive Spell.** When a creature provokes an Opportunity Attack from you by leaving your reach, you can take a Reaction to cast a spell at the creature rather than making an Opportunity Attack. The spell must have a casting time of one action and must target only that creature.
      **Somatic Components.** You can perform the Somatic components of spells even when you have weapons or a Shield in one or both hands.
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
    slug: "weapon-master",
    defaultName: "Weapon Master",
    defaultDescription: dedent(`
      You gain the following benefits.
      **Ability Score Increase.** Increase your Strength or Dexterity score by 1, to a maximum of 20.
      **Mastery Property.** Your training with weapons allows you to use the mastery property of one kind of Simple or Martial weapon of your choice, provided you have proficiency with it. Whenever you finish a Long Rest, you can change the kind of weapon to another eligible kind.
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
    slug: "archery",
    defaultName: "Archery",
    defaultDescription: dedent(`
      You gain a +2 bonus to attack rolls you make with Ranged weapons.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
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
    slug: "blind-fighting",
    defaultName: "Blind Fighting",
    defaultDescription: dedent(`
      You have Blindsight with a range of 10 feet.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
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
    slug: "defense",
    defaultName: "Defense",
    defaultDescription: dedent(`
      While you’re wearing Light, Medium, or Heavy armor, you gain a +1 bonus to Armor Class.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
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
    slug: "dueling",
    defaultName: "Dueling",
    defaultDescription: dedent(`
      When you’re holding a Melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
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
    slug: "great-weapon-fighting",
    defaultName: "Great Weapon Fighting",
    defaultDescription: dedent(`
      When you roll damage for an attack you make with a Melee weapon that you are holding with two hands, you can treat any 1 or 2 on a damage die as a 3. The weapon must have the Two-Handed or Versatile property to gain this benefit.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
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
    slug: "interception",
    defaultName: "Interception",
    defaultDescription: dedent(`
      When a creature you can see hits another creature within 5 feet of you with an attack roll, you can take a Reaction to reduce the damage dealt to the target by 1d10 plus your Proficiency Bonus. You must be holding a Shield or a Simple or Martial weapon to use this Reaction.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
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
    slug: "protection",
    defaultName: "Protection",
    defaultDescription: dedent(`
      When a creature you can see attacks a target other than you that is within 5 feet of you, you can take a Reaction to interpose your Shield if you’re holding one. You impose Disadvantage on the triggering attack roll and all other attack rolls against the target until the start of your next turn if you remain within 5 feet of the target.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
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
    slug: "thrown-weapon-fighting",
    defaultName: "Thrown Weapon Fighting",
    defaultDescription: dedent(`
      When you hit with a ranged attack roll using a weapon that has the Thrown property, you gain a +2 bonus to the damage roll.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
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
    slug: "two-weapon-fighting",
    defaultName: "Two-Weapon Fighting",
    defaultDescription: dedent(`
      When you make an extra attack as a result of using a weapon that has the Light property, you can add your ability modifier to the damage of that attack if you aren’t already adding it to the damage.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
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
    slug: "unarmed-fighting",
    defaultName: "Unarmed Fighting",
    defaultDescription: dedent(`
      When you hit with your Unarmed Strike and deal damage, you can deal Bludgeoning damage equal to 1d6 plus your Strength modifier instead of the normal damage of an Unarmed Strike. If you aren’t holding any weapons or a Shield when you make the attack roll, the d6 becomes a d8.
      
      At the start of each of your turns, you can deal 1d4 Bludgeoning damage to one creature Grappled by you.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
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
    slug: "boon-of-combat-prowess",
    defaultName: "Boon of Combat Prowess",
    defaultDescription: dedent(`
      You gain the following benefits.
      **Ability Score Increase.** Increase one ability score of your choice by 1, to a maximum of 30.
      **Peerless Aim.** When you miss with an attack roll, you can hit instead. Once you use this benefit, you can’t use it again until the start of your next turn.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
    minLevel: 19,
    isEpicBoon: true,
    isWeaponFighting: true,
    isGrantingAbilityScore: true,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
  },
  {
    slug: "boon-of-dimensional-travel",
    defaultName: "Boon of Dimensional Travel",
    defaultDescription: dedent(`
      You gain the following benefits.
      **Ability Score Increase.** Increase one ability score of your choice by 1, to a maximum of 30.
      **Blink Steps.** Immediately after you take the Attack action or the Magic action, you can teleport up to 30 feet to an unoccupied space you can see.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
    minLevel: 19,
    isEpicBoon: true,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
  },
  {
    slug: "boon-of-energy-resistance",
    defaultName: "Boon of Energy Resistance",
    defaultDescription: dedent(`
      You gain the following benefits.
      **Ability Score Increase.** Increase one ability score of your choice by 1, to a maximum of 30.
      **Energy Resistances.** You gain Resistance to two of the following damage types of your choice: Acid, Cold, Fire, Lightning, Necrotic, Poison, Psychic, Radiant, or Thunder. Whenever you finish a Long Rest, you can change your choices.
      **Energy Redirection.** When you take damage of one of the types chosen for the Energy Resistances benefit, you can take a Reaction to direct damage of the same type toward another creature you can see within 60 feet of yourself that isn’t behind Total Cover. If you do so, that creature must succeed on a Dexterity saving throw (DC 8 plus your Constitution modifier and Proficiency Bonus) or take damage equal to 2d12 plus your Constitution modifier.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
    minLevel: 19,
    isEpicBoon: true,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
  },
  {
    slug: "boon-of-fate",
    defaultName: "Boon of Fate",
    defaultDescription: dedent(`
      You gain the following benefits.
      **Ability Score Increase.** Increase one ability score of your choice by 1, to a maximum of 30.
      **Improve Fate.** When you or another creature within 60 feet of you succeeds on or fails a D20 Test, you can roll 2d4 and apply the total rolled as a bonus or penalty to the d20 roll. Once you use this benefit, you can’t use it again until you roll Initiative or finish a Short or Long Rest.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
    minLevel: 19,
    isEpicBoon: true,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
  },
  {
    slug: "boon-of-fortitude",
    defaultName: "Boon of Fortitude",
    defaultDescription: dedent(`
      You gain the following benefits.
      **Ability Score Increase.** Increase one ability score of your choice by 1, to a maximum of 30.
      **Fortified Health.** Your Hit Point maximum increases by 40. In addition, whenever you regain Hit Points, you can regain additional Hit Points equal to your Constitution modifier. Once you’ve regained these additional Hit Points, you can’t do so again until the start of your next turn.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
    minLevel: 19,
    isEpicBoon: true,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
  },
  {
    slug: "boon-of-irresistible-offense",
    defaultName: "Boon of Irresistible Offense",
    defaultDescription: dedent(`
      You gain the following benefits.
      **Ability Score Increase.** Increase your Strength or Dexterity score by 1, to a maximum of 30.
      **Overcome Defenses.** The Bludgeoning, Piercing, and Slashing damage you deal always ignores Resistance.
      **Overwhelming Strike.** When you roll a 20 on the d20 for an attack roll, you can deal extra damage to the target equal to the ability score increased by this feat. The extra damage’s type is the same as the attack’s type.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
    minLevel: 19,
    isEpicBoon: true,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
  },
  {
    slug: "boon-of-recovery",
    defaultName: "Boon of Recovery",
    defaultDescription: dedent(`
      You gain the following benefits.
      **Ability Score Increase.** Increase one ability score of your choice by 1, to a maximum of 30.
      **Last Stand.** When you would be reduced to 0 Hit Points, you can drop to 1 Hit Point instead and regain a number of Hit Points equal to half your Hit Point maximum. Once you use this benefit, you can’t use it again until you finish a Long Rest.
      **Recover Vitality.** You have a pool of ten d10s. As a Bonus Action, you can expend dice from the pool, roll those dice, and regain a number of Hit Points equal to the roll’s total. You regain all the expended dice when you finish a Long Rest.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
    minLevel: 19,
    isEpicBoon: true,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
  },
  {
    slug: "boon-of-skill",
    defaultName: "Boon of Skill",
    defaultDescription: dedent(`
      You gain the following benefits.
      **Ability Score Increase.** Increase one ability score of your choice by 1, to a maximum of 30.
      **All-Around Adept.** You gain proficiency in all skills.
      **Expertise.** Choose one skill in which you lack Expertise. You gain Expertise in that skill.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
    minLevel: 19,
    isEpicBoon: true,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: true,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
  },
  {
    slug: "boon-of-speed",
    defaultName: "Boon of Speed",
    defaultDescription: dedent(`
      You gain the following benefits.
      **Ability Score Increase.** Increase one ability score of your choice by 1, to a maximum of 30.
      **Escape Artist.** As a Bonus Action, you can take the Disengage action, which also ends the Grappled condition on you.
      **Quickness.** Your Speed increases by 30 feet.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
    minLevel: 19,
    isEpicBoon: true,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
  },
  {
    slug: "boon-of-spell-recall",
    defaultName: "Boon of Spell Recall",
    defaultDescription: dedent(`
      You gain the following benefits.
      **Ability Score Increase.** Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 30.
      **Free Casting.** Whenever you cast a spell with a level 1–4 spell slot, roll 1d4. If the number you roll is the same as the slot’s level, the slot isn’t expended.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
    minLevel: 19,
    isEpicBoon: true,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
  },
  {
    slug: "boon-of-the-night-spirit",
    defaultName: "Boon of the Night Spirit",
    defaultDescription: dedent(`
      You gain the following benefits.
      **Ability Score Increase.** Increase one ability score of your choice by 1, to a maximum of 30.
      **Merge with Shadows.** While within Dim Light or Darkness, you can give yourself the Invisible condition as a Bonus Action. The condition ends on you immediately after you take an action, a Bonus Action, or a Reaction.
      **Shadowy Form.** While within Dim Light or Darkness, you have Resistance to all damage except Psychic and Radiant.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
    minLevel: 19,
    isEpicBoon: true,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
  },
  {
    slug: "boon-of-truesight",
    defaultName: "Boon of Truesight",
    defaultDescription: dedent(`
      You gain the following benefits.
      **Ability Score Increase.** Increase one ability score of your choice by 1, to a maximum of 30.
      **Truesight.** You have Truesight with a range of 60 feet.
    `),
    systemId: SYSTEM_ID_DD5E,
    isOrigin: false,
    minLevel: 19,
    isEpicBoon: true,
    isWeaponFighting: false,
    isGrantingAbilityScore: true,
    isGrantingSkill: false,
    isGrantingTool: false,
    isGrantingSpell: false,
    isRepeatable: false,
  },
];

const featsTranslations = [
  {
    alert: {
      name: "Vigilant",
      description:
        "Vous gagnez les bénéfices suivants.\n**Maîtrise de l’initiative.** Lorsque vous lancez l’initiative, vous pouvez ajouter votre bonus de maîtrise au jet.\n**Échange d’initiative.** Juste après avoir lancé votre initiative, vous pouvez l’échanger avec celle d’un allié consentant dans le même combat. Vous ne pouvez pas effectuer cet échange si vous ou l’allié êtes dans l’état incapable.",
    },
    crafter: {
      name: "Artisan",
      description:
        "Vous gagnez les bénéfices suivants.\n**Maîtrise d’outils.** Vous gagnez la maîtrise de trois outils d’artisan de votre choix figurant dans la table de fabrication rapide.\n**Réduction.** Lorsque vous achetez un objet non magique, vous bénéficiez d’une réduction de 20 %.\n**Fabrication rapide.** Lorsque vous terminez un repos long, vous pouvez fabriquer un objet de la table de fabrication rapide, à condition d’avoir les outils associés et la maîtrise de ceux-ci. L’objet dure jusqu’à votre prochain repos long, après quoi il tombe en morceaux.",
    },
    healer: {
      name: "Guérisseur",
      description:
        "Vous gagnez les bénéfices suivants.\n**Médecin de bataille.** Si vous possédez une trousse de soins, vous pouvez en utiliser une charge pour soigner une créature située à 1,50 mètre de vous en utilisant une action d’usage. Cette créature peut dépenser un dé de vie, que vous lancez. Elle récupère un nombre de points de vie égal au résultat plus votre bonus de maîtrise.\n**Relances de soin.** Chaque fois que vous lancez un dé pour déterminer le nombre de points de vie rendus par un sort ou le bénéfice de Médecin de bataille, vous pouvez relancer le dé s’il indique un 1. Vous devez utiliser le nouveau résultat.",
    },
    lucky: {
      name: "Chanceux",
      description:
        "Vous gagnez les bénéfices suivants.\n**Points de chance.** Vous avez un nombre de points de chance égal à votre bonus de maîtrise et pouvez les utiliser comme décrit ci-dessous. Vous récupérez les points dépensés à la fin d’un repos long.\n**Avantage.** Lorsque vous effectuez un test nécessitant un d20, vous pouvez dépenser 1 point de chance pour bénéficier de l’avantage.\n**Désavantage.** Lorsqu’une créature fait un jet d’attaque contre vous, vous pouvez dépenser 1 point de chance pour lui imposer le désavantage.",
    },
    "magic-initiate": {
      name: "Initiation à la magie",
      description:
        "Vous gagnez les bénéfices suivants.\n**Deux tours de magie.** Vous apprenez deux tours de magie de votre choix provenant de la liste de sorts de clerc, druide ou magicien.\n**Intelligence, Sagesse ou Charisme** est la caractéristique d’incantation pour les sorts liés à ce don (choisissez au moment où vous obtenez ce don).\n**Sort de niveau 1.** Choisissez un sort de niveau 1 de la même liste que celle des tours de magie choisis. Vous avez toujours ce sort préparé. Vous pouvez le lancer une fois sans utiliser d’emplacement de sort, et récupérez cette capacité après un repos long. Vous pouvez aussi le lancer avec vos emplacements de sort disponibles.\n**Changement de sort.** Chaque fois que vous gagnez un niveau, vous pouvez remplacer l’un des sorts choisis avec un autre de même niveau issu de la même liste.\n**Cumulable.** Vous pouvez prendre ce don plusieurs fois, mais devez choisir une liste de sorts différente à chaque fois.",
    },
    musician: {
      name: "Musicien",
      description:
        "Vous gagnez les bénéfices suivants.\n**Formation musicale.** Vous gagnez la maîtrise de trois instruments de musique de votre choix.\n**Chanson encourageante.** Lorsque vous terminez un repos court ou long, vous pouvez jouer un air sur un instrument que vous maîtrisez pour offrir une Inspiration héroïque aux alliés qui l’entendent. Le nombre d’alliés affectés est égal à votre bonus de maîtrise.",
    },
    "savage-attacker": {
      name: "Attaquant sauvage",
      description:
        "Vous avez appris à infliger des frappes particulièrement dévastatrices. Une fois par tour, lorsque vous touchez une cible avec une arme, vous pouvez lancer deux fois les dés de dégâts de l’arme et garder le résultat de votre choix.",
    },
    skilled: {
      name: "Compétent",
      description:
        "Vous gagnez la maîtrise de trois compétences ou outils de votre choix.\n**Cumulable.** Vous pouvez choisir ce don plusieurs fois.",
    },
    "tavern-brawler": {
      name: "Bagarreur de taverne",
      description:
        "Vous gagnez les bénéfices suivants.\n**Coup de poing amélioré.** Quand vous touchez avec une attaque à mains nues, vous infligez des dégâts contondants égaux à 1d4 + votre modificateur de Force.\n**Relance des dégâts.** Lorsque vous lancez un dé de dégâts pour une attaque à mains nues, vous pouvez relancer un 1. Vous devez garder le second résultat.\n**Armes improvisées.** Vous avez la maîtrise des armes improvisées.\n**Poussée.** Quand vous touchez une créature avec une attaque à mains nues lors d’une action d’attaque, vous pouvez la repousser de 1,50 m. Ce bénéfice ne peut être utilisé qu’une fois par tour.",
    },
    tough: {
      name: "Robuste",
      description:
        "Votre maximum de points de vie augmente d’un montant égal au double de votre niveau de personnage lorsque vous gagnez ce don. Par la suite, chaque fois que vous gagnez un niveau, votre maximum de points de vie augmente de 2 supplémentaires.",
    },
    "ability-score-improvement": {
      name: "Amélioration de caractéristique",
      description:
        "Augmentez une caractéristique de votre choix de 2, ou augmentez deux caractéristiques de votre choix de 1. Ce don ne permet pas de dépasser 20 dans une caractéristique.\n**Cumulable.** Vous pouvez prendre ce don plusieurs fois.",
    },
    actor: {
      name: "Comédien",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Charisme de 1, jusqu’à un maximum de 20.\n**Impersonation.** Lorsque vous êtes déguisé en une personne réelle ou fictive, vous avez l’avantage aux tests de Charisme (Tromperie ou Représentation) pour convaincre les autres que vous êtes cette personne.\n**Imitation.** Vous pouvez imiter les sons d’autres créatures, y compris la parole. Une créature qui entend l’imitation doit réussir un jet de Sagesse (Intuition) pour détecter la supercherie (DD = 8 + votre modificateur de Charisme + votre bonus de maîtrise).",
    },
    athlete: {
      name: "Athlète",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Force ou Dextérité de 1, jusqu’à un maximum de 20.\n**Vitesse d’escalade.** Vous gagnez une vitesse d’escalade égale à votre vitesse de déplacement.\n**Redressement.** Lorsque vous êtes à terre (état « prone »), vous pouvez vous relever en ne dépensant que 1,50 m de mouvement.\n**Sauts.** Vous pouvez effectuer un saut en longueur ou en hauteur avec seulement 1,50 m d’élan.",
    },
    charger: {
      name: "Chargeur",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Force ou Dextérité de 1, jusqu’à un maximum de 20.\n**Course améliorée.** Lorsque vous utilisez l’action de course, votre vitesse augmente de 3 mètres pour cette action.\n**Attaque en charge.** Si vous vous déplacez d’au moins 3 mètres en ligne droite vers une cible avant de la toucher avec une attaque de mêlée, choisissez un effet : infligez 1d8 dégâts supplémentaires, ou poussez la cible jusqu’à 3 mètres si elle fait au maximum une taille de plus que vous. Ce bénéfice ne peut être utilisé qu’une fois par tour.",
    },
    chef: {
      name: "Chef cuisinier",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Constitution ou Sagesse de 1, jusqu’à un maximum de 20.\n**Ustensiles de cuisine.** Vous gagnez la maîtrise des ustensiles de cuisine si ce n’est pas déjà le cas.\n**Repas réparateur.** Pendant un repos court, vous pouvez cuisiner un plat spécial si vous avez des ingrédients et des ustensiles de cuisine à disposition. Vous pouvez nourrir un nombre de créatures égal à 4 + votre bonus de maîtrise. Chaque créature qui consomme ce repas et dépense au moins un dé de vie pour récupérer des points de vie regagne 1d8 points de vie supplémentaires.\n**Gâteries revigorantes.** En une heure ou à la fin d’un repos long, vous pouvez cuisiner un nombre de gâteries égal à votre bonus de maîtrise. Elles durent 8 heures. Une créature peut utiliser une action bonus pour en manger une et gagner un nombre de points de vie temporaires égal à votre bonus de maîtrise.",
    },
    "crossbow-expert": {
      name: "Expert en arbalète",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Dextérité de 1, jusqu’à un maximum de 20.\n**Ignore le rechargement.** Vous ignorez la propriété de rechargement de l’arbalète légère, de l’arbalète de poing et de l’arbalète lourde. Si vous tenez l'une d'elles, vous pouvez la recharger même si vous n’avez pas une main libre.\n**Tir en mêlée.** Être à 1,50 mètre d’un ennemi n’impose pas de désavantage à vos jets d’attaque avec des arbalètes.\n**Double tir.** Lorsque vous effectuez l’attaque supplémentaire avec une arme possédant la propriété Légère, vous pouvez ajouter votre modificateur de caractéristique aux dégâts si l’arme est une arbalète légère et que vous n’ajoutez pas déjà ce modificateur.",
    },
    crusher: {
      name: "Broyeur",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Force ou Constitution de 1, jusqu’à un maximum de 20.\n**Poussée.** Une fois par tour, lorsque vous touchez une créature avec une attaque infligeant des dégâts contondants, vous pouvez la déplacer de 1,50 mètre vers un espace inoccupé, si elle ne fait pas plus d’une taille de plus que vous.\n**Coup critique renforcé.** Lorsque vous infligez un coup critique avec une attaque contondante, les attaques contre cette créature ont l’avantage jusqu’au début de votre prochain tour.",
    },
    "defensive-duelist": {
      name: "Duelliste défensif",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Dextérité de 1, jusqu’à un maximum de 20.\n**Parade.** Si vous tenez une arme avec la propriété Finesse et qu’une autre créature vous touche avec une attaque de mêlée, vous pouvez utiliser votre réaction pour ajouter votre bonus de maîtrise à votre classe d’armure, ce qui peut faire échouer l’attaque. Vous conservez ce bonus contre les attaques de mêlée jusqu’au début de votre prochain tour.",
    },
    "dual-wielder": {
      name: "Ambidextre",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Force ou Dextérité de 1, jusqu’à un maximum de 20.\n**Combat amélioré à deux armes.** Lorsque vous effectuez une action d’attaque avec une arme légère, vous pouvez effectuer une attaque supplémentaire avec une autre arme de mêlée tenue dans l’autre main qui n’a pas la propriété Deux-mains. Vous n’ajoutez pas votre modificateur de caractéristique aux dégâts sauf s’il est négatif.\n**Dégainement rapide.** Vous pouvez dégainer ou rengainer deux armes qui ne possèdent pas la propriété Deux-mains là où vous ne pourriez normalement en gérer qu’une seule.",
    },
    durable: {
      name: "Endurant",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Constitution de 1, jusqu’à un maximum de 20.\n**Défier la mort.** Vous avez l’avantage aux jets de sauvegarde contre la mort.\n**Récupération rapide.** En utilisant une action bonus, vous pouvez dépenser un dé de vie et regagner un nombre de points de vie égal au résultat du dé.",
    },
    "elemental-adept": {
      name: "Adepte élémentaire",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Intelligence, Sagesse ou Charisme de 1, jusqu’à un maximum de 20.\n**Maîtrise élémentaire.** Choisissez un type de dégâts parmi les suivants : acide, froid, feu, foudre ou tonnerre. Vos sorts ignorent la résistance à ce type de dégâts. De plus, lorsque vous lancez un sort infligeant ce type de dégâts, vous pouvez traiter les 1 obtenus sur les dés de dégâts comme des 2.\n**Cumulable.** Vous pouvez choisir ce don plusieurs fois, à condition de choisir un type de dégâts différent à chaque fois.",
    },
    "fey-touched": {
      name: "Marqué par les fées",
      description:
        "Votre exposition à la magie du Feywild vous octroie les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Intelligence, Sagesse ou Charisme de 1, jusqu’à un maximum de 20.\n**Magie féerique.** Choisissez un sort de niveau 1 de l’école de divination ou d’enchantement. Vous avez toujours ce sort et le sort Pas brumeux préparés. Vous pouvez lancer chacun de ces sorts une fois sans emplacement. Une fois lancé de cette manière, vous devez finir un repos long pour le relancer ainsi. Vous pouvez également les lancer avec vos emplacements de sort. La caractéristique d’incantation utilisée est celle augmentée par ce don.",
    },
    grappler: {
      name: "Lutteur",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Force ou Dextérité de 1, jusqu’à un maximum de 20.\n**Frappe et prise.** Quand vous touchez une créature avec une attaque à mains nues pendant une action d’attaque, vous pouvez lui infliger des dégâts et la saisir. Ce bénéfice ne peut être utilisé qu’une fois par tour.\n**Avantage en lutte.** Vous avez l’avantage aux jets d’attaque contre une créature que vous avez saisie.\n**Lutteur rapide.** Votre vitesse de déplacement n’est pas réduite lorsque vous déplacez une créature saisie si elle fait votre taille ou moins.",
    },
    "great-weapon-master": {
      name: "Maître des armes lourdes",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Force de 1, jusqu’à un maximum de 20.\n**Maîtrise des armes lourdes.** Lorsque vous touchez une créature avec une arme possédant la propriété Lourde pendant une action d’attaque, vous infligez des dégâts supplémentaires égaux à votre bonus de maîtrise.\n**Frappe brutale.** Juste après avoir infligé un coup critique avec une arme de mêlée ou réduit une créature à 0 point de vie, vous pouvez effectuer une attaque supplémentaire avec la même arme en tant qu’action bonus.",
    },
    "heavily-armored": {
      name: "Lourdement armuré",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Constitution ou Force de 1, jusqu’à un maximum de 20.\n**Formation à l’armure lourde.** Vous gagnez la formation aux armures lourdes.",
    },
    "heavy-armor-master": {
      name: "Maître des armures lourdes",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Constitution ou Force de 1, jusqu’à un maximum de 20.\n**Réduction des dégâts.** Lorsque vous êtes touché par une attaque en portant une armure lourde, les dégâts contondants, perforants et tranchants infligés par cette attaque sont réduits d’un montant égal à votre bonus de maîtrise.",
    },
    "inspiring-leader": {
      name: "Chef inspirant",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Sagesse ou Charisme de 1, jusqu’à un maximum de 20.\n**Performance motivante.** Lorsque vous terminez un repos court ou long, vous pouvez donner une performance inspirante (discours, chanson, danse). Jusqu’à six alliés (vous inclus) à 9 mètres qui en sont témoins gagnent des points de vie temporaires égaux à votre niveau de personnage + le modificateur de la caractéristique augmentée par ce don.",
    },
    "keen-mind": {
      name: "Esprit vif",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Intelligence de 1, jusqu’à un maximum de 20.\n**Connaissances.** Choisissez une compétence parmi Arcanes, Histoire, Investigation, Nature ou Religion. Si vous ne la maîtrisez pas, vous gagnez la maîtrise. Si vous la maîtrisez déjà, vous gagnez l’expertise.\n**Étude rapide.** Vous pouvez effectuer l’action d’Étude en tant qu’action bonus.",
    },
    "lightly-armored": {
      name: "Légèrement armuré",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Force ou Dextérité de 1, jusqu’à un maximum de 20.\n**Formation à l’armure.** Vous gagnez la formation aux armures légères et aux boucliers.",
    },
    "mage-slayer": {
      name: "Tueur de mages",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Force ou Dextérité de 1, jusqu’à un maximum de 20.\n**Briseur de concentration.** Lorsque vous infligez des dégâts à une créature qui se concentre sur un sort, elle a un désavantage au jet de sauvegarde pour maintenir sa concentration.\n**Esprit protégé.** Si vous échouez à un jet de sauvegarde d’Intelligence, de Sagesse ou de Charisme, vous pouvez choisir de réussir à la place. Une fois utilisé, vous ne pouvez plus le faire avant un repos court ou long.",
    },
    "martial-weapon-training": {
      name: "Formation aux armes martiales",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Force ou Dextérité de 1, jusqu’à un maximum de 20.\n**Maîtrise des armes.** Vous gagnez la maîtrise des armes martiales.",
    },
    "medium-armor-master": {
      name: "Maître des armures intermédiaires",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Force ou Dextérité de 1, jusqu’à un maximum de 20.\n**Port d’armure agile.** Tant que vous portez une armure intermédiaire et que votre Dextérité est de 16 ou plus, vous ajoutez +3 à la CA au lieu de +2.",
    },
    "moderately-armored": {
      name: "Modérément armuré",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Force ou Dextérité de 1, jusqu’à un maximum de 20.\n**Formation à l’armure.** Vous gagnez la formation aux armures intermédiaires.",
    },
    "mounted-combatant": {
      name: "Combattant monté",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Force, Dextérité ou Sagesse de 1, jusqu’à un maximum de 20.\n**Attaque montée.** Tant que vous êtes monté, vous avez l’avantage sur les attaques contre les créatures non montées à 1,50 mètre de votre monture et d’au moins une taille de moins.\n**Bond d’évitement.** Si votre monture est soumise à un effet impliquant un jet de sauvegarde de Dextérité pour moitié dégâts, elle ne subit aucun dégât en cas de réussite, ou la moitié en cas d’échec. Vous devez la chevaucher et ni vous ni elle ne devez être incapables.\n**Déviation.** Tant que vous êtes monté, vous pouvez intercepter une attaque destinée à votre monture et la rediriger vers vous, à condition de ne pas être dans l’état incapable.",
    },
    observant: {
      name: "Observateur",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Intelligence ou Sagesse de 1, jusqu’à un maximum de 20.\n**Observation affûtée.** Choisissez l’une des compétences suivantes : Intuition, Investigation ou Perception. Si vous ne la maîtrisez pas, vous gagnez la maîtrise. Si vous la maîtrisez déjà, vous gagnez l’expertise.\n**Recherche rapide.** Vous pouvez effectuer l’action de Fouille en tant qu’action bonus.",
    },
    piercer: {
      name: "Perceur",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Force ou Dextérité de 1, jusqu’à un maximum de 20.\n**Perforation.** Une fois par tour, lorsque vous touchez une créature avec une attaque infligeant des dégâts perforants, vous pouvez relancer un dé de dégâts et utiliser le nouveau résultat.\n**Coup critique renforcé.** Quand vous infligez un coup critique avec des dégâts perforants, vous lancez un dé de dégâts supplémentaire pour déterminer les dégâts supplémentaires.",
    },
    poisoner: {
      name: "Empoisonneur",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Dextérité ou Intelligence de 1, jusqu’à un maximum de 20.\n**Poison puissant.** Vos jets de dégâts infligeant des dégâts de poison ignorent la résistance au poison.\n**Préparation de poison.** Vous gagnez la maîtrise du kit d’empoisonneur. En 1 heure, en dépensant 50 po d’ingrédients, vous pouvez créer un nombre de doses égal à votre bonus de maîtrise. En action bonus, vous pouvez appliquer une dose sur une arme ou munition ; elle reste active pendant 1 minute ou jusqu’à toucher une cible. Une créature touchée doit réussir un jet de Constitution (DD = 8 + votre mod. de caractéristique + bonus de maîtrise) ou subir 2d8 dégâts de poison et être Empoisonnée jusqu’à la fin de votre prochain tour.",
    },
    "polearm-master": {
      name: "Maître d’armes d’hast",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Dextérité ou Force de 1, jusqu’à un maximum de 20.\n**Frappe avec le manche.** Juste après avoir effectué l’action Attaquer avec un bâton, une lance ou une arme avec les propriétés Lourde et Allonge, vous pouvez utiliser une action bonus pour attaquer avec l’autre extrémité de l’arme. Elle inflige des dégâts contondants, avec un dé de dégâts de d4.\n**Frappe réactive.** Tant que vous tenez l’une des armes mentionnées, vous pouvez utiliser votre réaction pour faire une attaque de mêlée contre une créature qui entre dans votre allonge avec cette arme.",
    },
    resilient: {
      name: "Résilient",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Choisissez une caractéristique dans laquelle vous n’avez pas de sauvegarde de maîtrise. Augmentez-la de 1, jusqu’à un maximum de 20.\n**Maîtrise de sauvegarde.** Vous gagnez la maîtrise des jets de sauvegarde liés à cette caractéristique.",
    },
    "ritual-caster": {
      name: "Lanceur de rituels",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Intelligence, Sagesse ou Charisme de 1, jusqu’à un maximum de 20.\n**Sorts rituels.** Choisissez un nombre de sorts de niveau 1 avec le tag Rituel égal à votre bonus de maîtrise. Vous avez toujours ces sorts préparés, et vous pouvez les lancer avec vos emplacements de sort.\n**Rituel rapide.** Vous pouvez lancer un sort rituel préparé avec son temps d’incantation normal au lieu du temps prolongé d’un rituel. Cela ne consomme pas d’emplacement de sort. Une fois utilisé, ce bénéfice nécessite un repos long pour être réutilisé.",
    },
    sentinel: {
      name: "Sentinelle",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Force ou Dextérité de 1, jusqu’à un maximum de 20.\n**Gardien.** Si une créature à 1,50 mètre de vous prend l’action Se désengager ou attaque une autre cible que vous, vous pouvez utiliser une réaction pour faire une attaque d’opportunité contre elle.\n**Interruption.** Lorsque vous touchez une créature avec une attaque d’opportunité, sa vitesse devient 0 jusqu’à la fin du tour en cours.",
    },
    "shadow-touched": {
      name: "Marqué par l’Ombre",
      description:
        "Votre exposition à la magie du Shadowfell vous accorde les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Intelligence, Sagesse ou Charisme de 1, jusqu’à un maximum de 20.\n**Magie des ombres.** Choisissez un sort de niveau 1 de l’école d’illusion ou de nécromancie. Vous avez toujours ce sort et le sort Invisibilité préparés. Vous pouvez lancer chacun de ces sorts une fois sans emplacement. Une fois lancé de cette façon, vous devez finir un repos long pour relancer ainsi. Vous pouvez aussi les lancer avec vos emplacements. La caractéristique utilisée est celle augmentée par ce don.",
    },
    sharpshooter: {
      name: "Tireur d’élite",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Dextérité de 1, jusqu’à un maximum de 20.\n**Ignorer les couverts.** Vos attaques à distance ignorent la demi-couverture et les trois-quarts de couverture.\n**Tir en mêlée.** Être à 1,50 mètre d’un ennemi ne vous impose pas de désavantage avec des armes à distance.\n**Tir à longue portée.** Attaquer à portée longue n’impose pas de désavantage à vos jets d’attaque à distance.",
    },
    "shield-master": {
      name: "Maître du bouclier",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Force de 1, jusqu’à un maximum de 20.\n**Coup de bouclier.** Si vous attaquez une créature à 1,50 mètre avec une arme de mêlée et que vous touchez, vous pouvez utiliser votre bouclier équipé pour l’ébranler. Elle doit réussir un jet de sauvegarde de Force (DD 8 + mod. de Force + bonus de maîtrise) ou être repoussée de 1,50 mètre ou être à terre (au choix). Ce bénéfice ne peut être utilisé qu’une fois par tour.\n**Interposition.** Si vous êtes soumis à un effet nécessitant un jet de sauvegarde de Dextérité pour subir la moitié des dégâts, vous pouvez utiliser votre réaction pour ne subir aucun dégât en cas de réussite, à condition de tenir un bouclier.",
    },
    "skill-expert": {
      name: "Expert en compétences",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez une caractéristique de votre choix de 1, jusqu’à un maximum de 20.\n**Maîtrise de compétence.** Vous gagnez la maîtrise d’une compétence de votre choix.\n**Expertise.** Choisissez une compétence que vous maîtrisez mais pour laquelle vous n’avez pas l’expertise. Vous gagnez l’expertise avec cette compétence.",
    },
    skulker: {
      name: "Rôdeur de l’ombre",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Dextérité de 1, jusqu’à un maximum de 20.\n**Vision aveugle.** Vous avez la vision aveugle dans un rayon de 3 mètres.\n**Brouillard de guerre.** Vous exploitez les distractions du combat pour bénéficier de l’avantage aux tests de Dextérité (Discrétion) effectués dans le cadre de l’action Se cacher pendant un combat.\n**Tir furtif.** Si vous effectuez une attaque en étant caché et que vous ratez, votre attaque ne révèle pas votre position.",
    },
    slasher: {
      name: "Trancheur",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Force ou Dextérité de 1, jusqu’à un maximum de 20.\n**Tendon sectionné.** Une fois par tour, quand vous touchez une créature avec une attaque infligeant des dégâts tranchants, vous pouvez réduire sa vitesse de 3 mètres jusqu’au début de votre prochain tour.\n**Coup critique renforcé.** Si vous infligez un coup critique infligeant des dégâts tranchants à une créature, celle-ci a le désavantage à ses jets d’attaque jusqu’au début de votre prochain tour.",
    },
    speedy: {
      name: "Rapide",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Dextérité ou Constitution de 1, jusqu’à un maximum de 20.\n**Vitesse accrue.** Votre vitesse augmente de 3 mètres.\n**Course sur terrain difficile.** Lorsque vous effectuez une action de course, le terrain difficile ne vous coûte pas de déplacement supplémentaire jusqu’à la fin du tour.\n**Mouvement agile.** Les attaques d’opportunité contre vous ont le désavantage.",
    },
    "spell-sniper": {
      name: "Franc-tireur magique",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Intelligence, Sagesse ou Charisme de 1, jusqu’à un maximum de 20.\n**Ignorer les couverts.** Vos jets d’attaque de sorts ignorent la demi-couverture et les trois-quarts de couverture.\n**Lancer en mêlée.** Être à 1,50 mètre d’un ennemi ne vous impose pas de désavantage aux jets d’attaque de sorts.\n**Portée étendue.** Quand vous lancez un sort avec une portée d’au moins 3 mètres nécessitant un jet d’attaque, vous pouvez augmenter sa portée de 18 mètres.",
    },
    telekinetic: {
      name: "Télékinésiste",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Intelligence, Sagesse ou Charisme de 1, jusqu’à un maximum de 20.\n**Télékinésie mineure.** Vous apprenez le sort Main de mage. Vous pouvez le lancer sans composantes verbales ni somatiques, rendre la main spectrale invisible et en augmenter la portée de 9 mètres. La caractéristique d’incantation utilisée est celle augmentée par ce don.\n**Poussée télékinétique.** En action bonus, vous pouvez repousser une créature visible dans un rayon de 9 mètres. Elle doit réussir un jet de sauvegarde de Force (DD 8 + modificateur + bonus de maîtrise) ou être déplacée de 1,50 mètre vers ou loin de vous.",
    },
    telepathic: {
      name: "Télépathe",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Intelligence, Sagesse ou Charisme de 1, jusqu’à un maximum de 20.\n**Parole télépathique.** Vous pouvez parler mentalement à toute créature visible dans un rayon de 18 mètres. Vous devez partager une langue connue avec la créature pour qu’elle vous comprenne. Cela ne permet pas à la créature de vous répondre par télépathie.\n**Détection des pensées.** Vous avez toujours le sort Détection des pensées préparé. Vous pouvez le lancer sans emplacement ni composantes, et devez finir un repos long pour relancer ainsi. Vous pouvez aussi le lancer avec vos emplacements. La caractéristique utilisée est celle augmentée par ce don.",
    },
    "war-caster": {
      name: "Lanceur de guerre",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Intelligence, Sagesse ou Charisme de 1, jusqu’à un maximum de 20.\n**Concentration.** Vous avez l’avantage aux jets de sauvegarde de Constitution pour maintenir la concentration sur un sort.\n**Sort réactif.** Lorsqu’une créature provoque une attaque d’opportunité en quittant votre portée, vous pouvez utiliser votre réaction pour lui lancer un sort au lieu d’effectuer l’attaque. Le sort doit avoir un temps d’incantation d’une action et ne cibler que cette créature.\n**Composantes somatiques.** Vous pouvez effectuer les composantes somatiques d’un sort même si vos mains tiennent des armes ou un bouclier.",
    },
    "weapon-master": {
      name: "Maître d’arme",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Force ou Dextérité de 1, jusqu’à un maximum de 20.\n**Propriété de maîtrise.** Votre entraînement vous permet d’utiliser la propriété de maîtrise d’un type d’arme simple ou martiale de votre choix, si vous la maîtrisez. Vous pouvez changer ce type d’arme après un repos long.",
    },
    archery: {
      name: "Tir à l’arc",
      description:
        "Vous gagnez un bonus de +2 aux jets d’attaque effectués avec des armes à distance.",
    },
    "blind-fighting": {
      name: "Combat à l’aveugle",
      description: "Vous avez la vision aveugle dans un rayon de 3 mètres.",
    },
  },
  {
    defense: {
      name: "Défense",
      description:
        "Lorsque vous portez une armure légère, intermédiaire ou lourde, vous gagnez un bonus de +1 à la classe d’armure.",
    },
    dueling: {
      name: "Duel",
      description:
        "Lorsque vous maniez une arme de mêlée dans une main et aucune autre arme, vous gagnez un bonus de +2 aux jets de dégâts avec cette arme.",
    },
    "great-weapon-fighting": {
      name: "Combat avec arme lourde",
      description:
        "Lorsque vous lancez les dés de dégâts pour une attaque avec une arme de mêlée tenue à deux mains, vous pouvez considérer les résultats de 1 ou 2 comme des 3. L’arme doit avoir la propriété Deux mains ou Polyvalente.",
    },
    interception: {
      name: "Interception",
      description:
        "Quand une créature que vous voyez touche une autre créature à 1,50 mètre de vous, vous pouvez utiliser votre réaction pour réduire les dégâts de 1d10 + votre bonus de maîtrise. Vous devez tenir un bouclier ou une arme simple ou martiale.",
    },
    protection: {
      name: "Protection",
      description:
        "Quand une créature attaque une autre cible que vous à 1,50 mètre, vous pouvez interposer votre bouclier (si vous en tenez un) pour imposer le désavantage au jet d’attaque déclencheur et à tous les jets contre la cible jusqu’au début de votre prochain tour.",
    },
    "thrown-weapon-fighting": {
      name: "Combat avec arme de jet",
      description:
        "Quand vous touchez avec une attaque à distance utilisant une arme avec la propriété Jet, vous gagnez un bonus de +2 aux dégâts.",
    },
    "two-weapon-fighting": {
      name: "Combat à deux armes",
      description:
        "Quand vous effectuez une attaque supplémentaire avec une arme Légère, vous pouvez ajouter votre modificateur de caractéristique aux dégâts si ce n’est pas déjà le cas.",
    },
    "unarmed-fighting": {
      name: "Combat à mains nues",
      description:
        "Quand vous touchez avec une attaque à mains nues, vous infligez 1d6 + votre modificateur de Force de dégâts contondants. Si vous ne tenez ni arme ni bouclier, le d6 devient un d8. Au début de chacun de vos tours, vous pouvez infliger 1d4 dégâts contondants à une créature que vous agrippez.",
    },
    "boon-of-combat-prowess": {
      name: "Don de prouesse martiale",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez une caractéristique de votre choix de 1, jusqu’à 30.\n**Visée infaillible.** Quand vous ratez une attaque, vous pouvez décider qu’elle touche à la place. Réutilisable au début de votre prochain tour.",
    },
    "boon-of-dimensional-travel": {
      name: "Don de déplacement dimensionnel",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez une caractéristique de votre choix de 1, jusqu’à 30.\n**Pas instantané.** Juste après avoir utilisé l’action Attaque ou Magie, vous pouvez vous téléporter de 9 mètres vers un espace libre visible.",
    },
    "boon-of-energy-resistance": {
      name: "Don de résistance énergétique",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez une caractéristique de votre choix de 1, jusqu’à 30.\n**Résistances.** Vous avez résistance à deux types de dégâts parmi : Acide, Froid, Feu, Foudre, Nécrotique, Poison, Psychique, Radiant, Tonnerre. Vous pouvez en changer après un repos long.\n**Redirection d’énergie.** Quand vous subissez l’un de ces types, vous pouvez réagir pour forcer une créature visible dans un rayon de 18 mètres à faire un jet de sauvegarde de Dextérité ou subir 2d12 + mod. Constitution de dégâts.",
    },
    "boon-of-fate": {
      name: "Don du destin",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez une caractéristique de votre choix de 1, jusqu’à 30.\n**Faveur du destin.** Quand un test de D20 réussi ou raté a lieu à 18 mètres de vous, vous pouvez lancer 2d4 et ajouter/soustraire le total au jet. Utilisable après l’initiative ou un repos court/long.",
    },
    "boon-of-fortitude": {
      name: "Don de robustesse",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez une caractéristique de votre choix de 1, jusqu’à 30.\n**Santé renforcée.** Vos points de vie maximum augmentent de 40. Quand vous regagnez des PV, vous en regagnez en plus un nombre égal à votre modificateur de Constitution (1 fois par tour).",
    },
    "boon-of-irresistible-offense": {
      name: "Don d’offensive irrésistible",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Force ou Dextérité de 1, jusqu’à 30.\n**Ignore la résistance.** Vos dégâts contondants, perforants et tranchants ignorent toujours les résistances.\n**Frappe irrésistible.** Sur un 20 au d20 d’attaque, infligez des dégâts supplémentaires égaux à la caractéristique augmentée.",
    },
    "boon-of-recovery": {
      name: "Don de récupération",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez une caractéristique de votre choix de 1, jusqu’à 30.\n**Dernière chance.** Si vous tombez à 0 PV, vous tombez à 1 PV et regagnez la moitié de vos PV max (1 fois par repos long).\n**Récupération vitale.** Vous avez un pool de dix d10. En action bonus, vous pouvez en dépenser pour regagner des PV égaux au total lancé. Le pool se recharge au repos long.",
    },
    "boon-of-skill": {
      name: "Don de compétence",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez une caractéristique de votre choix de 1, jusqu’à 30.\n**Aptitude universelle.** Vous gagnez la maîtrise de toutes les compétences.\n**Expertise.** Choisissez une compétence non expertisée. Vous gagnez l’expertise.",
    },
    "boon-of-speed": {
      name: "Don de vitesse",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez une caractéristique de votre choix de 1, jusqu’à 30.\n**Esquiveur.** En action bonus, vous pouvez Désengager et mettre fin à l’état Agrippé.\n**Vitesse.** Votre vitesse augmente de 9 mètres.",
    },
    "boon-of-spell-recall": {
      name: "Don de souvenir magique",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez votre Intelligence, Sagesse ou Charisme de 1, jusqu’à 30.\n**Incantation gratuite.** Quand vous lancez un sort avec un emplacement de niveau 1–4, lancez 1d4. Si le résultat égale le niveau, l’emplacement n’est pas dépensé.",
    },
    "boon-of-the-night-spirit": {
      name: "Don de l’esprit nocturne",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez une caractéristique de votre choix de 1, jusqu’à 30.\n**Fusion avec l’ombre.** En lumière faible ou obscurité, vous pouvez devenir Invisible en action bonus. L’effet prend fin après toute action/réaction.\n**Forme obscure.** En lumière faible ou obscurité, vous avez résistance à tous les dégâts sauf Psychiques et Radiants.",
    },
    "boon-of-truesight": {
      name: "Don de vision véritable",
      description:
        "Vous gagnez les bénéfices suivants.\n**Augmentation de caractéristique.** Augmentez une caractéristique de votre choix de 1, jusqu’à 30.\n**Vision véritable.** Vous avez la vision véritable sur 18 mètres.",
    },
  },
];
