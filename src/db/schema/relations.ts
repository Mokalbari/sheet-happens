import { relations } from "drizzle-orm";
import { featsRequiredAbilities } from "./tables";
import { abilities } from "./tables/abilities";
import { armors } from "./tables/armors";
import { backgroundAbilities } from "./tables/background-abilities";
import { backgroundSkills } from "./tables/background-skills";
import { backgrounds } from "./tables/backgrounds";
import { classAbilities } from "./tables/class-abilities";
import { classFeatures } from "./tables/class-features";
import { classMasteries } from "./tables/class-masteries";
import { classSkills } from "./tables/class-skills";
import { classes } from "./tables/classes";
import { featGrantsAbilities } from "./tables/feat-grants-abilities";
import { featGrantsSkills } from "./tables/feat-grants-skills";
import { featGrantsSpells } from "./tables/feat-grants-spells";
import { featGrantsTools } from "./tables/feat-grants-tools";
import { feats } from "./tables/feats";
import { heroAbilityScores } from "./tables/hero-ability-scores";
import { heroEquipment } from "./tables/hero-equipment";
import { heroHasFeats } from "./tables/hero-has-feats";
import { heroHasSpells } from "./tables/hero-has-spells";
import { heroHitDice } from "./tables/hero-hit-dice";
import { heroSpellPreparations } from "./tables/hero-spell-preparations";
import { heroSpellSlots } from "./tables/hero-spell-slots";
import { heroStats } from "./tables/hero-stats";
import { heroes } from "./tables/heroes";
import { lootables } from "./tables/lootables";
import { skills } from "./tables/skills";
import { species } from "./tables/species";
import { speciesTraits } from "./tables/species-traits";
import { spells } from "./tables/spells";
import { subclasses } from "./tables/subclasses";
import { subspecies } from "./tables/subspecies";
import { systems } from "./tables/systems";
import { tools } from "./tables/tools";
import { toolsCraftLootables } from "./tables/tools-craft-lootables";
import { translations } from "./tables/translations";
import { users } from "./tables/users";
import { weapons } from "./tables/weapons";

export const abilitiesRelations = relations(abilities, ({ one, many }) => ({
  skills: many(skills),
  system: one(systems, {
    fields: [abilities.systemId],
    references: [systems.id],
  }),
  backgroundAbilities: many(backgroundAbilities),
  classAbilities: many(classAbilities),
  tools: many(tools),
  feats: many(featGrantsAbilities),
  heroAbilityScores: many(heroAbilityScores),
  featsRequiredAbilities: many(featsRequiredAbilities),
}));

export const armorsRelations = relations(armors, ({ one }) => ({
  system: one(systems, {
    fields: [armors.systemId],
    references: [systems.id],
  }),
}));

export const backgroundAbilitiesRelations = relations(
  backgroundAbilities,
  ({ one }) => ({
    background: one(backgrounds, {
      fields: [backgroundAbilities.backgroundId],
      references: [backgrounds.id],
    }),
    ability: one(abilities, {
      fields: [backgroundAbilities.abilityId],
      references: [abilities.id],
    }),
  })
);

export const backgroundSkillsRelations = relations(
  backgroundSkills,
  ({ one }) => ({
    background: one(backgrounds, {
      fields: [backgroundSkills.backgroundId],
      references: [backgrounds.id],
    }),
    skill: one(skills, {
      fields: [backgroundSkills.skillId],
      references: [skills.id],
    }),
  })
);

export const backgroundRelations = relations(backgrounds, ({ one, many }) => ({
  system: one(systems, {
    fields: [backgrounds.systemId],
    references: [systems.id],
  }),
  abilities: many(backgroundAbilities),
  skills: many(backgroundSkills),
  heroes: many(heroes),
}));

export const classAbilitiesRelations = relations(classAbilities, ({ one }) => ({
  class: one(classes, {
    fields: [classAbilities.classId],
    references: [classes.id],
  }),
  ability: one(abilities, {
    fields: [classAbilities.abilityId],
    references: [abilities.id],
  }),
}));

export const classMasteriesRelations = relations(classMasteries, ({ one }) => ({
  class: one(classes, {
    fields: [classMasteries.classId],
    references: [classes.id],
  }),
}));

export const classSkillsRelations = relations(classSkills, ({ one }) => ({
  class: one(classes, {
    fields: [classSkills.classId],
    references: [classes.id],
  }),
  skill: one(skills, {
    fields: [classSkills.skillId],
    references: [skills.id],
  }),
}));

export const classFeaturesRelations = relations(classFeatures, ({ one }) => ({
  class: one(classes, {
    fields: [classFeatures.classId],
    references: [classes.id],
  }),
  subclass: one(subclasses, {
    fields: [classFeatures.subclassId],
    references: [subclasses.id],
  }),
  system: one(systems, {
    fields: [classFeatures.systemId],
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
  heroes: many(heroes),
  features: many(classFeatures),
  subclasses: many(subclasses),
  mastery: one(classMasteries, {
    fields: [classes.id],
    references: [classMasteries.classId],
  }),
}));

export const featsRelations = relations(feats, ({ one, many }) => ({
  system: one(systems, {
    fields: [feats.systemId],
    references: [systems.id],
  }),
  abilities: many(featGrantsAbilities),
  skills: many(featGrantsSkills),
  tools: many(featGrantsTools),
  spells: many(featGrantsSpells),
  heroes: many(heroHasFeats),
  requiredAbilities: many(featsRequiredAbilities),
}));

export const featsRequiredAbilitiesRelations = relations(
  featsRequiredAbilities,
  ({ one }) => ({
    feat: one(feats, {
      fields: [featsRequiredAbilities.featId],
      references: [feats.id],
    }),
    ability: one(abilities, {
      fields: [featsRequiredAbilities.abilityId],
      references: [abilities.id],
    }),
  })
);

export const featGrantsAbilitiesRelations = relations(
  featGrantsAbilities,
  ({ one }) => ({
    feat: one(feats, {
      fields: [featGrantsAbilities.featId],
      references: [feats.id],
    }),
    ability: one(abilities, {
      fields: [featGrantsAbilities.abilityId],
      references: [abilities.id],
    }),
  })
);

export const featGrantsSkillsRelations = relations(
  featGrantsSkills,
  ({ one }) => ({
    feat: one(feats, {
      fields: [featGrantsSkills.featId],
      references: [feats.id],
    }),
    skill: one(skills, {
      fields: [featGrantsSkills.skillId],
      references: [skills.id],
    }),
  })
);

export const featGrantsToolsRelations = relations(
  featGrantsTools,
  ({ one }) => ({
    feat: one(feats, {
      fields: [featGrantsTools.featId],
      references: [feats.id],
    }),
    tool: one(tools, {
      fields: [featGrantsTools.toolId],
      references: [tools.id],
    }),
  })
);

export const featGrantsSpellsRelations = relations(
  featGrantsSpells,
  ({ one }) => ({
    feat: one(feats, {
      fields: [featGrantsSpells.featId],
      references: [feats.id],
    }),
    spell: one(spells, {
      fields: [featGrantsSpells.specificSpellId],
      references: [spells.id],
    }),
  })
);

export const heroesRelations = relations(heroes, ({ one, many }) => ({
  user: one(users, {
    fields: [heroes.userId],
    references: [users.id],
  }),
  system: one(systems, {
    fields: [heroes.systemId],
    references: [systems.id],
  }),
  background: one(backgrounds, {
    fields: [heroes.backgroundId],
    references: [backgrounds.id],
  }),
  class: one(classes, {
    fields: [heroes.classId],
    references: [classes.id],
  }),
  subclass: one(subclasses, {
    fields: [heroes.subclassId],
    references: [subclasses.id],
  }),
  species: one(species, {
    fields: [heroes.speciesId],
    references: [species.id],
  }),
  subspecies: one(subspecies, {
    fields: [heroes.subspeciesId],
    references: [subspecies.id],
  }),
  feats: many(heroHasFeats),
  spells: many(heroHasSpells),
  stats: many(heroStats),
  abilityScores: many(heroAbilityScores),
  equipment: many(heroEquipment),
  spellSlots: many(heroSpellSlots),
  hitDice: many(heroHitDice),
  spellPreparations: many(heroSpellPreparations),
}));

export const heroHasFeatsRelations = relations(heroHasFeats, ({ one }) => ({
  hero: one(heroes, {
    fields: [heroHasFeats.heroId],
    references: [heroes.id],
  }),
  feat: one(feats, {
    fields: [heroHasFeats.featId],
    references: [feats.id],
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
  subspecies: many(subspecies),
  heroes: many(heroes),
}));

export const skillsRelations = relations(skills, ({ one, many }) => ({
  system: one(systems, {
    fields: [skills.systemId],
    references: [systems.id],
  }),
  backgroundSkills: many(backgroundSkills),
  classSkills: many(classSkills),
  feats: many(featGrantsSkills),
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

export const subspeciesRelations = relations(subspecies, ({ one, many }) => ({
  system: one(systems, {
    fields: [subspecies.systemId],
    references: [systems.id],
  }),
  species: one(species, {
    fields: [subspecies.speciesId],
    references: [species.id],
  }),
  heroes: many(heroes),
}));

export const spellsRelations = relations(spells, ({ one, many }) => ({
  system: one(systems, {
    fields: [spells.systemId],
    references: [systems.id],
  }),
  feats: many(featGrantsSpells),
  heroes: many(heroHasSpells),
}));

export const systemsRelations = relations(systems, ({ many }) => ({
  armors: many(armors),
  abilities: many(abilities),
  backgrounds: many(backgrounds),
  skills: many(skills),
  classes: many(classes),
  heroes: many(heroes),
  spells: many(spells),
  tools: many(tools),
  lootables: many(lootables),
  species: many(species),
  subspecies: many(subspecies),
  feats: many(feats),
  classFeatures: many(classFeatures),
  subclasses: many(subclasses),
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
  feats: many(featGrantsTools),
}));

export const toolsCraftLootablesRelations = relations(
  toolsCraftLootables,
  ({ one }) => ({
    tool: one(tools, {
      fields: [toolsCraftLootables.toolId],
      references: [tools.id],
    }),
    lootable: one(lootables, {
      fields: [toolsCraftLootables.lootableId],
      references: [lootables.id],
    }),
  })
);

export const translationsRelations = relations(translations, ({ one }) => ({
  // Translations are polymorphic - they reference different entity types
  // No direct foreign key relationships, but entityId + entity type determine the target
}));

export const usersRelations = relations(users, ({ many }) => ({
  heroes: many(heroes),
}));

export const weaponsRelations = relations(weapons, ({ one, many }) => ({
  system: one(systems, {
    fields: [weapons.systemId],
    references: [systems.id],
  }),
}));

export const subclassesRelations = relations(subclasses, ({ one, many }) => ({
  class: one(classes, {
    fields: [subclasses.classId],
    references: [classes.id],
  }),
  system: one(systems, {
    fields: [subclasses.systemId],
    references: [systems.id],
  }),
  features: many(classFeatures),
  heroes: many(heroes),
}));

export const heroHasSpellsRelations = relations(heroHasSpells, ({ one }) => ({
  hero: one(heroes, {
    fields: [heroHasSpells.heroId],
    references: [heroes.id],
  }),
  spell: one(spells, {
    fields: [heroHasSpells.spellId],
    references: [spells.id],
  }),
}));

export const heroStatsRelations = relations(heroStats, ({ one }) => ({
  hero: one(heroes, {
    fields: [heroStats.heroId],
    references: [heroes.id],
  }),
}));

export const heroEquipmentRelations = relations(heroEquipment, ({ one }) => ({
  hero: one(heroes, {
    fields: [heroEquipment.heroId],
    references: [heroes.id],
  }),
  armor: one(armors, {
    fields: [heroEquipment.armorId],
    references: [armors.id],
  }),
  weapon: one(weapons, {
    fields: [heroEquipment.weaponId],
    references: [weapons.id],
  }),
  tool: one(tools, {
    fields: [heroEquipment.toolId],
    references: [tools.id],
  }),
  lootable: one(lootables, {
    fields: [heroEquipment.lootableId],
    references: [lootables.id],
  }),
}));

export const heroSpellSlotsRelations = relations(heroSpellSlots, ({ one }) => ({
  hero: one(heroes, {
    fields: [heroSpellSlots.heroId],
    references: [heroes.id],
  }),
}));

export const heroHitDiceRelations = relations(heroHitDice, ({ one }) => ({
  hero: one(heroes, {
    fields: [heroHitDice.heroId],
    references: [heroes.id],
  }),
}));

export const heroSpellPreparationsRelations = relations(
  heroSpellPreparations,
  ({ one }) => ({
    hero: one(heroes, {
      fields: [heroSpellPreparations.heroId],
      references: [heroes.id],
    }),
    spell: one(spells, {
      fields: [heroSpellPreparations.spellId],
      references: [spells.id],
    }),
  })
);

export const heroAbilityScoresRelations = relations(
  heroAbilityScores,
  ({ one }) => ({
    hero: one(heroes, {
      fields: [heroAbilityScores.heroId],
      references: [heroes.id],
    }),
    ability: one(abilities, {
      fields: [heroAbilityScores.abilityId],
      references: [abilities.id],
    }),
  })
);
