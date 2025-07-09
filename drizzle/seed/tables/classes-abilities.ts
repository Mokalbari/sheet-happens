import { abilities, classAbilities, classes } from "@/db/schema";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";

config();

// Class ability mapping
const classAbilityImprovements: Record<
  string,
  Array<{ ability: string; role: "main" | "save" }>
> = {
  barbarian: [
    { ability: "strength", role: "main" },
    { ability: "constitution", role: "save" },
    { ability: "strength", role: "save" },
  ],
  bard: [
    { ability: "charisma", role: "main" },
    { ability: "dexterity", role: "save" },
    { ability: "charisma", role: "save" },
  ],
  cleric: [
    { ability: "wisdom", role: "main" },
    { ability: "charisma", role: "save" },
    { ability: "wisdom", role: "save" },
  ],
  druid: [
    { ability: "wisdom", role: "main" },
    { ability: "intelligence", role: "save" },
    { ability: "wisdom", role: "save" },
  ],
  fighter: [
    { ability: "strength", role: "main" },
    { ability: "dexterity", role: "main" },
    { ability: "constitution", role: "save" },
    { ability: "strength", role: "save" },
  ],
  monk: [
    { ability: "dexterity", role: "main" },
    { ability: "wisdom", role: "main" },
    { ability: "strength", role: "save" },
    { ability: "dexterity", role: "save" },
  ],
  paladin: [
    { ability: "strength", role: "main" },
    { ability: "charisma", role: "main" },
    { ability: "wisdom", role: "save" },
    { ability: "charisma", role: "save" },
  ],
  ranger: [
    { ability: "dexterity", role: "main" },
    { ability: "wisdom", role: "main" },
    { ability: "strength", role: "save" },
    { ability: "dexterity", role: "save" },
  ],
  rogue: [
    { ability: "dexterity", role: "main" },
    { ability: "dexterity", role: "save" },
    { ability: "intelligence", role: "save" },
  ],
  sorcerer: [
    { ability: "charisma", role: "main" },
    { ability: "constitution", role: "save" },
    { ability: "charisma", role: "save" },
  ],
  warlock: [
    { ability: "charisma", role: "main" },
    { ability: "wisdom", role: "save" },
    { ability: "charisma", role: "save" },
  ],
  wizard: [
    { ability: "intelligence", role: "main" },
    { ability: "wisdom", role: "save" },
    { ability: "intelligence", role: "save" },
  ],
};

async function seedClassesAbilities() {
  const db = drizzle(process.env.DATABASE_URL!);

  const dd5eClasses = await db
    .select({ slug: classes.slug, id: classes.id })
    .from(classes);

  if (!dd5eClasses) {
    console.error("no classes found");
    return;
  }

  const dd5eAbilities = await db
    .select({ slug: abilities.slug, id: abilities.id })
    .from(abilities);

  if (!dd5eAbilities) {
    console.error("no abilities found");
    return;
  }

  for (const { slug, id } of dd5eClasses) {
    console.log("seeding ", slug, id);
    const matchingEntry = classAbilityImprovements[slug];

    for (const { ability, role } of matchingEntry) {
      console.log("seeding ", ability, role);
      const abilityId = dd5eAbilities.find((a) => a.slug === ability)?.id;

      if (!abilityId) {
        console.log("no ability id found for ", ability);
        continue;
      }

      await db.insert(classAbilities).values({
        classId: id,
        abilityId,
        role,
      });
    }
  }
}

seedClassesAbilities();
