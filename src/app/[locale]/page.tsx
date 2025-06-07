import { SectionHeader } from "@/components/molecules/section-header";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");

  return (
    <div>
      <SectionHeader title={t("title")} subheading={t("description")} />
    </div>
  );
}
