import React, { useEffect } from "react";
import Hero from "../components/home/hero";
import Roles from "../components/home/roles";
import { useDisclosure } from "@chakra-ui/react";
import Events from "../components/home/projects";

import Footer from "../components/common/footer";
import { PageTye, useGlobalContext } from "../context/useGlobalContext";
import Impact from "../components/home/impact";
import Membership from "../components/home/membership";
import MembershipModal from "../components/home/modal/MembershipModal";
import PartnershipModal from "../components/home/modal/PartnershipModal";

const Home: React.FC = () => {
  const { setpageType } = useGlobalContext();

  useEffect(() => {
    window.scroll(0, 0);
    setpageType(PageTye.home);
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: partnerIsOpen,
    onOpen: partnerOnOpen,
    onClose: partnerOnClose,
  } = useDisclosure();

  return (
    <>
      <MembershipModal onClose={onClose} isOpen={isOpen} />
      <PartnershipModal onClose={partnerOnClose} isOpen={partnerIsOpen} />
      <main>
        <Hero onOpen={onOpen} partnerOnOpen={partnerOnOpen} />
        <Roles />
        <Impact />
        <Events />
        <Membership />
        <Footer />
      </main>
    </>
  );
};

export default Home;
