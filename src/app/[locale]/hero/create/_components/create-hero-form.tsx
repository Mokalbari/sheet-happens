"use client";

import { useCreateHeroFormSchema } from "../_schema/use-create-hero-form-validation";

export function CreateHeroForm() {
  const validationSchema = useCreateHeroFormSchema();
}
