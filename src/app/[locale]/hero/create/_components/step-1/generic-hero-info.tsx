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
import { ContentWrapper } from "@/components/ui/wrapper";
import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";
import { CreateHeroFormValues } from "../../_schema/create-hero-schema";

export function GenericHeroInfo() {
  const t = useTranslations("Form.CreateHeroForm");
  const tAtoms = useTranslations("Atoms");
  const form = useFormContext<CreateHeroFormValues>();

  return (
    <ContentWrapper as="main" className="space-y-16">
      <SectionHeader
        title={t("step1.title")}
        titleAs="h2"
        subheading={t("step1.subtitle")}
        subheadingAs="p"
      />

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
    </ContentWrapper>
  );
}
