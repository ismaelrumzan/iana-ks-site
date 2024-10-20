import React from "react";
import { Card, List, Button } from "flowbite-react";
import { CustomMDX } from "../mdx-remote";
import Markdoc from "@markdoc/markdoc";
import { Alert } from "flowbite-react";
import { ShieldCheck, FileInput, Info } from "lucide-react";
import { Entry } from "@keystatic/core/reader";
import keystaticConfig from "@/keystatic.config";
import { markdocConfig } from "@/keystatic.config";
import Image from "next/image";

type HomeProps = Entry<(typeof keystaticConfig)["singletons"]["home"]> | null;

export async function Hero({
  data,
}: {
  data: HomeProps;
}): Promise<JSX.Element> {
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
            {data?.hero.highlights.map(async (highlight) => {
              const content = await highlight.content();
              return (
                <Card
                  key={highlight.title}
                  className="max-w-sm"
                  imgSrc={highlight.image as string}
                  horizontal>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {highlight.title as string}
                  </h5>
                  <div className="prose">
                    <CustomMDX source={content} />
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
      ) : null}
    </>
  );
}
