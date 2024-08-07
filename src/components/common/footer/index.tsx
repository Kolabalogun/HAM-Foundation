import { Link } from "react-router-dom";

import Logo from "../../../assets/flogo.png";
import phone from "../../../assets/phone-solid.svg";
import mail from "../../../assets/envelope-solid.svg";
import location from "../../../assets/location-dot-solid.svg";

import Twitter from "../../../assets/twitter.svg";
import Instagram from "../../../assets/instagram.svg";

import LinkedIn from "../../../assets/linkedin.svg";
import Youtube from "../../../assets/youtube.svg";
import FBc from "../../../assets/fbwhite.svg";

import {
  CONTACT_ROUTE,
  HOME_ROUTE,
  NEWS_ROUTE,
  OUR_TEAM_ROUTE,
  WHO_ARE_WE_ROUTE,
} from "../../../router";

import { useGlobalContext } from "../../../context/useGlobalContext";

type NavLinksProps = {
  title: string;
  link: string;
  img?: string;
  img2?: string;
  date?: string;
};
const Footer = () => {
  const { contactInfo } = useGlobalContext();
  const NavLinks: NavLinksProps[] = [
    {
      title: "Who are we",
      link: WHO_ARE_WE_ROUTE,
    },
    {
      title: "Our Team",
      link: OUR_TEAM_ROUTE,
    },
    {
      title: "Media",
      link: NEWS_ROUTE,
    },
    {
      title: "Contact Us",
      link: CONTACT_ROUTE,
    },
  ];

  const SocialLinks: NavLinksProps[] = [
    {
      title: "Twitter",
      img: Twitter,
      link: contactInfo?.footerTwitterLink,
    },
    {
      title: "Instagram",
      img: Instagram,
      link: contactInfo?.footerInstagramLink,
    },
    {
      title: "Facebook",
      img: FBc,
      link: contactInfo?.footerFacebookLink,
    },
    {
      title: "LinkedIn",
      img: LinkedIn,
      link: contactInfo?.footerLinkedInLink,
    },
    {
      title: "Youtube",
      img: Youtube,
      link: contactInfo?.footerYoutubeLink,
    },
  ];

  return (
    <section className="bg-primary py-20 font-medium text-white px-5 sm:px-10 ">
      <div className="center flex xl:flex-row w-full flex-col justify-between items-start px-5 gap-16  ">
        <div style={{ flex: 1 }} className="flex flex-1 flex-col">
          <div className="text-white flex items-center gap-2">
            <Link to={HOME_ROUTE} className="h-10 md:h-16">
              <img src={Logo} alt="Logo" className="h-full" />
            </Link>
            <p className="font-semibold">HAM FOUNDATION</p>
          </div>

          <span className="my-5 text-sm">
            Empowering lives, building futures and making the world a better
            place.
          </span>

          <div className="flex gap-4 mt-5">
            {SocialLinks.map((social) => (
              <a
                href={social.link}
                className="border bg-white rounded-md p-1 cursor-pointer"
              >
                <img src={social.img} alt={social.title} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col ">
          <div className="text-white">
            <p className="font-semibold">Address Location</p>
          </div>

          <div className="flex flex-col text-white gap-5 mt-5">
            <div className="flex items-center gap-5">
              <img src={location} alt="" className="h-4" />
              <p className="text-sm ">
                {
                  "Maayoit Healthcare Complex, Opp. GSS, Old Jebba Roadd, Ilorin Kwara State"
                }
              </p>
            </div>

            <a
              href={`tel:+${contactInfo?.contactPhone}`}
              className="flex items-center gap-5"
            >
              <img src={phone} alt="" className="h-4" />
              <p className="text-sm ">{contactInfo.contactPhone}</p>
            </a>
            <a
              href={`mailto:${contactInfo?.contactEmail}`}
              className="flex items-center gap-5"
            >
              <img src={mail} alt="" className="h-4" />
              <p className="text-sm ">{contactInfo?.contactEmail}</p>
            </a>
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="text-white">
            <p className="font-semibold">Quick links</p>
          </div>

          <div className="flex flex-col text-white gap-4 mt-5">
            {NavLinks.map((social) => (
              <Link to={social.link}>
                <p className="text-sm">{social.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
