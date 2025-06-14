import { integer, jsonb, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { classes } from "./classes";
import { species } from "./species";
import { systems } from "./systems";
import { users } from "./users";

type Stats = {
  hp: number;
  ac: number;
  initiative: number;
  xp?: number;
};

export const characters = pgTable("characters", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  playerId: text("player_id")
    .notNull()
    .references(() => users.id),
  systemId: text("system_id")
    .notNull()
    .references(() => systems.id),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  speciesId: text("species_id")
    .notNull()
    .references(() => species.id),
  characterClassId: text("character_class_id")
    .notNull()
    .references(() => classes.id),
  level: integer("level").notNull().default(1),
  stats: jsonb("stats").notNull().default({}).$type<Stats>(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
