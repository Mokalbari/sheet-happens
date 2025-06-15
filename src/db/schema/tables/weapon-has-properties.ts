import { integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { weaponProperties } from "./weapon-properties";
import { weapons } from "./weapons";

export const weaponHasProperties = pgTable("weapon_has_properties", {
  weaponId: integer("weapon_id")
    .notNull()
    .references(() => weapons.id),
  weaponPropertyId: integer("weapon_property_id")
    .notNull()
    .references(() => weaponProperties.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
