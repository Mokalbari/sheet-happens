import { integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { feats } from "./feats";
import { tools } from "./tools";

export const featGrantsTools = pgTable("feat_grants_tools", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  featId: integer("feat_id")
    .notNull()
    .references(() => feats.id),
  toolId: integer("tool_id")
    .notNull()
    .references(() => tools.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
