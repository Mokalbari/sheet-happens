import { integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { abilities } from "./abilities";
import { backgrounds } from "./backgrounds";

export const backgroundAbilities = pgTable("background_abilities", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  backgroundId: integer("background_id")
    .references(() => backgrounds.id)
    .notNull(),
  abilityId: integer("ability_id")
    .references(() => abilities.id)
    .notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
