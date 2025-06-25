import { integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { feats } from "./feats";
import { heroes } from "./heroes";

export const heroHasFeats = pgTable("hero_has_feats", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  heroId: integer("hero_id")
    .notNull()
    .references(() => heroes.id),
  featId: integer("feat_id")
    .notNull()
    .references(() => feats.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
