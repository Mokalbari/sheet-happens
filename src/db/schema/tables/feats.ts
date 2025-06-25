import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const feats = pgTable("feats", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: text("slug").notNull().unique(),
  defaultName: text("default_name").notNull(),
  defaultDescription: text("default_description"),
  systemId: integer("system_id"),
});
