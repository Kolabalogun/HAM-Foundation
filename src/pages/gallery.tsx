import React from "react";
import Layout from "../components/container/layout";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import useFirestoreCollection from "../hook/useFiretoreCollection";
import Loader from "../components/common/loader";

type VideoDataType = {
  youtubeLink: string;
  date: string;
  description: string;
  name: string;
};

type ImageType = {
  imageUrl: string;
  name: string;
};

const Gallery: React.FC = () => {
  const { data, loader: loading } =
    useFirestoreCollection<VideoDataType>("youtubeVideos");

  const { data: images, loader } = useFirestoreCollection<ImageType>("images");

  if (loading || loader) {
    return <Loader />;
  }
  return (
    <Layout bannerTitle="Media2">
      <>
        <section className="center py-20">
          <h1 className="text-4xl mb-10">Photos & Videos</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {data?.map((project: VideoDataType, idx) => (
              <div key={idx} className=" mb-16">
                <iframe
                  width="100%"
                  height="100%"
                  src={project.youtubeLink.replace("watch?v=", "embed/")}
                  title={`Video ${idx + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>

                <div className="py-2 flex flex-col gap-2">
                  <p className=" ">{project.name}</p>
                  <p className=" ">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="my-16">
            <a
              href="https://www.youtube.com/@HassanatAttairuMankoFoundation"
              target="_blank"
              className=" flex items-center flex-col"
            >
              <span className=" flex gap-4 text-white text-center  px-8 py-5  bg-primary      ">
                Visit our YouTube Channel for more Videos
                <ArrowRightIcon className="h-6 font-medium text-white" />
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-32">
            {images?.map((project: ImageType, idx) => (
              <div key={idx} className=" w-full  h-96">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="object-cover h-full"
                />
              </div>
            ))}
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Gallery;
