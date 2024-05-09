import React from "react";
import ReactPlayer from "react-player";
import { Download, Like, More, Share, Verified } from "../../utils/icons";
import Button from "../Button";
import { abbreviateNumber } from "js-abbreviation-number";
import dateFormat, { masks } from "dateformat";
import YouTube from "react-youtube";

const Video = ({ video }) => {
  // console.log(video);
  return (
    <div className="w-[calc(100%-400px)]">
      <div className="h-[600px] w-full flex flex-col">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${video?.videoId}`}
          width={"100%"}
          height={"100%"}
          controls
          playing={true}
        />
        {/* <YouTube
          videoId={video?.videoId}
          opts={{ height: "100%", width: "100%", playerVars: { autoplay: 1 } }}
        /> */}
        <h1 className="py-4 font-bold text-xl">{video?.title}</h1>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <div className="w-10 h-10">
              <img
                src={
                  video?.author?.avatar[video?.author?.avatar?.length - 1]?.url
                }
                alt=""
                className="rounded-full"
              />
            </div>
            <div className="ml-2">
              <p className="font-medium flex flex-col text-sm dark:text-[#aaa]">
                <p className="font-semibold text-base dark:text-white text-black">
                  {video?.author?.title}
                </p>
                <p className="text-[12px]">
                  {video?.author?.stats?.subscribersText}
                </p>
              </p>
            </div>
            <div className="ml-6">
              <Button />
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-row items-center px-5 py-2 gap-2 dark:bg-[#ffffff1a] bg-[#0000000d] rounded-full">
              <div className="flex flex-row rotate-180">
                <div className="hidden dark:block">
                  <Like fillColor={"#fff"} />
                </div>
                <div className="dark:hidden">
                  <Like fillColor={"#000"} />
                </div>
              </div>
              <p className="text-sm">
                {abbreviateNumber(video?.stats?.likes, 1)}
              </p>
              <div className="border border-l-[1px] border-r-0 border-y-0 pl-1 dark:border-[#E5E5E5] border-[#3F3F3F]">
                <div className="hidden dark:block">
                  <Like fillColor={"#fff"} />
                </div>
                <div className="dark:hidden">
                  <Like fillColor={"#000"} />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center px-5 py-2 gap-2 dark:bg-[#ffffff1a] bg-[#0000000d] rounded-full">
              <div className="flex flex-row">
                <div className="hidden dark:block">
                  <Share fillColor={"#fff"} />
                </div>
                <div className="dark:hidden">
                  <Share fillColor={"#000"} />
                </div>
              </div>
              <p className="text-sm">Share</p>
            </div>
            <div className="flex flex-row items-center px-5 py-2 gap-2 dark:bg-[#ffffff1a] bg-[#0000000d] rounded-full">
              <div className="flex flex-row">
                <div className="hidden dark:block">
                  <Download fillColor={"#fff"} />
                </div>
                <div className="dark:hidden">
                  <Download fillColor={"#000"} />
                </div>
              </div>
              <p className="text-sm">Download</p>
            </div>
            <div className="px-2 py-2 gap-2 dark:bg-[#ffffff1a] bg-[#0000000d] rounded-full">
              <div className="flex flex-row">
                <div className="hidden dark:block">
                  <More fillColor={"#fff"} />
                </div>
                <div className="dark:hidden">
                  <More fillColor={"#000"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* discription box */}
      <div className="flex flex-col mt-5 dark:bg-[#ffffff1a] bg-[#0000000d] p-2 rounded-lg">
        <div className="flex flex-row text-sm gap-2">
          <p>{video?.stats?.views.toLocaleString()} views</p>
          <p>{dateFormat(video?.publishedDate, "fullDate")}</p>
          {video?.superTitle?.items?.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div>{video?.description}</div>
      </div>
      {/* discription box */}
    </div>
  );
};

export default Video;
