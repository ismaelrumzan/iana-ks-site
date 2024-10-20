import { Card, List } from "flowbite-react";
import React from "react";
import Link from "next/link";
import { GraduationCap, Info, Link as LinkIcon } from "lucide-react";
import { Alert } from "flowbite-react";
import { Button } from "./cta-button";
import { Entry } from "@keystatic/core/reader";
import keystaticConfig from "@/keystatic.config";
import { markdocConfig } from "@/keystatic.config";
import { CustomMDX } from "../mdx-remote";

type HomeProps = Entry<(typeof keystaticConfig)["singletons"]["home"]> | null;

export function Highlights({
  data,
  index,
}: {
  data: HomeProps;
  index: number;
}): JSX.Element {
  return (
    <section className="bg-[#275C26] mt-4 pt-4 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
          <h2 className="h2 my-4 text-slate-50">
            {data?.sections[index].value.title}
          </h2>
          <p className="text-xl text-gray-100">
            {data?.sections[index].value.subtitle}
          </p>
        </div>
        <div className="flex flex-col p-3 sm:p-0 sm:flex-row justify-center gap-4">
          {data?.sections[index].value.cards.map(async (carditem) => {
            const content = await carditem.content();
            return (
              <Card
                key={carditem.title}
                imgAlt="Book"
                className="max-w-md"
                imgSrc={carditem.image as string}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {carditem.title}
                </h5>
                <div className="prose">
                  <CustomMDX source={content} />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
