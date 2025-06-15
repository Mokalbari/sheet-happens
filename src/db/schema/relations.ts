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
}));

export const abilitiesRelations = relations(abilities, ({ many }) => ({
  skills: many(skills),
}));

export const classesRelations = relations(classes, ({ one, many }) => ({
  abilities: many(classAbilities),
  skills: many(classSkills),
  mastery: one(classMasteries, {
    fields: [classes.id],
    references: [classMasteries.classId],
  }),
}));

export const weaponsRelations = relations(weapons, ({ many }) => ({
  properties: many(weaponHasProperties),
}));
