import React from "react";

const Roles: React.FC = () => {
  return (
    <section className="center  flex flex-1 flex-col lg:flex-row justify-between     py-20   gap-12 px-5 sm:px-10 ">
      <div className=" bg-primary text-white flex-1 flex flex-col gap-5 max-w-lg xl:w-full items-center text-center z-50 lg:-mt-36 cursor-pointer px-6 lg:px-12 py-12 rounded-3xl ">
        <h2 className="font-semibold text-2xl">Our Mission</h2>
        <p className="font-medium  ">
          The HAM Foundation is dedicated to supporting initiatives that promote
          education, healthcare, environmental sustainability, and economic
          empowerment. Through strategic partnerships and impactful projects, we
          aim to uplift underserved communities, foster innovation, and drive
          positive change for the betterment of society
        </p>
      </div>
      <div className=" bg-primary text-white flex-1 flex flex-col gap-5 max-w-lg xl:w-full items-center text-center z-50 -mt-0  lg:-mt-36 cursor-pointer px-6 lg:px-12 py-12 rounded-3xl ">
        <h2 className="font-semibold text-2xl">Our Vision</h2>
        <p className="font-medium  ">
          To create a world where every individual has access to the resources
          and opportunities needed to thrive, and where communities are
          empowered to build a sustainable and equitable future
        </p>
      </div>
    </section>
  );
};

export default Roles;
