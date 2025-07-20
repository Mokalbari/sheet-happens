import { useTranslations } from "next-intl";
import z from "zod";
import { baseHeroSchema } from "./base-hero-schema";
import { dd5eAbilitiesSchema } from "./dd5e-abilities-schema";

export function dd5eSchema() {
  const t = useTranslations("Form.CreateHeroForm.Error");

  const base = baseHeroSchema(t);
  const abilityScores = dd5eAbilitiesSchema(t);

  return z.object({
    ...base.shape,
    ...abilityScores.shape,

    system: z.literal("dd5e"),
  });
}
