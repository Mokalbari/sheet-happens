import { relations } from "drizzle-orm";
import { abilities } from "./tables/abilities";
import { skills } from "./tables/skills";
import { systems } from "./tables/systems";
import { classAbilities } from "./tables/class-abilities";
import { classSkills } from "./tables/class-skills";
import { classes } from "./tables/classes";

export const systemsRelations = relations(systems, ({ many }) => ({
  abilities: many(abilities),
  skills: many(skills),
}));

export const abilitiesRelations = relations(abilities, ({ many }) => ({
  skills: many(skills),
}));

export const classesRelations = relations(classes, ({ many }) => ({
  abilities: many(classAbilities),
  skills: many(classSkills),
}));
