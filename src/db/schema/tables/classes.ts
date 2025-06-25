import { integer, jsonb, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { ArmorType, hitDiceEnum, WeaponType } from "../enums";
import { systems } from "./systems";

export const classes = pgTable("classes", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: text("slug").notNull().unique(),
  defaultName: text("default_name").notNull(),
  defaultDescription: text("default_description"),
  defaultHitDice: hitDiceEnum("default_hit_dice").notNull(),
  systemId: integer("system_id")
    .notNull()
    .references(() => systems.id),

  armorType: jsonb("armor_type").$type<ArmorType[]>(),
  weaponType: jsonb("weapon_type").$type<WeaponType[]>(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
