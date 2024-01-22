import { NavLinks } from "@/constants";
import NavLink from "./NavLink";

const NavItems = () => {
  return (
    <ul className="flex flex-col items-start w-full gap-5 md:justify-between md:flex-row">
      {NavLinks.map((link) => (
        <NavLink key={link.route} route={link.route} label={link.label} />
      ))}
    </ul>
  );
};

export default NavItems;
