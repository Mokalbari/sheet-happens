import { relations } from "drizzle-orm";
import { abilities } from "./tables/abilities";
import { systems } from "./tables/systems";

export const systemsRelations = relations(systems, ({ many }) => ({
  abilities: many(abilities),
}));
