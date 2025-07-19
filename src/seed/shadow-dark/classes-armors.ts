import { classArmors } from "@/db/schema";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

type ClassArmorsInsert = typeof classArmors.$inferInsert;

const classArmorsSeedData: ClassArmorsInsert[] = [
  // Fighter: All armor and shields
  { classId: 13, armorId: 14 },
  { classId: 13, armorId: 15 },
  { classId: 13, armorId: 16 },
  { classId: 13, armorId: 17 },

  // Priest: All armor and shields
  { classId: 14, armorId: 14 },
  { classId: 14, armorId: 15 },
  { classId: 14, armorId: 16 },
  { classId: 14, armorId: 17 },

  // Thief: Leather armor, mithral chainmail (mithral chainmail non listée → ignorée)
  { classId: 15, armorId: 14 },

  // Wizard: None → rien à insérer
];

async function seedClassArmors() {
  const db = drizzle(process.env.DATABASE_URL!);
  await db.insert(classArmors).values(classArmorsSeedData);
}

config();
seedClassArmors();
