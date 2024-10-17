import { Card, List, Button } from "flowbite-react";
import { Alert } from "flowbite-react";
import { ShieldCheck, FileInput, Info } from "lucide-react";
import { Entry } from "@keystatic/core/reader";
import keystaticConfig from "@/keystatic.config";
import Image from "next/image";

type HomeProps = Entry<(typeof keystaticConfig)["singletons"]["home"]> | null;

export function Hero({ data }: { data: HomeProps }): JSX.Element {
  return (
    <>
      <section>
        <div className="pb-4 flex justify-center">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src={data?.hero.image as string}
            alt="Bismillah"
            width={413 / 2}
            height={140 / 2}
            priority
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div>
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
              <h2 className="h2 mb-4">{data?.hero.title as string}</h2>
              <p className="text-xl text-gray-600">
                {data?.hero.subtitle as string}
              </p>
            </div>
          </div>
        </div>
      </section>
      {data?.hero.highlights && data?.hero.highlights.length > 0 ? (
        <section className="mb-4">
          <div className="flex flex-col p-3 sm:p-0 sm:flex-row justify-center gap-4">
            {data?.hero.highlights.map((highlight) => (
              <Card
                href="/applications"
                className="max-w-sm"
                imgSrc={highlight.image as string}
                horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {highlight.title as string}
                </h5>
                <List>
                  <List.Item icon={ShieldCheck}>
                    Information before you apply
                  </List.Item>
                  <List.Item icon={ShieldCheck}>Process of selection</List.Item>
                  <List.Item icon={ShieldCheck}>
                    Submit an application
                  </List.Item>
                  <List.Item icon={ShieldCheck}>Review our FAQs</List.Item>
                </List>
                <Button className="uppercase bg-[#275C26] hover:bg-[#559553]">
                  Apply
                  <FileInput className="ml-2 h-5 w-5" />
                </Button>
              </Card>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
