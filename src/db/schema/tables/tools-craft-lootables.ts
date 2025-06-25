import { integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { lootables } from "./lootables";
import { tools } from "./tools";

export const toolsCraftLootables = pgTable("tools_craft_lootables", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  toolId: integer("tool_id")
    .references(() => tools.id)
    .notNull(),
  lootableId: integer("lootable_id")
    .references(() => lootables.id)
    .notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
