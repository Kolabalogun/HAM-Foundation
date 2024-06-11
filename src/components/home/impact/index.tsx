import MoneyImg from "../../../assets/money.png";
import ProjectImg from "../../../assets/project.png";
import MapImg from "../../../assets/map.png";
import PeopleImg from "../../../assets/people.png";

const Impact = () => {
  return (
    <section className="text-white font-medium relative impactbg" id="impact">
      <div className="h-full w-full bg-[#000000c4] absolute top-0 left-0 "></div>
      <div className="center relative py-16 md:py-20   sm:px-10    xl:gap-0 sm:gap-16   ">
        <h1 className="text-center text-[40px] mb-20">Our Impact</h1>
        <div className="grid gap-10 grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col gap-8 items-center">
            <div className="h-16  lg:h-28 ">
              <img src={MoneyImg} alt="" className="h-full w-full" />
            </div>
            <div className="text-center">
              <h2 className="text-base ">$10 Million</h2>
              <p className="text-sm">Awarded in Grants</p>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <div className="h-16  lg:h-28 ">
              <img src={ProjectImg} alt="" className="h-full w-full" />
            </div>
            <div className="text-center">
              <h2 className="text-base ">30 Projects</h2>
              <p className="text-sm">Implemented</p>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <div className="h-16  lg:h-28  ">
              <img src={MapImg} alt="" className="h-full w-full" />
            </div>
            <div className="text-center">
              <h2 className="text-base ">Across 1 LGA</h2>
              <p className="text-sm">In about 100 Towns</p>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <div className="h-16  lg:h-28  ">
              <img src={PeopleImg} alt="" className="h-full w-full" />
            </div>
            <div className="text-center">
              <h2 className="text-base ">1 Million</h2>
              <p className="text-sm">People reached</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
