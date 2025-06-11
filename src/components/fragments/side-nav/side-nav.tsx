import { Separator } from "@/components/ui/separator";
import { SideNavHeader } from "./side-nav-header";
import { SideNavNavigation } from "./side-nav-navigation";
import { SideNavProfile } from "./side-nav-profile";
import { SideNavShare } from "./side-nav-share";

const fakeData = {
  name: "John Doe",
  id: "1234567890",
  level: 1,
  class: "Fighter",
  subClass: "Battlemaster",
  specie: "Human",
  background: "Criminal",
  alignment: "Lawful good",
  slug: "sheet-happens/john-doe",
  playerName: "Dim",
  avatarUrl: "/avatar.webp",
  bannerUrl: "/fakebg.png",
};

export async function SideNav() {
  const { slug, ...profileData } = fakeData;

  return (
    <aside className="flex h-full max-w-80 flex-col bg-zinc-800 rounded-sm">
      <SideNavHeader
        bannerUrl={profileData.bannerUrl}
        avatarUrl={profileData.avatarUrl}
      />

      <div className="flex flex-1 flex-col gap-6 p-6">
        <SideNavProfile profile={profileData} />

        <Separator className="border-neutral-700" />

        <SideNavNavigation />

        <div className="flex-grow" />

        <SideNavShare slug={slug} />
      </div>
    </aside>
  );
}
