import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { armorTypeEnum } from "../enums";

export const armors = pgTable("armors", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: text("slug").notNull().unique(),
  defaultName: text("default_name").notNull(),
  defaultDescription: text("default_description"),
  systemId: integer("system_id"),

  armorType: armorTypeEnum("armor_type").notNull(),
  baseArmorClass: integer("armor_class"),
  armorTypeBonus: integer("armor_type_bonus"),
  hasDexterityBonus: boolean("has_dexterity_bonus").notNull().default(false),
  maxDexterityBonus: integer("max_dexterity_bonus"),
  hasStealthDisadvantage: boolean("has_stealth_disadvantage").notNull(),
  weight: integer("weight"),
  value: integer("value"),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
