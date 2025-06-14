import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";

interface Props {
  columns: string;
  data: Record<string, string | number>[];
  className?: string;
}

export async function MetricTable({ columns, data, className }: Props) {
  const t = await getTranslations();

  return (
    <Table className={cn(className)}>
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
        {data.map((row) => {
          const { id, ...rest } = row;

          return (
            <TableRow key={id}>
              {Object.values(rest).map((value) => (
                <TableCell key={value}>{value}</TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
