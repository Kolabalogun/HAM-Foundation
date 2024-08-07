import { Button, Tooltip } from "@chakra-ui/react";

import { MilestonesType } from "../../../pages/home";
import React from "react";
import Accordion from "./accordion";

type MilestonesTypee = {
  data: MilestonesType | null;
};

const Milestones: React.FC<MilestonesTypee> = ({ data }) => {
  return (
    <section className="center pb-44    sm:px-10 ">
      <h1 className="text-[#262626] text-center  text-[38px]    font-semibold mb-24 lg:mb-64">
        Our Milestones
      </h1>

      <div className=" lg:hidden">
        <Accordion title={data?.titleI} content={data?.contentI} />
        <Accordion title={data?.titleII} content={data?.contentII} />
        <Accordion title={data?.titleIII} content={data?.contentIII} />
        <Accordion title={data?.titleIV} content={data?.contentIV} />
        <Accordion title={data?.titleV} content={data?.contentV} />
        <Accordion title={data?.titleVI} content={data?.contentVI} />
      </div>

      <div className=" hidden lg:block font-medium sm:mx-10">
        <div className=" relative  h-1 bg-black w-full ">
          <div className="absolute -left-10 -translate-y-full rotate-180 top-2 flex items-center flex-col">
            <div className="p-2 rounded-full bg-black"></div>
            <div className="h-40 w-1 -mt-3 bg-black"></div>
            <div className="border-primary border-2 py-2 rotate-180 px-4 rounded-lg ">
              <Tooltip label={data?.contentI} placement="right">
                <Button
                  variant="outline"
                  border={"none"}
                  _hover={{ borderColor: "transparent" }}
                >
                  {data?.titleI}
                </Button>
              </Tooltip>
            </div>
          </div>

          <div className="absolute left-[20%]    -top-1 flex items-center flex-col">
            <div className="p-2 rounded-full bg-black"></div>
            <div className="h-40 w-1 -mt-3 bg-black"></div>
            <div className="border-primary border-2 py-2  px-4 rounded-lg ">
              <Tooltip label={data?.contentII} placement="right">
                <Button
                  variant="outline"
                  border={"none"}
                  _hover={{ borderColor: "transparent" }}
                >
                  {data?.titleII}
                </Button>
              </Tooltip>
            </div>
          </div>

          <div className="absolute left-[40%]  -translate-y-full rotate-180 top-2 flex items-center flex-col">
            <div className="p-2 rounded-full bg-black"></div>
            <div className="h-40 w-1 -mt-3 bg-black"></div>
            <div className="border-primary border-2 py-2 rotate-180 px-4 rounded-lg ">
              <Tooltip label={data?.contentIII} placement="right">
                <Button
                  variant="outline"
                  border={"none"}
                  _hover={{ borderColor: "transparent" }}
                >
                  {data?.titleIII}
                </Button>
              </Tooltip>
            </div>
          </div>

          <div className="absolute left-[60%]    -top-1 flex items-center flex-col">
            <div className="p-2 rounded-full bg-black"></div>
            <div className="h-40 w-1 -mt-3 bg-black"></div>
            <div className="border-primary border-2 py-2   px-4 rounded-lg ">
              <Tooltip label={data?.contentIV} placement="right">
                <Button
                  variant="outline"
                  border={"none"}
                  _hover={{ borderColor: "transparent" }}
                >
                  {data?.titleIV}
                </Button>
              </Tooltip>
            </div>
          </div>

          <div className="absolute left-[80%]  -translate-y-full rotate-180 top-2 flex items-center flex-col">
            <div className="p-2 rounded-full bg-black"></div>
            <div className="h-40 w-1 -mt-3 bg-black"></div>
            <div className="border-primary border-2 py-2 rotate-180 px-4 rounded-lg ">
              <Tooltip label={data?.contentV} placement="right">
                <Button
                  variant="outline"
                  border={"none"}
                  _hover={{ borderColor: "transparent" }}
                >
                  {data?.titleV}
                </Button>
              </Tooltip>
            </div>
          </div>

          <div className="absolute -right-14    -top-1 flex items-center flex-col">
            <div className="p-2 rounded-full bg-black"></div>
            <div className="h-40 w-1 -mt-3 bg-black"></div>
            <div className="border-primary border-2 py-2   px-4 rounded-lg ">
              <Tooltip label={data?.contentVI} placement="right">
                <Button
                  variant="outline"
                  border={"none"}
                  _hover={{ borderColor: "transparent" }}
                >
                  {data?.titleVI}
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
