import React from "react";

import Header from "../common/header";
import Banner from "../common/banner";
import Footer from "../common/footer";

type LayoutType = {
  children: React.ReactNode;
  bannerTitle: string;
};

const Layout: React.FC<LayoutType> = ({ children, bannerTitle }) => {
  return (
    <main>
      <Header />
      <Banner bannerTitle={bannerTitle} />

      <div className="sm:px-16">{children}</div>

      <Footer />
    </main>
  );
};

export default Layout;
