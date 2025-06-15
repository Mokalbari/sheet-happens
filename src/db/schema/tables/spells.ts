import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import {
  areaOfEffectEnum,
  hitDiceEnum,
  spellCastingTimeEnum,
  spellDurationEnum,
  spellRangeEnum,
  spellSavingThrowEnum,
  spellSchoolEnum,
} from "../enums";
import { systems } from "./systems";

export const spells = pgTable("spells", {
  // ids
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: text("slug").notNull().unique(),

  // default metadata (localization)
  defaultName: text("default_name").notNull(),
  defaultDescription: text("default_description").notNull(),

  // general properties
  spellLevel: integer("spell_level").notNull().default(0),
  spellSchool: spellSchoolEnum("spell_school"),
  systemId: integer("system_id")
    .notNull()
    .references(() => systems.id),

  // casting time
  spellCastingTime: spellCastingTimeEnum("spell_casting_time"),
  spellRange: spellRangeEnum("spell_range"),
  spellRangeValue: integer("spell_range_value"),
  spellDuration: spellDurationEnum("spell_duration"),
  spellDurationValue: integer("spell_duration_value"),
  hasConcentration: boolean("has_concentration").notNull().default(false),

  // components
  hasVerbalComponent: boolean("has_verbal_component").notNull().default(false),
  hasSomaticComponent: boolean("has_somatic_component")
    .notNull()
    .default(false),
  hasMaterialComponent: boolean("has_material_component")
    .notNull()
    .default(false),
  materialComponent: text("material_component"),

  // target / zone
  areaOfEffect: areaOfEffectEnum("area_of_effect"),
  areaOfEffectValue: integer("area_of_effect_value"),

  // effects
  spellSavingThrow: spellSavingThrowEnum("spell_saving_throw"),
  spellDamageDice: hitDiceEnum("spell_damage_dice"),

  // timestamps
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
