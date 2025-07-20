"use client";

import { useTranslations } from "next-intl";
import { baseHeroSchema } from "./base-hero-schema";
import { shadowDarkSchema } from "./shadow-dark-schema";

export function useCreateHeroFormSchema(values: any) {
  const t = useTranslations("Form.CreateHeroForm.Error");

  switch (values.system) {
    case "shadow-dark":
      return shadowDarkSchema(t);
    default:
      return baseHeroSchema(t);
  }
}
