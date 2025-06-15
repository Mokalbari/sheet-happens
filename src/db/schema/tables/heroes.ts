import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { systems } from "./systems";
import { users } from "./users";

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

  // timestamps
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
