import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context/useGlobalContext";
import { Events as EventType } from "../../../utils/types";

const Projects = () => {
  const { eventsFromDB } = useGlobalContext();
  return (
    <section className="center py-20 sm:py-40 text-white   xl:gap-10  px-5 sm:px-10 ">
      <div className=" ">
        <div className="text-center mb-20">
          <p className="text-secondary mb-5 font-medium text-xl">#projects</p>
          <h1 className="text-[#262626] text-3xl md:text-[38px] font-semibold ">
            Completed Projects
          </h1>
        </div>

        <div className="flex  gap-8">
          {eventsFromDB?.map((event: EventType) => (
            <Link key={event?.id} to={`/event/${event.id}`}>
              <div
                className="flex flex-col justify-end    bg-cover px-8 py-10 bg-center relative h-[500px]"
                style={{ backgroundImage: `url(${event.image})` }}
              >
                <div className="h-full w-full bg-gradient-to-b from-[#ffffff36] via-[#58282ab2] to-black absolute top-0 left-0 "></div>
                <div className="flex gap-3 relative z-40 flex-col">
                  <div className="">
                    <p className="font-semibold text-2xl">
                      Empowering Tomorrow's Leaders: HAM Foundation Launches
                      Youth Mentorship Program
                    </p>
                    <div className="flex gap-4   mt-5 text-sm">
                      <span>{event?.date} (9AM) </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
