CREATE TYPE "public"."weapon_damage_type" AS ENUM('bludgeoning', 'piercing', 'slashing');--> statement-breakpoint
ALTER TABLE "weapons" ADD COLUMN "damage_type" "weapon_damage_type" NOT NULL;--> statement-breakpoint
ALTER TABLE "weapons" ADD COLUMN "range" jsonb;