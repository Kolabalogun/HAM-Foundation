import React, { useEffect, useState } from "react";
import Layout from "../components/container/layout";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import useFirestoreCollection from "../hook/useFiretoreCollection";
import { Members } from "../utils/types";
import Loader from "../components/common/loader";

const OurTeam: React.FC = () => {
  const { data, loader: loading } = useFirestoreCollection<Members>("members");

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleAccordionClick = (index: number | null) => {
    setActiveIndex((prevIndex: number | null) =>
      prevIndex === index ? null : (index as number)
    );
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <Layout bannerTitle="Our Team">
      <>
        <section className=" relative ">
          <div className="center relative pt-40 pb-10 grid grid-cols-1 gap-10  px-5 sm:px-10  ">
            <div className=" flex items-center flex-col  ">
              <h1 className=" inline text-white text-center  px-8 py-5  bg-primary text-3xl md:text-[38px]   font-semibold ">
                {"Our Team"}
              </h1>
            </div>
          </div>
        </section>

        <section className="center py-20">
          <div className="grid lg:grid-cols-3 gap-16 my-16 grid-cols-1">
            {data
              ?.slice()
              .reverse()
              ?.map((team: Members, idx) => (
                <div className="flex flex-col gap-4" key={idx}>
                  <div className="">
                    <img src={team.imageUrl} alt="" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="font-semibold text-xl">{team.name}</p>
                    <p className=" ">{team.role}</p>
                  </div>
                  <div className="border-[1px] border-black flex-col flex p-3 text-sm font-medium">
                    <div className="flex justify-between items-center">
                      <p className="text-base">Read Bio</p>
                      <div onClick={() => handleAccordionClick(idx)}>
                        {activeIndex === idx ? (
                          <MinusIcon className="h-4" />
                        ) : (
                          <PlusIcon className="h-4" />
                        )}
                      </div>
                    </div>
                    {/* Use Tailwind CSS transition classes and conditional rendering */}
                    <div
                      className={`transition-all duration-1000 ${
                        activeIndex === idx
                          ? "max-h-[1000px]"
                          : "max-h-0 overflow-hidden"
                      }`}
                    >
                      <p className="mt-4">{team.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </>
    </Layout>
  );
};

export default OurTeam;
