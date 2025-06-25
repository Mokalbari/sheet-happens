import { integer, pgTable, text } from "drizzle-orm/pg-core";
import { abilities } from "./abilities";

export const tools = pgTable("tools", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: text("slug").notNull().unique(),
  defaultName: text("default_name").notNull(),
  defaultDescription: text("default_description"),

  abilityId: integer("ability_id").references(() => abilities.id),
  weigth: integer("weigth"),
  value: integer("value"),

  systemId: integer("system_id"),
});
