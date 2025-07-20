import { TFunction } from "@/types/constants/utils";
import z from "zod";
import { baseHeroSchema } from "./base-hero-schema";
import { dd5eAbilitiesSchema } from "./dd5e-abilities-schema";

const GOLD = {
  MIN: 0,
  MAX: 60,
};

const WEIGTH = {
  MIN: 0,
  MAX: 20,
};

export function shadowDarkSchema(t: TFunction) {
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
      .min(GOLD.MIN, { message: t("min", { field: "Gold", min: GOLD.MIN }) })
      .max(GOLD.MAX, { message: t("max", { field: "Gold", max: GOLD.MAX }) }),

    weigth: z
      .number()
      .min(WEIGTH.MIN, {
        message: t("min", { field: "Weigth", min: WEIGTH.MIN }),
      })
      .max(WEIGTH.MAX, {
        message: t("max", { field: "Weigth", max: WEIGTH.MAX }),
      }),
  });
}
