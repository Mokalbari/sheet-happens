import { boolean, integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { classes } from "./classes";

export const classMasteries = pgTable("class_masteries", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  classId: integer("class_id")
    .notNull()
    .references(() => classes.id)
    .unique(),
  hasLightArmorMastery: boolean("has_light_armor_mastery")
    .notNull()
    .default(false),
  hasMediumArmorMastery: boolean("has_medium_armor_mastery")
    .notNull()
    .default(false),
  hasHeavyArmorMastery: boolean("has_heavy_armor_mastery")
    .notNull()
    .default(false),
  hasShieldMastery: boolean("has_shield_mastery").notNull().default(false),
  hasSimpleWeaponMastery: boolean("has_simple_weapon_mastery")
    .notNull()
    .default(false),
  hasMartialWeaponMastery: boolean("has_martial_weapon_mastery")
    .notNull()
    .default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
