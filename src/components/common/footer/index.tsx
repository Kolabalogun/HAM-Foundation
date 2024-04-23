import { Link } from "react-router-dom";
import { SocialLinks } from "./links";
import Logo from "../../../assets/flogo.png";
import phone from "../../../assets/phone-solid.svg";
import mail from "../../../assets/envelope-solid.svg";
import location from "../../../assets/location-dot-solid.svg";
import { useGlobalContext } from "../../../context/useGlobalContext";
import {
  CONTACT_ROUTE,
  HOME_ROUTE,
  NEWS_ROUTE,
  OUR_TEAM_ROUTE,
  WHO_ARE_WE_ROUTE,
} from "../../../router";
import { NavLinksProps } from "../header";

const Footer = () => {
  const { homePageContent } = useGlobalContext();

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

  return (
    <section className="bg-primary py-40 text-white px-5 sm:px-10 ">
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
                {"Maayoit Healthcare Complex, Opp. GSS, old Jebba Rd, Iilorin Kwara State" ||
                  homePageContent?.address ||
                  "Ilorin, Kwara State, Nigeria"}
              </p>
            </div>
            <a href="/" className="flex items-center gap-5">
              <img src={phone} alt="" className="h-4" />
              <p className="text-sm ">
                {"08032425386" ||
                  homePageContent?.phoneNumber ||
                  "+1 234 5677 890"}
              </p>
            </a>
            <a
              href="mailto:jafoundationosun@gmail.com"
              className="flex items-center gap-5"
            >
              <img src={mail} alt="" className="h-4" />
              <p className="text-sm ">hamfoundation001@gmail.com</p>
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
