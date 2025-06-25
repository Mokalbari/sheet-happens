import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { classes } from "./classes";
import { systems } from "./systems";

export const subclasses = pgTable("subclasses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: text("slug").notNull().unique(),
  defaultName: text("default_name").notNull(),
  defaultDescription: text("default_description"),

  classId: integer("class_id")
    .notNull()
    .references(() => classes.id),
  systemId: integer("system_id")
    .notNull()
    .references(() => systems.id),

  // Subclass-specific properties
  acquisitionLevel: integer("acquisition_level").notNull().default(3), // Most subclasses are chosen at level 3

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
