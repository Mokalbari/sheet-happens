import {
  boolean,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { systemsTable } from "./systems";

type Size = "tiny" | "small" | "medium" | "large" | "huge";

type SpeciesTraits = {
  size: Size;
  speed: number;
  hasDarkvision: boolean;
};

type SpeciesFeatures = {
  name: string;
  description: string;
};

const sizeEnum = pgEnum("size", ["tiny", "small", "medium", "large", "huge"]);

export const speciesTable = pgTable("species", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull().unique(),
  size: sizeEnum("size").notNull().default("medium"),
  systemId: integer()
    .references(() => systemsTable.id)
    .notNull(),
  description: text(),
  traits: jsonb("traits").notNull().default({}).$type<SpeciesTraits>(),
  features: jsonb("features").default({}).$type<SpeciesFeatures[]>(),
  isHomebrew: boolean("is_homebrew").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
