import Link from "next/link";
import Image from "next/image";

export default function Logo({ url, alt }: { url: string; alt: string }) {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert w-8/12 sm:w-full"
        src={url}
        alt={alt}
        width={418 / 2}
        height={138 / 2}
        priority
      />
    </Link>
  );
}
