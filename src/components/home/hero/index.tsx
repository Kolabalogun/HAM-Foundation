import { Link as RouterLink } from "react-router-dom";
import Header from "../../common/header";
import HandImg from "../../../assets/hand.png";
import MemberImg from "../../../assets/member.png";
import Button from "../../common/button";
import { DONATION_ROUTE } from "../../../router";
import React from "react";

type HeroType = {
  onOpen: () => void;
  partnerOnOpen: () => void;
};

const Hero: React.FC<HeroType> = ({ onOpen, partnerOnOpen }) => {
  return (
    <section className="h-[80vh] z-20" id="home">
      <Header />

      <div className="relative z-10 text-white h-full herobg pt-5 sm:pt-0 ">
        <div className="h-full w-full bg-[#000000b6] absolute top-0 left-0 "></div>

        <div className="relative px-5 sm:px-10   h-full flex flex-col justify-center center">
          <div className="flex flex-col gap-4 md:gap-0">
            <h1 className=" text-5xl md:text-[59px] md:font-bold font-semibold leading-[46px] md:leading-[85px]  ">
              Empowering Communities,
              <br />
              Transforming Lives.
            </h1>
          </div>

          <div className="flex md:flex-row flex-col my-5 gap-6 md:gap-12 ">
            <RouterLink to={DONATION_ROUTE} className="text-lg ">
              <Button
                title="Become a Member"
                iconLeft={<img src={MemberImg} className="h-5" />}
                size="lg"
                func={onOpen}
              />
            </RouterLink>
            <RouterLink to={DONATION_ROUTE} className="text-lg ">
              <Button
                title="Partner with us"
                iconLeft={<img src={HandImg} className="h-5" />}
                size="lg"
                color="plain"
                func={partnerOnOpen}
              />
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
