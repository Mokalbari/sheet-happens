import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { systems } from "./systems";

export const weaponProperties = pgTable("weapon_properties", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: text("slug").notNull().unique(),
  defaultName: text("default_name").notNull(),
  systemId: integer("system_id")
    .notNull()
    .references(() => systems.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
