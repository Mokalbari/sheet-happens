import { cn } from "@/lib/utils";
import { CharacterTable } from "@/types";
import { getTranslations } from "next-intl/server";
import { SectionHeader } from "../section-header";
import { MetricTable } from "./metric-table";

const CHARACTER_DATA_TABLE_MAP = {
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
  overview: {
    name: "MetricTable.overview.name",
    columns: "MetricTable.overview.columns",
  },
} as const satisfies Record<
  CharacterTable,
  {
    name: `${"MetricTable"}.${CharacterTable}.name`;
    description?: `${"MetricTable"}.${CharacterTable}.description`;
    columns: `${"MetricTable"}.${CharacterTable}.columns`;
  }
>;

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
  metric: CharacterTable;
  className?: string;
}) {
  const t = await getTranslations();
  const { name, columns } = CHARACTER_DATA_TABLE_MAP[metric];
  const description =
    "description" in CHARACTER_DATA_TABLE_MAP[metric]
      ? CHARACTER_DATA_TABLE_MAP[metric].description
      : null;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <SectionHeader
        title={t(name)}
        subheading={description ? t(description as string) : null}
        subheadingAs="p"
      />

      <MetricTable columns={columns as string[]} data={MOCK_DATA} />
    </div>
  );
}
