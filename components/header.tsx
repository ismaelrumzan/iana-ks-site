import Link from "next/link";
import Logo from "./logo";
import { reader } from "@/app/reader";
import { FileInput, LogInIcon } from "lucide-react";
import { Button } from "flowbite-react";
import MobileMenu from "./mobile-menu";

export default async function Header() {
  const header = await reader.singletons.header.read();

  return (
    <header
      className={`bg-[#559553] fixed w-full py-3 z-30 md:bg-opacity-90 transition duration-300 ease-in-out`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo url={header?.logo.url || ""} alt={header?.logo.alt || ""} />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href={header?.cta.link || ""}>
                  <Button className="uppercase bg-[#275C26] hover:bg-[#559553]">
                    {header?.cta.text || ""}
                    {header?.cta.icon === "FileInput" && (
                      <FileInput className="h-5 w-5 ml-2" />
                    )}
                    {header?.cta.icon === "LogInIcon" && (
                      <LogInIcon className="h-5 w-5 ml-2" />
                    )}
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
