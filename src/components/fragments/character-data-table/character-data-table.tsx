import { cn } from "@/lib/utils";
import { CharacterTable } from "@/types";
import { getTranslations } from "next-intl/server";
import { SectionHeader } from "../section-header";
import { MetricTable } from "./metric-table";

const MOCK_DATA = [
  {
    id: 1,
    name: "Great sword",
    atkRoll: "1d20 + 5",
    damage: "2d6",
    type: "Slashing",
  },
];

type CharacterTableSection = {
  name: string;
  description: string | null;
  columns: string[];
};

interface Props {
  metric: CharacterTable;
  className?: string;
}

export async function CharacterDataTable({ metric, className }: Props) {
  const section = await getCharacterTableSection(metric);
  const { name, description, columns } = section;

  const data = MOCK_DATA;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <SectionHeader
        title={name}
        subheading={description ?? null}
        subheadingAs="p"
      />

      <MetricTable columns={columns} data={data} />
    </div>
  );
}

async function getCharacterTableSection(
  key: CharacterTable
): Promise<CharacterTableSection> {
  const t = await getTranslations();

  const sectionKey = `MetricTable.${key}`;

  return {
    name: t(`${sectionKey}.name`),
    description: t.has(`${sectionKey}.description`)
      ? t(`${sectionKey}.description`)
      : null,
    columns: t.raw(`${sectionKey}.columns`) as string[],
  };
}
