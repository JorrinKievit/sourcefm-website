import React, { FC, MutableRefObject } from "react";
import Image from "next/image";
import { ChevronDoubleDownIcon } from "@heroicons/react/20/solid";

interface FeaturesProps {
  nextPageRef: MutableRefObject<null | HTMLDivElement>;
}

const Features: FC<FeaturesProps> = ({ nextPageRef }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row justify-center items-center space-x-8 flex-1">
        <div className="flex flex-col justify-center items-center space-y-1 md:space-y-4 w-full md:w-1/3">
          <Image
            src="/undraw_preferences_re_49in.svg"
            alt="Settings image"
            fill
            className="!relative !w-40 !h-40"
          />
          <h1 className="font-bold text-xl text-center">
            Easily customize your hotkeys in the settings.
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center space-y-1 md:space-y-4 w-full md:w-1/3">
          <Image
            src="/undraw_happy_music_g6wc.svg"
            alt="Appreciation image"
            fill
            className="!relative !w-40 !h-40"
          />
          <h1 className="font-bold text-xl text-center">
            Let your teammates know you appreciate them by playing a song!
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2 md:space-y-4 w-full md:w-1/3">
          <Image
            src="/undraw_select_option_re_u4qn.svg"
            alt="Appreciation image"
            fill
            className="!relative !w-40 !h-40"
          />
          <h1 className="font-bold text-xl text-center">
            Look for the right song using the &apos;tracklist &apos; command in
            the in-game console.
          </h1>
        </div>
      </div>
      <ChevronDoubleDownIcon
        width={76}
        height={76}
        className="mb-6 animate-bounce cursor-pointer"
        onClick={() => {
          nextPageRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </div>
  );
};

export default Features;
