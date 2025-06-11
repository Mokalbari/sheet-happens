import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getTranslations } from "next-intl/server";

interface Props {
  columns: string;
  data: Record<string, string | number>[];
}

export async function MetricTable({ columns, data }: Props) {
  const t = await getTranslations();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {(t.raw(columns) as string[]).map((col) => (
            <TableHead
              className="text-sm font-semibold text-muted-foreground"
              key={col}
            >
              {col}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            {Object.values(row).map((value) => (
              <TableCell key={value}>{value}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
