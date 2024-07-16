import {
  createContext,
  useContext,
  ReactNode,
  FC,
  useState,
  useEffect,
} from "react";
import { fetchFirestoreData } from "../utils/fetchFirestoreData";
import Loader from "../components/common/loader";

export enum PageTye {
  home = "home",
  about = "about",
  blog = "articles",
  contact = "contact",
  donation = "donation",
}

type ContactType = {
  contactEmail: string;
  contactPhone: string;
  footerFacebookLink: string;
  footerInstagramLink: string;
  footerLinkedInLink: string;
  footerTwitterLink: string;
  footerYoutubeLink: string;
  contactPhone2: string;
};

interface AppContextProps {
  loading: boolean;
  setloading: React.Dispatch<React.SetStateAction<boolean>>;
  pageType: string;
  setpageType: React.Dispatch<React.SetStateAction<PageTye>>;
  newsLike: string[];
  setNewsLike: React.Dispatch<React.SetStateAction<string[]>>;
  projectsLike: string[];
  setProjectsLike: React.Dispatch<React.SetStateAction<string[]>>;
  contactInfo: ContactType;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  // loading state
  const [loading, setloading] = useState<boolean>(false);

  // page type
  const [pageType, setpageType] = useState<PageTye>(PageTye.home);

  // Function to safely parse JSON from localStorage
  const safeParse = (key: string): string[] => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : [];
  };

  // news likes from local storage
  const [newsLike, setNewsLike] = useState<string[]>(
    safeParse("HamFoundationNews")
  );

  // projects likes from local storage
  const [projectsLike, setProjectsLike] = useState<string[]>(
    safeParse("HamFoundationProjects")
  );

  const [contactInfo, setContactInfo] = useState({
    contactEmail: "info@hamfoundation.ng",
    contactPhone: "+2348073374150",
    footerFacebookLink: "https://facebook.com/groups/1130705441258503/",
    footerInstagramLink: "https://www.instagram.com/hamfoundation_/",
    footerLinkedInLink: "https://www.linkedin.com/groups/8166652/",
    footerTwitterLink: "https://x.com/HAMFoundation_",
    footerYoutubeLink:
      "https://www.youtube.com/@HassanatAttairuMankoFoundation",
    contactPhone2: "",
  });

  const getContactDetail = async () => {
    setloading(true);
    const data = await fetchFirestoreData("contents", "contact");
    if (data) {
      setContactInfo(data as ContactType);
    }
    setloading(false);
  };

  useEffect(() => {
    getContactDetail();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <AppContext.Provider
      value={{
        loading,
        setloading,
        pageType,
        setpageType,
        newsLike,
        setNewsLike,
        projectsLike,
        setProjectsLike,
        contactInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within an AppProvider");
  }
  return context;
};

export { useGlobalContext, AppProvider };
