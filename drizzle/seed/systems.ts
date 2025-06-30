import "dotenv/config";
import { systems } from "@/db/schema";
import { tryCatch } from "@/lib/utils";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { z } from "zod";

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

async function seedSystems(db: NodePgDatabase) {
  console.log("🌱 Starting systems seeding...");

  const { data: validatedData, error: validationError } = await tryCatch(
    Promise.all(
      systemsSeedData.map((data, index) => {
        const result = systemSchema.safeParse(data);
        if (!result.success) {
          throw new Error(
            `Invalid system data at index ${index}: ${result.error.message}`
          );
        }
        return result.data;
      })
    )
  );

  if (validationError) {
    console.error("❌ Validation error:", validationError);
    throw validationError;
  }

  console.log(`📝 Inserting ${validatedData.length} systems...`);

  const result = await db.insert(systems).values(validatedData).returning();

  console.log("✅ Systems inserted successfully:", result);
  return result;
}

async function main() {
  const envSchema = z.object({
    DATABASE_URL: z.string().url("DATABASE_URL must be a valid URL"),
  });

const env = envSchema.safeParse(process.env);

  if (!env.success) {
    console.error("❌ Environment validation failed:", env.error.errors);
    process.exit(1);
  }

  const db = drizzle(env.data.DATABASE_URL);

  const { data, error } = await tryCatch(seedSystems(db));

  if (error) {
    console.error("❌ Error while seeding systems:", error);
    process.exit(1);
  }

  console.log("🎉 Systems seeding completed successfully!");
  console.log(`📊 Inserted ${data?.length || 0} systems`);
  process.exit(0);
}

process.on("unhandledRejection", (reason, promise) => {
  console.error("❌ Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

process.on("uncaughtException", (error) => {
  console.error("❌ Uncaught Exception:", error);
  process.exit(1);
});

main();
