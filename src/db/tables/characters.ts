import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { systemsTable } from "./systems";
import { usersTable } from "./users";
import { speciesTable } from "./species";

export const charactersTable = pgTable("characters", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  level: integer().notNull().default(1),
  userId: integer()
    .references(() => usersTable.id)
    .notNull(),
  systemId: integer()
    .references(() => systemsTable.id)
    .notNull(),
  speciesId: integer()
    .references(() => speciesTable.id)
    .notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
