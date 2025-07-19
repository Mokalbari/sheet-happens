ALTER TABLE "class_features" ALTER COLUMN "level" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "class_features" ALTER COLUMN "feature_type" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "species" ADD COLUMN "known_languages" jsonb;