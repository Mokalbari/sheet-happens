import { useTranslations } from "next-intl";
import { z } from "zod";

const MIN_ABILITY_SCORE = 3;
const MAX_ABILITY_SCORE = 20;

export function dd5eAbilitiesSchema(t: ReturnType<typeof useTranslations>) {
  return z.object({
    strength: z
      .number()
      .min(MIN_ABILITY_SCORE, {
        message: t("min", { field: "Strength", min: MIN_ABILITY_SCORE }),
      })
      .max(MAX_ABILITY_SCORE, {
        message: t("max", { field: "Strength", max: MAX_ABILITY_SCORE }),
      }),
    dexterity: z
      .number()
      .min(MIN_ABILITY_SCORE, {
        message: t("min", { field: "Dexterity", min: MIN_ABILITY_SCORE }),
      })
      .max(MAX_ABILITY_SCORE, {
        message: t("max", { field: "Dexterity", max: MAX_ABILITY_SCORE }),
      }),
    constitution: z
      .number()
      .min(MIN_ABILITY_SCORE, {
        message: t("min", { field: "Constitution", min: MIN_ABILITY_SCORE }),
      })
      .max(MAX_ABILITY_SCORE, {
        message: t("max", { field: "Constitution", max: MAX_ABILITY_SCORE }),
      }),
    intelligence: z
      .number()
      .min(MIN_ABILITY_SCORE, {
        message: t("min", { field: "Intelligence", min: MIN_ABILITY_SCORE }),
      })
      .max(MAX_ABILITY_SCORE, {
        message: t("max", { field: "Intelligence", max: MAX_ABILITY_SCORE }),
      }),
    wisdom: z
      .number()
      .min(MIN_ABILITY_SCORE, {
        message: t("min", { field: "Wisdom", min: MIN_ABILITY_SCORE }),
      })
      .max(MAX_ABILITY_SCORE, {
        message: t("max", { field: "Wisdom", max: MAX_ABILITY_SCORE }),
      }),
    charisma: z
      .number()
      .min(MIN_ABILITY_SCORE, {
        message: t("min", { field: "Charisma", min: MIN_ABILITY_SCORE }),
      })
      .max(MAX_ABILITY_SCORE, {
        message: t("max", { field: "Charisma", max: MAX_ABILITY_SCORE }),
      }),
  });
}
