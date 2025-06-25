import { integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { classAbilityRoleEnum } from "../enums";
import { abilities } from "./abilities";
import { classes } from "./classes";

export const classAbilities = pgTable("class_abilities", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  classId: integer("class_id")
    .notNull()
    .references(() => classes.id),
  abilityId: integer("ability_id")
    .notNull()
    .references(() => abilities.id),
  role: classAbilityRoleEnum().notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
