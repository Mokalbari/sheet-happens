import {
  boolean,
  integer,
  jsonb,
  pgTable,
  timestamp,
} from "drizzle-orm/pg-core";
import { abilityScoreGrantTypeEnum } from "../enums";
import { abilities } from "./abilities";
import { feats } from "./feats";

export const featGrantsAbilities = pgTable("feat_grants_abilities", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  featId: integer("feat_id")
    .notNull()
    .references(() => feats.id),

  // For ability features (like "You gain proficiency in Athletics")
  abilityId: integer("ability_id").references(() => abilities.id),

  // For ability score bonuses
  isAbilityScoreBonus: boolean("is_ability_score_bonus")
    .notNull()
    .default(false),
  grantType: abilityScoreGrantTypeEnum("grant_type"),

  // For specific_ability: the exact ability to grant bonus to
  specificAbilityId: integer("specific_ability_id").references(
    () => abilities.id
  ),

  // For ability_choice: list of ability IDs to choose from
  abilityChoiceIds: jsonb("ability_choice_ids").$type<number[]>(),

  // For multiple_abilities: structured bonus grants
  // Format: [{abilityId: 1, bonus: 2}, {abilityId: 2, bonus: 1}]
  multipleAbilityBonuses: jsonb("multiple_ability_bonuses").$type<
    Array<{ abilityId: number; bonus: number }>
  >(),

  // For any_ability: just the bonus amount
  anyAbilityBonus: integer("any_ability_bonus"),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
