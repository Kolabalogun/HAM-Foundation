import React, { useEffect } from "react";
import Hero from "../components/home/hero";
import Roles from "../components/home/roles";
import { useDisclosure } from "@chakra-ui/react";
import Projects from "../components/home/projects";

import Footer from "../components/common/footer";
import { PageTye, useGlobalContext } from "../context/useGlobalContext";
import Impact from "../components/home/impact";
import Membership from "../components/home/membership";
import MembershipModal from "../components/home/modal/MembershipModal";
import PartnershipModal from "../components/home/modal/PartnershipModal";
import useFirestoreCollection from "../hook/useFiretoreCollection";
import Loader from "../components/common/loader";
import { Project } from "../utils/types";
import Milestones from "../components/home/milestones";

const Home: React.FC = () => {
  const { setpageType } = useGlobalContext();

  const { data, loader: loading } =
    useFirestoreCollection<Project>("pastprojects");

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

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <MembershipModal onClose={onClose} isOpen={isOpen} />
      <PartnershipModal onClose={partnerOnClose} isOpen={partnerIsOpen} />
      <main>
        <Hero onOpen={onOpen} partnerOnOpen={partnerOnOpen} />
        <Roles />
        <Impact />
        <Projects projects={data} />
        <Milestones />
        <Membership />
        <Footer />
      </main>
    </>
  );
};

export default Home;
