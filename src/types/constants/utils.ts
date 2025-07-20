import { useTranslations } from "next-intl";

export type Flatten<T> = T extends Record<string, infer V>
  ? V extends string
    ? V
    : V extends Record<string, infer R>
    ? R extends string
      ? R
      : never
    : never
  : never;

export type TFunction = ReturnType<typeof useTranslations>;
