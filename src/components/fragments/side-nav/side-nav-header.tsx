import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

interface Props {
  bannerUrl: string;
  avatarUrl: string;
}

export function SideNavHeader({ bannerUrl, avatarUrl }: Props) {
  return (
    <div className="grid place-items-center">
      <div className="relative h-32 w-full">
        <Image
          src={bannerUrl}
          alt="Character banner"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="-mt-12 z-10">
        <Avatar className="size-24 border-4 border-zinc-800">
          <AvatarImage src={avatarUrl} alt="Character avatar" />
        </Avatar>
      </div>
    </div>
  );
}
