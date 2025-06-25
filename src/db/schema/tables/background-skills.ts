import { integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { backgrounds } from "./backgrounds";
import { skills } from "./skills";

export const backgroundSkills = pgTable("background_skills", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  backgroundId: integer("background_id")
    .references(() => backgrounds.id)
    .notNull(),
  skillId: integer("skill_id")
    .references(() => skills.id)
    .notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
