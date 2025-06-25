import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { backgrounds } from "./backgrounds";
import { classes } from "./classes";
import { systems } from "./systems";
import { users } from "./users";
import { species } from "./species";

export const heroes = pgTable("heroes", {
  // ids and general properties
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  systemId: integer("system_id")
    .notNull()
    .references(() => systems.id),

  name: text("name").notNull(),
  classId: integer("class_id")
    .notNull()
    .references(() => classes.id),
  backgroundId: integer("background_id")
    .notNull()
    .references(() => backgrounds.id),
  speciesId: integer("species_id")
    .notNull()
    .references(() => species.id),

  // timestamps
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
