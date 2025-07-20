import { useTranslations } from "next-intl";
import z from "zod";
import { baseHeroSchema } from "./base-hero-schema";
import { dd5eAbilitiesSchema } from "./dd5e-abilities-schema";

export function shadowDarkSchema() {
  const t = useTranslations("Form.CreateHeroForm.Error");

  const base = baseHeroSchema(t);
  const abilityScores = dd5eAbilitiesSchema(t);

  return z.object({
    ...base.shape,
    ...abilityScores.shape,

    system: z.literal("shadow-dark"),

    specie: z.string(),

    alignment: z.string(),

    class: z.string(),

    deity: z.string().optional(),

    background: z.string(),

    // Equipment
    gold: z
      .number()
      .min(0, { message: t("equipment.gold.tooLow") })
      .max(60, { message: t("equipment.gold.tooHigh") }),

    weigth: z
      .number()
      .min(0, { message: t("equipment.weigth.tooLow") })
      .max(20, { message: t("equipment.weigth.tooHigh") }),
  });
}
