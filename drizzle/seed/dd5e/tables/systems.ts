import { systems } from "@/db/schema";
import "dotenv/config";
import { z } from "zod";
import { createMainFunction, seed } from "../../utils";

const systemSchema = z.object({
  name: z.enum(["dd5e2024", "homebrew"]),
});

type SystemInsertSchema = typeof systems.$inferInsert;

const systemsSeedData: SystemInsertSchema[] = [
  {
    name: "dd5e2024",
  },
  {
    name: "homebrew",
  },
];

async function seedSystems(db: any) {
  return await seed(db, {
    tableName: "systems",
    table: systems,
    data: systemsSeedData,
    schema: systemSchema,
  });
}

const main = createMainFunction(seedSystems);

main();
