import { relations } from "drizzle-orm";
import { abilities, specieAbilities, species, systems } from "./tables";
import { characters } from "./tables/characters";
import { classes } from "./tables/classes";

export const specieAbilitiesRelations = relations(
  specieAbilities,
  ({ one }) => ({
    specie: one(species, {
      fields: [specieAbilities.speciesId],
      references: [species.id],
    }),
    ability: one(abilities, {
      fields: [specieAbilities.abilityId],
      references: [abilities.id],
    }),
  })
);

export const systemsRelations = relations(systems, ({ many }) => ({
  species: many(species),
  abilities: many(abilities),
  classes: many(classes),
  characters: many(characters),
}));
