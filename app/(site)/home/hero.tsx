import { Card, List, Button } from "flowbite-react";
import { Alert } from "flowbite-react";
import { ShieldCheck, FileInput, Info } from "lucide-react";

export function Hero(): JSX.Element {
  return (
    <section className="mb-4">
      <div className="flex flex-col p-3 sm:p-0 sm:flex-row justify-center gap-4">
        <Card
          href="/applications"
          className="max-w-sm"
          imgSrc="/home/leon-dewiwje-ldDmTgf89gU-unsplash.jpg"
          horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Apply for a loan
          </h5>
          <List>
            <List.Item icon={ShieldCheck}>
              Information before you apply
            </List.Item>
            <List.Item icon={ShieldCheck}>Process of selection</List.Item>
            <List.Item icon={ShieldCheck}>Submit an application</List.Item>
            <List.Item icon={ShieldCheck}>Review our FAQs</List.Item>
          </List>
          <Button className="uppercase bg-[#275C26] hover:bg-[#559553]">
            Apply
            <FileInput className="ml-2 h-5 w-5" />
          </Button>
        </Card>
        <Card
          className="max-w-sm"
          imgSrc="/home/micheile-henderson-SoT4-mZhyhE-unsplash.jpg"
          horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Become a supporter
          </h5>
          <List>
            <List.Item icon={ShieldCheck}>Study and understand</List.Item>
            <List.Item icon={ShieldCheck}>Save</List.Item>
            <List.Item icon={ShieldCheck}>Donate</List.Item>
          </List>
          <Alert color="info" icon={Info} className="my-2">
            Comming soon
          </Alert>
        </Card>
      </div>
    </section>
  );
}
