import { integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { abilities } from "./abilities";
import { heroes } from "./heroes";

export const heroAbilityScores = pgTable("hero_ability_scores", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  // References
  heroId: integer("hero_id")
    .notNull()
    .references(() => heroes.id),
  abilityId: integer("ability_id")
    .notNull()
    .references(() => abilities.id),

  // Ability score and modifier
  score: integer("score").notNull().default(10),
  modifier: integer("modifier").notNull().default(0),

  // Timestamps
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
