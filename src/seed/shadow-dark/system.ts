import { systems } from "@/db/schema";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";

config();

async function main() {
  const db = drizzle(process.env.DATABASE_URL!);

  await db.insert(systems).values({
    name: "shadow-dark",
  });
}

main();
