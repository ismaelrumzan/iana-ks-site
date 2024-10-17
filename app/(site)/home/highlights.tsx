import { Card, List } from "flowbite-react";
import Link from "next/link";
import { GraduationCap, Info, Link as LinkIcon } from "lucide-react";
import { Alert } from "flowbite-react";

export function Highlights(): JSX.Element {
  return (
    <section className="bg-[#275C26] mt-4 pt-4 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
          <h2 className="h2 my-4 text-slate-50">Our Process</h2>
          <p className="text-xl text-gray-100">
            Why trust us with your financial needs?
          </p>
        </div>
        <div className="flex flex-col p-3 sm:p-0 sm:flex-row justify-center gap-4">
          <Card
            imgAlt="Book"
            className="max-w-md"
            imgSrc="/home/sincerely-media--IIIr1Hu6aY-unsplash.jpg">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Resources
            </h5>

            <List>
              <List.Item icon={LinkIcon}>
                <div className="prose">
                  <Link href="/relief-organizations">Relief Organizations</Link>
                </div>
              </List.Item>
            </List>
            <Alert color="info" icon={Info} className="my-2">
              <p>
                Islamic Finance Research Papers, Islamic Finance Books, Islamic
                Finance Articles, etc..
              </p>
              <b>Coming soon</b>
            </Alert>
          </Card>
          <Card
            imgAlt="Compass"
            className="max-w-md"
            imgSrc="/home/absolutvision-uCMKx2H1Y38-unsplash.jpg">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Advisors & Management
            </h5>
            <List>
              <List.Item icon={GraduationCap}>Dr. Adi Setia</List.Item>
              <List.Item icon={GraduationCap}>
                Sheikh Taha Abdul-Basser
              </List.Item>
              <List.Item icon={GraduationCap}>Dr. Monzer Kahf</List.Item>
            </List>
            <Alert color="info" icon={Info} className="my-2">
              Coming soon
            </Alert>
          </Card>
        </div>
      </div>
    </section>
  );
}
