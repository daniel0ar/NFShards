import Image from "next/image";
import React from "react";

type Props = {
  name: string,
  description: string,
  img: string
};

export const ShardCard = ({name, description, img}: Props) => {
  return (
    <a
      href="https://Shard.studio/"
      className="ring-1 lg:row-span-2 flex flex-col justify-between group hover:ring-primary/10 dark:hover:ring-white/20 duration-300 h-full dark:ring-white/10 ring-primary/5 lg:row-start-2 md:grid-cols-2 md:grid lg:gap-0 md:items-center md:gap-12 lg:grid-cols-none lg:col-start-2 lg:col-span-2 rounded-3xl p-8 bg-white dark:bg-secondary shadow-xl dark:shadow-thick"
    >
      <div>
        <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
          {name}
        </p>
        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
          {description}
        </p>
      </div>
      <div className="mt-8">
        <Image
          src={img}
          className="rounded-2xl group-hover:ring-white/20 duration-300 invert dark:invert-0 aspect-[4/4] bg-primary/5 dark:bg-primary ring-1 ring-white/10  object-cover"
          alt=""
        />
      </div>
    </a>
  );
};