import {
  boolean,
  integer,
  jsonb,
  pgTable,
  timestamp,
} from "drizzle-orm/pg-core";
import {
  DND5EClass,
  SpellSchool,
  dnd5eClassEnum,
  spellGrantTypeEnum,
} from "../enums";
import { feats } from "./feats";
import { spells } from "./spells";

export const featGrantsSpells = pgTable("feat_grants_spells", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  featId: integer("feat_id")
    .notNull()
    .references(() => feats.id),

  // Grant type determines how spells are granted
  grantType: spellGrantTypeEnum("grant_type").notNull(),

  // For specific_spell: the exact spell to grant
  specificSpellId: integer("specific_spell_id").references(() => spells.id),

  // For spell_choice: list of spell IDs to choose from
  spellChoiceIds: jsonb("spell_choice_ids").$type<number[]>(),

  // For class_spell_choice: which class spell list to use
  classSpellList: dnd5eClassEnum("class_spell_list"),

  // For school_spell_choice: which school(s) to choose from
  schoolRestriction: jsonb("school_restriction").$type<SpellSchool[]>(),

  // For level_spell_choice: which spell level(s) to choose from
  levelRestriction: jsonb("level_restriction").$type<number[]>(),

  // Common restrictions that apply to all grant types
  maxSpellLevel: integer("max_spell_level"),
  casterClassRestriction: jsonb("caster_class_restriction").$type<
    DND5EClass[]
  >(),

  // How many spells can be chosen (for choice-based grants)
  spellCount: integer("spell_count").notNull().default(1),

  // Whether this is a cantrip or leveled spell grant
  isCantrip: boolean("is_cantrip").notNull().default(false),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
