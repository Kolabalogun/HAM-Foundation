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

export type Events = {
  id: string;
  title: string;
  location: string;
  date: string;
  image: string;
  caption: string;
};
export type Articles = {
  id: string;
  title: string;
  date: string;
  mainImg: string;
  secondImg: string;
  thirdImg: string;
  fourthImg: string;
  fifthImg: string;
  paragraphOne: string;
  paragraphTwo: string;
};

export enum PageTye {
  home = "home",
  about = "about",
  blog = "articles",
  contact = "contact",
}
