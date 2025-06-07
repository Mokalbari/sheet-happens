import { MetricCard } from "@/components/molecules/metric-card";
import { SectionHeader } from "@/components/molecules/section-header";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");

  return (
    <div>
      <SectionHeader title={t("title")} subheading={t("description")} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <MetricCard title="Level" value="12" subValue="12" />
        <MetricCard title="CA" value="16" showIcon iconName="shield" />
        <MetricCard title="Level" value="12" subValue="12" />
      </div>
    </div>
  );
}
