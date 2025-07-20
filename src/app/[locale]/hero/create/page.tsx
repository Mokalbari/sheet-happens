"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography";
import { PageWrapper } from "@/components/ui/wrapper";
import { ArrowRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { CreateHeroForm } from "./_components/create-hero-form";
import { GenericHeroInfo } from "./_components/step-1/generic-hero-info";

function Stepper() {
  const t = useTranslations("Form.CreateHeroForm");
  const tAtoms = useTranslations("Atoms");

  return (
    <div className="flex justify-between items-center">
      <Heading as="h1" size="large">
        {t("generic.title")}
      </Heading>
      <Button>
        {tAtoms("next")}
        <ArrowRightIcon className="w-4 h-4" />
      </Button>
    </div>
  );
}

export default function Page() {
  return (
    <PageWrapper>
      <Stepper />

      <CreateHeroForm>
        <GenericHeroInfo />
      </CreateHeroForm>
    </PageWrapper>
  );
}
