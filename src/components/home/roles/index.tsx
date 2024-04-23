import React from "react";
import { useGlobalContext } from "../../../context/useGlobalContext";

const Roles: React.FC = () => {
  const { homePageContent } = useGlobalContext();

  return (
    <section className="center  flex flex-1 flex-col xl:flex-row justify-between items-center py-20 sm:py-40   gap-12 px-5 sm:px-10 ">
      {[
        {
          caption: homePageContent?.serviceICaption,
          title: homePageContent?.serviceITitle,
          image: homePageContent?.serviceIImage,
        },
        {
          caption: homePageContent?.serviceIICaption,
          title: homePageContent?.serviceIITitle,
          image: homePageContent?.serviceIIImage,
        },
      ].map((content, index: number) => (
        <div
          key={index}
          className=" bg-primary text-white flex-1 flex flex-col gap-5 max-w-lg xl:w-full items-center text-center z-50 -mt-36 cursor-pointer p-12 rounded-3xl "
        >
          <h2 className="font-semibold text-2xl">{content.title}</h2>
          <p className="font-medium  ">
            The HAM Foundation is dedicated to supporting initiatives that
            promote education, healthcare, environmental sustainability, and
            economic empowerment. Through strategic partnerships and impactful
            projects, we aim to uplift underserved communities, foster
            innovation, and drive positive change for the betterment of society
          </p>
        </div>
      ))}
    </section>
  );
};

export default Roles;
