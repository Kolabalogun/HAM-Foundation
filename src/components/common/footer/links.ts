import Twitter from "../../../assets/twitter.svg";
import Instagram from "../../../assets/instagram.svg";

import LinkedIn from "../../../assets/linkedin.svg";
import Youtube from "../../../assets/youtube.svg";
import FBc from "../../../assets/fbwhite.svg";

type NavLinksProps = {
  title: string;
  link: string;
  img?: string;
  img2?: string;
  date?: string;
};

export const NavLinks: NavLinksProps[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Articles",
    link: "/articles",
  },
  {
    title: "Donate",
    link: "/donations",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
export const SocialLinks: NavLinksProps[] = [
  {
    title: "Twitter",
    img: Twitter,

    link: " ",
  },
  {
    title: "Instagram",
    img: Instagram,

    link: " ",
  },
  {
    title: "Facebook",
    img: FBc,

    link: " ",
  },
  {
    title: "LinkedIn",
    img: LinkedIn,

    link: " ",
  },
  {
    title: "Youtube",
    img: Youtube,

    link: "https://www.youtube.com/@HassanatAttairuMankoFoundation",
  },
];
