import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";
import { SectionHeader } from "../section-header";
import { MetricTable } from "./metric-table";

type MetricTable =
  | "weaponsAndDamageCantrips"
  | "classFeatures"
  | "speciesTraits"
  | "feats";

type MetricTableData = {
  name: string;
  description: string;
  columns: string;
};

const CHARACTER_DATA_TABLE_MAP: Record<MetricTable, MetricTableData> = {
  weaponsAndDamageCantrips: {
    name: "MetricTable.weaponsAndDamageCantrips.name",
    description: "MetricTable.weaponsAndDamageCantrips.description",
    columns: "MetricTable.weaponsAndDamageCantrips.columns",
  },
  classFeatures: {
    name: "MetricTable.classFeatures.name",
    description: "MetricTable.classFeatures.description",
    columns: "MetricTable.classFeatures.columns",
  },
  speciesTraits: {
    name: "MetricTable.speciesTraits.name",
    description: "MetricTable.speciesTraits.description",
    columns: "MetricTable.speciesTraits.columns",
  },
  feats: {
    name: "MetricTable.feats.name",
    description: "MetricTable.feats.description",
    columns: "MetricTable.feats.columns",
  },
} as const;

const MOCK_DATA = [
  {
    id: 1,
    name: "Great sword",
    atkRoll: "1d20 + 5",
    damage: "2d6",
    type: "Slashing",
  },
];

export async function CharacterDataTable({
  metric,
  className,
}: {
  metric: MetricTable;
  className?: string;
}) {
  const t = await getTranslations();
  const { name, description, columns } = CHARACTER_DATA_TABLE_MAP[metric];

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <SectionHeader
        title={t(name)}
        subheading={t(description)}
        subheadingAs="p"
      />

      <MetricTable columns={columns} data={MOCK_DATA} />
    </div>
  );
}
