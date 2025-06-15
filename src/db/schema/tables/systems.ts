import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { System } from "../enums";

export const systems = pgTable("systems", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: text("slug").notNull().unique().$type<System>(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
