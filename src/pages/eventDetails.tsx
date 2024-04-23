import React, { useEffect, useState } from "react";
import Layout from "../components/container/layout";
import { PageTye, useGlobalContext } from "../context/useGlobalContext";
import { fetchFirestoreData } from "../utils/fetchFirestoreData";
import { useParams } from "react-router-dom";
import { Events } from "../utils/types";
import Loader from "../components/common/loader";

const EventDetails: React.FC = () => {
  const { setpageType } = useGlobalContext();

  const { id } = useParams();

  const [form, setform] = useState<Events | null>(null);

  const [loading, setloading] = useState<boolean>(false);

  useEffect(() => {
    window.scroll(0, 0);
    setpageType(PageTye.blog);

    const getPageContentDetail = async () => {
      setloading(true);
      const data = await fetchFirestoreData("events", id);
      if (data) {
        setform(data as Events);
      }
      setloading(false);
    };

    getPageContentDetail();
  }, [id, setloading]);

  if (loading) return <Loader />;

  return (
    <Layout bannerTitle="Articles">
      <>
        <section className="center py-40">
          <div className="">
            <div className="flex flex-col items-center justify-center text-center mb-10">
              <h1 className=" text-4xl font-semibold italic ">{form?.title}</h1>
              <div className="h-[3px] w-1/4 my-7 bg-[#b71a88]"></div>
            </div>

            <div className="cursor-pointer">
              <img src={form?.image} alt="blogImg" className="w-full h-full" />
            </div>

            <div className="my-24">
              <p
                className="text-sm font-medium leading-6"
                dangerouslySetInnerHTML={{
                  __html: `${form?.caption}`,
                }}
              />
            </div>

            <div className="my-24 flex gap-10">
              <p className="text-xs ">{form?.location}</p>
              <p className="text-xs ">{form?.date}</p>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default EventDetails;
