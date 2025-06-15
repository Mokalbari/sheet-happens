import { relations } from "drizzle-orm";
import { abilities } from "./tables/abilities";
import { classAbilities } from "./tables/class-abilities";
import { classMasteries } from "./tables/class-masteries";
import { classSkills } from "./tables/class-skills";
import { classes } from "./tables/classes";
import { skills } from "./tables/skills";
import { systems } from "./tables/systems";
import { weaponHasProperties } from "./tables/weapon-has-properties";
import { weapons } from "./tables/weapons";

export const systemsRelations = relations(systems, ({ many }) => ({
  abilities: many(abilities),
  skills: many(skills),
  classes: many(classes),
}));

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

export const weaponsRelations = relations(weapons, ({ one, many }) => ({
  system: one(systems, {
    fields: [weapons.systemId],
    references: [systems.id],
  }),
  properties: many(weaponHasProperties),
}));
