"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { Form, useForm } from "react-hook-form";
import {
  CreateHeroFormValues,
  createHeroSchema,
} from "../_schema/create-hero-schema";

interface Props {
  children: ReactNode;
}

export function CreateHeroForm({ children }: Props) {
  const form = useForm<CreateHeroFormValues>({
    resolver: zodResolver(createHeroSchema),
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
