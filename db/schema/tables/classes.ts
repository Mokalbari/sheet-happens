import { integer, pgTable, text } from "drizzle-orm/pg-core";
import { systems } from "./systems";

export const classes = pgTable("classes", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  systemId: text("system_id")
    .notNull()
    .references(() => systems.id),
  name: text("name").notNull(),
  slug: text("slug").notNull(),
  // todo
});
