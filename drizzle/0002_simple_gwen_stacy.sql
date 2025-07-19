ALTER TYPE "public"."translation_entity" ADD VALUE 'classTalents' BEFORE 'feats';--> statement-breakpoint
CREATE TABLE "class_talents" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "class_talents_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"classId" integer,
	"slug" text NOT NULL,
	"defaultName" text NOT NULL,
	"defaultDescription" text,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	CONSTRAINT "class_talents_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "class_talents" ADD CONSTRAINT "class_talents_classId_classes_id_fk" FOREIGN KEY ("classId") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;