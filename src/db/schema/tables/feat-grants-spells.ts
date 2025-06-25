import { integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { feats } from "./feats";
import { spells } from "./spells";

export const featGrantsSpells = pgTable("feat_grants_spells", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  featId: integer("feat_id")
    .notNull()
    .references(() => feats.id),
  spellId: integer("spell_id")
    .notNull()
    .references(() => spells.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
