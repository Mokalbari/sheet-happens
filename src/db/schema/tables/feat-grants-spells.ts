import { integer, jsonb, pgTable, timestamp } from "drizzle-orm/pg-core";
import { DND5EClass, SpellSchool } from "../enums";
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
  spellLevel: integer("spell_level"),
  spellSchoolRestriction: jsonb("spell_school_restriction").$type<
    SpellSchool[]
  >(),
  spellCasterClassRestriction: jsonb("spell_caster_class_restriction").$type<
    DND5EClass[]
  >(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
