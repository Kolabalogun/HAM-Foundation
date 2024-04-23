import { useEffect } from "react";
import { SocialLinks } from "../components/common/footer/links";
import Layout from "../components/container/layout";
import { PageTye, useGlobalContext } from "../context/useGlobalContext";
import phone from "../assets/phone-solid - Copy.svg";
import mail from "../assets/envelope-solid - Copy.svg";
import location from "../assets/location-dot-solid - Copy.svg";

const Donation = () => {
  const { setpageType, homePageContent } = useGlobalContext();

  useEffect(() => {
    window.scroll(0, 0);
    setpageType(PageTye.donation);
  }, []);

  return (
    <Layout bannerTitle="Donation">
      <>
        <section className="center py-40">
          <div className="grid gap-16 xl:gap-0 xl:grid-cols-2">
            <div>
              <div className="">
                <p className="text-[#2d2d2d] text-2xl font-medium">
                  Get in touch with us.
                </p>
              </div>

              <div className="flex gap-4 mt-8">
                {SocialLinks.map((social) => (
                  <a
                    href={
                      social.title === "Twitter"
                        ? homePageContent?.twitterLink
                        : social.title === "Instagram"
                        ? homePageContent?.instagramLink
                        : homePageContent?.linkedInLink
                    }
                    className="border border-[#b21a86] rounded-md p-1 cursor-pointer"
                  >
                    <img
                      src={social.img2}
                      alt={social.title}
                      className="h-5 w-5"
                    />
                  </a>
                ))}
              </div>
              <div className="flex flex-col  gap-5 mt-8">
                <div className="flex items-center gap-5">
                  <img src={location} alt="" className="h-4" />
                  <p className="text-sm font-medium">
                    {homePageContent?.address || "Ilorin, Kwara State, Nigeria"}
                  </p>
                </div>
                <a href="" className="flex items-center gap-5">
                  <img src={phone} alt="" className="h-4" />
                  <p className="text-sm font-medium">
                    {homePageContent?.phoneNumber || "+1 234 5677 890"}
                  </p>
                </a>
                <a href="" className="flex items-center gap-5">
                  <img src={mail} alt="" className="h-4" />
                  <p className="text-sm font-medium">
                    {homePageContent?.email || "jafoundation@gmail.com"}
                  </p>
                </a>
              </div>
            </div>

            <div className="shadow-lg px-3 py-6 sm:p-6 xl:p-9 rounded bg-[#eff1f1]">
              <h1 className="text-2xl">
                Kindly make your donations to this Account
              </h1>
              <h1 className="text-2xl mt-5">Jaiz Bank</h1>
              <h1 className="text-2xl mt-5">Jumoke Arogundade Foundation</h1>
              <h1 className="text-2xl mt-5">0011204408</h1>
              <h1 className="text-xl mt-5">Thank you.</h1>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Donation;
