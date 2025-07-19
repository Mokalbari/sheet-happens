import { pgTable, foreignKey, unique, integer, text, timestamp, boolean, jsonb, numeric, pgEnum } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const abilityScoreGrantType = pgEnum("ability_score_grant_type", ['specific_ability', 'ability_choice', 'any_ability', 'multiple_abilities'])
export const alignment = pgEnum("alignment", ['lawful_good', 'neutral_good', 'chaotic_good', 'lawful_neutral', 'true_neutral', 'chaotic_neutral', 'lawful_evil', 'neutral_evil', 'chaotic_evil'])
export const areaOfEffect = pgEnum("area_of_effect", ['sphere', 'cube', 'cylinder', 'line'])
export const armorType = pgEnum("armor_type", ['light', 'medium', 'heavy', 'shield'])
export const classAbilityRole = pgEnum("class_ability_role", ['main', 'save'])
export const dnd5EClass = pgEnum("dnd5e_class", ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard'])
export const featLogic = pgEnum("feat_logic", ['AND', 'OR'])
export const heroInformation = pgEnum("hero_information", ['appearance', 'backstory', 'personalityTraits', 'ideals', 'bonds', 'flaws'])
export const hitDice = pgEnum("hit_dice", ['d4', 'd6', 'd8', 'd10', 'd12', '2d6'])
export const locale = pgEnum("locale", ['en', 'fr'])
export const rangeType = pgEnum("range_type", ['close', 'near', 'far', 'close/near', 'close/far'])
export const speciesSize = pgEnum("species_size", ['tiny', 'small', 'medium', 'large', 'huge', 'gargantuan'])
export const spellCastingTime = pgEnum("spell_casting_time", ['bonus_action', 'action', 'reaction', 'minute', 'hour', 'day'])
export const spellDuration = pgEnum("spell_duration", ['instant', 'long', 'until_dispelled'])
export const spellGrantType = pgEnum("spell_grant_type", ['specific_spell', 'spell_choice', 'class_spell_choice', 'school_spell_choice', 'level_spell_choice'])
export const spellRange = pgEnum("spell_range", ['touch', 'self', 'range', 'infinite'])
export const spellSavingThrow = pgEnum("spell_saving_throw", ['strength', 'dexterity', 'constitution', 'wisdom', 'intelligence', 'charisma'])
export const spellSchool = pgEnum("spell_school", ['abjuration', 'conjuration', 'divination', 'enchantment', 'evocation', 'illusion', 'necromancy', 'transmutation'])
export const system = pgEnum("system", ['dd5e2024', 'homebrew', 'shadow-dark'])
export const translationEntity = pgEnum("translation_entity", ['abilities', 'armors', 'backgrounds', 'classFeatures', 'classes', 'feats', 'lootables', 'skills', 'species', 'speciesTraits', 'subspecies', 'spells', 'subclasses', 'tools', 'weapons', 'weaponProperties'])
export const weaponDamageType = pgEnum("weapon_damage_type", ['bludgeoning', 'piercing', 'slashing'])
export const weaponMastery = pgEnum("weapon_mastery", ['cleave', 'graze', 'nick', 'push', 'sap', 'slow', 'topple', 'vex'])
export const weaponProperty = pgEnum("weapon_property", ['ammunition', 'finesse', 'heavy', 'light', 'loading', 'reach', 'special', 'range', 'thrown', 'two-handed', 'versatile'])
export const weaponType = pgEnum("weapon_type", ['simple', 'martial', 'exotic', 'melee', 'range', 'melee/range'])


export const backgrounds = pgTable("backgrounds", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "backgrounds_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	slug: text().notNull(),
	defaultName: text("default_name").notNull(),
	defaultDescription: text("default_description"),
	systemId: integer("system_id").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.systemId],
			foreignColumns: [systems.id],
			name: "backgrounds_system_id_systems_id_fk"
		}),
	unique("backgrounds_slug_unique").on(table.slug),
]);

export const backgroundSkills = pgTable("background_skills", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "background_skills_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	backgroundId: integer("background_id").notNull(),
	skillId: integer("skill_id").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.backgroundId],
			foreignColumns: [backgrounds.id],
			name: "background_skills_background_id_backgrounds_id_fk"
		}),
	foreignKey({
			columns: [table.skillId],
			foreignColumns: [skills.id],
			name: "background_skills_skill_id_skills_id_fk"
		}),
]);

export const classMasteries = pgTable("class_masteries", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "class_masteries_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	classId: integer("class_id").notNull(),
	hasLightArmorMastery: boolean("has_light_armor_mastery").default(false).notNull(),
	hasMediumArmorMastery: boolean("has_medium_armor_mastery").default(false).notNull(),
	hasHeavyArmorMastery: boolean("has_heavy_armor_mastery").default(false).notNull(),
	hasShieldMastery: boolean("has_shield_mastery").default(false).notNull(),
	hasSimpleWeaponMastery: boolean("has_simple_weapon_mastery").default(false).notNull(),
	hasMartialWeaponMastery: boolean("has_martial_weapon_mastery").default(false).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.classId],
			foreignColumns: [classes.id],
			name: "class_masteries_class_id_classes_id_fk"
		}),
	unique("class_masteries_class_id_unique").on(table.classId),
]);

export const abilities = pgTable("abilities", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "abilities_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	slug: text().notNull(),
	systemId: integer("system_id").notNull(),
	defaultName: text("default_name").notNull(),
	defaultDescription: text("default_description"),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.systemId],
			foreignColumns: [systems.id],
			name: "abilities_system_id_systems_id_fk"
		}),
	unique("abilities_slug_unique").on(table.slug),
]);

export const classAbilities = pgTable("class_abilities", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "class_abilities_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	classId: integer("class_id").notNull(),
	abilityId: integer("ability_id").notNull(),
	role: classAbilityRole().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.classId],
			foreignColumns: [classes.id],
			name: "class_abilities_class_id_classes_id_fk"
		}),
	foreignKey({
			columns: [table.abilityId],
			foreignColumns: [abilities.id],
			name: "class_abilities_ability_id_abilities_id_fk"
		}),
]);

export const classFeatures = pgTable("class_features", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "class_features_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	slug: text().notNull(),
	defaultName: text("default_name").notNull(),
	defaultDescription: text("default_description"),
	classId: integer("class_id").notNull(),
	subclassId: integer("subclass_id"),
	systemId: integer("system_id").notNull(),
	level: integer(),
	featureType: text("feature_type"),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.classId],
			foreignColumns: [classes.id],
			name: "class_features_class_id_classes_id_fk"
		}),
	foreignKey({
			columns: [table.subclassId],
			foreignColumns: [subclasses.id],
			name: "class_features_subclass_id_subclasses_id_fk"
		}),
	foreignKey({
			columns: [table.systemId],
			foreignColumns: [systems.id],
			name: "class_features_system_id_systems_id_fk"
		}),
	unique("class_features_slug_unique").on(table.slug),
]);

export const classSkills = pgTable("class_skills", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "class_skills_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	classId: integer("class_id").notNull(),
	skillId: integer("skill_id").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.classId],
			foreignColumns: [classes.id],
			name: "class_skills_class_id_classes_id_fk"
		}),
	foreignKey({
			columns: [table.skillId],
			foreignColumns: [skills.id],
			name: "class_skills_skill_id_skills_id_fk"
		}),
]);

export const armors = pgTable("armors", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "armors_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	slug: text().notNull(),
	defaultName: text("default_name").notNull(),
	defaultDescription: text("default_description"),
	systemId: integer("system_id").notNull(),
	armorType: armorType("armor_type"),
	armorClass: integer("armor_class"),
	armorTypeBonus: integer("armor_type_bonus"),
	hasDexterityBonus: boolean("has_dexterity_bonus").default(false).notNull(),
	maxDexterityBonus: integer("max_dexterity_bonus"),
	hasStealthDisadvantage: boolean("has_stealth_disadvantage").notNull(),
	weight: integer(),
	value: integer(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
	canSwim: boolean("can_swim"),
}, (table) => [
	foreignKey({
			columns: [table.systemId],
			foreignColumns: [systems.id],
			name: "armors_system_id_systems_id_fk"
		}),
	unique("armors_slug_unique").on(table.slug),
]);

export const featGrantsSkills = pgTable("feat_grants_skills", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "feat_grants_skills_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	featId: integer("feat_id").notNull(),
	skillId: integer("skill_id").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.featId],
			foreignColumns: [feats.id],
			name: "feat_grants_skills_feat_id_feats_id_fk"
		}),
	foreignKey({
			columns: [table.skillId],
			foreignColumns: [skills.id],
			name: "feat_grants_skills_skill_id_skills_id_fk"
		}),
]);

export const featGrantsTools = pgTable("feat_grants_tools", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "feat_grants_tools_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	featId: integer("feat_id").notNull(),
	toolId: integer("tool_id").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.featId],
			foreignColumns: [feats.id],
			name: "feat_grants_tools_feat_id_feats_id_fk"
		}),
	foreignKey({
			columns: [table.toolId],
			foreignColumns: [tools.id],
			name: "feat_grants_tools_tool_id_tools_id_fk"
		}),
]);

export const featGrantsSpells = pgTable("feat_grants_spells", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "feat_grants_spells_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	featId: integer("feat_id").notNull(),
	grantType: spellGrantType("grant_type").notNull(),
	specificSpellId: integer("specific_spell_id"),
	spellChoiceIds: jsonb("spell_choice_ids"),
	classSpellList: dnd5EClass("class_spell_list"),
	schoolRestriction: jsonb("school_restriction"),
	levelRestriction: jsonb("level_restriction"),
	maxSpellLevel: integer("max_spell_level"),
	casterClassRestriction: jsonb("caster_class_restriction"),
	spellCount: integer("spell_count").default(1).notNull(),
	isCantrip: boolean("is_cantrip").default(false).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.featId],
			foreignColumns: [feats.id],
			name: "feat_grants_spells_feat_id_feats_id_fk"
		}),
	foreignKey({
			columns: [table.specificSpellId],
			foreignColumns: [spells.id],
			name: "feat_grants_spells_specific_spell_id_spells_id_fk"
		}),
]);

export const heroAbilityScores = pgTable("hero_ability_scores", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "hero_ability_scores_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	heroId: integer("hero_id").notNull(),
	abilityId: integer("ability_id").notNull(),
	score: integer().default(10).notNull(),
	modifier: integer().default(0).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.heroId],
			foreignColumns: [heroes.id],
			name: "hero_ability_scores_hero_id_heroes_id_fk"
		}),
	foreignKey({
			columns: [table.abilityId],
			foreignColumns: [abilities.id],
			name: "hero_ability_scores_ability_id_abilities_id_fk"
		}),
]);

export const feats = pgTable("feats", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "feats_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	slug: text().notNull(),
	defaultName: text("default_name").notNull(),
	defaultDescription: text("default_description"),
	systemId: integer("system_id").notNull(),
	minLevel: integer("min_level").default(1).notNull(),
	isGrantingAbilityScore: boolean("is_granting_ability_score"),
	isGrantingSkill: boolean("is_granting_skill"),
	isGrantingTool: boolean("is_granting_tool"),
	isGrantingSpell: boolean("is_granting_spell"),
	isRepeatable: boolean("is_repeatable").default(false).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
	isOrigin: boolean("is_origin"),
	isEpicBoon: boolean("is_epic_boon"),
	isWeaponFighting: boolean("is_weapon_fighting"),
}, (table) => [
	foreignKey({
			columns: [table.systemId],
			foreignColumns: [systems.id],
			name: "feats_system_id_systems_id_fk"
		}),
	unique("feats_slug_unique").on(table.slug),
]);

export const lootables = pgTable("lootables", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "lootables_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	slug: text().notNull(),
	defaultName: text("default_name").notNull(),
	defaultDescription: text("default_description"),
	systemId: integer("system_id").notNull(),
	weight: integer(),
	value: integer(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.systemId],
			foreignColumns: [systems.id],
			name: "lootables_system_id_systems_id_fk"
		}),
	unique("lootables_slug_unique").on(table.slug),
]);

export const species = pgTable("species", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "species_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	slug: text().notNull(),
	defaultName: text("default_name").notNull(),
	defaultDescription: text("default_description"),
	hasDarkvision: boolean("has_darkvision").default(false).notNull(),
	speed: integer().default(9).notNull(),
	size: speciesSize().default('medium').notNull(),
	systemId: integer("system_id").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
	knownLanguages: jsonb("known_languages"),
}, (table) => [
	foreignKey({
			columns: [table.systemId],
			foreignColumns: [systems.id],
			name: "species_system_id_systems_id_fk"
		}),
	unique("species_slug_unique").on(table.slug),
]);

export const spells = pgTable("spells", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "spells_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	slug: text().notNull(),
	defaultName: text("default_name").notNull(),
	defaultDescription: text("default_description").notNull(),
	spellLevel: integer("spell_level").default(0).notNull(),
	spellSchool: spellSchool("spell_school"),
	systemId: integer("system_id").notNull(),
	spellCastingTime: spellCastingTime("spell_casting_time"),
	spellRange: spellRange("spell_range"),
	spellRangeValue: integer("spell_range_value"),
	spellDuration: spellDuration("spell_duration"),
	spellDurationValue: integer("spell_duration_value"),
	hasConcentration: boolean("has_concentration").default(false).notNull(),
	hasVerbalComponent: boolean("has_verbal_component").default(false).notNull(),
	hasSomaticComponent: boolean("has_somatic_component").default(false).notNull(),
	hasMaterialComponent: boolean("has_material_component").default(false).notNull(),
	materialComponent: text("material_component"),
	areaOfEffect: areaOfEffect("area_of_effect"),
	areaOfEffectValue: integer("area_of_effect_value"),
	spellSavingThrow: spellSavingThrow("spell_saving_throw"),
	spellDamageDice: hitDice("spell_damage_dice"),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.systemId],
			foreignColumns: [systems.id],
			name: "spells_system_id_systems_id_fk"
		}),
	unique("spells_slug_unique").on(table.slug),
]);

export const skills = pgTable("skills", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "skills_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	slug: text().notNull(),
	defaultName: text("default_name").notNull(),
	defaultDescription: text("default_description"),
	systemId: integer("system_id").notNull(),
	abilityId: integer("ability_id").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.systemId],
			foreignColumns: [systems.id],
			name: "skills_system_id_systems_id_fk"
		}),
	foreignKey({
			columns: [table.abilityId],
			foreignColumns: [abilities.id],
			name: "skills_ability_id_abilities_id_fk"
		}),
	unique("skills_slug_unique").on(table.slug),
]);

export const translations = pgTable("translations", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "translations_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	entity: translationEntity().notNull(),
	entityId: integer("entity_id").notNull(),
	field: text().notNull(),
	locale: locale().default('en').notNull(),
	value: text().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
});

export const toolsCraftLootables = pgTable("tools_craft_lootables", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "tools_craft_lootables_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	toolId: integer("tool_id").notNull(),
	lootableId: integer("lootable_id").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.toolId],
			foreignColumns: [tools.id],
			name: "tools_craft_lootables_tool_id_tools_id_fk"
		}),
	foreignKey({
			columns: [table.lootableId],
			foreignColumns: [lootables.id],
			name: "tools_craft_lootables_lootable_id_lootables_id_fk"
		}),
]);

export const users = pgTable("users", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "users_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	username: text().notNull(),
	email: text().notNull(),
	passwordHash: text("password_hash").notNull(),
	avatarUrl: text("avatar_url"),
	isActive: boolean("is_active").default(true).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	unique("users_username_unique").on(table.username),
	unique("users_email_unique").on(table.email),
]);

export const systems = pgTable("systems", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "systems_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	name: system().default('dd5e2024').notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
});

export const backgroundAbilities = pgTable("background_abilities", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "background_abilities_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	backgroundId: integer("background_id").notNull(),
	abilityId: integer("ability_id").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.backgroundId],
			foreignColumns: [backgrounds.id],
			name: "background_abilities_background_id_backgrounds_id_fk"
		}),
	foreignKey({
			columns: [table.abilityId],
			foreignColumns: [abilities.id],
			name: "background_abilities_ability_id_abilities_id_fk"
		}),
]);

export const classes = pgTable("classes", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "classes_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	slug: text().notNull(),
	defaultName: text("default_name").notNull(),
	defaultDescription: text("default_description"),
	defaultHitDice: hitDice("default_hit_dice").notNull(),
	systemId: integer("system_id").notNull(),
	armorType: jsonb("armor_type"),
	weaponType: jsonb("weapon_type"),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.systemId],
			foreignColumns: [systems.id],
			name: "classes_system_id_systems_id_fk"
		}),
	unique("classes_slug_unique").on(table.slug),
]);

export const subclasses = pgTable("subclasses", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "subclasses_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	slug: text().notNull(),
	defaultName: text("default_name").notNull(),
	defaultDescription: text("default_description"),
	classId: integer("class_id").notNull(),
	systemId: integer("system_id").notNull(),
	acquisitionLevel: integer("acquisition_level").default(3).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.classId],
			foreignColumns: [classes.id],
			name: "subclasses_class_id_classes_id_fk"
		}),
	foreignKey({
			columns: [table.systemId],
			foreignColumns: [systems.id],
			name: "subclasses_system_id_systems_id_fk"
		}),
	unique("subclasses_slug_unique").on(table.slug),
]);

export const featGrantsAbilities = pgTable("feat_grants_abilities", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "feat_grants_abilities_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	featId: integer("feat_id").notNull(),
	abilityId: integer("ability_id"),
	isAbilityScoreBonus: boolean("is_ability_score_bonus").default(false).notNull(),
	grantType: abilityScoreGrantType("grant_type"),
	specificAbilityId: integer("specific_ability_id"),
	abilityChoiceIds: jsonb("ability_choice_ids"),
	multipleAbilityBonuses: jsonb("multiple_ability_bonuses"),
	anyAbilityBonus: integer("any_ability_bonus"),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.featId],
			foreignColumns: [feats.id],
			name: "feat_grants_abilities_feat_id_feats_id_fk"
		}),
	foreignKey({
			columns: [table.abilityId],
			foreignColumns: [abilities.id],
			name: "feat_grants_abilities_ability_id_abilities_id_fk"
		}),
	foreignKey({
			columns: [table.specificAbilityId],
			foreignColumns: [abilities.id],
			name: "feat_grants_abilities_specific_ability_id_abilities_id_fk"
		}),
]);

export const tools = pgTable("tools", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "tools_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	slug: text().notNull(),
	defaultName: text("default_name").notNull(),
	defaultUtility: text("default_utility"),
	abilityId: integer("ability_id"),
	weight: integer(),
	value: integer(),
	systemId: integer("system_id").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
	defaultCraft: text("default_craft"),
	isMusicalInstrument: boolean("is_musical_instrument"),
	isGamingTool: boolean("is_gaming_tool"),
}, (table) => [
	foreignKey({
			columns: [table.abilityId],
			foreignColumns: [abilities.id],
			name: "tools_ability_id_abilities_id_fk"
		}),
	foreignKey({
			columns: [table.systemId],
			foreignColumns: [systems.id],
			name: "tools_system_id_systems_id_fk"
		}),
	unique("tools_slug_unique").on(table.slug),
]);

export const weapons = pgTable("weapons", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "weapons_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	slug: text().notNull(),
	defaultName: text("default_name").notNull(),
	defaultDescription: text("default_description"),
	defaultDamageDice: hitDice("default_damage_dice").notNull(),
	secondaryDamageDice: hitDice("secondary_damage_dice"),
	weaponType: weaponType("weapon_type").notNull(),
	weaponMastery: weaponMastery("weapon_mastery"),
	systemId: integer("system_id").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
	weight: numeric({ precision: 10, scale:  2 }),
	value: integer(),
	weaponProperties: jsonb("weapon_properties"),
	damageType: weaponDamageType("damage_type"),
	range: jsonb(),
	rangeType: rangeType("range_type"),
}, (table) => [
	foreignKey({
			columns: [table.systemId],
			foreignColumns: [systems.id],
			name: "weapons_system_id_systems_id_fk"
		}),
	unique("weapons_slug_unique").on(table.slug),
]);

export const featsRequiredAbilities = pgTable("feats_required_abilities", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "feats_required_abilities_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	featId: integer("feat_id"),
	abilityId: integer("ability_id"),
	logic: featLogic(),
	minAbilityScore: integer("min_ability_score").default(1).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.featId],
			foreignColumns: [feats.id],
			name: "feats_required_abilities_feat_id_feats_id_fk"
		}),
	foreignKey({
			columns: [table.abilityId],
			foreignColumns: [abilities.id],
			name: "feats_required_abilities_ability_id_abilities_id_fk"
		}),
]);

export const heroes = pgTable("heroes", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "heroes_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	userId: integer("user_id").notNull(),
	systemId: integer("system_id").notNull(),
	name: text().notNull(),
	classId: integer("class_id").notNull(),
	subclassId: integer("subclass_id"),
	backgroundId: integer("background_id").notNull(),
	speciesId: integer("species_id").notNull(),
	alignment: alignment(),
	extraInfo: jsonb("extra_info"),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
	subspeciesId: integer("subspecies_id"),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "heroes_user_id_users_id_fk"
		}),
	foreignKey({
			columns: [table.systemId],
			foreignColumns: [systems.id],
			name: "heroes_system_id_systems_id_fk"
		}),
	foreignKey({
			columns: [table.classId],
			foreignColumns: [classes.id],
			name: "heroes_class_id_classes_id_fk"
		}),
	foreignKey({
			columns: [table.subclassId],
			foreignColumns: [subclasses.id],
			name: "heroes_subclass_id_subclasses_id_fk"
		}),
	foreignKey({
			columns: [table.backgroundId],
			foreignColumns: [backgrounds.id],
			name: "heroes_background_id_backgrounds_id_fk"
		}),
	foreignKey({
			columns: [table.speciesId],
			foreignColumns: [species.id],
			name: "heroes_species_id_species_id_fk"
		}),
	foreignKey({
			columns: [table.subspeciesId],
			foreignColumns: [subspecies.id],
			name: "heroes_subspecies_id_subspecies_id_fk"
		}),
]);

export const speciesTraits = pgTable("species_traits", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "species_traits_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	speciesId: integer("species_id").notNull(),
	slug: text().notNull(),
	defaultName: text("default_name").notNull(),
	defaultDescription: text("default_description"),
	systemId: integer("system_id").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.speciesId],
			foreignColumns: [species.id],
			name: "species_traits_species_id_species_id_fk"
		}),
	foreignKey({
			columns: [table.systemId],
			foreignColumns: [systems.id],
			name: "species_traits_system_id_systems_id_fk"
		}),
	unique("species_traits_slug_unique").on(table.slug),
]);

export const subspecies = pgTable("subspecies", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "subspecies_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	slug: text().notNull(),
	speciesId: integer("species_id").notNull(),
	defaultName: text("default_name").notNull(),
	defaultDescription: text("default_description"),
	systemId: integer("system_id").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.speciesId],
			foreignColumns: [species.id],
			name: "subspecies_species_id_species_id_fk"
		}),
	foreignKey({
			columns: [table.systemId],
			foreignColumns: [systems.id],
			name: "subspecies_system_id_systems_id_fk"
		}),
	unique("subspecies_slug_unique").on(table.slug),
]);

export const heroEquipment = pgTable("hero_equipment", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "hero_equipment_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	heroId: integer("hero_id").notNull(),
	armorId: integer("armor_id"),
	weaponId: integer("weapon_id"),
	toolId: integer("tool_id"),
	lootableId: integer("lootable_id"),
	quantity: integer().default(1).notNull(),
	isEquipped: boolean("is_equipped").default(false).notNull(),
	equipmentSlot: text("equipment_slot"),
	isAttuned: boolean("is_attuned").default(false).notNull(),
	charges: integer(),
	durability: integer(),
	customName: text("custom_name"),
	notes: text(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.heroId],
			foreignColumns: [heroes.id],
			name: "hero_equipment_hero_id_heroes_id_fk"
		}),
	foreignKey({
			columns: [table.armorId],
			foreignColumns: [armors.id],
			name: "hero_equipment_armor_id_armors_id_fk"
		}),
	foreignKey({
			columns: [table.weaponId],
			foreignColumns: [weapons.id],
			name: "hero_equipment_weapon_id_weapons_id_fk"
		}),
	foreignKey({
			columns: [table.toolId],
			foreignColumns: [tools.id],
			name: "hero_equipment_tool_id_tools_id_fk"
		}),
	foreignKey({
			columns: [table.lootableId],
			foreignColumns: [lootables.id],
			name: "hero_equipment_lootable_id_lootables_id_fk"
		}),
]);

export const heroHasFeats = pgTable("hero_has_feats", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "hero_has_feats_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	heroId: integer("hero_id").notNull(),
	featId: integer("feat_id").notNull(),
	acquisitionLevel: integer("acquisition_level").default(1).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.heroId],
			foreignColumns: [heroes.id],
			name: "hero_has_feats_hero_id_heroes_id_fk"
		}),
	foreignKey({
			columns: [table.featId],
			foreignColumns: [feats.id],
			name: "hero_has_feats_feat_id_feats_id_fk"
		}),
]);

export const heroHasSpells = pgTable("hero_has_spells", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "hero_has_spells_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	heroId: integer("hero_id").notNull(),
	spellId: integer("spell_id").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.heroId],
			foreignColumns: [heroes.id],
			name: "hero_has_spells_hero_id_heroes_id_fk"
		}),
	foreignKey({
			columns: [table.spellId],
			foreignColumns: [spells.id],
			name: "hero_has_spells_spell_id_spells_id_fk"
		}),
]);

export const heroHitDice = pgTable("hero_hit_dice", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "hero_hit_dice_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	heroId: integer("hero_id").notNull(),
	hitDiceType: hitDice("hit_dice_type").notNull(),
	totalHitDice: integer("total_hit_dice").default(0).notNull(),
	usedHitDice: integer("used_hit_dice").default(0).notNull(),
	sourceClass: dnd5EClass("source_class"),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.heroId],
			foreignColumns: [heroes.id],
			name: "hero_hit_dice_hero_id_heroes_id_fk"
		}),
]);

export const heroSpellPreparations = pgTable("hero_spell_preparations", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "hero_spell_preparations_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	heroId: integer("hero_id").notNull(),
	spellId: integer("spell_id").notNull(),
	isPrepared: boolean("is_prepared").default(false).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.heroId],
			foreignColumns: [heroes.id],
			name: "hero_spell_preparations_hero_id_heroes_id_fk"
		}),
	foreignKey({
			columns: [table.spellId],
			foreignColumns: [spells.id],
			name: "hero_spell_preparations_spell_id_spells_id_fk"
		}),
]);

export const heroSpellSlots = pgTable("hero_spell_slots", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "hero_spell_slots_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	heroId: integer("hero_id").notNull(),
	spellLevel: integer("spell_level").notNull(),
	maxSlots: integer("max_slots").default(0).notNull(),
	usedSlots: integer("used_slots").default(0).notNull(),
	isWarlockSlot: boolean("is_warlock_slot").default(false).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.heroId],
			foreignColumns: [heroes.id],
			name: "hero_spell_slots_hero_id_heroes_id_fk"
		}),
]);

export const heroStats = pgTable("hero_stats", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "hero_stats_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	heroId: integer("hero_id").notNull(),
	maxHitPoints: integer("max_hit_points").default(0).notNull(),
	currentHitPoints: integer("current_hit_points").default(0).notNull(),
	temporaryHitPoints: integer("temporary_hit_points").default(0),
	hitDice: integer("hit_dice").default(1).notNull(),
	hitDiceValue: hitDice("hit_dice_value").notNull(),
	armorClass: integer("armor_class").default(10).notNull(),
	initiativeBonus: integer("initiative_bonus").default(0).notNull(),
	proficiencyBonus: integer("proficiency_bonus").default(2).notNull(),
	experiencePoints: integer("experience_points").default(0),
	level: integer().default(1).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.heroId],
			foreignColumns: [heroes.id],
			name: "hero_stats_hero_id_heroes_id_fk"
		}),
]);
