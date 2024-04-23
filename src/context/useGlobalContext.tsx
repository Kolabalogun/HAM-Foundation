import {
  createContext,
  useContext,
  ReactNode,
  FC,
  useState,
  useEffect,
} from "react";
import useFirestoreCollection from "../hook/useFiretoreCollection";
import { fetchFirestoreData } from "../utils/fetchFirestoreData";
import { About, Articles, Events, HomePageContents } from "../utils/types";
import Loader from "../components/common/loader";

export enum PageTye {
  home = "home",
  about = "about",
  blog = "articles",
  contact = "contact",
  donation = "donation",
}

interface AppContextProps {
  loading: boolean;
  setloading: React.Dispatch<React.SetStateAction<boolean>>;
  pageType: string;
  setpageType: React.Dispatch<React.SetStateAction<PageTye>>;
  eventsFromDB: Events[] | null;
  articlesFromDB: Articles[] | null;
  eventsLoader: boolean;
  articlesLoader: boolean;
  homePageContent: HomePageContents | null;
  aboutPageContent: About | null;
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

  // get projects from firestore

  const { data: eventsFromDB, loader: eventsLoader } =
    useFirestoreCollection<Events>("events");

  const { data: articlesFromDB, loader: articlesLoader } =
    useFirestoreCollection<Articles>("articles");

  // get page contents

  const [homePageContent, homePageContentF] = useState<HomePageContents | null>(
    null
  );
  const [aboutPageContent, aboutPageContentF] = useState<About | null>(null);

  const getPageContentDetail = async () => {
    setloading(true);
    const data = await fetchFirestoreData("contents", "hompage");
    const aboutdata = await fetchFirestoreData("contents", "aboutpage");

    if (data && aboutdata) {
      homePageContentF(data as HomePageContents);
      aboutPageContentF(aboutdata as About);
    }
    setloading(false);
  };

  useEffect(() => {
    getPageContentDetail();
  }, []);

  // if (loading || eventsLoader || articlesLoader) {
  //   return <Loader />;
  // }

  return (
    <AppContext.Provider
      value={{
        loading,
        setloading,
        pageType,
        setpageType,
        eventsFromDB,
        eventsLoader,
        articlesFromDB,
        articlesLoader,
        homePageContent,
        aboutPageContent,
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
