import { pgEnum } from "drizzle-orm/pg-core";

export const SYSTEM_ENUM = ["dd5e2024"] as const;
export type System = (typeof SYSTEM_ENUM)[number];
export const systemEnum = pgEnum("system", SYSTEM_ENUM);

export const LOCALE_ENUM = ["en", "fr"] as const;
export type Locale = (typeof LOCALE_ENUM)[number];
export const localeEnum = pgEnum("locale", LOCALE_ENUM);

export const TRANSLATION_ENTITY_ENUM = ["abilities"] as const;
export type TranslationEntity = (typeof TRANSLATION_ENTITY_ENUM)[number];
export const translationEntityEnum = pgEnum(
  "translation_entity",
  TRANSLATION_ENTITY_ENUM
);
