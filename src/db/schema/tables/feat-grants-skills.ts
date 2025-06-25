import { integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { feats } from "./feats";
import { skills } from "./skills";

export const featGrantsSkills = pgTable("feat_grants_skills", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  featId: integer("feat_id")
    .notNull()
    .references(() => feats.id),
  skillId: integer("skill_id")
    .notNull()
    .references(() => skills.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
