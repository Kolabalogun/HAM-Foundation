import React, { useEffect } from "react";
import Layout from "../components/container/layout";

import Education from "../assets/education.png";
import Digital from "../assets/digital.png";
import Agric from "../assets/agric.png";
import Advocacy from "../assets/advocacy.png";
import Partner from "../assets/partnership.png";
import Health from "../assets/health.png";
import Impact from "../assets/impact.png";

type FocusAreaType = {
  img: string;
  title: string;
  decription: string;
};

const focusAreaData: FocusAreaType[] = [
  {
    img: Education,
    title: "Education",
    decription:
      "Advance education through scholarships, vocational training, and school support, and fostering unity for holistic development in the education sector",
  },
  {
    img: Digital,
    title: "Digital Economy and Innovation",
    decription:
      "Advance education through scholarships, vocational training, and school support, and fostering unity for holistic development in the education sector",
  },
  {
    img: Agric,
    title: "Agriculture & Food Security",
    decription:
      "Enhance agricultural practices for food security and fostering unity among farmers and stakeholders in the sector",
  },
  {
    img: Health,
    title: "Health & Wellbeing",
    decription:
      "Invest in healthcare infrastructure for better access and quality services and promoting community wellbeing and preventive healthcare initiatives",
  },
  {
    img: Partner,
    title: "Partnership",
    decription:
      "Form strategic partnerships with organizations and stakeholders for project success, and emphasizing collaboration's importance in effective program implementation",
  },
  {
    img: Impact,
    title: "Impact, Discipline, and Evaluation",
    decription:
      "Establish robust monitoring and evaluation systems for project impact assessment. Ensure transparency and accountability through auditing, procurement, and legal processes",
  },
  {
    img: Advocacy,
    title: "Advocacy",
    decription:
      "Advocate for human rights and social justice issues, and utilizing digital marketing and media platforms to raise awareness and drive positive change",
  },
];

const About: React.FC = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Layout bannerTitle="About Us">
      <>
        <section className=" relative ">
          <div className="center relative pt-40 pb-10 grid grid-cols-1 gap-10  px-5 sm:px-10  ">
            <div className="flex items-center text-center flex-col  ">
              <h1 className=" text-3xl md:text-[40px]   font-semibold ">
                {"Who are we"}
              </h1>
              <div className="h-[3px] w-36 mt-4 mb-8 bg-primary"></div>
              {/* 
              <p
                className="  text-sm font-medium leading-7"
                dangerouslySetInnerHTML={{
                  __html: `${aboutPageContent?.aboutCaption}`,
                }}
              /> */}

              <p className="    font-medium leading-7">
                The HAM Foundation is dedicated to addressing societal needs,
                with a special focus on the Kwara North region, including Edu,
                Patigi, Moro, Kaiama, and Baruten. Our initiatives are aligned
                with the Sustainable Development Goals (SDGs), ensuring holistic
                progress and positive impact on the community.
              </p>
            </div>
          </div>
        </section>

        <section className="center py-20">
          <h1 className="text-primary text-3xl  font-semibold ">Focus Areas</h1>

          <div className="grid lg:grid-cols-3 gap-16 my-16 grid-cols-1">
            {focusAreaData?.map((focusArea, idx) => (
              <div className="flex gap-4" key={idx}>
                <div className="h-24 w-48 ">
                  <img
                    src={focusArea.img}
                    alt=""
                    className="  h-full w-full object-contain "
                  />
                </div>
                <div className="flex  flex-col gap-4">
                  <p className="font-semibold text-xl ">{focusArea.title}</p>
                  <p className="font-medium">{focusArea.decription}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    </Layout>
  );
};

export default About;
