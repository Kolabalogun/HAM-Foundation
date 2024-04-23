import React, { useEffect, useState } from "react";
import Layout from "../components/container/layout";
import { useGlobalContext } from "../context/useGlobalContext";

import user1 from "../assets/1.png";
import user2 from "../assets/2.png";
import user3 from "../assets/3.png";
import user4 from "../assets/4.png";
import user5 from "../assets/5.png";
import user6 from "../assets/6.png";
import user7 from "../assets/7.png";
import user8 from "../assets/8.png";
import user9 from "../assets/9.png";
import user10 from "../assets/10.png";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

type OurTeamType = {
  img: string;
  name: string;
  decription: string;
  role: string;
};

const OurTeamData: OurTeamType[] = [
  {
    img: user1,

    role: "CEO HAM Foundation",
    name: "Abdulkadir Attahiru Adamu Manko",
    decription:
      "Advance education through scholarships, vocational training, and school support, and fostering unity for holistic development in the education sector",
  },
  {
    img: user2,

    role: "Head of Mission",
    name: "Kolo M. Jerry",
    decription:
      "Advance education through scholarships, vocational training, and school support, and fostering unity for holistic development in the education sector",
  },
  {
    img: user3,

    role: "Finance & Admin",
    name: "Manzuma Aliyu",
    decription:
      "Enhance agricultural practices for food security and fostering unity among farmers and stakeholders in the sector",
  },
  {
    img: user4,

    role: "Corporate Affairs / ICT",
    name: "Memunat Manzuma",
    decription:
      "Invest in healthcare infrastructure for better access and quality services and promoting community wellbeing and preventive healthcare initiatives",
  },
  {
    img: user5,

    role: "Lead, Procurement/Logistics I",
    name: "Abdulkadir Atthairu Abdulkadir",
    decription:
      "Form strategic partnerships with organizations and stakeholders for project success, and emphasizing collaboration's importance in effective program implementation",
  },
  {
    img: user6,

    role: "Procurement / Logistics II",
    name: "Mayaki Mustapha",
    decription:
      "Establish robust monitoring and evaluation systems for project impact assessment. Ensure transparency and accountability through auditing, procurement, and legal processes",
  },
  {
    img: user7,

    role: "",
    name: "Advocacy",
    decription:
      "Advocate for human rights and social justice issues, and utilizing digital marketing and media platforms to raise awareness and drive positive change",
  },
  {
    img: user8,

    role: "",
    name: "Partnership/Collaboration",
    decription:
      "Form strategic partnerships with organizations and stakeholders for project success, and emphasizing collaboration's importance in effective program implementation",
  },
  {
    img: user9,

    role: "",
    name: "Impact, Discipline, and Evaluation",
    decription:
      "Establish robust monitoring and evaluation systems for project impact assessment. Ensure transparency and accountability through auditing, procurement, and legal processes",
  },
  {
    img: user10,

    role: "",
    name: "Advocacy",
    decription:
      "Advocate for human rights and social justice issues, and utilizing digital marketing and media platforms to raise awareness and drive positive change",
  },
];

const OurTeam: React.FC = () => {
  const { aboutPageContent } = useGlobalContext();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleAccordionClick = (index: number | null) => {
    setActiveIndex((prevIndex: number | null) =>
      prevIndex === index ? null : (index as number)
    );
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Layout bannerTitle="Our Team">
      <>
        <section className=" relative ">
          <div className="center relative pt-40 pb-10 grid grid-cols-1 gap-10  px-5 sm:px-10  ">
            <div className=" flex items-center flex-col  ">
              <h1 className=" inline text-white text-center  px-8 py-5  bg-primary text-3xl md:text-[38px]   font-semibold ">
                {"Our Team" || aboutPageContent?.aboutTitle}
              </h1>
            </div>
          </div>
        </section>

        <section className="center py-20">
          <div className="grid lg:grid-cols-3 gap-16 my-16 grid-cols-1">
            {OurTeamData?.map((team, idx) => (
              <div className="flex flex-col gap-4" key={idx}>
                <div className="">
                  <img src={team.img} alt="" />
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
                    className={`transition-all duration-500 ${
                      activeIndex === idx
                        ? "max-h-[1000px]"
                        : "max-h-0 overflow-hidden"
                    }`}
                  >
                    <p className="mt-4">{team.decription}</p>
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
