import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { armors } from "./armors";
import { heroes } from "./heroes";
import { lootables } from "./lootables";
import { tools } from "./tools";
import { weapons } from "./weapons";

export const heroEquipment = pgTable("hero_equipment", {
  // ids and references
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  heroId: integer("hero_id")
    .notNull()
    .references(() => heroes.id),

  // item references (polymorphic - can reference different item types)
  armorId: integer("armor_id").references(() => armors.id),
  weaponId: integer("weapon_id").references(() => weapons.id),
  toolId: integer("tool_id").references(() => tools.id),
  lootableId: integer("lootable_id").references(() => lootables.id),

  // equipment details
  quantity: integer("quantity").notNull().default(1),
  isEquipped: boolean("is_equipped").notNull().default(false),
  equipmentSlot: text("equipment_slot"), // e.g., "head", "chest", "main_hand", "off_hand", "backpack"

  // item state
  isAttuned: boolean("is_attuned").notNull().default(false),
  charges: integer("charges"), // for items with charges
  durability: integer("durability"), // current durability if applicable

  // custom properties
  customName: text("custom_name"), // if player renamed the item
  notes: text("notes"), // player notes about the item

  // timestamps
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
