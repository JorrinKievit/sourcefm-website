import React, { FC, useRef } from "react";
import FAQ from "./FAQ";
import Features from "./Features";
import Hero from "./Hero";

interface HomePageProps {
  homeSection: React.MutableRefObject<null | HTMLDivElement>;
  featuresSection: React.MutableRefObject<null | HTMLDivElement>;
  faqSection: React.MutableRefObject<null | HTMLDivElement>;
}

const HomePage: FC<HomePageProps> = ({
  homeSection,
  featuresSection,
  faqSection,
}) => {
  return (
    <div className="h-full w-full flex flex-col">
      <section ref={homeSection} className="flex flex-col">
        <Hero nextPageRef={featuresSection} />
      </section>
      <section ref={featuresSection}>
        <Features nextPageRef={faqSection} />
      </section>
      <section
        ref={faqSection}
        className="h-full w-full flex flex-col items-center"
      >
        <FAQ />
      </section>
    </div>
  );
};

export default HomePage;
