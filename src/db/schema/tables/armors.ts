import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { armorTypeEnum } from "../enums";
import { systems } from "./systems";

export const armors = pgTable("armors", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: text("slug").notNull().unique(),
  defaultName: text("default_name").notNull(),
  defaultDescription: text("default_description"),
  systemId: integer("system_id")
    .notNull()
    .references(() => systems.id),

  armorType: armorTypeEnum("armor_type"),
  // base AC (ex: 11 for leather armor)
  baseArmorClass: integer("armor_class"),

  // fixed bonus on AC (ex: +2 shield)
  armorTypeBonus: integer("armor_type_bonus"),
  hasDexterityBonus: boolean("has_dexterity_bonus").notNull().default(false),
  // max dex bonus (ex: +2 hide armor) given by the armor
  maxDexterityBonus: integer("max_dexterity_bonus"),
  hasStealthDisadvantage: boolean("has_stealth_disadvantage").notNull(),
  // can the character swim wearing this armor?
  canSwim: boolean("can_swim"),
  // weight in lb
  weight: integer("weight"),
  // value in copper pieces (1 gp = 100 cp, 1 sp = 10 cp)
  value: integer("value"),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
