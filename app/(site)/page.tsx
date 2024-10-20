import { Hero } from "@/components/home/hero";
import { Highlights } from "@/components/home/highlights";
import { reader } from "@/app/reader";

export default async function Homepage() {
  const homeContent = await reader.singletons.home.read();
  return (
    <>
      <Hero data={homeContent} />
      {homeContent?.sections.map((section, i) => {
        const sectionType = section.discriminant;
        return (
          <>
            {sectionType === "card" && (
              <Highlights data={homeContent} index={i} key={i} />
            )}
          </>
        );
      })}
    </>
  );
}
