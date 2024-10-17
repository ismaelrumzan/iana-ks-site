import Image from "next/image";
export function Welcome(): JSX.Element {
  return (
    <section>
      <div className="pb-4 flex justify-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/home/bismallah.png"
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
            <h2 className="h2 mb-4">Welcome to IANA Financial</h2>
            <p className="text-xl text-gray-600">
              Towards God-centred community financial services, for the common
              good.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
