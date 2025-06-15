import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { localeEnum, translationEntityEnum } from "../enums";
import { TRANSLATION_DEFAULT_LOCALE } from "../i18n-constants";

export const translations = pgTable("translations", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  entity: translationEntityEnum().notNull(),
  entityId: integer("entity_id").notNull(),
  field: text("field").notNull(),
  locale: localeEnum().notNull().default(TRANSLATION_DEFAULT_LOCALE),
  value: text("value").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
