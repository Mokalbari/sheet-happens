import { integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { classes } from "./classes";
import { skills } from "./skills";

export const classSkills = pgTable("class_skills", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  classId: integer("class_id")
    .notNull()
    .references(() => classes.id),
  skillId: integer("skill_id")
    .notNull()
    .references(() => skills.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
