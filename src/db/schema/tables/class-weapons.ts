import { integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { classes } from "./classes";
import { weapons } from "./weapons";

export const classWeapons = pgTable("class_weapons", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  classId: integer("class_id")
    .notNull()
    .references(() => classes.id),
  weaponId: integer("weapon_id")
    .notNull()
    .references(() => weapons.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
