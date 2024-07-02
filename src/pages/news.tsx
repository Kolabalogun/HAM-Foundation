import React, { useEffect } from "react";
import Layout from "../components/container/layout";
import { Link } from "react-router-dom";
import { News as NewsType } from "../utils/types";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Divider } from "@chakra-ui/react";

import useFirestoreCollection from "../hook/useFiretoreCollection";
import Loader from "../components/common/loader";
import timeAgo from "../utils/timeAgo";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";

const News: React.FC = () => {
  const { data, loader: loading } = useFirestoreCollection<NewsType>("news");

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout bannerTitle="Media1">
      <>
        <section className="center py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-20  gap-x-10">
            {data?.map((article: NewsType) => (
              <div className="flex relative flex-col w-full shadow-lg">
                <Link to={`/news/${article?.id}`}>
                  <div className="cursor-pointer   h-[300px]   ">
                    <img
                      src={article?.mainImg}
                      alt="blogImg"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </Link>

                <div className=" ">
                  <div className="  p-[15px] py-[50px]">
                    <div className="text-white absolute bg-secondary text-base font-medium p-4 right-4 -top-5">
                      {article &&
                        article?.date &&
                        article?.date?.toDate()?.toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                    </div>

                    <Link
                      to={`/news/${article?.id}`}
                      className="text-black uppercase text-[16px]  font-semibold mb-[15px] "
                    >
                      {article?.title}
                    </Link>

                    <p
                      className="mt-4   text-black "
                      dangerouslySetInnerHTML={{
                        __html: `${article?.paragraphOne.substring(0, 200)}...`,
                      }}
                    />

                    <Divider my={6} />

                    <div className="flex text-xs items-center  gap-4">
                      <div className="flex items-center ">
                        <p>HAM, {timeAgo(article?.timestamp)}</p>
                      </div>

                      <Divider
                        orientation="vertical"
                        size={"20px"}
                        height={6}
                        colorScheme={"#000"}
                        borderColor={"#000"}
                      />

                      <div className="flex items-center gap-1">
                        <ChatBubbleOvalLeftIcon className="h-4" />
                        <p>{article?.comments?.length} comments</p>
                      </div>
                    </div>

                    <Link to={`/news/${article?.id}`}>
                      <div className="flex gap-2 items-center text-primary text-sm mt-6 cursor-pointer font-medium ">
                        <p>Read Now</p>
                        <ArrowRightIcon className="h-5 font-medium" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    </Layout>
  );
};

export default News;
