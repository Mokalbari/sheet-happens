import { tryCatch } from "@/lib/utils";
import "dotenv/config";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { z } from "zod";

export interface SeedOptions<T> {
  tableName: string;
  table: any;
  data: T[];
  schema?: z.ZodSchema<T>;
  translations?: {
    entity: string;
    table: any;
    translations: Record<string, Record<string, Record<string, string>>>;
    fields?: string[];
  };
}

export interface SeedResult<T> {
  data: T[];
  translations?: any[];
}

export async function seedWithTranslations<T>(
  db: NodePgDatabase,
  options: SeedOptions<T> & {
    translations: NonNullable<SeedOptions<T>["translations"]>;
  }
): Promise<SeedResult<T>> {
  const { tableName, data, schema, translations } = options;

  console.log(`🌱 Starting ${tableName} seeding...`);

  return await db.transaction(async (tx) => {
    const { data: validatedData, error: validationError } = await tryCatch(
      Promise.all(
        data.map(async (item, index) => {
          if (schema) {
            const result = schema.safeParse(item);
            if (!result.success) {
              throw new Error(
                `Invalid ${tableName} data at index ${index}: ${result.error.message}`
              );
            }
            return result.data;
          }
          return item;
        })
      )
    );

    if (validationError) {
      console.error("❌ Validation error:", validationError);
      throw validationError;
    }

    console.log(`📝 Inserting ${validatedData.length} ${tableName}...`);

    const insertedData = await tx
      .insert(options.table)
      .values(validatedData)
      .returning();

    console.log(`✅ ${tableName} inserted successfully:`, insertedData);

    const translationData: any[] = [];
    const fields = translations.fields || ["name"];

    if (Array.isArray(insertedData)) {
      for (const item of insertedData) {
        const itemKey = (item as any)
          .slug as keyof typeof translations.translations;
        const itemTranslations = translations.translations[itemKey];

        if (itemTranslations) {
          for (const [fieldName, fieldTranslations] of Object.entries(
            itemTranslations
          )) {
            if (
              typeof fieldTranslations === "object" &&
              fieldTranslations !== null
            ) {
              for (const [locale, value] of Object.entries(fieldTranslations)) {
                translationData.push({
                  entity: translations.entity,
                  entityId: (item as any).id,
                  field: fieldName,
                  locale: locale as "en" | "fr",
                  value,
                });
              }
            }
          }
        }
      }
    }

    if (translationData.length > 0) {
      console.log(`📝 Inserting ${translationData.length} translations...`);
      const insertedTranslations = await tx
        .insert(translations.table)
        .values(translationData)
        .returning();
      console.log(
        "✅ Translations inserted successfully:",
        insertedTranslations
      );
    }

    return {
      data: Array.isArray(insertedData) ? (insertedData as T[]) : [],
      translations: translationData,
    };
  });
}

export async function seedWithoutTranslations<T>(
  db: NodePgDatabase,
  options: SeedOptions<T>
): Promise<SeedResult<T>> {
  const { tableName, data, schema } = options;

  console.log(`🌱 Starting ${tableName} seeding...`);

  return await db.transaction(async (tx) => {
    const { data: validatedData, error: validationError } = await tryCatch(
      Promise.all(
        data.map(async (item, index) => {
          if (schema) {
            const result = schema.safeParse(item);
            if (!result.success) {
              throw new Error(
                `Invalid ${tableName} data at index ${index}: ${result.error.message}`
              );
            }
            return result.data;
          }
          return item;
        })
      )
    );

    if (validationError) {
      console.error("❌ Validation error:", validationError);
      throw validationError;
    }

    console.log(`📝 Inserting ${validatedData.length} ${tableName}...`);

    const insertedData = await tx
      .insert(options.table)
      .values(validatedData)
      .returning();

    console.log(`✅ ${tableName} inserted successfully:`, insertedData);

    return { data: Array.isArray(insertedData) ? (insertedData as T[]) : [] };
  });
}

export async function seed<T>(
  db: NodePgDatabase,
  options: SeedOptions<T>
): Promise<SeedResult<T>> {
  if (options.translations) {
    return await seedWithTranslations(
      db,
      options as SeedOptions<T> & {
        translations: NonNullable<SeedOptions<T>["translations"]>;
      }
    );
  } else {
    return await seedWithoutTranslations(db, options);
  }
}

export function createMainFunction<T>(
  seedFunction: (db: NodePgDatabase) => Promise<SeedResult<T>>
) {
  return async () => {
    const envSchema = z.object({
      DATABASE_URL: z.string().url("DATABASE_URL must be a valid URL"),
    });

    const env = envSchema.safeParse(process.env);

    if (!env.success) {
      console.error("❌ Environment validation failed:", env.error.errors);
      process.exit(1);
    }

    const { drizzle } = await import("drizzle-orm/node-postgres");
    const db = drizzle(env.data.DATABASE_URL);

    const { data, error } = await tryCatch(seedFunction(db));

    if (error) {
      console.error("❌ Error while seeding:", error);
      process.exit(1);
    }

    console.log("🎉 Seeding completed successfully!");
    console.log(`📊 Inserted ${data?.data.length || 0} items`);
    if (data?.translations) {
      console.log(`📊 Inserted ${data.translations.length || 0} translations`);
    }
    process.exit(0);
  };
}

process.on("unhandledRejection", (reason, promise) => {
  console.error("❌ Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

process.on("uncaughtException", (error) => {
  console.error("❌ Uncaught Exception:", error);
  process.exit(1);
});
