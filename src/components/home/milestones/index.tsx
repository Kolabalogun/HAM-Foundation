import { Button, Tooltip } from "@chakra-ui/react";
import React from "react";

const Milestones: React.FC = () => {
  return (
    <section className="center pb-44  hidden lg:block sm:mx-10  sm:px-10 ">
      <h1 className="text-[#262626] text-center  text-[38px]    font-semibold mb-64">
        Our Milestones
      </h1>

      <div className=" font-medium">
        <div className=" relative  h-1 bg-black w-full ">
          <div className="absolute -left-10 -translate-y-full rotate-180 top-2 flex items-center flex-col">
            <div className="p-2 rounded-full bg-black"></div>
            <div className="h-40 w-1 -mt-3 bg-black"></div>
            <div className="border-primary border-2 py-2 rotate-180 px-4 rounded-lg ">
              <Tooltip
                label="Become a member of the HAM Foundation and be a part of our mission to empower communities and transform lives. Your membership not only supports our efforts but also gives you the opportunity to actively engage in our programs and initiatives"
                placement="right"
              >
                <Button
                  variant="outline"
                  border={"none"}
                  _hover={{ borderColor: "transparent" }}
                >
                  Jan 25
                </Button>
              </Tooltip>
            </div>
          </div>

          <div className="absolute left-[20%]    -top-1 flex items-center flex-col">
            <div className="p-2 rounded-full bg-black"></div>
            <div className="h-40 w-1 -mt-3 bg-black"></div>
            <div className="border-primary border-2 py-2  px-4 rounded-lg ">
              <Tooltip
                label="Become a member of the HAM Foundation and be a part of our mission to empower communities and transform lives. Your membership not only supports our efforts but also gives you the opportunity to actively engage in our programs and initiatives"
                placement="right"
              >
                <Button
                  variant="outline"
                  border={"none"}
                  _hover={{ borderColor: "transparent" }}
                >
                  Jan 25
                </Button>
              </Tooltip>
            </div>
          </div>

          <div className="absolute left-[40%]  -translate-y-full rotate-180 top-2 flex items-center flex-col">
            <div className="p-2 rounded-full bg-black"></div>
            <div className="h-40 w-1 -mt-3 bg-black"></div>
            <div className="border-primary border-2 py-2 rotate-180 px-4 rounded-lg ">
              <Tooltip
                label="Become a member of the HAM Foundation and be a part of our mission to empower communities and transform lives. Your membership not only supports our efforts but also gives you the opportunity to actively engage in our programs and initiatives"
                placement="right"
              >
                <Button
                  variant="outline"
                  border={"none"}
                  _hover={{ borderColor: "transparent" }}
                >
                  Jan 25
                </Button>
              </Tooltip>
            </div>
          </div>

          <div className="absolute left-[60%]    -top-1 flex items-center flex-col">
            <div className="p-2 rounded-full bg-black"></div>
            <div className="h-40 w-1 -mt-3 bg-black"></div>
            <div className="border-primary border-2 py-2   px-4 rounded-lg ">
              <Tooltip
                label="Become a member of the HAM Foundation and be a part of our mission to empower communities and transform lives. Your membership not only supports our efforts but also gives you the opportunity to actively engage in our programs and initiatives"
                placement="right"
              >
                <Button
                  variant="outline"
                  border={"none"}
                  _hover={{ borderColor: "transparent" }}
                >
                  Jan 25
                </Button>
              </Tooltip>
            </div>
          </div>

          <div className="absolute left-[80%]  -translate-y-full rotate-180 top-2 flex items-center flex-col">
            <div className="p-2 rounded-full bg-black"></div>
            <div className="h-40 w-1 -mt-3 bg-black"></div>
            <div className="border-primary border-2 py-2 rotate-180 px-4 rounded-lg ">
              <Tooltip
                label="Become a member of the HAM Foundation and be a part of our mission to empower communities and transform lives. Your membership not only supports our efforts but also gives you the opportunity to actively engage in our programs and initiatives"
                placement="right"
              >
                <Button
                  variant="outline"
                  border={"none"}
                  _hover={{ borderColor: "transparent" }}
                >
                  Jan 25
                </Button>
              </Tooltip>
            </div>
          </div>

          <div className="absolute -right-14    -top-1 flex items-center flex-col">
            <div className="p-2 rounded-full bg-black"></div>
            <div className="h-40 w-1 -mt-3 bg-black"></div>
            <div className="border-primary border-2 py-2   px-4 rounded-lg ">
              <Tooltip
                label="Become a member of the HAM Foundation and be a part of our mission to empower communities and transform lives. Your membership not only supports our efforts but also gives you the opportunity to actively engage in our programs and initiatives"
                placement="right"
              >
                <Button
                  variant="outline"
                  border={"none"}
                  _hover={{ borderColor: "transparent" }}
                >
                  Jan 25
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
