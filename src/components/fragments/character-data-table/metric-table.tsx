import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface Props {
  columns: string[];
  data: Record<string, string | number>[];
  className?: string;
}

export async function MetricTable({ columns, data, className }: Props) {
  return (
    <Table className={cn(className)}>
      <TableHeader>
        <TableRow className="border-b-0 border-muted-foreground/50">
          {columns.map((col) => (
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
          console.log("row", row);
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
