import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="flex items-center justify-between wrapper">
        <Link href={"/"} className="w-36">
          <Image
            src={"/assets/images/logo.svg"}
            alt="evently logo"
            width={128}
            height={38}
          />
        </Link>
        <SignedIn>
          <nav className="justify-center hidden w-full max-w-xs md:flex">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex items-center justify-end w-32 gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Link
              className={buttonVariants({
                className: "rounded-full",
                size: "lg",
              })}
              href={"/sign-in"}
            >
              Login
            </Link>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
