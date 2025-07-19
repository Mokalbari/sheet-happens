import { classWeapons } from "@/db/schema";

type ClassWeaponsInsert = typeof classWeapons.$inferInsert;

const classWeaponsSeedData: ClassWeaponsInsert[] = [
  {
    classId: 1,
    weaponId: 1,
  },
];
