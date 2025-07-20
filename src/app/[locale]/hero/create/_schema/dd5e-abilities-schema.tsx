import { useTranslations } from "next-intl";
import { z } from "zod";

export function dd5eAbilitiesSchema(t: ReturnType<typeof useTranslations>) {
  return z.object({
    strength: z
      .number()
      .min(3, { message: t("abilityScores.tooLow") })
      .max(20, { message: t("abilityScores.tooHigh") }),
    dexterity: z
      .number()
      .min(3, { message: t("abilityScores.tooLow") })
      .max(20, { message: t("abilityScores.tooHigh") }),
    constitution: z
      .number()
      .min(3, { message: t("abilityScores.tooLow") })
      .max(20, { message: t("abilityScores.tooHigh") }),
    intelligence: z
      .number()
      .min(3, { message: t("abilityScores.tooLow") })
      .max(20, { message: t("abilityScores.tooHigh") }),
    wisdom: z
      .number()
      .min(3, { message: t("abilityScores.tooLow") })
      .max(20, { message: t("abilityScores.tooHigh") }),
    charisma: z
      .number()
      .min(3, { message: t("abilityScores.tooLow") })
      .max(20, { message: t("abilityScores.tooHigh") }),
  });
}
