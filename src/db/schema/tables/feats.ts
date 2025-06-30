import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { systems } from "./systems";

export const feats = pgTable("feats", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: text("slug").notNull().unique(),
  defaultName: text("default_name").notNull(),
  defaultDescription: text("default_description"),
  systemId: integer("system_id")
    .notNull()
    .references(() => systems.id),

  minLevel: integer("min_level").notNull().default(1),
  isGrantingAbilityScore: boolean("is_granting_ability_score"),
  isGrantingSkill: boolean("is_granting_skill"),
  isGrantingTool: boolean("is_granting_tool"),
  isGrantingSpell: boolean("is_granting_spell"),
  isRepeatable: boolean("is_repeatable").notNull().default(false),

  // timestamps
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
