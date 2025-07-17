import {
  decimal,
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import {
  hitDiceEnum,
  rangeTypeEnum,
  weaponDamageTypeEnum,
  weaponMasteryEnum,
  WeaponProperty,
  weaponTypeEnum,
} from "../enums";
import { systems } from "./systems";

export const weapons = pgTable("weapons", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: text("slug").notNull().unique(),
  defaultName: text("default_name").notNull(),
  defaultDescription: text("default_description"),
  defaultDamageDice: hitDiceEnum("default_damage_dice").notNull(),
  damageType: weaponDamageTypeEnum("damage_type"),
  secondaryDamageDice: hitDiceEnum("secondary_damage_dice"),
  weaponType: weaponTypeEnum("weapon_type").notNull(),
  weaponProperties: jsonb("weapon_properties").$type<WeaponProperty[]>(),
  weaponMastery: weaponMasteryEnum("weapon_mastery"),
  range: jsonb("range").$type<{ min: number; max: number }>(),
  rangeType: rangeTypeEnum("range_type"),

  systemId: integer("system_id")
    .notNull()
    .references(() => systems.id),
  // weight in lb / or slots
  weight: decimal("weight", { precision: 10, scale: 2 }).$type<number>(),
  // value in copper pieces (1 gp = 100 cp, 1 sp = 10 cp)
  value: integer("value"),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
