import { createContext, useContext, ReactNode, FC, useState } from "react";

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
  newsLike: string[];
  setNewsLike: React.Dispatch<React.SetStateAction<string[]>>;
  projectsLike: string[];
  setProjectsLike: React.Dispatch<React.SetStateAction<string[]>>;
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
