import { integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { featLogicEnum } from "../enums";
import { abilities } from "./abilities";
import { feats } from "./feats";

export const featsRequiredAbilities = pgTable("feats_required_abilities", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  featId: integer("feat_id").references(() => feats.id),
  abilityId: integer("ability_id").references(() => abilities.id),
  // AND or OR -> Str AND Dex || Str OR Dex
  logic: featLogicEnum("logic"),
  // Str -> 13, Dex -> 13...
  minAbilityScore: integer("min_ability_score").notNull().default(1),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
