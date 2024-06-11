import { useEffect, useState } from "react";
import Logo from "../../../assets/logo.png";

import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button as ButtonChakra,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context/useGlobalContext";
import {
  CONTACT_ROUTE,
  GALLERY_ROUTE,
  HOME_ROUTE,
  NEWS_ROUTE,
  OUR_TEAM_ROUTE,
  WHO_ARE_WE_ROUTE,
} from "../../../router";
import Button from "../button";
import DonationModal from "../../home/modal/DonationModal";

export type NavLinksProps = {
  title: string;
  link: string;
};

const Header = () => {
  const { pageType } = useGlobalContext();

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const [isAboveMediumScreens, setIsAboveMediumScreens] = useState<boolean>(
    window.innerWidth >= 1060
  );

  const {
    isOpen: donationIsOpen,
    onOpen: donationOnOpen,
    onClose: donationOnClose,
  } = useDisclosure();

  useEffect(() => {
    const handleResize = () => {
      setIsAboveMediumScreens(window.innerWidth >= 1060);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const NavLinks: NavLinksProps[] = [
    {
      title: "Who are we",
      link: WHO_ARE_WE_ROUTE,
    },
    {
      title: "Our Team",
      link: OUR_TEAM_ROUTE,
    },
  ];

  return (
    <>
      <DonationModal onClose={donationOnClose} isOpen={donationIsOpen} />
      <nav className="z-50 relative ">
        <div className="flex">
          <div className="bg-secondary h-1 flex-1 rounded-br-lg" />
          <div className="bg-primary h-1 flex-1 rounded-bl-lg" />
        </div>
        <div className="  center   py-4 md:py-5 flex items-center justify-between px-5 sm:px-10 ">
          <Link to={HOME_ROUTE} className="h-14 md:h-16">
            <img src={Logo} alt="Logo" className="h-full" />
          </Link>
          {isAboveMediumScreens ? (
            <div>
              {NavLinks.map(({ title, link }, idx) => (
                <Link
                  key={idx}
                  to={link}
                  className={`${
                    pageType === title.toLowerCase() &&
                    "border-b-primary border-b-[2px]"
                  } "text-base font-medium linked cursor-pointer py-3  mx-8 text-black dark:text-black  "`}
                >
                  {title}
                </Link>
              ))}

              <Menu>
                <MenuButton
                  variant={"outline"}
                  border={"none"}
                  _hover={{ borderColor: "transparent" }}
                  _active={{ borderColor: "transparent" }}
                  fontWeight={"500"}
                  as={ButtonChakra}
                  rightIcon={<ChevronDownIcon className="h-4 font-medium" />}
                >
                  Media
                </MenuButton>
                <MenuList>
                  <MenuItem as={Link} to={NEWS_ROUTE}>
                    <p
                      className={`text-base font-medium linked cursor-pointer py-1    text-black dark:text-black  `}
                    >
                      News
                    </p>
                  </MenuItem>
                  <MenuItem as={Link} to={GALLERY_ROUTE}>
                    <p
                      className={`text-base font-medium linked cursor-pointer py-1    text-black dark:text-black  `}
                    >
                      Photos & Videos
                    </p>
                  </MenuItem>
                </MenuList>
              </Menu>

              <Link
                to={CONTACT_ROUTE}
                className={`${
                  pageType === "contact us" && "border-b-primary border-b-[2px]"
                } "text-base font-medium linked cursor-pointer py-3  mx-8 text-black dark:text-black  "`}
              >
                Contact Us
              </Link>
            </div>
          ) : (
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-7 w-7 md:h-10 md:w-10 text-black" />
            </button>
          )}

          {isAboveMediumScreens && (
            <div className="">
              <Button func={donationOnOpen} title="Donate Now" size="sm" />
            </div>
          )}
        </div>
        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 z-[1001] h-full w-[300px] bg-[#eee] drop-shadow-xl">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-7 w-7 md:h-10 md:w-10" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="ml-5 flex flex-col gap-10 text-2xl">
              {NavLinks.map(({ title, link }, idx) => (
                <Link
                  key={idx}
                  to={link}
                  className={
                    "text-base font-medium linked cursor-pointer py-2  mx-10 text-black dark:text-black  "
                  }
                >
                  {title}
                </Link>
              ))}

              <Link
                to={NEWS_ROUTE}
                className={
                  "text-base font-medium linked cursor-pointer py-2  mx-10 text-black dark:text-black  "
                }
              >
                News
              </Link>

              <Link
                to={GALLERY_ROUTE}
                className={
                  "text-base font-medium linked cursor-pointer py-2  mx-10 text-black dark:text-black  "
                }
              >
                Photos & Videos
              </Link>

              <button
                onClick={donationOnOpen}
                className={
                  "text-base text-start font-medium linked cursor-pointer py-2  mx-10 text-black dark:text-black  "
                }
              >
                Donations
              </button>

              <Link
                to={CONTACT_ROUTE}
                className={
                  "text-base font-medium linked cursor-pointer py-2  mx-10 text-black dark:text-black  "
                }
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
