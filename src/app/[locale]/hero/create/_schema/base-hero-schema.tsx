import { useTranslations } from "next-intl";
import z from "zod";

export function baseHeroSchema(t: ReturnType<typeof useTranslations>) {
  return z.object({
    name: z
      .string()
      .min(1, { message: t("name.required") })
      .max(30, {
        message: t("name.exceedsLimit"),
      }),

    lastName: z
      .string()
      .min(1, { message: t("lastName.tooShort") })
      .max(30, {
        message: t("lastName.exceedsLimit"),
      })
      .optional(),

    avatarUrl: z.string().url().optional(),
    backgroundUrl: z.string().url().optional(),
  });
}
