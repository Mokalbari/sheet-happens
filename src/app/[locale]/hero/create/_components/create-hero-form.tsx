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

const defaultValues: CreateHeroFormValues = {
  system: "shadow-dark",
  firstName: "",
  lastName: "",
  strength: 10,
  dexterity: 10,
  constitution: 10,
  intelligence: 10,
  wisdom: 10,
  charisma: 10,
  specie: "human",
  alignment: "neutral",
  class: "fighter",
  background: "urchin",
  gold: 0,
  weigth: 0,
};

export function CreateHeroForm({ children }: Props) {
  const t = useTranslations("Form.CreateHeroForm.Error");

  const form = useForm<CreateHeroFormValues>({
    resolver: zodResolver(createHeroSchema(t)),
    defaultValues,
    mode: "onChange",
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
