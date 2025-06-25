import { relations } from "drizzle-orm";
import { abilities } from "./tables/abilities";
import { classAbilities } from "./tables/class-abilities";
import { classMasteries } from "./tables/class-masteries";
import { classSkills } from "./tables/class-skills";
import { classes } from "./tables/classes";
import { heroes } from "./tables/heroes";
import { lootables } from "./tables/lootables";
import { skills } from "./tables/skills";
import { species } from "./tables/species";
import { speciesTraits } from "./tables/species-traits";
import { spells } from "./tables/spells";
import { systems } from "./tables/systems";
import { tools } from "./tables/tools";
import { toolsCraftLootables } from "./tables/tools-craft-lootables";
import { users } from "./tables/users";
import { weaponHasProperties } from "./tables/weapon-has-properties";
import { weapons } from "./tables/weapons";

export const abilitiesRelations = relations(abilities, ({ one, many }) => ({
  skills: many(skills),
  system: one(systems, {
    fields: [abilities.systemId],
    references: [systems.id],
  }),
}));

export const classesRelations = relations(classes, ({ one, many }) => ({
  system: one(systems, {
    fields: [classes.systemId],
    references: [systems.id],
  }),
  abilities: many(classAbilities),
  skills: many(classSkills),
  mastery: one(classMasteries, {
    fields: [classes.id],
    references: [classMasteries.classId],
  }),
}));

export const heroesRelations = relations(heroes, ({ one }) => ({
  user: one(users, {
    fields: [heroes.userId],
    references: [users.id],
  }),
  system: one(systems, {
    fields: [heroes.systemId],
    references: [systems.id],
  }),
}));

export const lootablesRelations = relations(lootables, ({ one, many }) => ({
  system: one(systems, {
    fields: [lootables.systemId],
    references: [systems.id],
  }),
  tools: many(toolsCraftLootables),
}));

export const speciesRelations = relations(species, ({ one, many }) => ({
  system: one(systems, {
    fields: [species.systemId],
    references: [systems.id],
  }),
  traits: many(speciesTraits),
}));

export const speciesTraitsRelations = relations(
  speciesTraits,
  ({ one, many }) => ({
    system: one(systems, {
      fields: [speciesTraits.systemId],
      references: [systems.id],
    }),
    species: one(species, {
      fields: [speciesTraits.speciesId],
      references: [species.id],
    }),
  })
);

export const spellsRelations = relations(spells, ({ one }) => ({
  system: one(systems, {
    fields: [spells.systemId],
    references: [systems.id],
  }),
}));

export const systemsRelations = relations(systems, ({ many }) => ({
  abilities: many(abilities),
  skills: many(skills),
  classes: many(classes),
  heroes: many(heroes),
  spells: many(spells),
  tools: many(tools),
  lootables: many(lootables),
}));

export const toolsRelations = relations(tools, ({ one, many }) => ({
  system: one(systems, {
    fields: [tools.systemId],
    references: [systems.id],
  }),
  ability: one(abilities, {
    fields: [tools.abilityId],
    references: [abilities.id],
  }),
  lootables: many(toolsCraftLootables),
}));

export const weaponsRelations = relations(weapons, ({ one, many }) => ({
  system: one(systems, {
    fields: [weapons.systemId],
    references: [systems.id],
  }),
  properties: many(weaponHasProperties),
}));
