import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import NavItems from "./NavItems";
import Link from "next/link";
import { Separator } from "../ui/separator";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src={"/assets/icons/menu.svg"}
            alt="evently logo"
            width={24}
            height={24}
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Link href="/">
            <Image
              src={"/assets/images/logo.svg"}
              alt="evently logo"
              width={128}
              height={38}
            />
            <Separator className="my-4 border border-gray-50" />
          </Link>
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
