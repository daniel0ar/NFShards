import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  name: string,
  description: string,
  img: StaticImageData | string
};

export const ShardCard = ({name, description, img}: Props) => {
  return (
    <div className="ring-1 dark:ring-white/10 ring-primary/5 rounded-3xl justify-between shadow-xl dark:shadow-thick items-center flex flex-col p-8 h-full bg-white  dark:bg-secondary">
            <div className="w-full text-wrap break-words">
              <p className="text-lg tracking-tight font-medium text-primary dark:text-white md:text-4xl">
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
                width={200}
                height={200}
              />
            </div>
          </div>
  );
};