import React from "react";
import placeholderImage from "public/placeholder.png";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="p-4">
        <div className="h-[65vh] mb-5 ring-1 dark:ring-white/10 ring-primary/5 bg-white bg-hero-pattern bg-blend-hard-light bg-cover dark:bg-secondary dark:bg-blend-darken shadow-xl dark:shadow-thick rounded-3xl p-12">
          <h1 className="text-4xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
            Collection Title
          </h1>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            This is a collection description
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4">
          <div className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8">
            <div className="relative flex items-center gap-x-4">
              <Image
                src={placeholderImage}
                alt=""
                className="h-10 w-10 rounded-full ring-1 dark:ring-white/10 ring-primary/5"
              />
              <div className="text-sm leading-6">
                <p className="font-semibold text-primary dark:text-white">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    NFShards
                  </a>
                </p>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Part of the Scaling Web3 Hackathon by Encode
                </p>
              </div>
            </div>
            <p className="text-3xl mt-6 font-medium lg:text-4xl tracking-tight text-primary dark:text-white">
              Hey, welcome to NFShards!
            </p>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl">
              Divide (shard) your NFTs into pieces (shards) for people to own
              and exchange in this platform.
              <br />
              <br />
              Form communities, DAOs, or create activities for your shard
              holders. Get creative with the use cases for the shards you have
              created.
            </p>
          </div>
          <div className="ring-1 dark:ring-white/10 ring-primary/5 rounded-3xl justify-between shadow-xl dark:shadow-thick items-center flex flex-col p-8 h-full bg-white  dark:bg-secondary">
            <div>
              <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
                Shard
              </p>
              <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                Design & development subscriptions for startups.
                <br />
                <br />
                Shard streamlines the design process with a fixed monthly rate
                and limitless design requests. Say goodbye to phone calls and
                extensive contracts; reach out to Shard directly at any time.
                Embrace flexibility, pause or terminate your subscription
                whenever you need.
              </p>
            </div>
            <div className="mt-8">
              <img
                src="/images/Shard.png"
                className="rounded-2xl group-hover:ring-white/20 duration-300 invert dark:invert-0 aspect-[4/4] bg-primary/5 dark:bg-primary ring-1 ring-white/10  object-cover"
                alt=""
              />
            </div>
          </div>
          <a
            href="https://Shard.studio/"
            className="ring-1 lg:row-span-2 flex flex-col justify-between group hover:ring-primary/10 dark:hover:ring-white/20 duration-300 h-full dark:ring-white/10 ring-primary/5 lg:row-start-2 md:grid-cols-2 md:grid lg:gap-0 md:items-center md:gap-12 lg:grid-cols-none lg:col-start-2 lg:col-span-2 rounded-3xl p-8 bg-white dark:bg-secondary shadow-xl dark:shadow-thick"
          >
            <div>
              <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
                Shard
              </p>
              <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                Design & development subscriptions for startups.
                <br />
                <br />
                Shard streamlines the design process with a fixed monthly rate
                and limitless design requests. Say goodbye to phone calls and
                extensive contracts; reach out to Shard directly at any time.
                Embrace flexibility, pause or terminate your subscription
                whenever you need.
              </p>
            </div>
            <div className="mt-8">
              <img
                src="/images/Shard.png"
                className="rounded-2xl group-hover:ring-white/20 duration-300 invert dark:invert-0 aspect-[4/4] bg-primary/5 dark:bg-primary ring-1 ring-white/10  object-cover"
                alt=""
              />
            </div>
          </a>
          <div className="ring-1 dark:ring-white/10  ring-primary/5 flex flex-col justify-between items-center rounded-3xl shadow-xl dark:shadow-thick p-8  bg-white dark:bg-secondary overflow-hidden text-center lg:text-left">
            <div>
              <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
                Shard
              </p>
              <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                Design & development subscriptions for startups.
                <br />
                <br />
                Shard streamlines the design process with a fixed monthly rate
                and limitless design requests. Say goodbye to phone calls and
                extensive contracts; reach out to Shard directly at any time.
                Embrace flexibility, pause or terminate your subscription
                whenever you need.
              </p>
            </div>
            <div className="mt-8">
              <img
                src="/images/Shard.png"
                className="rounded-2xl group-hover:ring-white/20 duration-300 invert dark:invert-0 aspect-[4/4] bg-primary/5 dark:bg-primary ring-1 ring-white/10  object-cover"
                alt=""
              />
            </div>
          </div>
          <a
            href="https://www.figma.com/@mikeandreuzza"
            className="ring-1 lg:row-start-3 items-center h-full flex p-8 flex-col justify-center hover:ring-primary/5 dark:hover:ring-white/20 dark:ring-white/10 ring-primary/5 relative rounded-3xl overflow-hidden bg-white dark:bg-secondary shadow-xl dark:shadow-thick"
          >
            <div>
              <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
                Shard
              </p>
              <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                Design & development subscriptions for startups.
                <br />
                <br />
                Shard streamlines the design process with a fixed monthly rate
                and limitless design requests. Say goodbye to phone calls and
                extensive contracts; reach out to Shard directly at any time.
                Embrace flexibility, pause or terminate your subscription
                whenever you need.
              </p>
            </div>
            <div className="mt-8">
              <img
                src="/images/Shard.png"
                className="rounded-2xl group-hover:ring-white/20 duration-300 invert dark:invert-0 aspect-[4/4] bg-primary/5 dark:bg-primary ring-1 ring-white/10  object-cover"
                alt=""
              />
            </div>
          </a>
          <a
            href="https://lexingtonthemes.com/"
            className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-white dark:bg-secondary  dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl p-8"
          >
            <div>
              <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
                Shard
              </p>
              <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                Design & development subscriptions for startups.
                <br />
                <br />
                Shard streamlines the design process with a fixed monthly rate
                and limitless design requests. Say goodbye to phone calls and
                extensive contracts; reach out to Shard directly at any time.
                Embrace flexibility, pause or terminate your subscription
                whenever you need.
              </p>
            </div>
            <div className="mt-8">
              <img
                src="/images/Shard.png"
                className="rounded-2xl group-hover:ring-white/20 duration-300 invert dark:invert-0 aspect-[4/4] bg-primary/5 dark:bg-primary ring-1 ring-white/10  object-cover"
                alt=""
              />
            </div>
          </a>
          <div className="ring-1 dark:ring-white/10 ring-primary/5 flex flex-col p-8 h-full justify-center items-center rounded-3xl overflow-hidden relative lg:col-span-2 lg:row-start-4 bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
            <div className="relative p-8 text-center w-full">
              <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
                Subscribe <span className="lg:block">to receive updates</span>
              </p>
              <form className="mt-6 sm:flex w-full lg:max-w-sm mx-auto">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required={true}
                  className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter your email"
                />
                <div className="mt-4 sm:ml-2 sm:mt-0 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="ring-1 dark:ring-white/10 ring-primary/5 shadow-xl dark:shadow-thick rounded-3xl p-8 lg:row-start-4 h-full flex flex-col justify-between bg-white dark:bg-secondary">
            <div className="w-full">
              <p className="text-xl font-normal tracking-tight text-primary dark:text-white lg:text-6xl">
                Follow NFShards on
              </p>
            </div>
            <div className="grid mt-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-y-4 gap-4 justify-center w-full">
              <a
                href="#_"
                className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-github h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50"
                  viewBox="0 0 24 24"
                  stroke-width="0.8"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </a>
              <a
                href="#_"
                className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-x"
                  viewBox="0 0 24 24"
                  stroke-width="0.8"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 xl:col-span-1 h-full flex flex-col justify-between lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8">
            <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-3xl">
              As a digital designer, my expertise lies in crafting distinctive
              visual identities for digital products.
              <br />
              <br />My collection holds the belief that an engaging design begins with shared
              values, transparent communication, and a genuine respect for the
              audience.
            </p>
            <p className="text-primary dark:text-white mt-4">
              John Doe - Digital Collection 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
