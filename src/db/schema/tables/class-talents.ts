import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { classes } from "./classes";

export const classTalents = pgTable("class_talents", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  classId: integer().references(() => classes.id),
  slug: text().notNull().unique(),
  defaultName: text().notNull(),
  defaultDescription: text(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
});
