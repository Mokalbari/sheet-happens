import { z } from "zod";
import { dd5eSchema } from "./dd5e-schema";
import { shadowDarkSchema } from "./shadow-dark-schema";
import { TFunction } from "@/types/constants/utils";

export function createHeroSchema(t: TFunction) {
  return z.discriminatedUnion("system", [shadowDarkSchema(t), dd5eSchema(t)]);
}

export type CreateHeroFormValues = z.infer<ReturnType<typeof createHeroSchema>>;
