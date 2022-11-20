import React, { FC } from "react";

interface HeaderProps {
  homeSection: React.MutableRefObject<null | HTMLDivElement>;
  featuresSection: React.MutableRefObject<null | HTMLDivElement>;
  faqSection: React.MutableRefObject<null | HTMLDivElement>;
}

const Header: FC<HeaderProps> = ({
  homeSection,
  featuresSection,
  faqSection,
}) => {
  return (
    <header className="absolute px-8 mx-auto mt-8 w-full">
      <nav className="flex flex-row justify-center items-center space-x-24 w-full">
        {["Home", "Features", "FAQ"].map((item, index) => {
          return (
            <p
              key={index}
              className="cursor-pointer hover:underline font-bold text-lg md:text-3xl"
              onClick={() => {
                switch (item) {
                  case "Home":
                    homeSection.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                    break;
                  case "Features":
                    featuresSection.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                    break;
                  case "FAQ":
                    faqSection.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                    break;
                }
              }}
            >
              {item}
            </p>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
