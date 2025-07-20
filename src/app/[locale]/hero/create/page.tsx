"use client";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography";
import { PageWrapper } from "@/components/ui/wrapper";
import { useTranslations } from "next-intl";
import { CreateHeroForm } from "./_components/create-hero-form";
import { ArrowRightIcon } from "lucide-react";

export default function Page() {
  const t = useTranslations("Form.CreateHeroForm");
  const tAtoms = useTranslations("Atoms");

  return (
    <PageWrapper>
      <CreateHeroForm>
        <div className="flex justify-between items-center">
          <Heading as="h1" size="large">
            {t("generic.title")}
          </Heading>
          <Button>
            {tAtoms("next")}
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </CreateHeroForm>
    </PageWrapper>
  );
}
