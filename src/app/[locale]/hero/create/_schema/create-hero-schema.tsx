"use client";

import z from "zod";
import { dd5eSchema } from "./dd5e-schema";
import { shadowDarkSchema } from "./shadow-dark-schema";

export const createHeroSchema = z.discriminatedUnion("system", [
  shadowDarkSchema(),
  dd5eSchema(),
]);

export type CreateHeroFormValues = z.infer<typeof createHeroSchema>;
