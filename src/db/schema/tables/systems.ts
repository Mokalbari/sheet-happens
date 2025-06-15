import { integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { systemEnum } from "../enums";

export const systems = pgTable("systems", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: systemEnum().notNull().default("dd5e2024"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
