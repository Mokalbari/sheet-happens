import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { abilities } from "./abilities";
import { systems } from "./systems";

export const tools = pgTable("tools", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: text("slug").notNull().unique(),
  defaultName: text("default_name").notNull(),
  defaultUtility: text("default_utility"),
  defaultCraft: text("default_craft"),

  abilityId: integer("ability_id").references(() => abilities.id),
  weight: integer("weight"),
  // value in copper pieces (1 gp = 100 cp, 1 sp = 10 cp)
  value: integer("value"),
  isMusicalInstrument: boolean("is_musical_instrument"),
  isGamingTool: boolean("is_gaming_tool"),

  systemId: integer("system_id")
    .notNull()
    .references(() => systems.id),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
