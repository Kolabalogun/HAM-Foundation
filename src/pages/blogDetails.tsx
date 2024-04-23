import React, { useEffect, useState } from "react";
import Layout from "../components/container/layout";
import { PageTye, useGlobalContext } from "../context/useGlobalContext";
import { fetchFirestoreData } from "../utils/fetchFirestoreData";
import { useParams } from "react-router-dom";
import { Articles } from "../utils/types";
import Loader from "../components/common/loader";

const BlogDetails: React.FC = () => {
  const { setpageType } = useGlobalContext();

  const { id } = useParams();

  const [form, setform] = useState<Articles | null>(null);

  const [loading, setloading] = useState<boolean>(false);

  useEffect(() => {
    window.scroll(0, 0);
    setpageType(PageTye.blog);

    const getPageContentDetail = async () => {
      setloading(true);
      const data = await fetchFirestoreData("articles", id);
      if (data) {
        setform(data as Articles);
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
              <img
                src={form?.mainImg}
                alt="blogImg"
                className="w-full h-full"
              />
            </div>

            <div className="my-24">
              <p
                className="text-sm font-medium leading-6"
                dangerouslySetInnerHTML={{
                  __html: `${form?.paragraphOne}`,
                }}
              />
            </div>

            {form?.secondImg && (
              <div className="cursor-pointer">
                <img
                  src={form?.secondImg}
                  alt="blogImg"
                  className="w-full h-full"
                />
              </div>
            )}

            <div className="my-24">
              <p
                className="text-sm font-medium leading-6"
                dangerouslySetInnerHTML={{
                  __html: `${form?.paragraphTwo}`,
                }}
              />
            </div>

            <div className="my-24 grid gap-16 xl:grid-cols-3">
              {form?.thirdImg && (
                <div className="cursor-pointer">
                  <img
                    src={form?.thirdImg}
                    alt="blogImg"
                    className="w-full rounded-md h-full"
                  />
                </div>
              )}
              {form?.fourthImg && (
                <div className="cursor-pointer">
                  <img
                    src={form?.fourthImg}
                    alt="blogImg"
                    className="w-full rounded-md h-full"
                  />
                </div>
              )}
              {form?.fifthImg && (
                <div className="cursor-pointer">
                  <img
                    src={form?.fifthImg}
                    alt="blogImg"
                    className="w-full rounded-md h-full"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default BlogDetails;
