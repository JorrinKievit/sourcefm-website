import { Disclosure, Transition } from "@headlessui/react";
import React, { FC } from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const FAQ_ITEMS = [
  {
    question: "What is SourceFM?",
    answer:
      "A desktop app for source games which provides the ability to play audio files trough voice chat.",
  },
  {
    question: "What games does SourceFM support?",
    answer: "Currently only CS:GO is supported.",
  },
  {
    question: "How do I use SourceFM?",
    answer:
      "Import any audio file you want, or use the YouTube importer. Then press start and the application will try to find the game process and inject the necessary files in the game. After that, open your console and type 'exec sourcefm'. After selecting a song you will be able to play it trough voice chat using the assigned hotkey found in the settings.",
  },
  {
    question: "How do I select a song?",
    answer:
      "Open the in-game console and type the number assigned to the song.",
  },
  {
    question: "Can I import a YouTube playlist?",
    answer: "Yes! It currently merges all the songs into one audio file.",
  },
  {
    question: "What in-game commands does SourceFM have?",
    answer:
      "SourceFM has 3 commands: sourcefm, sourcefm_curtrack and sourcefm_sayteamcurtrack. The first one opens the menu, the second one says the current track in chat and the last one says the current track in team chat. They all have their assigned hotkeys, which can be changed in the settings. They can also be executed using the 'exec' command in the in-game console.",
  },
  {
    question:
      "I got an error while importing a YouTube video, what should I do?",
    answer:
      "Most of the times this is caused by YouTube rate limiting you. Please try again.",
  },
  {
    question: "What do the tags do?",
    answer:
      "This is a feature which is currently in development. It will allow you to select a song based on tags.",
  },
  {
    question: "Doesn't this look alot like SLAM?",
    answer:
      "Yes it does! SLAM still works but is no longer maintained. I experienced issues related to YouTube imports, and decided to make my own version. This project is heavily inspired by SLAM.",
  },
];
const FAQ: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full space-y-8">
      <h1 className="text-2xl md:text-4xl font-bold">
        Frequently Asked Questions
      </h1>
      <div
        className="justify-center items-center space-y-8 border-blue-500 border-2 rounded-xl p-8 w-full md:w-1/2 overflow-auto"
        style={{ maxHeight: 690 }}
      >
        {FAQ_ITEMS.map((item, index) => (
          <AccordionItem
            key={`${index}_${item.question}`}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;

const AccordionItem: FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-700 px-4 py-2 text-left text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
            <span>{question}</span>
            <ChevronUpIcon
              className={`${
                open ? "rotate-180 transform" : ""
              } h-5 w-5 text-black`}
            />
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            style={{ marginTop: 0 }}
          >
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              {answer}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};
