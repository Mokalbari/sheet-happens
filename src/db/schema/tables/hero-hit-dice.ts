import { integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { dnd5eClassEnum, hitDiceEnum } from "../enums";
import { heroes } from "./heroes";

export const heroHitDice = pgTable("hero_hit_dice", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),

  heroId: integer("hero_id")
    .notNull()
    .references(() => heroes.id),

  // hit dice type (d6, d8, d10, d12)
  hitDiceType: hitDiceEnum("hit_dice_type").notNull(),

  // hit dice counts
  totalHitDice: integer("total_hit_dice").notNull().default(0),
  usedHitDice: integer("used_hit_dice").notNull().default(0),

  // source of these hit dice (usually from class levels)
  sourceClass: dnd5eClassEnum("source_class"), // e.g., "fighter", "wizard"

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
