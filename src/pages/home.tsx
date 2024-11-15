import React, { useEffect, useState } from "react";
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
import { fetchFirestoreData } from "../utils/fetchFirestoreData";
import DonationModal from "../components/home/modal/DonationModal";

export type MilestonesType = {
  titleI: string;
  contentI: string;
  contentII: string;
  titleII: string;
  contentIII: string;
  titleIII: string;
  contentIV: string;
  titleIV: string;
  titleV: string;
  contentV: string;
  titleVI: string;
  contentVI: string;
};

const Home: React.FC = () => {
  const { setpageType } = useGlobalContext();

  const [loader, setLoading] = useState(false);

  const [milestones, setMilestones] = useState<MilestonesType | null>(null);

  const { data, loader: loading } =
    useFirestoreCollection<Project>("pastprojects");

  const getContactDetail = async () => {
    setLoading(true);
    const data = await fetchFirestoreData("contents", "milestones");
    if (data) {
      setMilestones(data as MilestonesType);
    }
    setLoading(false);
  };

  useEffect(() => {
    window.scroll(0, 0);
    !milestones && getContactDetail();
    setpageType(PageTye.home);
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: partnerIsOpen,
    onOpen: partnerOnOpen,
    onClose: partnerOnClose,
  } = useDisclosure();

  const {
    isOpen: donationIsOpen,
    onOpen: donationOnOpen,
    onClose: donationOnClose,
  } = useDisclosure();

  if (loading || loader) {
    return <Loader />;
  }

  return (
    <>
      <MembershipModal onClose={onClose} isOpen={isOpen} />
      <PartnershipModal onClose={partnerOnClose} isOpen={partnerIsOpen} />
      <DonationModal onClose={donationOnClose} isOpen={donationIsOpen} />

      <main>
        <Hero onOpen={onOpen} partnerOnOpen={partnerOnOpen} />
        <Roles />
        <Impact />
        <Projects projects={data} />
        <Milestones data={milestones} />
        <Membership onOpen={onOpen} donationOnOpen={donationOnOpen} />
        <Footer />
      </main>
    </>
  );
};

export default Home;
