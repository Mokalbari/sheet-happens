import { classWeapons } from "@/db/schema";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

type ClassWeaponsInsert = typeof classWeapons.$inferInsert;

const classWeaponsSeedData: ClassWeaponsInsert[] = [
  // Fighter: All weapons
  { classId: 13, weaponId: 112 },
  { classId: 13, weaponId: 114 },
  { classId: 13, weaponId: 115 },
  { classId: 13, weaponId: 116 },
  { classId: 13, weaponId: 117 },
  { classId: 13, weaponId: 118 },
  { classId: 13, weaponId: 119 },
  { classId: 13, weaponId: 120 },
  { classId: 13, weaponId: 121 },
  { classId: 13, weaponId: 122 },
  { classId: 13, weaponId: 123 },
  { classId: 13, weaponId: 124 },
  { classId: 13, weaponId: 125 },
  { classId: 13, weaponId: 126 },
  { classId: 13, weaponId: 127 },

  // Priest: Club, crossbow, dagger, mace, longsword, staff, warhammer
  { classId: 14, weaponId: 114 },
  { classId: 14, weaponId: 115 },
  { classId: 14, weaponId: 116 },
  { classId: 14, weaponId: 122 },
  { classId: 14, weaponId: 121 },
  { classId: 14, weaponId: 126 },
  { classId: 14, weaponId: 127 },

  // Thief: Club, crossbow, dagger, shortbow, shortsword
  { classId: 15, weaponId: 114 },
  { classId: 15, weaponId: 115 },
  { classId: 15, weaponId: 116 },
  { classId: 15, weaponId: 123 },
  { classId: 15, weaponId: 124 },

  // Wizard: Dagger, staff
  { classId: 16, weaponId: 116 },
  { classId: 16, weaponId: 126 },
];

async function seedClassWeapons() {
  const db = drizzle(process.env.DATABASE_URL!);
  await db.insert(classWeapons).values(classWeaponsSeedData);
}
config();
seedClassWeapons();
