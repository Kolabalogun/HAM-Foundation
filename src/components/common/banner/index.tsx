import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

type BannerType = {
  bannerTitle: string;
};

const Banner: React.FC<BannerType> = ({ bannerTitle }) => {
  return (
    <section className="bannerbg  text-white   relative">
      <div className="h-full w-full bg-[#000000b6] absolute top-0 left-0 "></div>

      <div className="center ">
        <div className="flex flex-col py-32 relative ">
          <h1 className="text-white text-4xl   font-semibold ">
            {bannerTitle === "Media1"
              ? "News"
              : bannerTitle === "Media2"
              ? "Gallery"
              : bannerTitle}
          </h1>
          <div className="flex font-medium mt-8 gap-3 items-center ">
            <p>Home</p> <ArrowRightIcon className="h-4 font-semibold " />
            <p>
              {bannerTitle === "Media1" || bannerTitle === "Media2"
                ? "Media"
                : bannerTitle}
            </p>
            {(bannerTitle === "Media1" || bannerTitle === "Media2") && (
              <div className="flex gap-3 items-center">
                <ArrowRightIcon className="h-4 font-semibold " />
                <p>{bannerTitle === "Media1" ? "News" : "Gallery"} </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
