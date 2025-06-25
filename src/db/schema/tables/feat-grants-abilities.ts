import { integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { abilities } from "./abilities";
import { feats } from "./feats";

export const featGrantsAbilities = pgTable("feat_grants_abilities", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  featId: integer("feat_id")
    .notNull()
    .references(() => feats.id),
  abilityId: integer("ability_id")
    .notNull()
    .references(() => abilities.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
