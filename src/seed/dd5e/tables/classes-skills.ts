import { classes, classSkills, skills } from "@/db/schema";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";

// Load environment variables
config();

// Class skill proficiencies mapping
const classSkillProficiencies: Record<string, string[]> = {
  barbarian: [
    "animal-handling",
    "athletics",
    "intimidation",
    "nature",
    "perception",
    "survival",
  ],
  bard: [
    "acrobatics",
    "animal-handling",
    "arcana",
    "athletics",
    "deception",
    "history",
    "insight",
    "intimidation",
    "investigation",
    "medicine",
    "nature",
    "perception",
    "performance",
    "persuasion",
    "religion",
    "sleight-of-hand",
    "stealth",
    "survival",
  ],
  cleric: ["history", "insight", "medicine", "persuasion", "religion"],
  druid: [
    "arcana",
    "animal-handling",
    "insight",
    "medicine",
    "nature",
    "perception",
    "religion",
    "survival",
  ],
  fighter: [
    "acrobatics",
    "animal-handling",
    "athletics",
    "history",
    "insight",
    "intimidation",
    "persuasion",
    "perception",
    "survival",
  ],
  monk: [
    "acrobatics",
    "athletics",
    "history",
    "insight",
    "religion",
    "stealth",
  ],
  paladin: [
    "athletics",
    "insight",
    "intimidation",
    "medicine",
    "persuasion",
    "religion",
  ],
  ranger: [
    "animal-handling",
    "athletics",
    "insight",
    "investigation",
    "nature",
    "perception",
    "stealth",
    "survival",
  ],
  rogue: [
    "acrobatics",
    "athletics",
    "deception",
    "insight",
    "intimidation",
    "investigation",
    "perception",
    "persuasion",
    "sleight-of-hand",
    "stealth",
  ],
  sorcerer: [
    "arcana",
    "deception",
    "insight",
    "intimidation",
    "persuasion",
    "religion",
  ],
  warlock: [
    "arcana",
    "deception",
    "history",
    "intimidation",
    "investigation",
    "nature",
    "religion",
  ],
  wizard: [
    "arcana",
    "history",
    "insight",
    "investigation",
    "medicine",
    "nature",
    "religion",
  ],
};

async function seedClassesSkills() {
  console.log("seeding");
  const db = drizzle(process.env.DATABASE_URL!);

  const dd5eClasses = await db
    .select({ slug: classes.slug, id: classes.id })
    .from(classes);

  console.log("Found ", dd5eClasses.length, "DD5E classes");

  const dd5eSkills = await db
    .select({ slug: skills.slug, id: skills.id })
    .from(skills);

  console.log("Found ", dd5eSkills.length, "DD5E skills");

  for (const { slug, id } of dd5eClasses) {
    const skills = classSkillProficiencies[slug];

    if (!skills) {
      console.log(`No skills found for ${slug}`);
      continue;
    }

    for (const skill of skills) {
      const skillId = dd5eSkills.find((s) => s.slug === skill)?.id;

      if (!skillId) {
        console.log(`Skill ${skill} not found for ${slug}`);
        continue;
      }

      await db.insert(classSkills).values({
        classId: id,
        skillId,
      });
    }
  }
}

seedClassesSkills();
