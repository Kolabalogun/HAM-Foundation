import { Timestamp } from "firebase/firestore";

export type HomePageContents = {
  aboutCaption: string;
  aboutImage: string;
  aboutTitle: string;
  aboutBg: string;
  address: string;
  email: string;
  featuredCauseTitle: string;
  featuredCauseLocation: string;
  featuredCauseImg: string;
  featuredCauseDate: string;
  featuredCauseCaption: string;
  heroCaption: string;
  heroTitle: string;
  heroTitleII: string;
  heroBg: string;
  twitterLink: string;
  instagramLink: string;
  linkedInLink: string;
  phoneNumber: string;
  posterbg: string;
  posterQuote: string;
  posterCaption: string;
  posterImgI: string;
  posterImgII: string;
  serviceITitle: string;
  serviceIImage: string;
  serviceIIIImageHover: string;
  serviceIIImageHover: string;
  serviceIImageHover: string;
  serviceICaption: string;
  serviceIITitle: string;
  serviceIICaption: string;
  serviceIIImage: string;
  serviceIIITitle: string;
  serviceIIICaption: string;
  serviceIIIImage: string;
  quoteTxt: string;
};

export type About = {
  aboutTitle: string;
  aboutCaption: string;
  aboutImg: string;
  missionCaption: string;
  visionCaption: string;
  founderCaption: string;
  posterTxt: string;
  founderImg: string;
  posterVolunteerLink: string;

  missionImg: string;
  visionImg: string;
};

export type Project = {
  id: string;
  name: string;
  date: Timestamp;
  mainImg: string;
  description: string;
  comments: CommenType[];
  timestamp: Timestamp;
  likes?: number;
};

export type Members = {
  id: string;
  name: string;
  role: string;
  date: string | Timestamp;
  imageUrl: string;
  description: string;
};
export type News = {
  id: string;
  title: string;
  date: Timestamp;
  mainImg: string;
  timestamp: Timestamp;
  paragraphOne: string;
  comments: CommenType[];
  likes?: number;
};

export type CommenType = {
  id: string;
  firstName: string;
  message: string;
  email: string;
};

export enum PageTye {
  home = "home",
  about = "about",
  blog = "articles",
  contact = "contact",
}
