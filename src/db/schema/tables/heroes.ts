import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { systems } from "./systems";
import { users } from "./users";
import { backgrounds } from "./backgrounds";

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
  backgroundId: integer("background_id")
    .notNull()
    .references(() => backgrounds.id),

  // timestamps
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
