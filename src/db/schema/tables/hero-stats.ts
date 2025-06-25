import { integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { hitDiceEnum } from "../enums";
import { heroes } from "./heroes";

export const heroStats = pgTable("hero_stats", {
  // ids and references
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  heroId: integer("hero_id")
    .notNull()
    .references(() => heroes.id),

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
