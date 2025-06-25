import { boolean, integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { heroes } from "./heroes";
import { spells } from "./spells";

export const heroSpellPreparations = pgTable("hero_spell_preparations", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),

  heroId: integer("hero_id")
    .notNull()
    .references(() => heroes.id),

  spellId: integer("spell_id")
    .notNull()
    .references(() => spells.id),

  isPrepared: boolean("is_prepared").notNull().default(false),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
