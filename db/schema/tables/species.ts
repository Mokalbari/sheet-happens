import { boolean, jsonb, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { systems } from "./systems";
import { SizeEnum } from "../enums";

export const species = pgTable("species", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  systemId: text("system_id")
    .notNull()
    .references(() => systems.id),
  name: text("name").notNull(),
  slug: text("slug").notNull(),
  size: text("size", { enum: SizeEnum }).notNull(),
  description: text("description"),
  traits: jsonb("traits").notNull().default({}),
  isHomebrew: boolean("is_homebrew").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
