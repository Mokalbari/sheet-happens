import { relations } from "drizzle-orm/relations";
import { systems, backgrounds, backgroundSkills, skills, classes, classMasteries, abilities, classAbilities, classFeatures, subclasses, classSkills, armors, feats, featGrantsSkills, featGrantsTools, tools, featGrantsSpells, spells, heroes, heroAbilityScores, lootables, species, toolsCraftLootables, backgroundAbilities, featGrantsAbilities, weapons, featsRequiredAbilities, users, subspecies, speciesTraits, heroEquipment, heroHasFeats, heroHasSpells, heroHitDice, heroSpellPreparations, heroSpellSlots, heroStats } from "./schema";

export const backgroundsRelations = relations(backgrounds, ({one, many}) => ({
	system: one(systems, {
		fields: [backgrounds.systemId],
		references: [systems.id]
	}),
	backgroundSkills: many(backgroundSkills),
	backgroundAbilities: many(backgroundAbilities),
	heroes: many(heroes),
}));

export const systemsRelations = relations(systems, ({many}) => ({
	backgrounds: many(backgrounds),
	abilities: many(abilities),
	classFeatures: many(classFeatures),
	armors: many(armors),
	feats: many(feats),
	lootables: many(lootables),
	species: many(species),
	spells: many(spells),
	skills: many(skills),
	classes: many(classes),
	subclasses: many(subclasses),
	tools: many(tools),
	weapons: many(weapons),
	heroes: many(heroes),
	speciesTraits: many(speciesTraits),
	subspecies: many(subspecies),
}));

export const backgroundSkillsRelations = relations(backgroundSkills, ({one}) => ({
	background: one(backgrounds, {
		fields: [backgroundSkills.backgroundId],
		references: [backgrounds.id]
	}),
	skill: one(skills, {
		fields: [backgroundSkills.skillId],
		references: [skills.id]
	}),
}));

export const skillsRelations = relations(skills, ({one, many}) => ({
	backgroundSkills: many(backgroundSkills),
	classSkills: many(classSkills),
	featGrantsSkills: many(featGrantsSkills),
	system: one(systems, {
		fields: [skills.systemId],
		references: [systems.id]
	}),
	ability: one(abilities, {
		fields: [skills.abilityId],
		references: [abilities.id]
	}),
}));

export const classMasteriesRelations = relations(classMasteries, ({one}) => ({
	class: one(classes, {
		fields: [classMasteries.classId],
		references: [classes.id]
	}),
}));

export const classesRelations = relations(classes, ({one, many}) => ({
	classMasteries: many(classMasteries),
	classAbilities: many(classAbilities),
	classFeatures: many(classFeatures),
	classSkills: many(classSkills),
	system: one(systems, {
		fields: [classes.systemId],
		references: [systems.id]
	}),
	subclasses: many(subclasses),
	heroes: many(heroes),
}));

export const abilitiesRelations = relations(abilities, ({one, many}) => ({
	system: one(systems, {
		fields: [abilities.systemId],
		references: [systems.id]
	}),
	classAbilities: many(classAbilities),
	heroAbilityScores: many(heroAbilityScores),
	skills: many(skills),
	backgroundAbilities: many(backgroundAbilities),
	featGrantsAbilities_abilityId: many(featGrantsAbilities, {
		relationName: "featGrantsAbilities_abilityId_abilities_id"
	}),
	featGrantsAbilities_specificAbilityId: many(featGrantsAbilities, {
		relationName: "featGrantsAbilities_specificAbilityId_abilities_id"
	}),
	tools: many(tools),
	featsRequiredAbilities: many(featsRequiredAbilities),
}));

export const classAbilitiesRelations = relations(classAbilities, ({one}) => ({
	class: one(classes, {
		fields: [classAbilities.classId],
		references: [classes.id]
	}),
	ability: one(abilities, {
		fields: [classAbilities.abilityId],
		references: [abilities.id]
	}),
}));

export const classFeaturesRelations = relations(classFeatures, ({one}) => ({
	class: one(classes, {
		fields: [classFeatures.classId],
		references: [classes.id]
	}),
	subclass: one(subclasses, {
		fields: [classFeatures.subclassId],
		references: [subclasses.id]
	}),
	system: one(systems, {
		fields: [classFeatures.systemId],
		references: [systems.id]
	}),
}));

export const subclassesRelations = relations(subclasses, ({one, many}) => ({
	classFeatures: many(classFeatures),
	class: one(classes, {
		fields: [subclasses.classId],
		references: [classes.id]
	}),
	system: one(systems, {
		fields: [subclasses.systemId],
		references: [systems.id]
	}),
	heroes: many(heroes),
}));

export const classSkillsRelations = relations(classSkills, ({one}) => ({
	class: one(classes, {
		fields: [classSkills.classId],
		references: [classes.id]
	}),
	skill: one(skills, {
		fields: [classSkills.skillId],
		references: [skills.id]
	}),
}));

export const armorsRelations = relations(armors, ({one, many}) => ({
	system: one(systems, {
		fields: [armors.systemId],
		references: [systems.id]
	}),
	heroEquipments: many(heroEquipment),
}));

export const featGrantsSkillsRelations = relations(featGrantsSkills, ({one}) => ({
	feat: one(feats, {
		fields: [featGrantsSkills.featId],
		references: [feats.id]
	}),
	skill: one(skills, {
		fields: [featGrantsSkills.skillId],
		references: [skills.id]
	}),
}));

export const featsRelations = relations(feats, ({one, many}) => ({
	featGrantsSkills: many(featGrantsSkills),
	featGrantsTools: many(featGrantsTools),
	featGrantsSpells: many(featGrantsSpells),
	system: one(systems, {
		fields: [feats.systemId],
		references: [systems.id]
	}),
	featGrantsAbilities: many(featGrantsAbilities),
	featsRequiredAbilities: many(featsRequiredAbilities),
	heroHasFeats: many(heroHasFeats),
}));

export const featGrantsToolsRelations = relations(featGrantsTools, ({one}) => ({
	feat: one(feats, {
		fields: [featGrantsTools.featId],
		references: [feats.id]
	}),
	tool: one(tools, {
		fields: [featGrantsTools.toolId],
		references: [tools.id]
	}),
}));

export const toolsRelations = relations(tools, ({one, many}) => ({
	featGrantsTools: many(featGrantsTools),
	toolsCraftLootables: many(toolsCraftLootables),
	ability: one(abilities, {
		fields: [tools.abilityId],
		references: [abilities.id]
	}),
	system: one(systems, {
		fields: [tools.systemId],
		references: [systems.id]
	}),
	heroEquipments: many(heroEquipment),
}));

export const featGrantsSpellsRelations = relations(featGrantsSpells, ({one}) => ({
	feat: one(feats, {
		fields: [featGrantsSpells.featId],
		references: [feats.id]
	}),
	spell: one(spells, {
		fields: [featGrantsSpells.specificSpellId],
		references: [spells.id]
	}),
}));

export const spellsRelations = relations(spells, ({one, many}) => ({
	featGrantsSpells: many(featGrantsSpells),
	system: one(systems, {
		fields: [spells.systemId],
		references: [systems.id]
	}),
	heroHasSpells: many(heroHasSpells),
	heroSpellPreparations: many(heroSpellPreparations),
}));

export const heroAbilityScoresRelations = relations(heroAbilityScores, ({one}) => ({
	hero: one(heroes, {
		fields: [heroAbilityScores.heroId],
		references: [heroes.id]
	}),
	ability: one(abilities, {
		fields: [heroAbilityScores.abilityId],
		references: [abilities.id]
	}),
}));

export const heroesRelations = relations(heroes, ({one, many}) => ({
	heroAbilityScores: many(heroAbilityScores),
	user: one(users, {
		fields: [heroes.userId],
		references: [users.id]
	}),
	system: one(systems, {
		fields: [heroes.systemId],
		references: [systems.id]
	}),
	class: one(classes, {
		fields: [heroes.classId],
		references: [classes.id]
	}),
	subclass: one(subclasses, {
		fields: [heroes.subclassId],
		references: [subclasses.id]
	}),
	background: one(backgrounds, {
		fields: [heroes.backgroundId],
		references: [backgrounds.id]
	}),
	species: one(species, {
		fields: [heroes.speciesId],
		references: [species.id]
	}),
	subspecy: one(subspecies, {
		fields: [heroes.subspeciesId],
		references: [subspecies.id]
	}),
	heroEquipments: many(heroEquipment),
	heroHasFeats: many(heroHasFeats),
	heroHasSpells: many(heroHasSpells),
	heroHitDices: many(heroHitDice),
	heroSpellPreparations: many(heroSpellPreparations),
	heroSpellSlots: many(heroSpellSlots),
	heroStats: many(heroStats),
}));

export const lootablesRelations = relations(lootables, ({one, many}) => ({
	system: one(systems, {
		fields: [lootables.systemId],
		references: [systems.id]
	}),
	toolsCraftLootables: many(toolsCraftLootables),
	heroEquipments: many(heroEquipment),
}));

export const speciesRelations = relations(species, ({one, many}) => ({
	system: one(systems, {
		fields: [species.systemId],
		references: [systems.id]
	}),
	heroes: many(heroes),
	speciesTraits: many(speciesTraits),
	subspecies: many(subspecies),
}));

export const toolsCraftLootablesRelations = relations(toolsCraftLootables, ({one}) => ({
	tool: one(tools, {
		fields: [toolsCraftLootables.toolId],
		references: [tools.id]
	}),
	lootable: one(lootables, {
		fields: [toolsCraftLootables.lootableId],
		references: [lootables.id]
	}),
}));

export const backgroundAbilitiesRelations = relations(backgroundAbilities, ({one}) => ({
	background: one(backgrounds, {
		fields: [backgroundAbilities.backgroundId],
		references: [backgrounds.id]
	}),
	ability: one(abilities, {
		fields: [backgroundAbilities.abilityId],
		references: [abilities.id]
	}),
}));

export const featGrantsAbilitiesRelations = relations(featGrantsAbilities, ({one}) => ({
	feat: one(feats, {
		fields: [featGrantsAbilities.featId],
		references: [feats.id]
	}),
	ability_abilityId: one(abilities, {
		fields: [featGrantsAbilities.abilityId],
		references: [abilities.id],
		relationName: "featGrantsAbilities_abilityId_abilities_id"
	}),
	ability_specificAbilityId: one(abilities, {
		fields: [featGrantsAbilities.specificAbilityId],
		references: [abilities.id],
		relationName: "featGrantsAbilities_specificAbilityId_abilities_id"
	}),
}));

export const weaponsRelations = relations(weapons, ({one, many}) => ({
	system: one(systems, {
		fields: [weapons.systemId],
		references: [systems.id]
	}),
	heroEquipments: many(heroEquipment),
}));

export const featsRequiredAbilitiesRelations = relations(featsRequiredAbilities, ({one}) => ({
	feat: one(feats, {
		fields: [featsRequiredAbilities.featId],
		references: [feats.id]
	}),
	ability: one(abilities, {
		fields: [featsRequiredAbilities.abilityId],
		references: [abilities.id]
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	heroes: many(heroes),
}));

export const subspeciesRelations = relations(subspecies, ({one, many}) => ({
	heroes: many(heroes),
	species: one(species, {
		fields: [subspecies.speciesId],
		references: [species.id]
	}),
	system: one(systems, {
		fields: [subspecies.systemId],
		references: [systems.id]
	}),
}));

export const speciesTraitsRelations = relations(speciesTraits, ({one}) => ({
	species: one(species, {
		fields: [speciesTraits.speciesId],
		references: [species.id]
	}),
	system: one(systems, {
		fields: [speciesTraits.systemId],
		references: [systems.id]
	}),
}));

export const heroEquipmentRelations = relations(heroEquipment, ({one}) => ({
	hero: one(heroes, {
		fields: [heroEquipment.heroId],
		references: [heroes.id]
	}),
	armor: one(armors, {
		fields: [heroEquipment.armorId],
		references: [armors.id]
	}),
	weapon: one(weapons, {
		fields: [heroEquipment.weaponId],
		references: [weapons.id]
	}),
	tool: one(tools, {
		fields: [heroEquipment.toolId],
		references: [tools.id]
	}),
	lootable: one(lootables, {
		fields: [heroEquipment.lootableId],
		references: [lootables.id]
	}),
}));

export const heroHasFeatsRelations = relations(heroHasFeats, ({one}) => ({
	hero: one(heroes, {
		fields: [heroHasFeats.heroId],
		references: [heroes.id]
	}),
	feat: one(feats, {
		fields: [heroHasFeats.featId],
		references: [feats.id]
	}),
}));

export const heroHasSpellsRelations = relations(heroHasSpells, ({one}) => ({
	hero: one(heroes, {
		fields: [heroHasSpells.heroId],
		references: [heroes.id]
	}),
	spell: one(spells, {
		fields: [heroHasSpells.spellId],
		references: [spells.id]
	}),
}));

export const heroHitDiceRelations = relations(heroHitDice, ({one}) => ({
	hero: one(heroes, {
		fields: [heroHitDice.heroId],
		references: [heroes.id]
	}),
}));

export const heroSpellPreparationsRelations = relations(heroSpellPreparations, ({one}) => ({
	hero: one(heroes, {
		fields: [heroSpellPreparations.heroId],
		references: [heroes.id]
	}),
	spell: one(spells, {
		fields: [heroSpellPreparations.spellId],
		references: [spells.id]
	}),
}));

export const heroSpellSlotsRelations = relations(heroSpellSlots, ({one}) => ({
	hero: one(heroes, {
		fields: [heroSpellSlots.heroId],
		references: [heroes.id]
	}),
}));

export const heroStatsRelations = relations(heroStats, ({one}) => ({
	hero: one(heroes, {
		fields: [heroStats.heroId],
		references: [heroes.id]
	}),
}));