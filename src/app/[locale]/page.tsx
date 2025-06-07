import { MetricCard } from "@/components/molecules/metric-card";
import { SectionHeader } from "@/components/molecules/section-header";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");

  const hasShield = true;

  return (
    <div>
      <SectionHeader title={t("title")} subheading={t("description")} />
      <div className="grid grid-cols-3 gap-4 items-stretch">
        <MetricCard title="Level" value="12" subValue="12" />
        <MetricCard
          title="CA"
          value="16"
          showIcon={hasShield}
          iconName="shield"
          showFooter
        />
        <MetricCard title="Hit points" value={0} subValue="12" />
      </div>
    </div>
  );
}
