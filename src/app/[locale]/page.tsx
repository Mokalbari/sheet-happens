import { SideNav } from "@/components/fragments/side-nav/side-nav";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");

  return (
    <div>
      <SideNav />
    </div>
  );
}
