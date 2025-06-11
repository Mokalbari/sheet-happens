import { CharacterDataTable } from "@/components/fragments/character-data-table/character-data-table";
import { SideNav } from "@/components/fragments/side-nav/side-nav";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");

  return (
    <div className="flex gap-8">
      <SideNav />
      <CharacterDataTable metric="weaponsAndDamageCantrips" />
    </div>
  );
}
