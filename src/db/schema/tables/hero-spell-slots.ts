import { boolean, integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { heroes } from "./heroes";

export const heroSpellSlots = pgTable("hero_spell_slots", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),

  heroId: integer("hero_id")
    .notNull()
    .references(() => heroes.id),
  spellLevel: integer("spell_level").notNull(), // 1 → 9

  maxSlots: integer("max_slots").notNull().default(0),
  usedSlots: integer("used_slots").notNull().default(0),

  isWarlockSlot: boolean("is_warlock_slot").notNull().default(false), // pact slots

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
