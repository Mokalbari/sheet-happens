import { integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { classes } from "./classes";
import { armors } from "./armors";

export const classArmors = pgTable("class_armors", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  classId: integer("class_id")
    .notNull()
    .references(() => classes.id),
  armorId: integer("armor_id")
    .notNull()
    .references(() => armors.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
