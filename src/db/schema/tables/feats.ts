import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const feats = pgTable("feats", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: text("slug").notNull().unique(),
  defaultName: text("default_name").notNull(),
  defaultDescription: text("default_description"),
  systemId: integer("system_id"),

  minLevel: integer("min_level").notNull().default(1),
  grantsAbilityScore: boolean("grants_ability_score"),
  grantsSkill: boolean("grants_skill"),
  grantsTool: boolean("grants_tool"),
  grantsSpell: boolean("grants_spell"),
  isRepeatable: boolean("is_repeatable").notNull().default(false),

  // timestamps
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
