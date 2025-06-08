import { MetricCard } from "@/components/molecules/metric-card";
import { SectionHeader } from "@/components/molecules/section-header";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");

  return (
    <div>
      <SectionHeader title={t("title")} subheading={t("description")} />
      <div className="max-w-4xl grid grid-cols-4">
        <MetricCard title="Level">12</MetricCard>
        <MetricCard title="CA" showIcon iconName="shield" showFooter>
          16
        </MetricCard>
        <MetricCard title="Hit points" showFooter>
          0
        </MetricCard>
        <MetricCard title="Hit dice">4d8</MetricCard>
      </div>
    </div>
  );
}
