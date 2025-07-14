import { species, speciesTraits, subspecies, translations } from "@/db/schema";
import z from "zod";
import { createMainFunction } from "../utils";
import {
  speciesSeed,
  speciesTraitsSeed,
  speciesTraitsTranslations,
  speciesTranslations,
  subspeciesSeed,
  subspeciesTranslations,
} from "./species-data";

// Schemas for validation
const speciesSchema = z.object({
  slug: z.string().min(1).max(100),
  defaultName: z.string().min(1).max(200),
  defaultDescription: z.string().optional(),
  hasDarkvision: z.boolean(),
  speed: z.number().min(1).max(100),
  size: z.enum(["small", "medium", "large"]),
  systemId: z.number(),
});

const speciesTraitSchema = z.object({
  speciesId: z.number(),
  slug: z.string().min(1).max(100),
  defaultName: z.string().min(1).max(200),
  defaultDescription: z.string().optional(),
  systemId: z.number(),
});

const subspeciesSchema = z.object({
  slug: z.string().min(1).max(100),
  speciesId: z.number(),
  defaultName: z.string().min(1).max(200),
  defaultDescription: z.string().optional(),
  systemId: z.number(),
});

type SpeciesInsertSchema = typeof species.$inferInsert;
type SpeciesTraitInsertSchema = typeof speciesTraits.$inferInsert;
type SubspeciesInsertSchema = typeof subspecies.$inferInsert;

// Translation interfaces
interface TranslationData {
  name: string;
  description: string;
}

interface TranslationMapping {
  en: TranslationData;
  fr: TranslationData;
}

// Prepare the species seed data
const speciesSeedData: SpeciesInsertSchema[] = speciesSeed.map((item) => ({
  slug: item.slug,
  defaultName: item.defaultName,
  defaultDescription: item.defaultDescription,
  hasDarkvision: item.hasDarkvision,
  speed: item.speed,
  size: item.size,
  systemId: item.systemId,
}));

// Translation mappings - will be built dynamically after species are inserted
let speciesTranslationsMerged: Record<string, TranslationMapping> = {};
let speciesTraitsTranslationsMerged: Record<string, TranslationMapping> = {};
let subspeciesTranslationsMerged: Record<string, TranslationMapping> = {};

async function seedSpeciesData(db: any) {
  console.log("🌱 Starting species data seeding...");

  return await db.transaction(async (tx: any) => {
    // Step 1: Seed species
    console.log("📝 Seeding species...");
    const validatedSpeciesData: SpeciesInsertSchema[] = [];
    for (let i = 0; i < speciesSeedData.length; i++) {
      const item = speciesSeedData[i];
      const result = speciesSchema.safeParse(item);
      if (!result.success) {
        throw new Error(
          `Invalid species data at index ${i}: ${result.error.message}`
        );
      }
      validatedSpeciesData.push(result.data);
    }

    const insertedSpecies = await tx
      .insert(species)
      .values(validatedSpeciesData)
      .returning();

    console.log(
      `✅ Species inserted successfully: ${insertedSpecies.length} records`
    );

    // Build species translations mapping
    speciesTranslationsMerged = Object.fromEntries(
      speciesSeed.map(({ slug, defaultName, defaultDescription }) => [
        slug,
        {
          en: {
            name: defaultName,
            description: defaultDescription,
          },
          fr: {
            name: speciesTranslations[slug]?.name || defaultName,
            description:
              speciesTranslations[slug]?.description || defaultDescription,
          },
        },
      ])
    );

    // Create a mapping from old species ID to new species ID
    const speciesIdMapping = new Map<number, number>();
    insertedSpecies.forEach((speciesItem: { id: number }, index: number) => {
      speciesIdMapping.set(index + 1, speciesItem.id);
    });

    // Step 2: Seed species traits (with updated speciesId references)
    console.log("📝 Seeding species traits...");

    // Update species traits with correct species IDs
    const updatedSpeciesTraitsData: SpeciesTraitInsertSchema[] =
      speciesTraitsSeed.map((item) => {
        const newSpeciesId = speciesIdMapping.get(item.speciesId);
        if (!newSpeciesId) {
          throw new Error(
            `Could not find species ID mapping for ${item.speciesId}`
          );
        }

        return {
          speciesId: newSpeciesId,
          slug: `${newSpeciesId}-${item.slug}`, // Use the new species ID
          defaultName: item.defaultName,
          defaultDescription: item.defaultDescription,
          systemId: item.systemId,
        };
      });

    // Build species traits translations mapping
    speciesTraitsTranslationsMerged = Object.fromEntries(
      speciesTraitsSeed.map(
        ({ slug, defaultName, defaultDescription, speciesId }) => {
          const newSpeciesId = speciesIdMapping.get(speciesId);
          if (!newSpeciesId) {
            throw new Error(
              `Could not find species ID mapping for ${speciesId}`
            );
          }
          return [
            `${newSpeciesId}-${slug}`,
            {
              en: {
                name: defaultName,
                description: defaultDescription,
              },
              fr: {
                name: speciesTraitsTranslations[slug]?.name || defaultName,
                description:
                  speciesTraitsTranslations[slug]?.description ||
                  defaultDescription,
              },
            },
          ];
        }
      )
    );

    const validatedSpeciesTraitsData: SpeciesTraitInsertSchema[] = [];
    for (let i = 0; i < updatedSpeciesTraitsData.length; i++) {
      const item = updatedSpeciesTraitsData[i];
      const result = speciesTraitSchema.safeParse(item);
      if (!result.success) {
        throw new Error(
          `Invalid species trait data at index ${i}: ${result.error.message}`
        );
      }
      validatedSpeciesTraitsData.push(result.data);
    }

    const insertedSpeciesTraits = await tx
      .insert(speciesTraits)
      .values(validatedSpeciesTraitsData)
      .returning();

    console.log(
      `✅ Species traits inserted successfully: ${insertedSpeciesTraits.length} records`
    );

    // Step 3: Seed subspecies (with updated speciesId references)
    console.log("📝 Seeding subspecies...");

    // Update subspecies with correct species IDs
    const updatedSubspeciesData: SubspeciesInsertSchema[] = subspeciesSeed.map(
      (item) => {
        const newSpeciesId = speciesIdMapping.get(item.speciesId);
        if (!newSpeciesId) {
          throw new Error(
            `Could not find species ID mapping for ${item.speciesId}`
          );
        }

        return {
          slug: `${newSpeciesId}-${item.slug}`, // Use the new species ID
          speciesId: newSpeciesId,
          defaultName: item.defaultName,
          defaultDescription: item.defaultDescription,
          systemId: item.systemId,
        };
      }
    );

    // Build subspecies translations mapping
    subspeciesTranslationsMerged = Object.fromEntries(
      subspeciesSeed.map(
        ({ slug, defaultName, defaultDescription, speciesId }) => {
          const newSpeciesId = speciesIdMapping.get(speciesId);
          if (!newSpeciesId) {
            throw new Error(
              `Could not find species ID mapping for ${speciesId}`
            );
          }
          return [
            `${newSpeciesId}-${slug}`,
            {
              en: {
                name: defaultName,
                description: defaultDescription,
              },
              fr: {
                name: subspeciesTranslations[slug]?.name || defaultName,
                description:
                  subspeciesTranslations[slug]?.description ||
                  defaultDescription,
              },
            },
          ];
        }
      )
    );

    const validatedSubspeciesData: SubspeciesInsertSchema[] = [];
    for (let i = 0; i < updatedSubspeciesData.length; i++) {
      const item = updatedSubspeciesData[i];
      const result = subspeciesSchema.safeParse(item);
      if (!result.success) {
        throw new Error(
          `Invalid subspecies data at index ${i}: ${result.error.message}`
        );
      }
      validatedSubspeciesData.push(result.data);
    }

    const insertedSubspecies = await tx
      .insert(subspecies)
      .values(validatedSubspeciesData)
      .returning();

    console.log(
      `✅ Subspecies inserted successfully: ${insertedSubspecies.length} records`
    );

    // Step 4: Handle translations for species
    const speciesTranslationData: any[] = [];
    for (const speciesItem of insertedSpecies) {
      const speciesKey =
        speciesItem.slug as keyof typeof speciesTranslationsMerged;
      const speciesItemTranslations = speciesTranslationsMerged[speciesKey];

      if (speciesItemTranslations) {
        for (const [locale, translations] of Object.entries(
          speciesItemTranslations
        )) {
          if (translations.name) {
            speciesTranslationData.push({
              entity: "species",
              entityId: speciesItem.id,
              field: "name",
              locale: locale as "en" | "fr",
              value: translations.name,
            });
          }

          if (translations.description) {
            speciesTranslationData.push({
              entity: "species",
              entityId: speciesItem.id,
              field: "description",
              locale: locale as "en" | "fr",
              value: translations.description,
            });
          }
        }
      }
    }

    // Step 5: Handle translations for species traits
    const speciesTraitsTranslationData: any[] = [];
    for (const traitItem of insertedSpeciesTraits) {
      const traitKey =
        traitItem.slug as keyof typeof speciesTraitsTranslationsMerged;
      const traitItemTranslations = speciesTraitsTranslationsMerged[traitKey];

      if (traitItemTranslations) {
        for (const [locale, translations] of Object.entries(
          traitItemTranslations
        )) {
          if (translations.name) {
            speciesTraitsTranslationData.push({
              entity: "speciesTraits",
              entityId: traitItem.id,
              field: "name",
              locale: locale as "en" | "fr",
              value: translations.name,
            });
          }

          if (translations.description) {
            speciesTraitsTranslationData.push({
              entity: "speciesTraits",
              entityId: traitItem.id,
              field: "description",
              locale: locale as "en" | "fr",
              value: translations.description,
            });
          }
        }
      }
    }

    // Step 6: Handle translations for subspecies
    const subspeciesTranslationData: any[] = [];
    for (const subspeciesItem of insertedSubspecies) {
      const subspeciesKey =
        subspeciesItem.slug as keyof typeof subspeciesTranslationsMerged;
      const subspeciesItemTranslations =
        subspeciesTranslationsMerged[subspeciesKey];

      if (subspeciesItemTranslations) {
        for (const [locale, translations] of Object.entries(
          subspeciesItemTranslations
        )) {
          if (translations.name) {
            subspeciesTranslationData.push({
              entity: "subspecies",
              entityId: subspeciesItem.id,
              field: "name",
              locale: locale as "en" | "fr",
              value: translations.name,
            });
          }

          if (translations.description) {
            subspeciesTranslationData.push({
              entity: "subspecies",
              entityId: subspeciesItem.id,
              field: "description",
              locale: locale as "en" | "fr",
              value: translations.description,
            });
          }
        }
      }
    }

    // Step 7: Insert all translations
    const allTranslationData = [
      ...speciesTranslationData,
      ...speciesTraitsTranslationData,
      ...subspeciesTranslationData,
    ];

    if (allTranslationData.length > 0) {
      console.log(`📝 Inserting ${allTranslationData.length} translations...`);
      const insertedTranslations = await tx
        .insert(translations)
        .values(allTranslationData)
        .returning();
      console.log(
        "✅ Translations inserted successfully:",
        insertedTranslations.length
      );
    }

    return {
      species: insertedSpecies,
      speciesTraits: insertedSpeciesTraits,
      subspecies: insertedSubspecies,
      translations: allTranslationData,
    };
  });
}

const main = createMainFunction(seedSpeciesData);

main();
