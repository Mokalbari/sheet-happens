CREATE TYPE "public"."feat_logic" AS ENUM('AND', 'OR');--> statement-breakpoint
CREATE TYPE "public"."range_type" AS ENUM('close', 'near', 'far', 'close/near', 'close/far');--> statement-breakpoint
ALTER TYPE "public"."system" ADD VALUE 'shadow-dark';--> statement-breakpoint
ALTER TYPE "public"."weapon_type" ADD VALUE 'melee';--> statement-breakpoint
ALTER TYPE "public"."weapon_type" ADD VALUE 'range';--> statement-breakpoint
ALTER TYPE "public"."weapon_type" ADD VALUE 'melee/range';--> statement-breakpoint
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
ALTER TABLE "armors" ALTER COLUMN "armor_type" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "weapons" ALTER COLUMN "damage_type" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "armors" ADD COLUMN "can_swim" boolean;--> statement-breakpoint
ALTER TABLE "feats" ADD COLUMN "is_origin" boolean;--> statement-breakpoint
ALTER TABLE "feats" ADD COLUMN "is_epic_boon" boolean;--> statement-breakpoint
ALTER TABLE "feats" ADD COLUMN "is_weapon_fighting" boolean;--> statement-breakpoint
ALTER TABLE "weapons" ADD COLUMN "range_type" "range_type";--> statement-breakpoint
ALTER TABLE "feats_required_abilities" ADD CONSTRAINT "feats_required_abilities_feat_id_feats_id_fk" FOREIGN KEY ("feat_id") REFERENCES "public"."feats"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feats_required_abilities" ADD CONSTRAINT "feats_required_abilities_ability_id_abilities_id_fk" FOREIGN KEY ("ability_id") REFERENCES "public"."abilities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subspecies" ADD CONSTRAINT "subspecies_species_id_species_id_fk" FOREIGN KEY ("species_id") REFERENCES "public"."species"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subspecies" ADD CONSTRAINT "subspecies_system_id_systems_id_fk" FOREIGN KEY ("system_id") REFERENCES "public"."systems"("id") ON DELETE no action ON UPDATE no action;