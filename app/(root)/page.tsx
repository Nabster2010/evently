import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="py-5 bg-contain bg-primary-50 bg-dotted-pattern md:py-10">
        <div className="grid grid-cols-1 gap-5 wrapper md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: Your Events, Our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our global community.
            </p>
            <Button asChild className="w-full button md:w-fit " size={"lg"}>
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
          <div>
            <Image
              src="/assets/images/hero.png"
              alt="hero image"
              width={1000}
              height={1200}
              className="object-contain object-center max-h-[70vh] 2xl:max-h-[50vh]"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6 my-8 wrapper">
        <h1 className="h2-bold">
          Trust By: <br />
          Thousands of Events
        </h1>
        search category filter
      </section>
    </>
  );
}
