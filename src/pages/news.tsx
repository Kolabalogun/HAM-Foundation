import React from "react";
import Layout from "../components/container/layout";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/useGlobalContext";
import { Articles } from "../utils/types";
import { ArrowRightIcon, ClockIcon } from "@heroicons/react/24/solid";
import { Divider } from "@chakra-ui/react";
import { ChatBubbleLeftIcon } from "@heroicons/react/20/solid";

const News: React.FC = () => {
  const { articlesFromDB } = useGlobalContext();

  return (
    <Layout bannerTitle="Media1">
      <>
        <section className="center py-40">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-20  gap-x-10">
            {articlesFromDB?.map((article: Articles) => (
              <div className="flex relative flex-col w-full shadow-lg">
                <Link to={`/article/${article?.id}`}>
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
                    <div className="text-white absolute bg-secondary  text-base font-medium  p-4 right-4 -top-5  ">
                      {article?.date}
                    </div>
                    <Link
                      to={`/article/${article?.id}`}
                      className="text-black uppercase text-[16px]  font-semibold mb-[15px] "
                    >
                      {article?.title}
                    </Link>

                    <p
                      className="mt-4 text-black "
                      dangerouslySetInnerHTML={{
                        __html: `${article?.paragraphOne.substring(0, 200)}...`,
                      }}
                    />

                    <Divider my={6} />

                    <div className="flex text-xs items-center justify-between gap-2">
                      <div className="flex items-center ">
                        <p>HAM, 2 Months ago </p>
                      </div>
                      <Divider
                        orientation="vertical"
                        size={"20px"}
                        height={6}
                        colorScheme={"#000"}
                        borderColor={"#000"}
                      />
                      <div className="flex items-center gap-1">
                        <ChatBubbleLeftIcon className="h-4" />
                        <p>2 comments</p>
                      </div>
                      <Divider
                        orientation="vertical"
                        size={"20px"}
                        height={6}
                        colorScheme={"#000"}
                        borderColor={"#000"}
                      />
                      <div className="flex items-center gap-1">
                        <ClockIcon className="h-4" />
                        <p>2 mins read</p>
                      </div>
                    </div>

                    <Link to={`/article/${article.id}`}>
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
