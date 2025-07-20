"use client";
import { PageWrapper } from "@/components/ui/wrapper";
import { CreateHeroForm } from "./_components/create-hero-form";

export default function Page() {
  return (
    <PageWrapper>
      <CreateHeroForm>
        <div>Create Hero</div>
        <div className="">coucou</div>
      </CreateHeroForm>
    </PageWrapper>
  );
}
