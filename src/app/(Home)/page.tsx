import { IconCircleChevronRight } from "@tabler/icons-react";

export default function Home() {
  return (
    <section className="bg-base-300 h-[calc(100vh-5.6rem)] flex items-center">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl text-base-content font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            AgriFood - From Farm to Fork, Secured by Blockchain.
          </h1>
          <p className="max-w-2xl mb-6 font-light text-base-content/70 lg:mb-8 md:text-lg lg:text-xl">
            AgriFood is a blockchain-powered agri-supply chain management
            platform that connects manufacturers, suppliers, transporters, and
            consumers in a seamless and secure ecosystem. With real-time
            traceability, decentralized verification, and smart contract
            integration, AgriFood ensures transparency from the farm to your
            fork.
          </p>
          <a
            href="/login"
            className="btn btn-primary text-base font-medium text-center rounded-lg mr-4"
          >
            Get Started
            <IconCircleChevronRight />
          </a>
          <a
            href="/about"
            className="btn btn-outline text-base font-medium text-center rounded-lg mr-4"
          >
            Learn More
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/bg.png" alt="Car Image" />
        </div>
      </div>
    </section>
  );
}
