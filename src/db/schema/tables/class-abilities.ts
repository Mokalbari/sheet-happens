import { integer, jsonb, pgTable, timestamp } from "drizzle-orm/pg-core";
import { ArmorType, classAbilityRoleEnum, WeaponType } from "../enums";
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
  armorType: jsonb("armor_type").$type<ArmorType[]>(),
  weaponType: jsonb("weapon_type").$type<WeaponType[]>(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
