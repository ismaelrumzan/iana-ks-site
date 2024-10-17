import { Hero } from "@/components/home/hero";
import { Highlights } from "./home/highlights";
import { reader } from "@/app/reader";

export default async function Homepage() {
  const homeContent = await reader.singletons.home.read();
  return (
    <>
      <Hero data={homeContent} />
      <Highlights />
    </>
  );
}
