import React, { useEffect, useState } from "react";
import Layout from "../components/container/layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { fetchFirestoreData } from "../utils/fetchFirestoreData";
import { Link, useParams } from "react-router-dom";
import { News } from "../utils/types";
import Loader from "../components/common/loader";
import useFirestoreCollection from "../hook/useFiretoreCollection";
import { Divider, Spinner, useToast } from "@chakra-ui/react";
import timeAgo from "../utils/timeAgo";
import {
  ArrowRightIcon,
  HandThumbUpIcon as HandThumbUpSolid,
} from "@heroicons/react/24/solid";
import {
  ChatBubbleOvalLeftIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import {
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import showToast from "../components/common/Toast";
import { db } from "../utils/Firebase";
import { useGlobalContext } from "../context/useGlobalContext";

const BlogDetails: React.FC = () => {
  const { id } = useParams();
  const toast = useToast();

  const { newsLike, setNewsLike } = useGlobalContext();

  const [form, setform] = useState<News | null>(null);

  const { data, loader } = useFirestoreCollection<News>("news");

  const [loading, setloading] = useState<boolean>(false);
  const [cLoading, setcLoading] = useState<boolean>(false);

  const [dateId, setdateId] = useState<Date | null>(null);

  const setDateID = () => {
    const dateId = new Date();
    setdateId(dateId);
  };

  const { data: allNews } = useFirestoreCollection<News>("news");

  const [currentIndexx, setCurrentIndex] = useState<number>(0);

  const findCurrentNewsIndexInAllNewsArray = () => {
    const currentIndex = allNews.findIndex((news) => news.id === id);

    setCurrentIndex(currentIndex);
    return currentIndex;
  };

  useEffect(() => {
    findCurrentNewsIndexInAllNewsArray();
  }, [allNews, id]);

  const getPageContentDetail = async (noReload?: boolean) => {
    noReload && setloading(true);
    const data = await fetchFirestoreData("news", id);
    if (data) {
      setform(data as News);
    }
    setloading(false);
  };

  useEffect(() => {
    window.scroll(0, 0);
    setDateID();

    getPageContentDetail(true);
  }, [id, setloading]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      message: "",
      email: "",
      id: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Must be more than 2 character")
        .required("Please enter your name"),
      message: Yup.string()
        .min(5, "Must be more than 2 character")
        .required("Your message can't be empty"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email"),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // sendEmail(values);

      const { comments } = form || { comments: [] };

      const newComments = [...comments, { ...values, id: dateId }];

      handleUpdate(newComments);
    },
  });

  // handle submit
  const handleUpdate = async (values: unknown) => {
    setcLoading(true);
    try {
      // Update the document in Firestore
      const collectionRef = collection(db, "news");
      const docRef = doc(collectionRef, id);
      await updateDoc(docRef, {
        ...form,
        comments: values,
        updatedAt: serverTimestamp(),
      });
      showToast(toast, "News", "success", "Comment Successfully Uploaded");

      getPageContentDetail();

      setcLoading(false);
    } catch (error) {
      console.log(error);
      showToast(toast, "error", "error", "Error submitting comment");
      setcLoading(false);
    }
  };

  const submitLike = async () => {
    if (form) {
      const like = form?.likes || 0;

      const collectionRef = collection(db, "news");
      const docRef = doc(collectionRef, id);

      try {
        // Update the document in Firestore

        if (id && newsLike?.includes(id)) {
          if (form?.likes !== 0) {
            await updateDoc(docRef, {
              ...form,
              likes: like - 1,
              updatedAt: serverTimestamp(),
            });

            const filteredNewsLikes = newsLike?.filter((like) => like !== id);

            localStorage.setItem(
              "HamFoundationNews",
              JSON.stringify(filteredNewsLikes)
            );

            setNewsLike(filteredNewsLikes);
          }
        } else {
          await updateDoc(docRef, {
            ...form,
            likes: like + 1,
            updatedAt: serverTimestamp(),
          });

          // const updatedNewsLikes = [...(newsLike || []), id];

          const updatedNewsLikes = [...(newsLike || []), id].filter(
            (like): like is string => like !== undefined
          );

          console.log(updatedNewsLikes);

          localStorage.setItem(
            "HamFoundationNews",
            JSON.stringify(updatedNewsLikes)
          );

          setNewsLike(updatedNewsLikes);
        }

        getPageContentDetail();
      } catch (error) {
        1;
        console.log(error);
        showToast(toast, "error", "error", "Error liking post");
      }
    }
  };

  if (loading || !form) return <Loader />;

  return (
    <Layout bannerTitle="Media1">
      <>
        <section className="center py-20">
          <div className="flex gap-10 lg:gap-20 flex-col xl:flex-row">
            <div style={{ flex: 2 }}>
              <div className="">
                <div className="cursor-pointer">
                  <img
                    src={form?.mainImg}
                    alt="blogImg"
                    className="w-full h-full"
                  />
                </div>
                <div className="    my-10">
                  <h1 className=" text-3xl sm:text-4xl font-semibold  ">
                    {form?.title}
                  </h1>
                  <div className="flex text-xs items-center   gap-2 mt-3">
                    <div className="flex items-center ">
                      <p>HAM, {timeAgo(form?.timestamp)}</p>
                    </div>
                    <div className=" hidden sm:flex">
                      <Divider
                        orientation="vertical"
                        size={"20px"}
                        height={6}
                        colorScheme={"#000"}
                        borderColor={"#000"}
                      />
                    </div>
                    <div className="hidden sm:flex items-center gap-1">
                      <ChatBubbleOvalLeftIcon className="h-4" />
                      <p>{form?.comments?.length || 0} comments</p>
                    </div>
                    <div className=" flex">
                      <Divider
                        orientation="vertical"
                        size={"20px"}
                        height={6}
                        colorScheme={"#000"}
                        borderColor={"#000"}
                      />
                    </div>
                    <button
                      onClick={submitLike}
                      className=" flex cursor-pointer items-center gap-1"
                    >
                      {id && newsLike?.includes(id) ? (
                        <HandThumbUpSolid color="#ff6500" className="h-4" />
                      ) : (
                        <HandThumbUpIcon className="h-4" />
                      )}
                      {(form?.likes || form?.likes !== 0) &&
                        ` ${form?.likes || 0} like(s)`}
                    </button>
                  </div>
                </div>

                <div className="  mb-24  mt-7">
                  <p
                    className="text-sm font-medium leading-6"
                    dangerouslySetInnerHTML={{
                      __html: `${form?.paragraphOne}`,
                    }}
                  />
                </div>

                {form?.comments?.length > 0 && (
                  <div className="">
                    <p className="text-xl font-medium">Comments</p>

                    <Divider my={5} borderColor={"#000"} />

                    <div className="flex flex-col gap-10">
                      {form?.comments?.map((comment, idx) => (
                        <div key={idx} className="">
                          <p className="font-medium ">{comment.firstName}</p>
                          {/* <span className="text-sm font-medium">
                            {comment.email}
                          </span> */}

                          <p className="mt-3">{comment.message}</p>
                          {form?.comments.length - 1 !== idx && (
                            <Divider mt={5} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Divider my={5} />
              <div className=""></div>
            </div>
            {data?.length > 1 && currentIndexx !== data.length - 1 && (
              <div className="">
                <Divider
                  orientation="vertical"
                  size={"20px"}
                  height={"100%"}
                  colorScheme={"#000"}
                  borderColor={"#000"}
                />
              </div>
            )}
            {data?.length > 1 && currentIndexx !== data.length - 1 && (
              <div className="flex-1 flex flex-row xl:flex-col gap-10">
                {loader ? (
                  <div className="flex h-full justify-center items-center">
                    <Spinner />
                  </div>
                ) : (
                  <div className="gap-y-5">
                    {data
                      ?.slice(currentIndexx, currentIndexx + 3)
                      .map((article: News) => {
                        if (article?.id !== id) {
                          return (
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
                                  <div className="text-white absolute bg-secondary  text-base font-medium  p-4 right-4 -top-5  ">
                                    {article &&
                                      article?.date &&
                                      article?.date
                                        ?.toDate()
                                        ?.toLocaleDateString("en-US", {
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
                                    className="mt-4 text-black "
                                    dangerouslySetInnerHTML={{
                                      __html: `${article?.paragraphOne.substring(
                                        0,
                                        200
                                      )}...`,
                                    }}
                                  />

                                  <Divider my={6} />

                                  <div className="flex text-xs items-center gap-4">
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
                                      <p>
                                        {article?.comments?.length || 0}{" "}
                                        comments
                                      </p>
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
                          );
                        }
                      })}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="my-20">
            <div className="shadow-lg px-3 py-6 sm:p-6 xl:p-9 rounded bg-[#eff1f1]">
              <form
                className="flex flex-col gap-5 "
                onSubmit={formik.handleSubmit}
              >
                <p className="text-2xl font-semibold pb-5 pt-2 ">
                  Leave a comment
                </p>

                <div className="flex gap-5 lg:flex-row flex-col">
                  <div className="flex flex-1 flex-col">
                    <input
                      placeholder="Your Name"
                      id="firstName"
                      className="border-[#eee] py-4 px-3 rounded border-2 outline-none"
                      type="text"
                      {...formik.getFieldProps("firstName")}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div className="text-red-500 py-2 text-sm font-medium">
                        {formik.errors.firstName}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col">
                    <input
                      placeholder="Email"
                      id="email"
                      className="border-[#eee] py-4 px-3 rounded border-2 outline-none"
                      type="email"
                      {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500 py-2 text-sm font-medium">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="flex flex-col">
                  <textarea
                    placeholder="Message"
                    id="message"
                    className="border-[#eee] py-4 px-3 rounded border-2 outline-none"
                    rows={6}
                    {...formik.getFieldProps("message")}
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <div className="text-red-500 py-2 text-sm font-medium">
                      {formik.errors.message}
                    </div>
                  ) : null}
                </div>
                <div className=" ">
                  <button
                    type="submit"
                    disabled={cLoading}
                    className="bg-primary py-4 px-8  font-semibold text-sm    text-white"
                  >
                    {cLoading ? "Submitting..." : "Send Comment"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default BlogDetails;
