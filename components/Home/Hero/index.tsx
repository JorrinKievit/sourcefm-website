import React, { FC, MutableRefObject } from "react";
import FloatingCard from "./FloatingCard";
import Image from "next/image";
import { ChevronDoubleDownIcon } from "@heroicons/react/20/solid";

interface HeroProps {
  nextPageRef: MutableRefObject<null | HTMLDivElement>;
}

const Hero: FC<HeroProps> = ({ nextPageRef }) => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex-1" />
        <div className="flex flex-row h-3/6">
          <FloatingCard />
          <div className="flex flex-col text-center items-center justify-center space-y-4">
            <h1 className="text-8xl font-bold">
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-900">
                SourceFM
              </span>
            </h1>
            <h2 className="text-4xl font-bold">
              Lift the mood by playing music in your favorite source games!
            </h2>
          </div>
        </div>
        <a
          className="flex justify-center items-center space-x-5 py-4 px-8 bg-blue-700 rounded text-white uppercase font-extrabold text-2xl"
          href="https://github.com/JorrinKievit/sourcefm/releases/latest"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/github.svg" alt="GitHub" width={52} height={52} />
          <span>Download from GitHub!</span>
        </a>
        <p className="font-bold flex-1">Note: Only supported on Windows</p>
        <ChevronDoubleDownIcon
          width={76}
          height={76}
          className="mb-6 animate-bounce cursor-pointer"
          onClick={() => {
            nextPageRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
