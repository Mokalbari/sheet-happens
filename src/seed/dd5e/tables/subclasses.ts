import { classes, subclasses, translations } from "@/db/schema";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { SYSTEM_ID_DD5E } from "../constants";

config();

type SubclassEntry = {
  subclasses: string[];
  translations: string[];
};

type SubclassesData = Record<string, SubclassEntry>;

export const subclassesData: SubclassesData = {
  barbarian: {
    subclasses: [
      "Path of the Berserker",
      "Path of the Wild Heart",
      "Path of the World Tree",
      "Path of the Zealot",
    ],
    translations: [
      "Voie du Berserker",
      "Voie du Cœur Sauvage",
      "Voie de l’Arbre‑Monde",
      "Voie du Zélote",
    ],
  },
  bard: {
    subclasses: [
      "College of Dance",
      "College of Glamour",
      "College of Lore",
      "College of Valor",
    ],
    translations: [
      "Collège de la Danse",
      "Collège du Glamour",
      "Collège du Savoir",
      "Collège de la Vaillance",
    ],
  },
  cleric: {
    subclasses: [
      "Domain of Life",
      "Domain of Light",
      "Domain of Trickery",
      "Domain of War",
    ],
    translations: [
      "Domaine de la Vie",
      "Domaine de la Lumière",
      "Domaine de la Tromperie",
      "Domaine de la Guerre",
    ],
  },
  druid: {
    subclasses: [
      "Circle of the Land",
      "Circle of the Moon",
      "Circle of the Sea",
      "Circle of the Stars",
    ],
    translations: [
      "Cercle de la Terre",
      "Cercle de la Lune",
      "Cercle de la Mer",
      "Cercle des Astres",
    ],
  },
  fighter: {
    subclasses: ["Battle Master", "Champion", "Eldritch Knight", "Psi Warrior"],
    translations: [
      "Maître de Guerre",
      "Champion",
      "Chevalier Occulte",
      "Soldat Psi",
    ],
  },
  monk: {
    subclasses: [
      "Warrior of the Elements",
      "Warrior of Mercy",
      "Warrior of the Open Hand",
      "Warrior of the Shadow",
    ],
    translations: [
      "Credo des Éléments",
      "Credo de la Miséricorde",
      "Credo de la Paume",
      "Credo de l'Ombre",
    ],
  },
  paladin: {
    subclasses: [
      "Oath of the Ancients",
      "Oath of Devotion",
      "Oath of Glory",
      "Oath of Vengeance",
    ],
    translations: [
      "Serment des Anciens",
      "Serment de Dévotion",
      "Serment de Gloire",
      "Serment de Vengeance",
    ],
  },
  ranger: {
    subclasses: ["Beast Master", "Fey Wanderer", "Gloom Stalker", "Hunter"],
    translations: [
      "Belluaire",
      "Vagabond Féerique",
      "Traqueur des Ténèbres",
      "Chasseur",
    ],
  },
  rogue: {
    subclasses: ["Arcane Trickster", "Assassin", "Soulknife", "Thief"],
    translations: ["Arnaqueur Arcanique", "Assassin", "Âme Acérée", "Voleur"],
  },
  sorcerer: {
    subclasses: [
      "Aberrant Sorcery",
      "Clockwork Sorcery",
      "Draconic Sorcery",
      "Wild Magic Sorcery",
    ],
    translations: [
      "Sorcellerie Aberrante",
      "Sorcellerie Mécanique",
      "Sorcellerie Draconique",
      "Sorcellerie Sauvage",
    ],
  },
  warlock: {
    subclasses: [
      "Archfey Patron",
      "Celestial Patron",
      "Fiend Patron",
      "Great Old One Patron",
    ],
    translations: [
      "Protecteur Archfée",
      "Protecteur Céleste",
      "Protecteur Diabolique",
      "Protecteur Grand Ancien",
    ],
  },
  wizard: {
    subclasses: ["Abjurer", "Diviner", "Evoker", "Illusionist"],
    translations: ["Abjurateur", "Devin", "Évocateur", "Illusionniste"],
  },
};

async function seedSubclasses() {
  const db = drizzle(process.env.DATABASE_URL!);

  const dd5eClasses = await db
    .select({ slug: classes.slug, id: classes.id })
    .from(classes);

  if (!dd5eClasses) {
    console.error("no classes found");
    return;
  }

  for (const { slug, id } of dd5eClasses) {
    const matchingSubclasses = subclassesData[slug];

    if (!matchingSubclasses) {
      console.error("No matching subclasses found for slug ", slug);
      continue;
    }

    const { subclasses: dd5eSubclasses, translations: dd5eTranslations } =
      matchingSubclasses;

    await db.transaction(async (tx) => {
      for (const [index, subclass] of dd5eSubclasses.entries()) {
        const slugFromSubclassDefaultName = makeSlug(subclass);

        if (!slugFromSubclassDefaultName) {
          console.warn("no slug created for that subclass", subclass);
          continue;
        }

        const [inserted] = await tx
          .insert(subclasses)
          .values({
            classId: id,
            systemId: SYSTEM_ID_DD5E,
            slug: slugFromSubclassDefaultName,
            defaultName: subclass,
          })
          .returning({ id: subclasses.id });

        if (!inserted.id) {
          console.error("failed to insert a new sublass");
          continue;
        }

        await tx.insert(translations).values([
          {
            entity: "subclasses",
            entityId: inserted.id,
            field: "name",
            locale: "en",
            value: subclass,
          },
          {
            entity: "subclasses",
            entityId: inserted.id,
            field: "name",
            locale: "fr",
            value: dd5eTranslations[index],
          },
        ]);
      }
    });
  }
}

function makeSlug(name: string) {
  if (!name) {
    return;
  }

  return name.toLowerCase().split(" ").join("-");
}

seedSubclasses();
