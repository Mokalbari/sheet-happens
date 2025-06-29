import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { systems } from "./systems";
import { speciesSizeEnum } from "../enums";

export const species = pgTable("species", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: text("slug").notNull().unique(),
  defaultName: text("default_name").notNull(),
  defaultDescription: text("default_description"),
  hasDarkvision: boolean("has_darkvision").notNull().default(false),
  speed: integer("speed").notNull().default(9),
  size: speciesSizeEnum("size").notNull().default("medium"),
  systemId: integer("system_id")
    .notNull()
    .references(() => systems.id),
  variant: text("variant"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
