"use client";

import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import {
  CreateHeroFormValues,
  createHeroSchema,
} from "../_schema/create-hero-schema";

interface Props {
  children: ReactNode;
}

export function CreateHeroForm({ children }: Props) {
  const t = useTranslations("Form.CreateHeroForm.Error");

  const form = useForm<CreateHeroFormValues>({
    resolver: zodResolver(createHeroSchema(t)),
    defaultValues: {
      system: "shadow-dark",
    },
  });

  const onSubmit = (values: CreateHeroFormValues) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
}
