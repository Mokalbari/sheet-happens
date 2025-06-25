import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { hitDiceEnum, weaponMasteryEnum, weaponTypeEnum } from "../enums";
import { systems } from "./systems";

export const weapons = pgTable("weapons", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: text("slug").notNull().unique(),
  defaultName: text("default_name").notNull(),
  defaultDescription: text("default_description"),
  defaultDamageDice: hitDiceEnum("default_damage_dice").notNull(),
  secondaryDamageDice: hitDiceEnum("secondary_damage_dice"),
  weaponType: weaponTypeEnum("weapon_type").notNull(),
  weaponMastery: weaponMasteryEnum("weapon_mastery"),
  systemId: integer("system_id")
    .notNull()
    .references(() => systems.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
