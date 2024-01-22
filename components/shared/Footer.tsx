import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t ">
      <div className="flex flex-col items-center justify-center gap-2 p-5 wrapper sm:flex-row sm:justify-between">
        <Link href="/">
          <Image
            src={"/assets/images/logo.svg"}
            alt="evently logo"
            width={128}
            height={38}
          />
        </Link>
        <p>Evently , All Rights Reserved 2024.</p>
      </div>
    </footer>
  );
};

export default Footer;
