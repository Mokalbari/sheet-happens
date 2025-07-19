CREATE TYPE "public"."ability_score_grant_type" AS ENUM('specific_ability', 'ability_choice', 'any_ability', 'multiple_abilities');--> statement-breakpoint
CREATE TYPE "public"."alignment" AS ENUM('lawful_good', 'neutral_good', 'chaotic_good', 'lawful_neutral', 'true_neutral', 'chaotic_neutral', 'lawful_evil', 'neutral_evil', 'chaotic_evil');--> statement-breakpoint
CREATE TYPE "public"."area_of_effect" AS ENUM('sphere', 'cube', 'cylinder', 'line');--> statement-breakpoint
CREATE TYPE "public"."armor_type" AS ENUM('light', 'medium', 'heavy', 'shield');--> statement-breakpoint
CREATE TYPE "public"."class_ability_role" AS ENUM('main', 'save');--> statement-breakpoint
CREATE TYPE "public"."dnd5e_class" AS ENUM('barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard');--> statement-breakpoint
CREATE TYPE "public"."feat_logic" AS ENUM('AND', 'OR');--> statement-breakpoint
CREATE TYPE "public"."hero_information" AS ENUM('appearance', 'backstory', 'personalityTraits', 'ideals', 'bonds', 'flaws');--> statement-breakpoint
CREATE TYPE "public"."hit_dice" AS ENUM('d4', 'd6', 'd8', 'd10', 'd12', '2d6');--> statement-breakpoint
CREATE TYPE "public"."locale" AS ENUM('en', 'fr');--> statement-breakpoint
CREATE TYPE "public"."range_type" AS ENUM('close', 'near', 'far', 'close/near', 'close/far');--> statement-breakpoint
CREATE TYPE "public"."species_size" AS ENUM('tiny', 'small', 'medium', 'large', 'huge', 'gargantuan');--> statement-breakpoint
CREATE TYPE "public"."spell_casting_time" AS ENUM('bonus_action', 'action', 'reaction', 'minute', 'hour', 'day');--> statement-breakpoint
CREATE TYPE "public"."spell_duration" AS ENUM('instant', 'long', 'until_dispelled');--> statement-breakpoint
CREATE TYPE "public"."spell_grant_type" AS ENUM('specific_spell', 'spell_choice', 'class_spell_choice', 'school_spell_choice', 'level_spell_choice');--> statement-breakpoint
CREATE TYPE "public"."spell_range" AS ENUM('touch', 'self', 'range', 'infinite');--> statement-breakpoint
CREATE TYPE "public"."spell_saving_throw" AS ENUM('strength', 'dexterity', 'constitution', 'wisdom', 'intelligence', 'charisma');--> statement-breakpoint
CREATE TYPE "public"."spell_school" AS ENUM('abjuration', 'conjuration', 'divination', 'enchantment', 'evocation', 'illusion', 'necromancy', 'transmutation');--> statement-breakpoint
CREATE TYPE "public"."system" AS ENUM('dd5e2024', 'homebrew', 'shadow-dark');--> statement-breakpoint
CREATE TYPE "public"."translation_entity" AS ENUM('abilities', 'armors', 'backgrounds', 'classFeatures', 'classes', 'feats', 'lootables', 'skills', 'species', 'speciesTraits', 'subspecies', 'spells', 'subclasses', 'tools', 'weapons', 'weaponProperties');--> statement-breakpoint
CREATE TYPE "public"."weapon_damage_type" AS ENUM('bludgeoning', 'piercing', 'slashing');--> statement-breakpoint
CREATE TYPE "public"."weapon_mastery" AS ENUM('cleave', 'graze', 'nick', 'push', 'sap', 'slow', 'topple', 'vex');--> statement-breakpoint
CREATE TYPE "public"."weapon_property" AS ENUM('ammunition', 'finesse', 'heavy', 'light', 'loading', 'reach', 'special', 'range', 'thrown', 'two-handed', 'versatile');--> statement-breakpoint
CREATE TYPE "public"."weapon_type" AS ENUM('simple', 'martial', 'exotic', 'melee', 'range', 'melee/range');--> statement-breakpoint
CREATE TABLE "abilities" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "abilities_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"slug" text NOT NULL,
	"system_id" integer NOT NULL,
	"default_name" text NOT NULL,
	"default_description" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "abilities_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "armors" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "armors_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"slug" text NOT NULL,
	"default_name" text NOT NULL,
	"default_description" text,
	"system_id" integer NOT NULL,
	"armor_type" "armor_type",
	"armor_class" integer,
	"armor_type_bonus" integer,
	"has_dexterity_bonus" boolean DEFAULT false NOT NULL,
	"max_dexterity_bonus" integer,
	"has_stealth_disadvantage" boolean NOT NULL,
	"can_swim" boolean,
	"weight" integer,
	"value" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "armors_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "background_abilities" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "background_abilities_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"background_id" integer NOT NULL,
	"ability_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "background_skills" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "background_skills_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"background_id" integer NOT NULL,
	"skill_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "backgrounds" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "backgrounds_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"slug" text NOT NULL,
	"default_name" text NOT NULL,
	"default_description" text,
	"system_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "backgrounds_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "class_abilities" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "class_abilities_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"class_id" integer NOT NULL,
	"ability_id" integer NOT NULL,
	"role" "class_ability_role" NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "class_features" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "class_features_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"slug" text NOT NULL,
	"default_name" text NOT NULL,
	"default_description" text,
	"class_id" integer NOT NULL,
	"subclass_id" integer,
	"system_id" integer NOT NULL,
	"level" integer,
	"feature_type" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "class_features_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "class_masteries" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "class_masteries_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"class_id" integer NOT NULL,
	"has_light_armor_mastery" boolean DEFAULT false NOT NULL,
	"has_medium_armor_mastery" boolean DEFAULT false NOT NULL,
	"has_heavy_armor_mastery" boolean DEFAULT false NOT NULL,
	"has_shield_mastery" boolean DEFAULT false NOT NULL,
	"has_simple_weapon_mastery" boolean DEFAULT false NOT NULL,
	"has_martial_weapon_mastery" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "class_masteries_class_id_unique" UNIQUE("class_id")
);
--> statement-breakpoint
CREATE TABLE "class_skills" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "class_skills_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"class_id" integer NOT NULL,
	"skill_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "classes" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "classes_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"slug" text NOT NULL,
	"default_name" text NOT NULL,
	"default_description" text,
	"default_hit_dice" "hit_dice" NOT NULL,
	"system_id" integer NOT NULL,
	"armor_type" jsonb,
	"weapon_type" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "classes_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "feat_grants_abilities" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "feat_grants_abilities_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"feat_id" integer NOT NULL,
	"ability_id" integer,
	"is_ability_score_bonus" boolean DEFAULT false NOT NULL,
	"grant_type" "ability_score_grant_type",
	"specific_ability_id" integer,
	"ability_choice_ids" jsonb,
	"multiple_ability_bonuses" jsonb,
	"any_ability_bonus" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "feat_grants_skills" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "feat_grants_skills_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"feat_id" integer NOT NULL,
	"skill_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "feat_grants_spells" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "feat_grants_spells_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"feat_id" integer NOT NULL,
	"grant_type" "spell_grant_type" NOT NULL,
	"specific_spell_id" integer,
	"spell_choice_ids" jsonb,
	"class_spell_list" "dnd5e_class",
	"school_restriction" jsonb,
	"level_restriction" jsonb,
	"max_spell_level" integer,
	"caster_class_restriction" jsonb,
	"spell_count" integer DEFAULT 1 NOT NULL,
	"is_cantrip" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "feat_grants_tools" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "feat_grants_tools_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"feat_id" integer NOT NULL,
	"tool_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "feats" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "feats_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"slug" text NOT NULL,
	"default_name" text NOT NULL,
	"default_description" text,
	"system_id" integer NOT NULL,
	"min_level" integer DEFAULT 1 NOT NULL,
	"is_granting_ability_score" boolean,
	"is_granting_skill" boolean,
	"is_granting_tool" boolean,
	"is_granting_spell" boolean,
	"is_repeatable" boolean DEFAULT false NOT NULL,
	"is_origin" boolean,
	"is_epic_boon" boolean,
	"is_weapon_fighting" boolean,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "feats_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "feats_required_abilities" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "feats_required_abilities_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"feat_id" integer,
	"ability_id" integer,
	"logic" "feat_logic",
	"min_ability_score" integer DEFAULT 1 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "hero_ability_scores" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "hero_ability_scores_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"hero_id" integer NOT NULL,
	"ability_id" integer NOT NULL,
	"score" integer DEFAULT 10 NOT NULL,
	"modifier" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "hero_equipment" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "hero_equipment_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"hero_id" integer NOT NULL,
	"armor_id" integer,
	"weapon_id" integer,
	"tool_id" integer,
	"lootable_id" integer,
	"quantity" integer DEFAULT 1 NOT NULL,
	"is_equipped" boolean DEFAULT false NOT NULL,
	"equipment_slot" text,
	"is_attuned" boolean DEFAULT false NOT NULL,
	"charges" integer,
	"durability" integer,
	"custom_name" text,
	"notes" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "hero_has_feats" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "hero_has_feats_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"hero_id" integer NOT NULL,
	"feat_id" integer NOT NULL,
	"acquisition_level" integer DEFAULT 1 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "hero_has_spells" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "hero_has_spells_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"hero_id" integer NOT NULL,
	"spell_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "hero_hit_dice" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "hero_hit_dice_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"hero_id" integer NOT NULL,
	"hit_dice_type" "hit_dice" NOT NULL,
	"total_hit_dice" integer DEFAULT 0 NOT NULL,
	"used_hit_dice" integer DEFAULT 0 NOT NULL,
	"source_class" "dnd5e_class",
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "hero_spell_preparations" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "hero_spell_preparations_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"hero_id" integer NOT NULL,
	"spell_id" integer NOT NULL,
	"is_prepared" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "hero_spell_slots" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "hero_spell_slots_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"hero_id" integer NOT NULL,
	"spell_level" integer NOT NULL,
	"max_slots" integer DEFAULT 0 NOT NULL,
	"used_slots" integer DEFAULT 0 NOT NULL,
	"is_warlock_slot" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "hero_stats" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "hero_stats_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"hero_id" integer NOT NULL,
	"max_hit_points" integer DEFAULT 0 NOT NULL,
	"current_hit_points" integer DEFAULT 0 NOT NULL,
	"temporary_hit_points" integer DEFAULT 0,
	"hit_dice" integer DEFAULT 1 NOT NULL,
	"hit_dice_value" "hit_dice" NOT NULL,
	"armor_class" integer DEFAULT 10 NOT NULL,
	"initiative_bonus" integer DEFAULT 0 NOT NULL,
	"proficiency_bonus" integer DEFAULT 2 NOT NULL,
	"experience_points" integer DEFAULT 0,
	"level" integer DEFAULT 1 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "heroes" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "heroes_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"user_id" integer NOT NULL,
	"system_id" integer NOT NULL,
	"name" text NOT NULL,
	"class_id" integer NOT NULL,
	"subclass_id" integer,
	"background_id" integer NOT NULL,
	"species_id" integer NOT NULL,
	"subspecies_id" integer,
	"alignment" "alignment",
	"extra_info" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "lootables" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "lootables_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"slug" text NOT NULL,
	"default_name" text NOT NULL,
	"default_description" text,
	"system_id" integer NOT NULL,
	"weight" integer,
	"value" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "lootables_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "skills" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "skills_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"slug" text NOT NULL,
	"default_name" text NOT NULL,
	"default_description" text,
	"system_id" integer NOT NULL,
	"ability_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "skills_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "species" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "species_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"slug" text NOT NULL,
	"default_name" text NOT NULL,
	"default_description" text,
	"has_darkvision" boolean DEFAULT false NOT NULL,
	"speed" integer DEFAULT 9 NOT NULL,
	"size" "species_size" DEFAULT 'medium' NOT NULL,
	"system_id" integer NOT NULL,
	"known_languages" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "species_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "species_traits" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "species_traits_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"species_id" integer NOT NULL,
	"slug" text NOT NULL,
	"default_name" text NOT NULL,
	"default_description" text,
	"system_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "species_traits_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "spells" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "spells_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"slug" text NOT NULL,
	"default_name" text NOT NULL,
	"default_description" text NOT NULL,
	"spell_level" integer DEFAULT 0 NOT NULL,
	"spell_school" "spell_school",
	"system_id" integer NOT NULL,
	"spell_casting_time" "spell_casting_time",
	"spell_range" "spell_range",
	"spell_range_value" integer,
	"spell_duration" "spell_duration",
	"spell_duration_value" integer,
	"has_concentration" boolean DEFAULT false NOT NULL,
	"has_verbal_component" boolean DEFAULT false NOT NULL,
	"has_somatic_component" boolean DEFAULT false NOT NULL,
	"has_material_component" boolean DEFAULT false NOT NULL,
	"material_component" text,
	"area_of_effect" "area_of_effect",
	"area_of_effect_value" integer,
	"spell_saving_throw" "spell_saving_throw",
	"spell_damage_dice" "hit_dice",
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "spells_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "subclasses" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "subclasses_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"slug" text NOT NULL,
	"default_name" text NOT NULL,
	"default_description" text,
	"class_id" integer NOT NULL,
	"system_id" integer NOT NULL,
	"acquisition_level" integer DEFAULT 3 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "subclasses_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "subspecies" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "subspecies_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"slug" text NOT NULL,
	"species_id" integer NOT NULL,
	"default_name" text NOT NULL,
	"default_description" text,
	"system_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "subspecies_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "systems" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "systems_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" "system" DEFAULT 'dd5e2024' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tools" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "tools_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"slug" text NOT NULL,
	"default_name" text NOT NULL,
	"default_utility" text,
	"default_craft" text,
	"ability_id" integer,
	"weight" integer,
	"value" integer,
	"is_musical_instrument" boolean,
	"is_gaming_tool" boolean,
	"system_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "tools_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "tools_craft_lootables" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "tools_craft_lootables_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"tool_id" integer NOT NULL,
	"lootable_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "translations" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "translations_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"entity" "translation_entity" NOT NULL,
	"entity_id" integer NOT NULL,
	"field" text NOT NULL,
	"locale" "locale" DEFAULT 'en' NOT NULL,
	"value" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"username" text NOT NULL,
	"email" text NOT NULL,
	"password_hash" text NOT NULL,
	"avatar_url" text,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "weapons" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "weapons_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"slug" text NOT NULL,
	"default_name" text NOT NULL,
	"default_description" text,
	"default_damage_dice" "hit_dice" NOT NULL,
	"damage_type" "weapon_damage_type",
	"secondary_damage_dice" "hit_dice",
	"weapon_type" "weapon_type" NOT NULL,
	"weapon_properties" jsonb,
	"weapon_mastery" "weapon_mastery",
	"range" jsonb,
	"range_type" "range_type",
	"system_id" integer NOT NULL,
	"weight" numeric(10, 2),
	"value" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "weapons_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "abilities" ADD CONSTRAINT "abilities_system_id_systems_id_fk" FOREIGN KEY ("system_id") REFERENCES "public"."systems"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "armors" ADD CONSTRAINT "armors_system_id_systems_id_fk" FOREIGN KEY ("system_id") REFERENCES "public"."systems"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "background_abilities" ADD CONSTRAINT "background_abilities_background_id_backgrounds_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."backgrounds"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "background_abilities" ADD CONSTRAINT "background_abilities_ability_id_abilities_id_fk" FOREIGN KEY ("ability_id") REFERENCES "public"."abilities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "background_skills" ADD CONSTRAINT "background_skills_background_id_backgrounds_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."backgrounds"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "background_skills" ADD CONSTRAINT "background_skills_skill_id_skills_id_fk" FOREIGN KEY ("skill_id") REFERENCES "public"."skills"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "backgrounds" ADD CONSTRAINT "backgrounds_system_id_systems_id_fk" FOREIGN KEY ("system_id") REFERENCES "public"."systems"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "class_abilities" ADD CONSTRAINT "class_abilities_class_id_classes_id_fk" FOREIGN KEY ("class_id") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "class_abilities" ADD CONSTRAINT "class_abilities_ability_id_abilities_id_fk" FOREIGN KEY ("ability_id") REFERENCES "public"."abilities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "class_features" ADD CONSTRAINT "class_features_class_id_classes_id_fk" FOREIGN KEY ("class_id") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "class_features" ADD CONSTRAINT "class_features_subclass_id_subclasses_id_fk" FOREIGN KEY ("subclass_id") REFERENCES "public"."subclasses"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "class_features" ADD CONSTRAINT "class_features_system_id_systems_id_fk" FOREIGN KEY ("system_id") REFERENCES "public"."systems"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "class_masteries" ADD CONSTRAINT "class_masteries_class_id_classes_id_fk" FOREIGN KEY ("class_id") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "class_skills" ADD CONSTRAINT "class_skills_class_id_classes_id_fk" FOREIGN KEY ("class_id") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "class_skills" ADD CONSTRAINT "class_skills_skill_id_skills_id_fk" FOREIGN KEY ("skill_id") REFERENCES "public"."skills"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "classes" ADD CONSTRAINT "classes_system_id_systems_id_fk" FOREIGN KEY ("system_id") REFERENCES "public"."systems"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feat_grants_abilities" ADD CONSTRAINT "feat_grants_abilities_feat_id_feats_id_fk" FOREIGN KEY ("feat_id") REFERENCES "public"."feats"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feat_grants_abilities" ADD CONSTRAINT "feat_grants_abilities_ability_id_abilities_id_fk" FOREIGN KEY ("ability_id") REFERENCES "public"."abilities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feat_grants_abilities" ADD CONSTRAINT "feat_grants_abilities_specific_ability_id_abilities_id_fk" FOREIGN KEY ("specific_ability_id") REFERENCES "public"."abilities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feat_grants_skills" ADD CONSTRAINT "feat_grants_skills_feat_id_feats_id_fk" FOREIGN KEY ("feat_id") REFERENCES "public"."feats"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feat_grants_skills" ADD CONSTRAINT "feat_grants_skills_skill_id_skills_id_fk" FOREIGN KEY ("skill_id") REFERENCES "public"."skills"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feat_grants_spells" ADD CONSTRAINT "feat_grants_spells_feat_id_feats_id_fk" FOREIGN KEY ("feat_id") REFERENCES "public"."feats"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feat_grants_spells" ADD CONSTRAINT "feat_grants_spells_specific_spell_id_spells_id_fk" FOREIGN KEY ("specific_spell_id") REFERENCES "public"."spells"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feat_grants_tools" ADD CONSTRAINT "feat_grants_tools_feat_id_feats_id_fk" FOREIGN KEY ("feat_id") REFERENCES "public"."feats"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feat_grants_tools" ADD CONSTRAINT "feat_grants_tools_tool_id_tools_id_fk" FOREIGN KEY ("tool_id") REFERENCES "public"."tools"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feats" ADD CONSTRAINT "feats_system_id_systems_id_fk" FOREIGN KEY ("system_id") REFERENCES "public"."systems"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feats_required_abilities" ADD CONSTRAINT "feats_required_abilities_feat_id_feats_id_fk" FOREIGN KEY ("feat_id") REFERENCES "public"."feats"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feats_required_abilities" ADD CONSTRAINT "feats_required_abilities_ability_id_abilities_id_fk" FOREIGN KEY ("ability_id") REFERENCES "public"."abilities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hero_ability_scores" ADD CONSTRAINT "hero_ability_scores_hero_id_heroes_id_fk" FOREIGN KEY ("hero_id") REFERENCES "public"."heroes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hero_ability_scores" ADD CONSTRAINT "hero_ability_scores_ability_id_abilities_id_fk" FOREIGN KEY ("ability_id") REFERENCES "public"."abilities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hero_equipment" ADD CONSTRAINT "hero_equipment_hero_id_heroes_id_fk" FOREIGN KEY ("hero_id") REFERENCES "public"."heroes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hero_equipment" ADD CONSTRAINT "hero_equipment_armor_id_armors_id_fk" FOREIGN KEY ("armor_id") REFERENCES "public"."armors"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hero_equipment" ADD CONSTRAINT "hero_equipment_weapon_id_weapons_id_fk" FOREIGN KEY ("weapon_id") REFERENCES "public"."weapons"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hero_equipment" ADD CONSTRAINT "hero_equipment_tool_id_tools_id_fk" FOREIGN KEY ("tool_id") REFERENCES "public"."tools"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hero_equipment" ADD CONSTRAINT "hero_equipment_lootable_id_lootables_id_fk" FOREIGN KEY ("lootable_id") REFERENCES "public"."lootables"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hero_has_feats" ADD CONSTRAINT "hero_has_feats_hero_id_heroes_id_fk" FOREIGN KEY ("hero_id") REFERENCES "public"."heroes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hero_has_feats" ADD CONSTRAINT "hero_has_feats_feat_id_feats_id_fk" FOREIGN KEY ("feat_id") REFERENCES "public"."feats"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hero_has_spells" ADD CONSTRAINT "hero_has_spells_hero_id_heroes_id_fk" FOREIGN KEY ("hero_id") REFERENCES "public"."heroes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hero_has_spells" ADD CONSTRAINT "hero_has_spells_spell_id_spells_id_fk" FOREIGN KEY ("spell_id") REFERENCES "public"."spells"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hero_hit_dice" ADD CONSTRAINT "hero_hit_dice_hero_id_heroes_id_fk" FOREIGN KEY ("hero_id") REFERENCES "public"."heroes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hero_spell_preparations" ADD CONSTRAINT "hero_spell_preparations_hero_id_heroes_id_fk" FOREIGN KEY ("hero_id") REFERENCES "public"."heroes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hero_spell_preparations" ADD CONSTRAINT "hero_spell_preparations_spell_id_spells_id_fk" FOREIGN KEY ("spell_id") REFERENCES "public"."spells"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hero_spell_slots" ADD CONSTRAINT "hero_spell_slots_hero_id_heroes_id_fk" FOREIGN KEY ("hero_id") REFERENCES "public"."heroes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hero_stats" ADD CONSTRAINT "hero_stats_hero_id_heroes_id_fk" FOREIGN KEY ("hero_id") REFERENCES "public"."heroes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "heroes" ADD CONSTRAINT "heroes_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "heroes" ADD CONSTRAINT "heroes_system_id_systems_id_fk" FOREIGN KEY ("system_id") REFERENCES "public"."systems"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "heroes" ADD CONSTRAINT "heroes_class_id_classes_id_fk" FOREIGN KEY ("class_id") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "heroes" ADD CONSTRAINT "heroes_subclass_id_subclasses_id_fk" FOREIGN KEY ("subclass_id") REFERENCES "public"."subclasses"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "heroes" ADD CONSTRAINT "heroes_background_id_backgrounds_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."backgrounds"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "heroes" ADD CONSTRAINT "heroes_species_id_species_id_fk" FOREIGN KEY ("species_id") REFERENCES "public"."species"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "heroes" ADD CONSTRAINT "heroes_subspecies_id_subspecies_id_fk" FOREIGN KEY ("subspecies_id") REFERENCES "public"."subspecies"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lootables" ADD CONSTRAINT "lootables_system_id_systems_id_fk" FOREIGN KEY ("system_id") REFERENCES "public"."systems"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "skills" ADD CONSTRAINT "skills_system_id_systems_id_fk" FOREIGN KEY ("system_id") REFERENCES "public"."systems"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "skills" ADD CONSTRAINT "skills_ability_id_abilities_id_fk" FOREIGN KEY ("ability_id") REFERENCES "public"."abilities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "species" ADD CONSTRAINT "species_system_id_systems_id_fk" FOREIGN KEY ("system_id") REFERENCES "public"."systems"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "species_traits" ADD CONSTRAINT "species_traits_species_id_species_id_fk" FOREIGN KEY ("species_id") REFERENCES "public"."species"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "species_traits" ADD CONSTRAINT "species_traits_system_id_systems_id_fk" FOREIGN KEY ("system_id") REFERENCES "public"."systems"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spells" ADD CONSTRAINT "spells_system_id_systems_id_fk" FOREIGN KEY ("system_id") REFERENCES "public"."systems"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subclasses" ADD CONSTRAINT "subclasses_class_id_classes_id_fk" FOREIGN KEY ("class_id") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subclasses" ADD CONSTRAINT "subclasses_system_id_systems_id_fk" FOREIGN KEY ("system_id") REFERENCES "public"."systems"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subspecies" ADD CONSTRAINT "subspecies_species_id_species_id_fk" FOREIGN KEY ("species_id") REFERENCES "public"."species"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subspecies" ADD CONSTRAINT "subspecies_system_id_systems_id_fk" FOREIGN KEY ("system_id") REFERENCES "public"."systems"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tools" ADD CONSTRAINT "tools_ability_id_abilities_id_fk" FOREIGN KEY ("ability_id") REFERENCES "public"."abilities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tools" ADD CONSTRAINT "tools_system_id_systems_id_fk" FOREIGN KEY ("system_id") REFERENCES "public"."systems"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tools_craft_lootables" ADD CONSTRAINT "tools_craft_lootables_tool_id_tools_id_fk" FOREIGN KEY ("tool_id") REFERENCES "public"."tools"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tools_craft_lootables" ADD CONSTRAINT "tools_craft_lootables_lootable_id_lootables_id_fk" FOREIGN KEY ("lootable_id") REFERENCES "public"."lootables"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "weapons" ADD CONSTRAINT "weapons_system_id_systems_id_fk" FOREIGN KEY ("system_id") REFERENCES "public"."systems"("id") ON DELETE no action ON UPDATE no action;