import { integer, pgTable, text } from "drizzle-orm/pg-core";
import { abilities } from "./abilities";
import { species } from "./species";

export const specieAbilities = pgTable("specie_abilities", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  speciesId: text("species_id")
    .notNull()
    .references(() => species.id),
  abilityId: text("ability_id")
    .notNull()
    .references(() => abilities.id),
});
