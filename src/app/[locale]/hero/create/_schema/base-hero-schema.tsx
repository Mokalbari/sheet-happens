import { useTranslations } from "next-intl";
import z from "zod";

const MIN_STRING_LENGTH = 1;
const MAX_STRING_LENGTH = 30;

export function baseHeroSchema(t: ReturnType<typeof useTranslations>) {
  return z.object({
    name: z
      .string()
      .min(MIN_STRING_LENGTH, { message: t("required", { field: "Name" }) })
      .max(MAX_STRING_LENGTH, {
        message: t("max", { field: "Name", max: MAX_STRING_LENGTH }),
      }),

    lastName: z
      .string()
      .min(MIN_STRING_LENGTH, {
        message: t("required", { field: "Last Name" }),
      })
      .max(MAX_STRING_LENGTH, {
        message: t("max", { field: "Last Name", max: MAX_STRING_LENGTH }),
      })
      .optional(),

    avatarUrl: z
      .string()
      .url({ message: t("url", { field: "Avatar URL" }) })
      .optional(),
    backgroundUrl: z
      .string()
      .url({ message: t("url", { field: "Background URL" }) })
      .optional(),
  });
}
