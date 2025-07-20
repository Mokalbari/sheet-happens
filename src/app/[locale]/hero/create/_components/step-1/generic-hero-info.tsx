"use client";

import { SectionHeader } from "@/components/fragments/section-header";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";
import { CreateHeroFormValues } from "../../_schema/create-hero-schema";

export function GenericHeroInfo() {
  const t = useTranslations("Form.CreateHeroForm");
  const tAtoms = useTranslations("Atoms");
  const form = useFormContext<CreateHeroFormValues>();

  return (
    <div className="space-y-8">
      <SectionHeader
        title={t("step1.title")}
        titleAs="h2"
        subheading={t("step1.subtitle")}
        subheadingAs="p"
      />

      <div className="space-y-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>{tAtoms("firstName")}</FormLabel>
                <FormControl>
                  <Input placeholder="First name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>{tAtoms("lastName")}</FormLabel>
                <FormControl>
                  <Input placeholder="Last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
      </div>
    </div>
  );
}
