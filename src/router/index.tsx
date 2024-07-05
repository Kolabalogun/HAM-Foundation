import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/whoarewe";

import Contact from "../pages/contact";
import BlogDetails from "../pages/blogDetails";

import Donation from "../pages/donation";
import OurTeam from "../pages/ourteam";
import News from "../pages/news";
import Gallery from "../pages/gallery";
import ProjectDetails from "../pages/projectDetails";
import NotFound from "../pages/not-found";
import Admin from "../pages/admin";

export const HOME_ROUTE = "/";
export const WHO_ARE_WE_ROUTE = "/who-are-we";
export const OUR_TEAM_ROUTE = "/our-team";
export const NEWS_ROUTE = "/news";
export const NEWS_DETAILS_ROUTE = "/news/:id";
export const PROJECT_DETAILS_ROUTE = "/projects/:id";
export const GALLERY_ROUTE = "/gallery";
export const DONATION_ROUTE = "/donations";
export const CONTACT_ROUTE = "/contact-us";

export const ADMIN_ROUTE = "/admin";

const router = createBrowserRouter([
  {
    path: HOME_ROUTE,
    element: <Home />,
  },
  {
    path: WHO_ARE_WE_ROUTE,
    element: <About />,
  },
  {
    path: OUR_TEAM_ROUTE,
    element: <OurTeam />,
  },
  {
    path: NEWS_ROUTE,
    element: <News />,
  },

  {
    path: GALLERY_ROUTE,
    element: <Gallery />,
  },
  {
    path: NEWS_DETAILS_ROUTE,
    element: <BlogDetails />,
  },
  {
    path: PROJECT_DETAILS_ROUTE,
    element: <ProjectDetails />,
  },
  {
    path: DONATION_ROUTE,
    element: <Donation />,
  },
  {
    path: CONTACT_ROUTE,
    element: <Contact />,
  },
  {
    path: ADMIN_ROUTE,
    element: <Admin />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
