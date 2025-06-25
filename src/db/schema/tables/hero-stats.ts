import { integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { hitDiceEnum } from "../enums";
import { heroes } from "./heroes";

export const heroStats = pgTable("hero_stats", {
  // ids and references
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  heroId: integer("hero_id")
    .notNull()
    .references(() => heroes.id),

  // ability scores
  strengthScore: integer("strength_score").notNull().default(10),
  dexterityScore: integer("dexterity_score").notNull().default(10),
  constitutionScore: integer("constitution_score").notNull().default(10),
  intelligenceScore: integer("intelligence_score").notNull().default(10),
  wisdomScore: integer("wisdom_score").notNull().default(10),
  charismaScore: integer("charisma_score").notNull().default(10),

  // ability modifiers (calculated from scores)
  strengthModifier: integer("strength_modifier").notNull().default(0),
  dexterityModifier: integer("dexterity_modifier").notNull().default(0),
  constitutionModifier: integer("constitution_modifier").notNull().default(0),
  intelligenceModifier: integer("intelligence_modifier").notNull().default(0),
  wisdomModifier: integer("wisdom_modifier").notNull().default(0),
  charismaModifier: integer("charisma_modifier").notNull().default(0),

  // hit points
  maxHitPoints: integer("max_hit_points").notNull().default(0),
  currentHitPoints: integer("current_hit_points").notNull().default(0),
  temporaryHitPoints: integer("temporary_hit_points").default(0),
  hitDice: integer("hit_dice").notNull().default(1),
  hitDiceValue: hitDiceEnum("hit_dice_value").notNull(),

  // armor class
  armorClass: integer("armor_class").notNull().default(10),
  initiativeBonus: integer("initiative_bonus").notNull().default(0),

  // proficiency bonus
  proficiencyBonus: integer("proficiency_bonus").notNull().default(2),

  // experience and level
  experiencePoints: integer("experience_points").default(0),
  level: integer("level").notNull().default(1),

  // timestamps
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
