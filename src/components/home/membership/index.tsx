import { ArrowRightIcon } from "@heroicons/react/24/solid";
import img from "../../../assets/membership.png";
import img2 from "../../../assets/help.png";

const Membership = () => {
  return (
    <section className="center py-40   px-5 sm:px-10 ">
      <div className="">
        <h1 className="text-[#262626]  text-[40px]    font-semibold mb-14">
          Our Membership
        </h1>
        <div className="xl:grid-cols-2 grid grid-cols-1 xl:gap-10 gap-[100px]">
          <div className="flex flex-col xl:mr-10">
            <p className=" text-[#262626]  text-base font-medium leading-7">
              Become a member of the HAM Foundation and be a part of our mission
              to empower communities and transform lives. Your membership not
              only supports our efforts but also gives you the opportunity to
              actively engage in our programs and initiatives. Together, we can
              make a real difference in the lives of those in need, creating a
              brighter and more equitable future for all. Join us in building a
              community dedicated to positive change, where every contribution
              matters and every voice is heard. Together, let's inspire hope and
              drive lasting impact.
            </p>

            <div className="flex gap-4 items-center text-primary mt-6 cursor-pointer font-medium text-lg">
              <p>Become a member</p>

              <ArrowRightIcon className="h-6 font-medium" />
            </div>
          </div>

          <div className="flex  ">
            <div className=" h-96 w-full">
              <img src={img} alt="" className="h-full w-full object-cover  " />
            </div>
          </div>
        </div>
      </div>

      {/* Please Help  */}
      <div className="mt-44">
        <div className="xl:grid-cols-2 grid grid-cols-1 xl:gap-10 gap-[100px]">
          <div className="flex  ">
            <div className=" h-96 w-full">
              <img src={img2} alt="" className="h-full w-full object-cover  " />
            </div>
          </div>
          <div className="flex flex-col xl:ml-10">
            <p className="text-secondary mb-2 font-medium text-xl">
              #helpsavelives
            </p>
            <h1 className="text-[#262626]  text-3xl    font-semibold mb-10">
              When hope is starved, everything nourishes it
            </h1>
            <p className=" text-[#262626]  text-base font-medium leading-7">
              Join us in making a difference! Support the HAM Foundation's cause
              today by donating generously. Together, we can create positive
              change and impact lives
            </p>

            <div className="flex gap-4 items-center text-primary mt-6 cursor-pointer font-medium text-lg">
              <p>Donate now</p>

              <ArrowRightIcon className="h-6 font-medium" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
