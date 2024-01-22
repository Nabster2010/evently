"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLink = ({ route, label }: { route: string; label: string }) => {
  const path = usePathname();
  const active = path === route;
  return (
    <li
      className={`flex whitespace-nowrap justify-center items-center text-[16px] font-medium leading-[24px] ${
        active && "text-primary-500"
      }`}
    >
      <Link href={route}>{label}</Link>
    </li>
  );
};

export default NavLink;
