import { integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { heroes } from "./heroes";
import { spells } from "./spells";

export const heroHasSpells = pgTable("hero_has_spells", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  heroId: integer("hero_id")
    .notNull()
    .references(() => heroes.id),
  spellId: integer("spell_id")
    .notNull()
    .references(() => spells.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
